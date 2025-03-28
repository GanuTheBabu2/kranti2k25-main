import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import image1 from "../Event/assets/Interstellar-Harmonics.webp";
import image2 from "../Event/assets/Cyberheist-Time-Rift.webp";
import image3 from "../Event/assets/Chronobid.webp";
import image4 from "../Event/assets/Lyric-Quest.webp";
import image5 from "../Event/assets/Pictoword.webp";
import image6 from "../Event/assets/Timeless-Truths.webp";
import image7 from "../Event/assets/Escape Paradox.webp";
import image8 from "../Event/assets/Meme-Rewind.webp";
import EventPreloader from "./EventPreloader"; 
import { AnimatePresence } from "framer-motion";

const events = [
  {
    name: "Quantum Codeshift",
    tagline: "Crack the code,Conquer the Quest!",
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
  const [isLoading, setIsLoading] = useState(false);
  const radius = 140;
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedEvent && scrollRef.current) {
      const timer = setTimeout(() => {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100); // Delay the scroll slightly

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [selectedEvent]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsLoading(false);
  };

  const handleExploreClick = (event) => {
    setIsLoading(true);
  };

  const handlePreloaderComplete = () => {
    window.location.href = selectedEvent.path;
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div
      className="relative flex flex-col items-center space-y-12 py-12 text-white overflow-hidden"
      style={{
        minHeight: selectedEvent ? "120vh" : "100vh",
        background: "linear-gradient(90deg, #2a0a2a 50%, #0a1520 50%)",
      }}
    >
      {/* Time Paradox Back Button */}
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
       
      {/* Reduced Background Grid Lines */}
      <div
        className="fixed inset-0 z-0 opacity-[12%]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ff00ff 1px, transparent 1px),
            linear-gradient(to bottom, #00ffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle Light Beams */}
      <motion.div
        className="fixed h-full w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-[2%]"
        style={{ left: "20%", zIndex: 1 }}
        animate={{ x: ["-50%", "500%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      <motion.div
        className="fixed h-full w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-[2%]"
        style={{ right: "30%", zIndex: 1 }}
        animate={{ x: ["500%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 2 }}
      />

      {/* Subtle Glowing Orbs */}
      <motion.div
        className="fixed w-48 h-48 rounded-full bg-fuchsia-600 filter blur-xl opacity-[2%]"
        style={{ left: "10%", top: "30%", zIndex: 1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.01, 0.02, 0.01] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        className="fixed w-64 h-64 rounded-full bg-blue-500 filter blur-xl opacity-[2%]"
        style={{ right: "5%", bottom: "20%", zIndex: 1 }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.01, 0.02, 0.01] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <motion.div
        className="fixed w-56 h-56 rounded-full bg-purple-500 filter blur-xl opacity-[1%]"
        style={{ left: "30%", bottom: "10%", zIndex: 1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.005, 0.01, 0.005] }}
        transition={{ repeat: Infinity, duration: 9, delay: 1 }}
      />

      {/* Header with Reduced Glow */}
      <div className="text-center z-10 mt-4 w-full max-w-5xl px-4">
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 pb-1"
          style={{
            textShadow:
              "0 0 3px rgba(255, 0, 255, 0.2), 0 0 8px rgba(255, 0, 255, 0.1)",
          }}
        >
          TIME IS TICKING, START CLICKING!
        </h1>
        <div className="flex items-center mt-1 w-full relative">
          <div className="w-1/2 text-right pr-2">
            <span
              className="text-sm px-4 py-1 rounded-full font-semibold inline-block"
              style={{
                background: "linear-gradient(to right, #2a0a2a, #ff8c00)",
                textShadow: "0 0 3px rgba(255, 140, 0, 0.2)",
                maxWidth: "100%",
              }}
            >
              Non tech: For minds that script stories...
            </span>
          </div>
          <div className="w-1/2 text-left pl-0">
            <span
              className="text-sm px-4 py-1 rounded-full font-semibold inline-block"
              style={{
                background: "linear-gradient(to right, #0a1520, #1e90ff)",
                textShadow: "0 0 3px rgba(30, 144, 255, 0.2)",
                maxWidth: "100%",
              }}
            >
              Tech: For the minds that thinks in binary...
            </span>
          </div>
        </div>
        <p
          className="text-sm text-cyan-300 mt-1"
          style={{
            textShadow: "0 0 3px rgba(0, 255, 255, 0.2), 0 0 6px rgba(0, 255, 255, 0.1)",
          }}
        >
          Engage in thrilling events before time resets. The adventure awaits!
        </p>
      </div>

      {/* Clock Container */}
      <div className="relative w-96 h-96 flex items-center justify-center z-10">
        {/* Clock Glow */}
        <motion.div
          className="absolute w-[120%] h-[120%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 100%)",
            filter: "blur(50px)",
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        />

        {/* Outer pulsing ring */}
        <motion.div
          className="absolute rounded-full border-2 border-cyan-400 w-full h-full"
          style={{
            boxShadow: "0 0 5px rgba(0, 255, 255, 0.1), 0 0 10px rgba(0, 255, 255, 0.05)",
          }}
          animate={{
            boxShadow: [
              "0 0 3px rgba(0, 255, 255, 0.05), 0 0 6px rgba(0, 255, 255, 0.02)",
              "0 0 8px rgba(0, 255, 255, 0.1), 0 0 15px rgba(0, 255, 255, 0.05)",
              "0 0 3px rgba(0, 255, 255, 0.05), 0 0 6px rgba(0, 255, 255, 0.02)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        <div
          className="absolute rounded-full border border-cyan-400 w-[93%] h-[93%] opacity-50"
          style={{ boxShadow: "0 0 3px rgba(0, 255, 255, 0.1)" }}
        />

        <div
          className="absolute rounded-full border-[2px] border-fuchsia-400 w-80 h-80 left-8 top-8"
          style={{
            boxShadow: "0 0 5px rgba(255, 0, 255, 0.1), 0 0 10px rgba(255, 0, 255, 0.05)",
          }}
        />

        <div
          className="absolute rounded-full border border-fuchsia-400 w-[75%] h-[75%] left-12 top-12 opacity-50"
          style={{ boxShadow: "0 0 3px rgba(255, 0, 255, 0.1)" }}
        />

        {/* Center Dot */}
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full z-20"
          animate={{
            boxShadow: [
              "0 0 3px rgba(255, 255, 255, 0.1), 0 0 6px rgba(255, 255, 255, 0.05)",
              "0 0 6px rgba(255, 255, 255, 0.2), 0 0 12px rgba(255, 255, 255, 0.1)",
              "0 0 3px rgba(255, 255, 255, 0.1), 0 0 6px rgba(255, 255, 255, 0.05)",
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
              "0 0 3px rgba(255, 0, 255, 0.2), 0 0 6px rgba(255, 0, 255, 0.1)",
              "0 0 5px rgba(255, 0, 255, 0.3), 0 0 10px rgba(255, 0, 255, 0.2)",
              "0 0 3px rgba(255, 0, 255, 0.2), 0 0 6px rgba(255, 0, 255, 0.1)",
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
              "0 0 3px rgba(0, 255, 255, 0.2), 0 0 6px rgba(0, 255, 255, 0.1)",
              "0 0 5px rgba(0, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.2)",
              "0 0 3px rgba(0, 255, 255, 0.2), 0 0 6px rgba(0, 255, 255, 0.1)",
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
                    ? "0 0 5px #1e90ff, 0 0 10px rgba(30, 144, 255, 0.2)"
                    : "0 0 5px #ff4500, 0 0 10px rgba(255, 69, 0, 0.2)"
                  : isTechEvent
                  ? "0 0 3px rgba(30, 144, 255, 0.2)"
                  : "0 0 3px rgba(255, 140, 0, 0.2)",
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
                  boxShadow: "inset 0 0 3px rgba(255, 255, 255, 0.1)",
                  opacity: isHovered ? 0.2 : 0.1,
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
                  ? "linear-gradient(to bottom right, #0a1520, #1e90ff)"
                  : "linear-gradient(to bottom right, #2a0a2a, #ff8c00)",
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
                  `0 0 5px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.1)"
                      : "rgba(255, 140, 0, 0.1)"
                  }, inset 0 0 3px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.1)"
                      : "rgba(255, 140, 0, 0.1)"
                  }`,
                  `0 0 10px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.2)"
                      : "rgba(255, 140, 0, 0.2)"
                  }, inset 0 0 6px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.1)"
                      : "rgba(255, 140, 0, 0.1)"
                  }`,
                  `0 0 5px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.1)"
                      : "rgba(255, 140, 0, 0.1)"
                  }, inset 0 0 3px ${
                    selectedEvent.type === "tech"
                      ? "rgba(30, 144, 255, 0.1)"
                      : "rgba(255, 144, 0, 0.1)"
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
                opacity: 0.1,
              }}
            />
            <div
              className="absolute w-6 h-6 top-0 right-0 bg-gradient-to-bl"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to bottom left, #1e90ff, transparent)"
                  : "linear-gradient(to bottom left, #ff8c00, transparent)",
                opacity: 0.1,
              }}
            />
            <div
              className="absolute w-6 h-6 bottom-0 left-0 bg-gradient-to-tr"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to top right, #1e90ff, transparent)"
                  : "linear-gradient(to top right, #ff8c00, transparent)",
                opacity: 0.1,
              }}
            />
            <div
              className="absolute w-6 h-6 bottom-0 right-0 bg-gradient-to-tl"
              style={{
                background: selectedEvent.type === "tech"
                  ? "linear-gradient(to top left, #1e90ff, transparent)"
                  : "linear-gradient(to top left, #ff8c00, transparent)",
                opacity: 0.1,
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
                      ? "linear-gradient(45deg, #1e90ff, #0a1520)"
                      : "linear-gradient(45deg, #ff8c00, #2a0a2a)",
                    boxShadow: selectedEvent.type === "tech"
                      ? "0 0 5px rgba(30, 144, 255, 0.2)"
                      : "0 0 5px rgba(255, 140, 0, 0.2)",
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
                      ? "0 0 3px rgba(30, 144, 255, 0.2), 0 0 6px rgba(30, 144, 255, 0.1)"
                      : "0 0 3px rgba(255, 140, 0, 0.2), 0 0 6px rgba(255, 140, 0, 0.1)",
                  }}
                >
                  {selectedEvent.name}
                </span>

                {selectedEvent.type === "non-tech" && (
                  <span
                    className="text-sm block mt-2 text-center w-full"
                    style={{
                      color: "#ff8c00",
                      textShadow: "0 0 3px rgba(255, 140, 0, 0.2), 0 0 6px rgba(255, 140, 0, 0.1)",
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
                      textShadow: "0 0 3px rgba(30, 144, 255, 0.2), 0 0 6px rgba(30, 144, 255, 0.1)",
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
                      `0 0 3px ${
                        selectedEvent.type === "tech"
                          ? "rgba(30, 144, 255, 0.1)"
                          : "rgba(255, 140, 0, 0.1)"
                      }`,
                      `0 0 5px ${
                        selectedEvent.type === "tech"
                          ? "rgba(30, 144, 255, 0.2)"
                          : "rgba(255, 140, 0, 0.2)"
                      }`,
                      `0 0 3px ${
                        selectedEvent.type === "tech"
                          ? "rgba(30, 144, 255, 0.1)"
                          : "rgba(255, 140, 0, 0.1)"
                      }`,
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
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