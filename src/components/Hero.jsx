import React from "react";
import { brandColor, brandText } from "../styles/theme";

export default function Hero() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            AI Agents for <span className={brandText}>Local Service Businesses</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Scottsdale AI helps businesses follow up, convert leads, and automate growth — all with AI.
          </p>
          <button className={`mt-8 px-6 py-3 rounded-lg font-semibold transition ${brandColor}`}>
            Get Early Access
          </button>
        </div>

        {/* Right Visual */}
        <div className="w-full max-w-lg">
          <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md flex items-center justify-center text-gray-500 text-xl">
            {/* Placeholder / Replace with UI or animation later */}
            Scottsdale AI
          </div>
        </div>
      </div>
    </section>
  );
}
