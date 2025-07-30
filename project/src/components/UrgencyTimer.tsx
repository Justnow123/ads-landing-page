import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-4 rounded-xl shadow-lg"
    >
      <div className="flex items-center justify-center space-x-4">
        <Clock className="w-5 h-5" />
        <div className="text-center">
          <div className="text-sm font-medium">Limited Time Offer Ends In:</div>
          <div className="flex space-x-2 text-lg font-bold">
            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
            <span>:</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
            <span>:</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UrgencyTimer;