'use client'

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/utils/imagePath';

export default function FloatingEmojis() {
  const [mounted, setMounted] = useState(false);
  
  const images = [
    { src: '/dollar.png', alt: 'Dollar Bill' },
    { src: '/hundred.png', alt: 'Hundred Dollar Bill' }
  ];

  // Create grid positions for better distribution
  const createGridPosition = (index) => {
    const gridSize = 6; // 6x4 grid
    const cellWidth = 100 / gridSize;
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    
    return {
      x: cellWidth * col + (Math.random() * cellWidth * 0.6),
      y: (row * 25) + (Math.random() * 15)
    };
  };

  // Reduce to 12 emojis for better performance
  const emojiCount = 12;
  
  // Pre-calculate positions to avoid recalculating on every render
  // Must be called before any conditional returns to follow Rules of Hooks
  const positions = useMemo(() => {
    // Use a fixed seed for consistent positioning
    const seed = 42;
    const random = (index) => {
      const x = Math.sin(index * 12.9898 + seed) * 43758.5453;
      return x - Math.floor(x);
    };
    
    return Array.from({ length: emojiCount }, (_, index) => {
      const gridSize = 6;
      const cellWidth = 100 / gridSize;
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      
      const startX = cellWidth * col + (random(index) * cellWidth * 0.6);
      const startY = (row * 25) + (random(index + 10) * 15);
      const endX = cellWidth * ((index + 2) % gridSize) + (random(index + 20) * cellWidth * 0.6);
      const endY = (Math.floor((index + 2) / gridSize) * 25) + (random(index + 30) * 15);
      
      return {
        start: { x: startX, y: startY },
        end: { x: endX, y: endY },
        scale: 0.3 + random(index + 40) * 0.3,
        rotate: random(index + 50) * 360,
      };
    });
  }, [emojiCount]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute opacity-35 will-change-transform"
          style={{ 
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
          initial={{
            x: `${pos.start.x}vw`,
            y: `${pos.start.y}vh`,
            scale: pos.scale,
            rotate: pos.rotate,
          }}
          animate={{
            x: [`${pos.start.x}vw`, `${pos.end.x}vw`],
            y: [`${pos.start.y}vh`, `${pos.end.y}vh`],
          }}
          transition={{
            duration: 30 + Math.random() * 10, // Slightly longer, smoother
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: index * 0.3
          }}
        >
          <Image
            src={getImagePath(images[index % 2].src)}
            alt={images[index % 2].alt}
            width={10}
            height={10}
            className={`w-auto h-auto ${index % 2 === 1 ? 'scale-125' : ''}`}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}