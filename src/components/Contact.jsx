// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center py-16 md:py-20 bg-transparent"
    >
      <div className="flex items-center justify-center gap-8 sm:gap-10">
        {/* Email */}
        <a
          href="mailto:khandekarshardul@gmail.com"
          className="flex items-center justify-center h-14 w-14 rounded-full 
                     border border-transparent bg-transparent text-slate-700
                     hover:text-blue-600 transition"
          aria-label="Email"
          title="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 4h16v16H4z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
        </a>

        {/* LinkedIn (blue) */}
        <a
          href="https://www.linkedin.com/in/shardulkhandekar/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center h-14 w-14 rounded-full 
                     border border-transparent bg-transparent text-[#0077b5] 
                     hover:text-blue-700 transition"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" transform="translate(3 3)" />
            <path d="M0 8h4v12H0zM7 8h3.6v1.9h.05c.5-.95 1.75-1.95 3.6-1.95C18.8 7.95 20 10 20 13.3V20H16.4v-5.7c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H8.7V8H7z" transform="translate(2 1)" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Shardul-Khandekar"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center h-14 w-14 rounded-full 
                     border border-transparent bg-transparent text-slate-800
                     hover:text-blue-600 transition"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.83-.26.83-.58 0-.29-.01-1.06-.02-2.07-3.38.74-4.1-1.63-4.1-1.63-.54-1.37-1.33-1.73-1.33-1.73-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.7-.31-5.54-1.35-5.54-6.01 0-1.33.47-2.42 1.24-3.27-.12-.31-.54-1.56.12-3.25 0 0 1.02-.33 3.34 1.25a11.6 11.6 0 0 1 6.08 0c2.32-1.58 3.34-1.25 3.34-1.25.66 1.69.24 2.94.12 3.25.77.85 1.24 1.94 1.24 3.27 0 4.68-2.85 5.7-5.56 6 .43.37.81 1.09.81 2.2 0 1.59-.01 2.86-.01 3.25 0 .32.22.7.84.58A12 12 0 0 0 12 .5z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}