import React from "react";

const PUBLICATIONS = [
  {
    id: "emotion",
    title: "AI based Emotion Recognition",
    venue: "IGI Global",
    year: "2023",
    blurb:
      "Back-propagation classifier recognizing six human emotions with >90% accuracy.",
    url: "https://www.igi-global.com/chapter/ai-based-emotion-recognition/317492",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    id: "cnn",
    title:
      "Analysis of Convolution Neural Network Architectures and Their Applications in Industry 4.0",
    venue: "Taylor & Francis",
    year: "2021",
    blurb:
      "Layered survey of CNN architectures and computer-vision use cases for Industry 4.0.",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003143505-7/analysis-convolution-neural-network-architectures-applications-industry-4-0-gaurav-bansod-shardul-khandekar-soumya-khurana",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "iot",
    title:
      "Reliability & Availability of IoT Devices in Resource-Constrained Environments",
    venue: "Emerald (IJQRM)",
    year: "2022",
    blurb:
      "Complexity and performance evaluation of edge devices under AES-128 cryptographic workloads.",
    url: "https://www.emerald.com/insight/content/doi/10.1108/IJQRM-09-2021-0334/full/html",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "pulse",
    title: "Computer Vision-Based Contactless Cardiac Pulse Estimation",
    venue: "Springer",
    year: "2024",
    blurb:
      "rPPG-based pulse monitoring using webcam input; 96–98% accuracy across demographic conditions.",
    url: "#",
    accent: "from-orange-400 to-amber-500",
  },
];

function PubCard({ p }) {
  return (
    <div
      className={[
        "group relative rounded-2xl border border-slate-200 bg-white",
        "shadow-[0_1px_0_0_rgba(15,23,42,0.02)]",
        "transition hover:shadow-md hover:-translate-y-[1px]",
        "p-4 sm:p-5 flex flex-col justify-between h-[14rem]",
      ].join(" ")}
    >
      {/* Accent bar */}
      <div
        className={[
          "absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r",
          p.accent,
        ].join(" ")}
      />

      {/* Content */}
      <div>
        <div className="flex items-center gap-2 text-xs mb-1.5">
          <span className="font-medium text-slate-600 px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50">
            {p.venue}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">{p.year}</span>
        </div>

        <h3 className="text-[15px] font-semibold text-slate-900 leading-snug line-clamp-2">
          {p.title}
        </h3>
        <p className="mt-1 text-[13px] text-slate-600 leading-relaxed line-clamp-3">
          {p.blurb}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] text-slate-600">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-slate-50 font-semibold text-[10px] text-slate-700">
            PUB
          </span>
          <span>Read</span>
        </div>

        {/* Only arrow is clickable */}
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full 
                     border border-slate-200 text-slate-500 
                     group-hover:text-blue-600 group-hover:border-blue-300 transition"
          aria-label={`Open ${p.title}`}
          title="Open publication"
        >
          ↗
        </a>
      </div>

      {/* Hover ring */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-blue-400/0 group-hover:ring-2 group-hover:ring-blue-400/30 transition" />
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="max-w-6xl mx-auto px-5 md:px-8 mt-24 md:mt-28">
      <h2 className="text-[40px] md:text-[56px] leading-none font-extrabold tracking-tight mb-6 text-[#2b62ff]">
        Publications
      </h2>

      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
        {PUBLICATIONS.map((p) => (
          <PubCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
