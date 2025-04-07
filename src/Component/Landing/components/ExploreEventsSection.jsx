import React from "react";

function ExploreEventsSection() {
  return (
    <div 
      className="py-12 text-left explore-events-bg"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0b0b1a 30%, #13061a 70%, #1a001f 100%)", // Darker gradient
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500">Explore Events</h2>
        <p className="mt-4 text-white opacity-80 font-semibold">
  <span className="block">🔁 Time Loop Limitation:</span>
  <span className="block">
    Events loop from 10 AM to 1 PM. <br/>
    One event. One choice. One shot. <br/>
    Choose wisely — all event share the same time!
  </span>
</p>


        <a
          href="/event"
          className="inline-block mt-8 px-6 py-2 rounded-full bg-black text-white font-bold border border-sky-500 hover:bg-gray-800 transition-colors duration-300"
        >
          View Events
        </a>
      </div>
    </div>
  );
}

export default ExploreEventsSection;