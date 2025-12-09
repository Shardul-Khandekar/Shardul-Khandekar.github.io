import React from "react";

// 1. Google's Material Design Color Tokens
// We use a mapping to ensure consistent color application.
const GOOGLE_COLORS = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", ring: "ring-blue-600/20", icon: "text-blue-600" },
  green: { bg: "bg-green-50", text: "text-green-700", ring: "ring-green-600/20", icon: "text-green-600" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-800", ring: "ring-yellow-600/20", icon: "text-yellow-600" },
  red: { bg: "bg-red-50", text: "text-red-700", ring: "ring-red-600/20", icon: "text-red-600" },
};

const PUBLICATIONS = [
  {
    id: "emotion",
    title: "AI based Emotion Recognition",
    venue: "IGI Global",
    year: "2023",
    blurb: "Back-propagation classifier recognizing six human emotions with >90% accuracy.",
    url: "https://www.igi-global.com/chapter/ai-based-emotion-recognition/317492",
    // Assign a specific Google color theme to each card
    theme: "blue",
  },
  {
    id: "cnn",
    title: "Analysis of Convolution Neural Network Architectures in Industry 4.0",
    venue: "Taylor & Francis",
    year: "2021",
    blurb: "Layered survey of CNN architectures and computer-vision use cases for Industry 4.0.",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003143505-7/analysis-convolution-neural-network-architectures-applications-industry-4-0-gaurav-bansod-shardul-khandekar-soumya-khurana",
    theme: "green",
  },
  {
    id: "iot",
    title: "Reliability & Availability of IoT Devices in Resource-Constrained Environments",
    venue: "Emerald (IJQRM)",
    year: "2022",
    blurb: "Complexity and performance evaluation of edge devices under AES-128 cryptographic workloads.",
    url: "https://www.emerald.com/insight/content/doi/10.1108/IJQRM-09-2021-0334/full/html",
    theme: "yellow",
  },
  {
    id: "pulse",
    title: "Computer Vision-Based Contactless Cardiac Pulse Estimation",
    venue: "Springer",
    year: "2024",
    blurb: "rPPG-based pulse monitoring using webcam input; 96–98% accuracy across demographic conditions.",
    url: "#",
    theme: "red",
  },
];

function PubCard({ p }) {
  const colors = GOOGLE_COLORS[p.theme];

  return (
    // 2. Card Structure: Elevated Surface
    // Replaced borders with soft shadow and deeper rounded corners (rounded-3xl).
    // Added a subtle ring on hover for the "Material" focus state.
    <div className={`group relative flex flex-col h-full rounded-3xl bg-white p-6 shadow-sm shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 ring-1 ring-inset ring-slate-100 hover:ring-2 ${colors.ring}`}>
      
      {/* Header: Venue & Year Chips */}
      <div className="mb-4 flex items-center gap-2">
        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${colors.bg} ${colors.text} ring-1 ring-inset ${colors.ring}`}>
          {p.venue}
        </span>
        <span className="text-sm text-slate-400">•</span>
        <span className="text-sm font-medium text-slate-500">{p.year}</span>
      </div>

      {/* Content: Title & Blurb */}
      <div className="flex-1">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 leading-snug group-hover:text-[#1a73e8] transition-colors">
          {p.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {p.blurb}
        </p>
      </div>

      {/* Footer: Call to Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
          {/* A small Google-style icon for "Publication" */}
          <svg className={`h-5 w-5 ${colors.icon} opacity-80`} fill="currentColor" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"/></svg>
          <span>Publication</span>
        </div>

        {/* Clear "Open" button */}
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 inline-flex items-center justify-center rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-[#1a73e8] transition-colors"
          aria-label={`Read ${p.title}`}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      
       {/* Invisible full-card link for better UX */}
      <a href={p.url} target="_blank" rel="noreferrer" className="absolute inset-0 z-0 rounded-3xl">
          <span className="sr-only">Read {p.title}</span>
      </a>
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header with Google Blue Accent */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Publications
        </h2>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-[#1a73e8]" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[18rem]">
        {PUBLICATIONS.map((p) => (
          <PubCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}