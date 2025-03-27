import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FullPageEventPreloader = ({ eventName, eventImage, onComplete }) => {
  useEffect(() => {
    // Simulate loading time (you can adjust this)
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6">
      <motion.div 
        className="relative w-64 h-64 flex items-center justify-center rounded-full border-4 border-pink-500"
        animate={{
          boxShadow: [
            "0 0 10px rgba(255, 0, 255, 0.5)",
            "0 0 50px rgba(255, 0, 255, 0.7)",
            "0 0 10px rgba(255, 0, 255, 0.5)"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
      >
        {/* Event Image */}
        <img 
          src={eventImage} 
          alt={eventName} 
          className="w-48 h-48 rounded-full object-cover"
        />
        
        {/* Rotating Neon Loader */}
        <motion.div 
          className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full"
          animate={{ 
            rotate: [0, 360] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1, 
            ease: "linear" 
          }}
        />
      </motion.div>

      {/* Loading Text with Neon Effect */}
      <motion.div
        className="text-center"
        animate={{
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
      >
        <h2 
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
          style={{
            textShadow: "0 0 15px rgba(255, 0, 255, 0.7)"
          }}
        >
        {eventName}
        </h2>
        <p 
          className="text-lg text-cyan-300 mt-2"
          style={{
            textShadow: "0 0 10px rgba(0, 255, 255, 0.7)"
          }}
        >
          Preparing your time-bending adventure...
        </p>
      </motion.div>
    </div>
  );
};

export default FullPageEventPreloader;