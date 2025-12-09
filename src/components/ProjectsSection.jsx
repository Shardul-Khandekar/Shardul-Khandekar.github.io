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
    theme: "blue",
  },
  {
    id: "intel",
    title: "Intel Image Classification",
    blurb:
      "CNN-based classifier for Intel image dataset with clean training pipeline.",
    tags: ["CV", "PyTorch"],
    github: "https://github.com/Shardul-Khandekar/intel-image-classification",
    slot: "r1_2_right_tall",
    theme: "emerald",
  },
  {
    id: "maps",
    title: "Maps Trip Planner",
    blurb:
      "Filters places from Google Maps for a query and exports curated lists to CSV.",
    tags: ["Utility", "Automation"],
    github: "https://github.com/Shardul-Khandekar/google-maps-trip-planner",
    slot: "r2_left_square",
    theme: "amber",
  },
  {
    id: "news",
    title: "News Summarization",
    blurb: "Seq2Seq model to generate concise summaries of long-form articles.",
    tags: ["NLP", "Seq2Seq"],
    github: "https://github.com/Shardul-Khandekar/news-article-summarization",
    slot: "r3_left_square",
    theme: "purple",
  },
  {
    id: "tenk",
    title: "10K Filings Q&A",
    blurb:
      "RAG system using Pinecone + LLM to analyze SEC 10-K filings and answer financial queries.",
    tags: ["RAG", "Pinecone"],
    github:
      "https://github.com/Shardul-Khandekar/ai-engineer-blueprint/tree/main/10k-fillings",
    slot: "r2_3_mid_tall",
    theme: "slate",
  },
  {
    id: "speed",
    title: "Speed Typing",
    blurb:
      "Monkeytype-style typing app with native desktop support and smooth UI.",
    tags: ["App", "Desktop"],
    github: "https://github.com/Shardul-Khandekar/Speed-Typing",
    slot: "r3_4_right_tall",
    theme: "rose",
  },
];

// Layout Logic - UPDATED for Granular Grid
// Basic Unit = 10rem. 
// Standard Card = Span 2 units (20rem).
// 1.5x Card = Span 3 units (30rem).
function slotClass(slot) {
  switch (slot) {
    case "r1_left_wide":
      // Top Left: Starts Row 1, Spans 2 units (Standard Height)
      return "md:col-start-1 md:col-span-8 md:row-start-1 md:row-span-2";
      
    case "r1_2_right_tall": // INTEL CARD
      // Top Right: Starts Row 1, Spans 3 units (This creates the 1.5x height)
      return "md:col-start-9 md:col-span-4 md:row-start-1 md:row-span-3";
      
    case "r2_left_square":
      // Mid Left: Starts Row 3 (after top), Spans 2 units
      return "md:col-start-1 md:col-span-4 md:row-start-3 md:row-span-2";
      
    case "r2_3_mid_tall":
      // Mid Center: Starts Row 3, Spans 4 units (Double Height)
      return "md:col-start-5 md:col-span-4 md:row-start-3 md:row-span-4";
      
    case "r3_left_square":
      // Bottom Left: Starts Row 5, Spans 2 units
      return "md:col-start-1 md:col-span-4 md:row-start-5 md:row-span-2";
      
    case "r3_4_right_tall": // SPEED TYPING
      // Bottom Right: Starts Row 4 (Tucks immediately under Intel's 3-unit span)
      return "md:col-start-9 md:col-span-4 md:row-start-4 md:row-span-2";
      
    default:
      return "md:col-span-4";
  }
}

/** * Custom Minimalist Visuals (Unchanged) */
function ProjectVisual({ id, theme }) {
  const bgColors = {
    blue: "bg-blue-50 text-blue-500",
    emerald: "bg-emerald-50 text-emerald-500",
    amber: "bg-amber-50 text-amber-500",
    purple: "bg-purple-50 text-purple-500",
    slate: "bg-slate-50 text-slate-500",
    rose: "bg-rose-50 text-rose-500",
  };

  const styleClass = `w-full h-full flex items-center justify-center overflow-hidden ${bgColors[theme] || bgColors.slate}`;

  switch (id) {
    case "agentic":
      return (
        <div className={styleClass}>
          <div className="relative w-3/4 h-24 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col p-3 gap-2 translate-y-2">
             <div className="flex gap-2 items-center border-b border-slate-50 pb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">🤖</div>
                <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
             </div>
             <div className="space-y-1">
                <div className="h-1.5 w-full bg-slate-50 rounded-full"></div>
                <div className="h-1.5 w-2/3 bg-slate-50 rounded-full"></div>
             </div>
          </div>
        </div>
      );
    case "intel":
      return (
        <div className={styleClass}>
          <div className="grid grid-cols-2 gap-2 p-4 opacity-80 transform rotate-3">
             <div className="w-12 h-12 rounded-lg bg-emerald-200/50"></div>
             <div className="w-12 h-12 rounded-lg bg-emerald-300/50"></div>
             <div className="w-12 h-12 rounded-lg bg-emerald-300/50"></div>
             <div className="w-12 h-12 rounded-lg bg-emerald-400/50"></div>
          </div>
        </div>
      );
    case "maps":
      return (
        <div className={styleClass}>
          <div className="relative w-24 h-24">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full opacity-60">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500 rounded-full ring-4 ring-white shadow-md"></div>
          </div>
        </div>
      );
    case "tenk":
       return (
        <div className={styleClass}>
           <div className="relative w-20 h-28 bg-white border border-slate-200 shadow-sm rounded-md p-2 flex flex-col gap-1.5 transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="w-8 h-1 bg-slate-200 rounded-full mb-1"></div>
              <div className="w-full h-1 bg-slate-100 rounded-full"></div>
              <div className="w-full h-1 bg-slate-100 rounded-full"></div>
              <div className="w-2/3 h-1 bg-slate-100 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 bg-slate-800 text-white p-1.5 rounded-full shadow-md">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
           </div>
        </div>
       );
     case "speed":
        return (
          <div className={styleClass}>
             <div className="flex gap-1 flex-wrap justify-center w-32 opacity-70">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded bg-white border border-rose-100 shadow-sm flex items-center justify-center text-[8px] font-bold text-rose-300">
                    {["A","S","D","F","J","K"][i]}
                  </div>
                ))}
             </div>
          </div>
        );
    default:
      return (
        <div className={styleClass}>
           <div className="space-y-2 w-1/2 opacity-60">
              <div className="h-2 bg-purple-200 rounded w-full"></div>
              <div className="h-2 bg-purple-200 rounded w-5/6"></div>
              <div className="h-2 bg-purple-200 rounded w-4/6"></div>
           </div>
        </div>
      );
  }
}

function ProjectCard({ p }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="h-48 shrink-0 overflow-hidden border-b border-slate-100">
        <ProjectVisual id={p.id} theme={p.theme} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
            <div>
                 <div className="mb-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#1a73e8] transition-colors">
                  {p.title}
                </h3>
            </div>
            
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 -mr-2 -mt-2 flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-900"
              aria-label="View on GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {p.blurb}
        </p>
      </div>
      
      <a href={p.github} target="_blank" rel="noreferrer" className="absolute inset-0 z-0">
          <span className="sr-only">View {p.title}</span>
      </a>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Projects
        </h2>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-[#1a73e8]" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[10rem]">
        {PROJECTS.map((p) => (
          <div key={p.id} className={slotClass(p.slot)}>
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
    </section>
  );
}