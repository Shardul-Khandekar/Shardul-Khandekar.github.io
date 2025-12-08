import React from "react";

const PUBLICATIONS = [
  {
    id: "emotion-recognition",
    title: "AI based Emotion Recognition",
    blurb:
      "Implemented back-propagation to classify six human emotions with >90% accuracy.",
    url: "https://www.igi-global.com/chapter/ai-based-emotion-recognition/317492",
    badge: "IGI Global",
  },
  {
    id: "cnn-industry4",
    title:
      "Analysis of Convolution Neural Network Architectures and Their Applications in Industry 4.0",
    blurb:
      "Layered analysis of CNN architectures and computer-vision use cases for Industry 4.0.",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003143505-7/analysis-convolution-neural-network-architectures-applications-industry-4-0-gaurav-bansod-shardul-khandekar-soumya-khurana",
    badge: "Taylor & Francis",
  },
  {
    id: "iot-reliability",
    title:
      "Reliability and availability of IoT devices in resource-constrained environments",
    blurb:
      "Time-complexity and performance of edge devices under security algorithms such as AES-128.",
    url: "https://www.emerald.com/insight/content/doi/10.1108/IJQRM-09-2021-0334/full/html",
    badge: "Emerald",
  },
];

function PubCard({ p }) {
  return (
    <article
      className={[
        "rounded-2xl bg-white border border-slate-200",
        "shadow-[0_1px_0_0_rgba(15,23,42,0.02)]",
        "p-6 flex flex-col gap-3 transition hover:-translate-y-[1px] hover:shadow-md",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-slate-100 ring-1 ring-slate-200 grid place-items-center">
          <span className="text-[11px] font-semibold text-slate-700">PUB</span>
        </div>
        <span className="text-sm font-medium text-slate-500">{p.badge}</span>
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-snug">
        {p.title}
      </h3>

      <p className="text-slate-600 leading-relaxed">“{p.blurb}”</p>

      <div className="pt-2">
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium"
        >
          Read → <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="bg-white mt-0 mb-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <h2 className="text-[40px] md:text-[56px] leading-none font-extrabold tracking-tight mb-8 text-[#2b62ff]">
          Publications
        </h2>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PUBLICATIONS.map((p) => (
            <PubCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}