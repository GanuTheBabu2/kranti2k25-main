import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import image from "../../Component/Event/images/Vault_Heist.webp";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";  // Added for back navigation

export default function VaultHeist() {
  const navigate = useNavigate();  // Added for back navigation
  const event = {
    title: "Vault Heist : The Ultimate Investigation Challenge",
    img: image,
    date: "online",
    description:
      "A high-stakes mystery has shaken the city, and it's up to you to uncover the truth! Solve clues, crack codes, and uncover hidden secrets to crack the case and become the Mastermind Solver.",
    rules: [
      "Eligibility: Open to all participants with an active Instagram account.",

      "Registration: DM ‘I’m in’ to officially join the investigation.",

      "Clue Releases: Regular clues will be shared via Instagram Stories. Keep an eye out for daily updates!",

      "Interactive Challenges: Participate in polls, Q&As, and submit your theories through Instagram.",

      "Final Submission: Submit your final answers to the mystery at the end. Who planned the heist? How did they do it? Where is the money now?",

      "No Cheating: All theories must be original. Cheating or spamming will lead to disqualification.",

      "Respectful Participation: Ensure all submissions and communications are respectful and appropriate.",

      "Winner Selection: The detective who submits the most accurate and detailed solution will be crowned the Mastermind Solver and featured on the Instagram page.",

      "Prize: The top detective will receive a mystery prize related to the event theme!",

      "Event Duration: The event will run until the mystery is solved. Stay active and keep engaging for clues!"
    ],
    coordinator: ["Arthyvarshini E","Seysanth V","Mohideen Abdul Aziz","Ramya Devi R"],
    contact: ["+91 86102 71705", "+91 90257 70052"],
    need: ["Name", "Insta ID", "Department", "Year", "College"]
};

  const handleBackClick = () => {
    navigate(-1);  // Go back to previous page
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#0e0e0e",
            color: "#00ffff",
            border: "1px solid #00ffff",
            boxShadow: "0 0 12px #00ffff, 0 0 24px #0ff2",
          },
        }}
      />
      <motion.div
        className="max-w-3xl w-full bg-gray-950 p-8 rounded-2xl shadow-purple-500/40 shadow-2xl border border-purple-500 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={event.img}
          alt={event.title}
          className="w-full h-[66] object-cover rounded-lg shadow-lg border-4 border-purple-600"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-3xl font-bold mt-6 mb-3 text-purple-400 text-center">
          {event.title}
        </h1>
        <p className="text-lg mb-3 text-white">{event.description}</p>
        <p className="text-md text-purple-300 text-center">
          📅 Mode of Event: {event.date}
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">
            Rules & Regulations
          </h2>
          <ul className="mt-2 text-white list-disc list-inside">
            {event.rules.map((rule, index) => (
              <li key={index} className="mt-1">
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <br />
        {/* <p style={{ color: "white" }}>🎉 Win Exciting Cash Prizes! 💰 Participate & Claim Your Rewards! 🚀</p> */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">
            Event Coordinators
          </h2>
          {event.coordinator.map((c, i) => (
            <p key={i} className="text-white">
              {c}
            </p>
          ))}

          <h2 className="text-xl font-semibold text-purple-400 mt-3">
            Contact
          </h2>
          {event.contact.map((c, i) => (
            <p key={i} className="text-white">
              📞 {c}
            </p>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-purple-400 mt-3">
            Check Out
          </h2>
        <p className="text-lg mb-3 text-white">
        Don't miss out—check your inbox for your registered mail, and if it's not there, be sure to peek in the spam folder!
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400">
            Details need to be provided
          </h2>
          <h2 className="text-xl text-white">
            Send the above details along with your meme to our Instagram link
            mentioned below
          </h2>

          <ul className="text-white list-disc list-inside">
            {event.need.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/yourpage", "_blank")
            }
            className="py-2 px-6 text-white rounded-lg text-md font-semibold transition-all shadow-[0_0_15px_3px_rgba(168,85,247,0.6)] bg-purple-600 hover:bg-purple-700"
          >
            Upload your meme
          </button>
        </div>
      </motion.div>
    </div>
  );
}