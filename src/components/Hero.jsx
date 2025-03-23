import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showBalloons, setShowBalloons] = useState(false);

  const createBalloons = () => {
    setShowBalloons(true);

    // Optional: auto-hide after a few seconds
    setTimeout(() => setShowBalloons(false), 8000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-screen px-4 text-center relative overflow-hidden"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold max-w-3xl leading-tight">
        Happy Birthday <span className="text-pink-400">Erin and Linda!</span>
      </h1>
      <p className="text-gray-400 mt-6 max-w-xl text-lg">
        I hope you have an amazing year!
      </p>
      <button
        onClick={createBalloons}
        className="mt-8 px-6 py-3 bg-pink-400 text-black font-semibold rounded-lg hover:bg-pink-300 transition"
      >
        Release Balloons 🎈
      </button>

      {showBalloons && (
  <div className="balloon-container">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="balloon-emoji"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      >
        🎈
      </div>
    ))}
  </div>
)}

    </motion.section>
  );
}
