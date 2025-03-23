import React, { useState, useEffect } from "react";
import { brandColor, brandText } from "../styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

<img src={logo} alt="Scottsdale AI Logo" className="h-10 w-auto" />

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className="w-full px-6 py-4 bg-black text-white border-b border-white/10 sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-2">
  <img
    src={logo}
    alt="Scottsdale AI Logo"
    className="h-10 w-auto transition-opacity duration-200 rounded"
  />
  <span className="text-white text-xl font-bold tracking-tight">
    Scottsdale <span className="text-blue-400">AI</span>
  </span>
</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className={`${brandColor} px-4 py-2 rounded font-medium transition`}>
            Get Early Access
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
  {menuOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black z-40"
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <motion.div
        key="mobile-menu"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="fixed top-16 left-0 right-0 bg-black text-white px-6 pt-4 pb-6 border-t border-white/10 z-50"
      >
        <nav className="flex flex-col gap-4 text-sm text-gray-300">
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Contact</a>
          <button
            onClick={() => setMenuOpen(false)}
            className={`${brandColor} mt-4 w-full py-2 rounded font-medium transition`}
          >
            Get Early Access
          </button>
        </nav>
      </motion.div>
    </>
  )}
</AnimatePresence>

      
    </header>
  );
}
