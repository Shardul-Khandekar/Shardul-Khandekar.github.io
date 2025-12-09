import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 bg-transparent"
    >
      {/* Google Touch: A subtle "Label" that acts as a quiet invitation.
        Uses the "Google Blue" we established earlier.
      */}
      <p className="mb-8 text-sm font-semibold tracking-widest text-[#1a73e8] uppercase opacity-90">
        Get in Touch
      </p>

      {/* The "Floating Dock" Container 
        - High rounded corners (rounded-full)
        - Soft, diffuse shadow (shadow-xl)
        - White background to pop against any page bg
      */}
      <div className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
        
        {/* 1. Email (Gmail Style) */}
        <a
          href="mailto:khandekarshardul@gmail.com"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-50"
          aria-label="Email"
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-slate-500 transition-colors group-hover:text-[#EA4335]" // Google Red
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>

        {/* Divider - subtle separation */}
        <div className="h-6 w-px bg-slate-200" aria-hidden="true" />

        {/* 2. LinkedIn (Official Brand Blue) */}
        <a
          href="https://www.linkedin.com/in/shardulkhandekar/"
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-50"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-slate-500 transition-colors group-hover:text-[#0a66c2]" // LinkedIn Blue
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200" aria-hidden="true" />

        {/* 3. GitHub (Clean Black/Slate) */}
        <a
          href="https://github.com/Shardul-Khandekar"
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-slate-100"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-slate-500 transition-colors group-hover:text-[#333]" // GitHub Dark
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      {/* Optional: Copyright / Footer text. 
        Google often places this discreetly at the very bottom.
      */}
      <div className="mt-8 text-xs text-slate-400">
        © {new Date().getFullYear()} Shardul Khandekar • Built with React & Tailwind
      </div>
    </section>
  );
}