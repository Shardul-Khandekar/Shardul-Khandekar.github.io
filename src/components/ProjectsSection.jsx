import React from "react";

const PROJECTS = [
  {
    id: "agentic",
    title: "Agentic MCP + Gmail",
    blurb:
      "Agentic AI using MCP to detect intent and compose/send emails via Gmail with guardrails.",
    tags: ["Agents", "MCP", "Gmail"],
    github: "https://github.com/Shardul-Khandekar/agentic-mcp-gmail",
    slot: "r1_left_wide",
  },
  {
    id: "intel",
    title: "Intel Image Classification",
    blurb:
      "CNN-based classifier for Intel image dataset with clean training pipeline and metrics.",
    tags: ["CV", "TensorFlow/PyTorch"],
    github: "https://github.com/Shardul-Khandekar/intel-image-classification",
    slot: "r1_2_right_tall", // spans rows 1–2 (grid), but visually compact
  },
  {
    id: "maps",
    title: "Google Maps Trip Planner",
    blurb:
      "Filters places from Google Maps for a query and exports curated lists to CSV.",
    tags: ["Utility", "Automation"],
    github: "https://github.com/Shardul-Khandekar/google-maps-trip-planner",
    slot: "r2_left_square",
  },
  {
    id: "news",
    title: "News Article Summarization",
    blurb:
      "Seq2Seq model to generate concise summaries of long-form news articles.",
    tags: ["NLP", "Seq2Seq"],
    github: "https://github.com/Shardul-Khandekar/news-article-summarization",
    slot: "r3_left_square",
  },
  {
    id: "tenk",
    title: "10K Filings Q&A",
    blurb:
      "Download SEC 10-K filings and answer questions using Pinecone + LLM; augments with news via Tavily.",
    tags: ["RAG", "Pinecone", "LLM"],
    github:
      "https://github.com/Shardul-Khandekar/ai-engineer-blueprint/tree/main/10k-fillings",
    slot: "r2_3_mid_tall",
  },
  {
    id: "speed",
    title: "Speed Typing (Desktop)",
    blurb:
      "Monkeytype-style typing app with native desktop support and smooth UI.",
    tags: ["App", "Desktop"],
    github: "https://github.com/Shardul-Khandekar/Speed-Typing",
    slot: "r3_4_right_tall", // starts at row 3, spans 2 rows
  },
];

// 12-col grid: left (1–4), mid (5–8), right (9–12)
function slotClass(slot) {
  switch (slot) {
    case "r1_left_wide":
      return "md:col-start-1 md:col-span-8 md:row-start-1 md:row-span-1";
    case "r1_2_right_tall":
      return "md:col-start-9 md:col-span-4 md:row-start-1 md:row-span-2";
    case "r2_left_square":
      return "md:col-start-1 md:col-span-4 md:row-start-2 md:row-span-1";
    case "r3_left_square":
      return "md:col-start-1 md:col-span-4 md:row-start-3 md:row-span-1";
    case "r2_3_mid_tall":
      return "md:col-start-5 md:col-span-4 md:row-start-2 md:row-span-2";
    case "r3_4_right_tall":
      return "md:col-start-9 md:col-span-4 md:row-start-3 md:row-span-1";
    default:
      return "md:col-span-4";
  }
}

function ProjectCard({ p }) {
  const isIntel = p.id === "intel";
  const isSpeed = p.id === "speed";
  const isSquare = p.id === "news" || p.id === "maps";

  return (
    <article
      className={[
        "group relative rounded-2xl border border-slate-200 bg-white",
        "shadow-[0_1px_0_0_rgba(15,23,42,0.02)]",
        "transition hover:shadow-md hover:-translate-y-[1px]",
        // Intel: compact padding to look shorter; others default
        isIntel ? "p-4 sm:p-5" : "p-5 sm:p-6",
        "flex flex-col h-full",
        // ensure square cards are tall enough for GitHub row
        isSquare ? "min-h-[18rem]" : "",
      ].join(" ")}
    >
      <div className="text-xs text-blue-600/80 font-medium tracking-wide mb-2">
        Project
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-snug">
        {p.title}
      </h3>

      <p className={["text-slate-600 leading-relaxed", isIntel ? "mt-1.5" : "mt-2"].join(" ")}>
        {p.blurb}
      </p>

      {/* Visual preview stripe (shorter for Intel, taller for Speed) */}
      <div
        className={[
          "overflow-hidden border border-slate-100 bg-slate-50 rounded-lg",
          isIntel
            ? "mt-3 h-20 sm:h-20"     // ↓ Intel visual height
            : isSpeed
            ? "mt-5 h-40 sm:h-44"     // ↑ Speed visual height
            : "mt-4 h-30 sm:h-32",
        ].join(" ")}
      >
        <div className="h-full w-full grid grid-cols-12">
          <div className="col-span-3 border-r border-slate-100 bg-[linear-gradient(180deg,#e2e8f0_0%,#f8fafc_100%)]" />
          <div className="col-span-9 bg-[linear-gradient(180deg,#f1f5f9_0%,#ffffff_100%)]" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-slate-200 px-2 py-1 text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <a
          href={p.github}
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden>↗</span>
        </a>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-blue-400/0 group-hover:ring-2 group-hover:ring-blue-400/30 transition" />
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-5 md:px-8 mt-32 md:mt-36 mb-32"
    >
      <h2 className="text-[40px] md:text-[56px] leading-none font-extrabold tracking-tight mb-6 text-[#2b62ff]">
        Projects
      </h2>

      <div
        className={[
          "grid gap-4 sm:gap-5",
          "grid-cols-1 sm:grid-cols-2 md:grid-cols-12",
          "auto-rows-[18rem]", // tall enough rows; tall cards span 2 rows cleanly
          "pb-24",
        ].join(" ")}
      >
        {PROJECTS.map((p) => (
          <div key={p.id} className={slotClass(p.slot)}>
            <div className="h-full">
              <ProjectCard p={p} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
