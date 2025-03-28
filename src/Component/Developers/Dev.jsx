import React from "react";
import { motion } from "framer-motion"; // Added missing import
import { Contact, Experience, Works, StarsCanvas } from "./components";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Dev = () => {
   const navigate = useNavigate();
  
    const handleBackClick = () => {
      navigate(-1);
    };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden relative">
      <motion.div
        className="fixed top-4 left-4 z-50 cursor-pointer group"
        onClick={handleBackClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Quantum Distortion Effect */}
          <motion.div
            className="absolute -inset-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-20"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Time Warp Glow */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-30 blur-md"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
      
          {/* Back Button Container */}
          <div 
            className="relative bg-black/70 p-2 rounded-full border-2 border-cyan-400/50 group-hover:border-cyan-400"
            style={{
              boxShadow: "0 0 5px rgba(0,255,255,0.2), inset 0 0 5px rgba(0,255,255,0.1)",
            }}
          >
            <ChevronLeft 
              className="text-cyan-300 group-hover:text-cyan-100 transition-colors" 
              size={24} 
            />
          </div>
        </div>
        
        {/* Tooltip */}
        <div 
          className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black/70 px-3 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            borderColor: "rgba(0,255,255,0.2)",
            boxShadow: "0 0 5px rgba(0,255,255,0.1)",
          }}
        >
          Escape Time Loop
        </div>
      </motion.div>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
    
        <Works />
        <Experience />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 right-4 bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors w-12"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dev;