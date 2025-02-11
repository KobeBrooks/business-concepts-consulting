'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {[...Array(24)].map((_, index) => {
        const startPos = createGridPosition(index);
        const endPos = createGridPosition((index + 2) % 24); // Cycle through positions

        return (
          <motion.div
            key={index}
            className="absolute opacity-35"
            initial={{
              x: `${startPos.x}vw`,
              y: `${startPos.y}vh`,
              scale: 0.3 + Math.random() * 0.3,
              rotate: Math.random() * 360,
            }}
            animate={{
              x: [`${startPos.x}vw`, `${endPos.x}vw`],
              y: [`${startPos.y}vh`, `${endPos.y}vh`],
              scale: [null, 0.3 + Math.random() * 0.3],
              rotate: [null, Math.random() * 360],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: index * 0.2 // Stagger the animations
            }}
          >
            <Image
              src={getImagePath(images[index % 2].src)}
              alt={images[index % 2].alt}
              width={10}
              height={10}
              className={`w-auto h-auto ${index % 2 === 1 ? 'scale-125' : ''}`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}