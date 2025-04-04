import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../Event/assets/Interstellar-Harmonics.webp";
import image2 from "../Event/assets/Cyberheist-Time-Rift.webp";
import image3 from "../Event/assets/Chronobid.webp";
import image4 from "../Event/assets/Lyric-Quest.webp";
import image5 from "../Event/assets/Pictoword.webp";
import image6 from "../Event/assets/Timeless-Truths.webp";
import image7 from "../Event/assets/Escape Paradox.webp";
import image8 from "../Event/assets/Meme-Rewind.webp";
import EventPreloader from "./EventPreloader"; 
import {  AnimatePresence } from "framer-motion";
const events = [
  {
    name: "Interstellar Harmonics",
    tagline: "Melodies across time and space!",
    image: image1,
    path: "/inter",
    type: "non-tech",
  },
  {
    name: "Timeless Truths",
    tagline: "Wisdom beyond the ages!",
    image: image6,
    path: "/timelesstruth",
    type: "tech",
  },
  {
    name: "Cyber Heist",
    tagline: "Crack codes, steal the future!",
    image: image2,
    path: "/Cyberheist",
    type: "tech",
  },
  {
    name: "Escape Paradox",
    tagline: "Break free from the time loop!",
    image: image7,
    path: "/escapeparadox",
    type: "tech",
  },
  {
    name: "Chrono Bid",
    tagline: "Time is currency, bid wisely!",
    image: image3,
    path: "/chronobid",
    type: "tech",
  },
  {
    name: "Lyric Quest",
    tagline: "Sing, guess, conquer!",
    image: image4,
    path: "/lyric",
    type: "non-tech",
  },
  {
    name: "Pictoword",
    tagline: "Unravel the picture puzzle!",
    image: image5,
    path: "/picto",
    type: "non-tech",
  },
  {
    name: "MemeRewind",
    tagline: "Unravel the picture puzzle!",
    image: image8,
    path: "/meme",
    type: "non-tech",
  },
];

export default function SympoClock() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add this state
  const radius = 140;
  const scrollRef = useRef(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleExploreClick = (event) => {
    setSelectedEvent(event);
    setIsLoading(true);
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePreloaderComplete = () => {
    // Navigate to the event page
    window.location.href = selectedEvent.path;
  };

  return (
    
    <div
      className="relative flex flex-col items-center space-y-12 py-12 text-white overflow-hidden"
      style={{
        minHeight: selectedEvent ? "120vh" : "100vh",
        background: "linear-gradient(90deg, #3d0a3d 50%, #0a1a3d 50%)",
      }}
    >
      <a
  href="/"
  className="absolute top-4 left-4 text-xl text-white hover:text-blue-400 transition-colors sm:left-3 sm:top-3 sm:px-2 sm:py-1 cursor-pointer select-none"
>
  <span className="hidden sm:inline">&larr; Back to home</span>
  <span className="inline sm:hidden text-2xl">&larr;</span>
</a>
      {/* Neon grid lines with enhanced glow */}
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ff00ff 1px, transparent 1px),
            linear-gradient(to bottom, #00ffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          filter: "blur(0.5px)",
        }}
      />

      {/* Additional light beams */}
      <motion.div
        className="fixed h-full w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-10"
        style={{ left: "20%", zIndex: 1 }}
        animate={{ x: ["-100%", "800%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />

      <motion.div
        className="fixed h-full w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-10"
        style={{ right: "30%", zIndex: 1 }}
        animate={{ x: ["800%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 2 }}
      />

      {/* Glowing orbs with enhanced effects */}
      <motion.div
        className="fixed w-64 h-64 rounded-full bg-fuchsia-600 filter blur-3xl opacity-20"
        style={{ left: "10%", top: "30%", zIndex: 1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="fixed w-96 h-96 rounded-full bg-blue-500 filter blur-3xl opacity-20"
        style={{ right: "5%", bottom: "20%", zIndex: 1 }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <motion.div
        className="fixed w-72 h-72 rounded-full bg-purple-500 filter blur-3xl opacity-10"
        style={{ left: "30%", bottom: "10%", zIndex: 1 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 9, delay: 1 }}
      />

      {/* Header with Updated Taglines */}
      <div className="text-center z-10 mt-4 w-full max-w-5xl px-4">
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 pb-1"
          style={{
            textShadow:
              "0 0 5px #ff00ff, 0 0 15px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.4)",
          }}
        >
          TIME IS TICKING, START CLICKING!
        </h1>
        <div className="flex items-center mt-1 w-full relative">
          <div className="w-1/2 text-right pr-2">
            <span
              className="text-sm px-4 py-1 rounded-full font-semibold inline-block"
              style={{
                background: "linear-gradient(to right, #3d0a3d, #ff8c00)",
                textShadow: "0 0 5px rgba(255, 140, 0, 0.7)",
                maxWidth: "100%",
              }}
            >
              Non tech: For minds that script stories
            </span>
          </div>
          <div className="w-1/2 text-left pl-0">
            <span
              className="text-sm px-4 py-1 rounded-full font-semibold inline-block"
              style={{
                background: "linear-gradient(to right, #0a1a3d, #1e90ff)",
                textShadow: "0 0 5px rgba(30, 144, 255, 0.7)",
                maxWidth: "100%",
              }}
            >
              Tech: For minds that thinks in binary
            </span>
          </div>
        </div>
        <p
          className="text-sm text-cyan-300 mt-1"
          style={{
            textShadow: "0 0 5px #00ffff, 0 0 10px rgba(0, 255, 255, 0.8)",
          }}
        >
          Engage in thrilling events before time resets. The adventure awaits!
        </p>
      </div>

      {/* Clock Container */}
      <div className="relative w-96 h-96 flex items-center justify-center z-10">
        {/* Outer pulsing ring */}
        <motion.div
          className="absolute rounded-full border-2 border-cyan-400 w-full h-full"
          style={{
            boxShadow: "0 0 20px #00ffff, 0 0 40px rgba(0, 255, 255, 0.5)",
          }}
          animate={{
            boxShadow: [
              "0 0 10px #00ffff, 0 0 20px rgba(0, 255, 255, 0.3)",
              "0 0 25px #00ffff, 0 0 50px rgba(0, 255, 255, 0.6)",
              "0 0 10px #00ffff, 0 0 20px rgba(0, 255, 255, 0.3)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        <div
          className="absolute rounded-full border border-cyan-400 w-[93%] h-[93%] opacity-50"
          style={{ boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)" }}
        />

        <div
          className="absolute rounded-full border-[2px] border-fuchsia-400 w-80 h-80 left-8 top-8"
          style={{
            boxShadow: "0 0 15px #ff00ff, 0 0 30px rgba(255, 0, 255, 0.4)",
          }}
        />

        <div
          className="absolute rounded-full border border-fuchsia-400 w-[75%] h-[75%] left-12 top-12 opacity-50"
          style={{ boxShadow: "0 0 8px rgba(255, 0, 255, 0.3)" }}
        />

        {/* Center Dot */}
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full z-20"
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3)",
              "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)",
              "0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Clock Hands */}
        <motion.div
          className="absolute w-1.5 h-[15vh] bg-gradient-to-b from-pink-500 to-fuchsia-600 origin-bottom rounded-lg"
          style={{
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(50%)",
          }}
          animate={{
            rotate: [0, 360],
            boxShadow: [
              "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.4)",
              "0 0 15px rgba(255, 0, 255, 0.9), 0 0 30px rgba(255, 0, 255, 0.5)",
              "0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.4)",
            ],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 120, ease: "linear" },
            boxShadow: { repeat: Infinity, duration: 2 },
          }}
        />
        <motion.div
          className="absolute w-1 h-[18vh] bg-gradient-to-b from-cyan-400 to-blue-600 origin-bottom rounded-lg"
          style={{
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(50%)",
          }}
          animate={{
            rotate: [0, 360],
            boxShadow: [
              "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.4)",
              "0 0 15px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.5)",
              "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.4)",
            ],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 20, ease: "linear" },
            boxShadow: { repeat: Infinity, duration: 3, delay: 0.5 },
          }}
        />

        {/* Event Icons Around Clock */}
        {events.map((event, index) => {
          const angle = (360 / events.length) * index - 90;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          const isHovered = hoveredIndex === index;
          const isTechEvent = event.type === "tech";

          return (
            <div
              key={index}
              className="absolute w-16 h-16 flex items-center justify-center rounded-full bg-black bg-opacity-70 border-2 cursor-pointer overflow-hidden"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,                
                transform: "translate(-50%, -50%)",
                borderColor: isHovered
                  ? isTechEvent
                    ? "#1e90ff"
                    : "#ff4500"
                  : isTechEvent
                  ? "#1e90ff"
                  : "#ff8c00",
                boxShadow: isHovered
                  ? isTechEvent
                    ? "0 0 20px #1e90ff, 0 0 30px rgba(30, 144, 255, 0.6)"
                    : "0 0 20px #ff4500, 0 0 30px rgba(255, 69, 0, 0.6)"
                  : isTechEvent
                  ? "0 0 15px rgba(30, 144, 255, 0.5)"
                  : "0 0 15px rgba(255, 140, 0, 0.5)",
                zIndex: 20,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleEventClick(event)}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-40" />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.3)",
                  opacity: isHovered ? 0.7 : 0.3,
                }}
              />
            </div>
          );
        })}
      </div>

      <div
        ref={scrollRef}
        className="w-full z-10 mt-16 flex flex-col items-center justify-center pb-12"
      >
        <AnimatePresence>
        {/* Selected Event Card */}
        {selectedEvent &&  !isLoading && (
          <motion.div
            className="relative p-8 bg-black bg-opacity-80 rounded-2xl border-2 transition-all w-full max-w-2xl mt-8 z-20 cursor-pointer overflow-hidden"
            style={{
              borderColor: selectedEvent.type === "tech" ? "#1e90ff" : "#ff8c00",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to bottom right, #0a1a3d, #1e90ff)"
                  : "linear-gradient(to bottom right, #3d0a3d, #ff8c00)",
                opacity: 0.3,
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
              style={{
                borderColor: selectedEvent.type === "tech" ? "#1e90ff" : "#ff8c00",
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.4)"
                      : "rgba(255, 140, 0, 0.4)"
                  }, inset 0 0 10px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.2)"
                      : "rgba(255, 140, 0, 0.2)"
                  }`,
                  `0 0 40px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.6)"
                      : "rgba(255, 140, 0, 0.6)"
                  }, inset 0 0 20px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.3)"
                      : "rgba(255, 140, 0, 0.3)"
                  }`,
                  `0 0 20px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.4)"
                      : "rgba(255, 140, 0, 0.4)"
                  }, inset 0 0 10px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.2)"
                      : "rgba(255, 144, 0, 0.2)"
                  }`,
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            {/* Corner accent lights */}
            <div
              className="absolute w-6 h-6 top-0 left-0 bg-gradient-to-br"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to bottom right, #1e90ff, transparent)"
                  : "linear-gradient(to bottom right, #ff8c00, transparent)",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute w-6 h-6 top-0 right-0 bg-gradient-to-bl"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to bottom left, #1e90ff, transparent)"
                  : "linear-gradient(to bottom left, #ff8c00, transparent)",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute w-6 h-6 bottom-0 left-0 bg-gradient-to-tr"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to top right, #1e90ff, transparent)"
                  : "linear-gradient(to top right, #ff8c00, transparent)",
                opacity: 0.7,
              }}
            />
            <div
              className="absolute w-6 h-6 bottom-0 right-0 bg-gradient-to-tl"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to top left, #1e90ff, transparent)"
                  : "linear-gradient(to top left, #ff8c00, transparent)",
                opacity: 0.7,
              }}
            />

<Link to="#" onClick={(e) => {
  e.preventDefault();
  handleExploreClick(selectedEvent);
}}>
              <div className="flex flex-col items-center text-white relative">
                <div
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full overflow-hidden"
                  style={{
                    background: selectedEvent.type === "tech"
                      ? "linear-gradient(45deg, #1e90ff, #0a1a3d)"
                      : "linear-gradient(45deg, #ff8c00, #3d0a3d)",
                    boxShadow: selectedEvent.type === "tech"
                      ? "0 0 15px rgba(30, 144, 255, 0.7)"
                      : "0 0 15px rgba(255, 140, 0, 0.7)",
                  }}
                >
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span
                  className="text-xl font-bold"
                  style={{
                    textShadow: selectedEvent.type === "tech"
                      ? "0 0 5px #1e90ff, 0 0 15px rgba(30, 144, 255, 0.6)"
                      : "0 0 5px #ff8c00, 0 0 15px rgba(255, 140, 0, 0.6)",
                  }}
                >
                  {selectedEvent.name}
                </span>

                {selectedEvent.type === "non-tech" && (
                  <span
                    className="text-sm block mt-2 text-center w-full"
                    style={{
                      color: "#ff8c00",
                      textShadow: "0 0 5px #ff8c00, 0 0 10px rgba(255, 140, 0, 0.7)",
                    }}
                  >
                    {selectedEvent.tagline}
                  </span>
                )}
                {selectedEvent.type === "tech" && (
                  <span
                    className="text-sm block mt-2 text-center w-full"
                    style={{
                      color: "#1e90ff",
                      textShadow: "0 0 5px #1e90ff, 0 0 10px rgba(30, 144, 255, 0.7)",
                    }}
                  >
                    {selectedEvent.tagline}
                  </span>
                )}

                <motion.p
                  className="text-xs mt-4 border px-6 py-2 rounded-full relative overflow-hidden"
                  style={{
                    borderColor: selectedEvent.type === "tech" ? "#1e90ff" : "#ff8c00",
                    color: selectedEvent.type === "tech" ? "#1e90ff" : "#ff8c00",
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 5px ${
                        selectedEvent.type === "tech"
                          ? "rgba(30, 144, 255, 0.5)"
                          : "rgba(255, 140, 0, 0.5)"
                      }`,
                      `0 0 15px ${
                        selectedEvent.type === "tech"
                          ? "rgba(30, 144, 255, 0.7)"
                          : "rgba(255, 140, 0, 0.7)"
                      }`,
                      `0 0 5px ${
                        selectedEvent.type === "tech"
                          ? "rgba(30, 144, 255, 0.5)"
                          : "rgba(255, 140, 0, 0.5)"
                      }`,
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  />
                  Click to Explore!
                </motion.p>
              </div>
            </Link>

          </motion.div>

        )}
         {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full max-w-2xl mt-8 z-20 flex items-center justify-center"
            >
              <EventPreloader 
                eventName={selectedEvent.name}
                eventImage={selectedEvent.image}
                onComplete={handlePreloaderComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}