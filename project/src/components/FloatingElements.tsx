import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target, Zap, BarChart3 } from 'lucide-react';

const FloatingElements = () => {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center opacity-20"
        style={{ animationDelay: '0s' }}
      >
        <TrendingUp className="w-8 h-8 text-blue-600" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center opacity-20"
        style={{ animationDelay: '2s' }}
      >
        <Users className="w-6 h-6 text-green-600" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center opacity-20"
        style={{ animationDelay: '4s' }}
      >
        <Award className="w-7 h-7 text-purple-600" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-60 right-10 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center opacity-20"
        style={{ animationDelay: '1s' }}
      >
        <Target className="w-5 h-5 text-yellow-600" />
      </motion.div>

      {/* Pulsing Circles */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-32 right-32 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"
      />

      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10"
        style={{ animationDelay: '1.5s' }}
      />
    </div>
  );
};

export default FloatingElements;