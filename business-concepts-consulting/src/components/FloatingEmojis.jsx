'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingEmojis() {
  const emojis = ['📋', '💼', '⚖️', '📑', '💡', '📚', '🔍', '🏢', 
                  '📊', '💰', '📈', '📝', '🗂️', '📅', '💻', '✍️', 
                  '📋', '💼', '⚖️', '📑', '💡', '📚', '🔍', '🏢', 
                  '📊', '💰', '📈', '📝', '🗂️', '📅', '✍️'];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {emojis.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-[0.02]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: 0.5 + Math.random() * 0.5,
            rotate: Math.random() * 360,
          }}
          animate={{
            x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
            scale: [null, 0.5 + Math.random() * 0.5],
            rotate: [null, Math.random() * 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
}