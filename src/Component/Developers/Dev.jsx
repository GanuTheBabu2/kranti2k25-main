import React from "react";
import { Contact, Experience, Works, StarsCanvas } from "./components";

const Dev = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
      <a
  href="/"
  className="absolute top-4 left-4 text-xl text-white hover:text-blue-400 transition-colors sm:left-3 sm:top-3 sm:px-2 sm:py-1 cursor-pointer select-none"
>
  <span className="hidden sm:inline">&larr; Back to home</span>
  <span className="inline sm:hidden text-2xl">&larr;</span>
</a>

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
  );
};

export default Dev;
