'use client'

import { motion } from 'framer-motion';

export default function ScrollAnimation({ children, threshold = 0.1, duration = 0.3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}