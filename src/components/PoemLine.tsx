import React from 'react';
import { motion } from 'framer-motion';

interface PoemLineProps {
  letter: string;
  word: string;
  index: number;
}

export function PoemLine({ letter, word, index }: PoemLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center space-x-4"
    >
      <span className="text-2xl font-bold text-purple-600">
        {letter.toUpperCase()}
      </span>
      <span className="text-lg">{word}</span>
    </motion.div>
  );
}