import React, { useEffect, useState } from "react";
import heroLight from "../assets/hero-light.png";

export default function Hero() {
  // Simple state to trigger the "entrance" animation
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-64px)] flex-col items-center justify-center overflow-hidden bg-white px-6 pb-20 pt-10"
    >
      {/* Google Design Choice: 
        We use a max-width container to ensure the illustration never 
        becomes uncomfortably large on ultrawide monitors.
      */}
      <div
        className={`w-full max-w-3xl transform transition-all duration-1000 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          src={heroLight}
          alt="AWS, LLMs, Agents, Kubernetes, IaC illustration"
          className="mx-auto h-auto w-full object-contain select-none drop-shadow-sm" // Added subtle drop-shadow for depth
          draggable="false"
        />
      </div>

      {/* Tagline */}
      <div
        className={`mt-8 max-w-4xl text-center transform transition-all duration-1000 delay-300 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Typography Update: 
           1. tracking-tight: Makes large text look tighter and more professional.
           2. text-[#1a73e8]: The official "Google Blue" hex.
        */}
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl leading-[1.1]">
          Building <span className="text-[#1a73e8]">cloud-native</span>
          <br className="hidden sm:block" />{" "}
          <span className="text-[#1a73e8]">agentic AI</span> solutions
        </h1>
        
        {/* Optional Subtext: Google pages usually have a small descriptive sentence here. 
            Uncomment if you want to add your "Cloud Engineer" title here briefly.
        */}
        {/* <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
          Architecting scalable infrastructure and intelligent agents on AWS.
        </p> */}
      </div>

      {/* Scroll Indicator:
        A classic UI pattern to tell the user "There is more below".
        Includes a bounce animation.
      */}
      <div
        className={`absolute bottom-8 transform transition-all duration-1000 delay-700 ease-out ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#1a73e8]"
          aria-label="Scroll to experience"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="h-6 w-6 animate-bounce"
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
        </a>
      </div>
    </section>
  );
}