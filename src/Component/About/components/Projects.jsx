import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import CollegeImage from "./Meenakshi-Sundararajan-Engineering-College-Chennai.png";
import KrantiImage from "./ka.png";
import CSDeptImage from "../../../../public/cs-department.jpg"; // Replace with actual image file
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const About = () => {
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

      <section className="about-section">
        <div className="section-header">
          <h1 className="about-title">About</h1>
          <div className="title-divider"></div>
        </div>

        {/* College Section */}
        <div className="about-container">
          <div className="about-image">
            <img 
              src={CollegeImage} 
              alt="Meenakshi Sundararajan Engineering College" 
              className="institution-image"
            />
          </div>
          <div className="about-content">
            <h1 className="institution-title"><b>Meenakshi Sundararajan Engineering College</b></h1>
            <p className="institution-description">
              Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001. 
              This institution is a part of the prestigious KRS Group of Institutions which also includes the 
              renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder Late 
              Shri K.R.Sundararajan, the well-known Meenakshi College for Women, and the more recently established 
              Meenakshi Sundararajan School of Management. The institutions on the KRS Campus are known for the 
              quality education they impart and their stringent levels of discipline. We have consistently outshone 
              all our peers, not only in academics, but in co-curricular activities as well.
            </p>
          </div>
        </div>

        {/* Computer Science Department Section */}
        <div className="about-container reverse-layout">
          <div className="about-image">
            <img 
              src={CSDeptImage} 
              alt="Computer Science Department" 
              className="cs-department-image"
            />
          </div>
          <div className="about-content">
            <h2 className="institution-title"><b>Department of Computer Science & Engineering</b></h2>
            <p className="institution-description">
              The Department of Computer Science and Engineering at MSEC is a hub of innovation, creativity, and research.
              With a strong focus on academic excellence, hands-on learning, and industry collaborations, the department
              prepares students for the ever-evolving world of technology. Our curriculum is designed to bridge the gap
              between theory and practice, equipping students with skills in AI, Data Science, Cybersecurity, and more.
            </p>
            <p className="institution-description">🔬 Research, innovation, and cutting-edge technology define our vision.</p>
            <p className="institution-description">👨‍💻 Empowering future tech leaders through skill-based learning.</p>
            <p className="institution-description">🌎 Industry partnerships for real-world exposure and career growth.</p>
          </div>
        </div>

        {/* Kranti Section */}
        <div className="about-container">
          <div className="about-image">
            <img 
              src={KrantiImage} 
              alt="Kranti 2K25" 
              className="kranti-image"
            />
          </div>
          <div className="about-content">
            <h2 className="kranti-title"><b>Kranti 2K25 – The Revolution in Technology</b></h2>
            <div className="kranti-description">
              <p>
                <span className="highlight">🚀 What is Kranti?</span><br />
                Kranti, meaning "Revolution," symbolizes transformation and innovation. Kranti 2K25 is a CSE symposium where brilliant minds push boundaries, challenge limits, and redefine the future of technology.
              </p>
              
              <p>
                <span className="highlight">⏳ Theme: Time Paradox</span><br />
                Step into the mysteries of time—loops, alternate realities, and temporal anomalies. This year's events challenge you to think beyond the present, reshape the past, and embrace the future.
              </p>
              
              <div className="challenge-questions">
                <p>💻 Can you debug an error before it happens?</p>
                <p>🕰 Can you pitch an idea that rewrites history?</p>
                <p>🔁 Can you code your way out of a time loop?</p>
              </div>
              
              <p className="call-to-action">
                The clock is ticking. Are you ready for the paradox?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;