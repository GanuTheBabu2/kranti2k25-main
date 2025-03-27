import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader'; // Import the Preloader
import LandingSection from './components/LandingSection';
import ExploreEventsSection from './components/ExploreEventsSection';
import SpecialThanksSection from './components/SpecialThanksSection';
import ContactUsSection from './components/ContactUsSection';
import Location from "./components/Location";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and trigger animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust duration (in milliseconds) as needed (e.g., 2500ms = 2.5s)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="bg-black text-white font-sans"> {/* Keep outer bg-black for consistency */}
      <Preloader isLoading={isLoading} />

      {/* Main content container with fade-in effect */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDelay: isLoading ? '0ms' : '500ms' }} // Delay fade-in until preloader text starts moving
      >
        {/* Ensure LandingSection also has the video if it's meant to be continuous */}
        <LandingSection />
        <SpecialThanksSection />
        <ExploreEventsSection />
        <ContactUsSection />
        <Location />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors w-12"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
