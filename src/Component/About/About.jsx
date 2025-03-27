import React from "react";
import Projects from "./components/Projects";


const About = () => {
  return (
    <div className="about-page">
      
      <Projects />
      <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors w-12"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
     
    </div>
  );
};

export default About;
