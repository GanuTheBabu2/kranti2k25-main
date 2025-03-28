import React, { useEffect, useRef } from "react";
import SmallCountdown from "./SmallCountdown"; // Import countdown component

function LandingSection() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    // Adjust playback rate for both videos if needed
    if (desktopVideoRef.current) {
      desktopVideoRef.current.playbackRate = 0.75;
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div 
      className="relative h-screen flex items-end md:items-center justify-center md:justify-start text-center md:text-left"
      style={{
        background: "linear-gradient(135deg, #1f051f 0%, #1a0826 30%, #0f0a2a 70%, #050f1f 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Videos */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/LandingVBG_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      >
        <source src="/LandingVBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>

      {/* Text Content */}
      <div className="relative z-10 px-4 md:pl-12 flex flex-col items-center md:items-start justify-end md:justify-center h-full pb-10 md:pb-0">
        <div className="p-4 rounded-md flex flex-col items-center md:items-start max-w-lg md:max-w-none text-box">
          <h1 className="text-5xl md:text-7xl font-bold text-sky-400 uppercase">
            KRANTI 2K25
          </h1>
          <p className="text-lg md:text-3xl text-gray-200 mt-2 block md:block">
            A National Level Technical Symposium
          </p>
          <SmallCountdown />
        </div>
      </div>

      {/* Scroll Down Indicator (Hidden on Mobile) */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center hidden md:flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:h-12 md:w-12 animate-bounce text-sky-400 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <span className="block text-lg md:text-xl font-semibold mt-2 text-sky-400 drop-shadow-md">
          Scroll Down
        </span>
      </div>

      {/* Styles */}
      <style jsx>{`
        .text-box {
          mix-blend-mode: screen;
        }
      `}</style>
    </div>
  );
}

export default LandingSection;