import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const SocialProof = () => {
  const notifications = [
    { name: "Rajesh from Delhi", action: "booked a strategy call", time: "2 minutes ago" },
    { name: "Priya from Mumbai", action: "downloaded the free guide", time: "5 minutes ago" },
    { name: "Amit from Bangalore", action: "started their campaign", time: "8 minutes ago" },
    { name: "Sneha from Pune", action: "booked a strategy call", time: "12 minutes ago" },
  ];

  const [currentNotification, setCurrentNotification] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.div
        key={currentNotification}
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100, scale: 0.8 }}
        className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm"
      >
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              {notifications[currentNotification].name}
            </p>
            <p className="text-sm text-gray-600">
              {notifications[currentNotification].action}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {notifications[currentNotification].time}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialProof;