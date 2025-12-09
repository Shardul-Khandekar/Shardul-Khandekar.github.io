import React from "react";

// Google Colors for Skill Categories
const COLORS = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-green-50 text-green-700 border-green-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
};

const SKILLS = {
  "Agentic AI & ML": {
    theme: "purple",
    list: [
      "Generative AI",
      "RAG Pipelines",
      "LangChain",
      "CrewAI",
      "AWS Bedrock",
      "Pinecone",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Computer Vision"
    ]
  },
  "Cloud Native & DevOps": {
    theme: "blue",
    list: [
      "AWS Lambda",
      "CloudFormation",
      "EventBridge",
      "Glue",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "Ansible",
      "Linux"
    ]
  },
  "Full Stack & Data": {
    theme: "green",
    list: [
      "Python",
      "Java",
      "SQL",
      "Neo4j (Graph DB)",
      "GraphQL",
      "React",
      "Node.js",
      "Spring Boot",
      "PostgreSQL",
      "MongoDB"
    ]
  }
};

const EDUCATION = [
  {
    school: "North Carolina State University",
    degree: "Master of Computer Science",
    year: "2023 — 2025",
  },
  {
    school: "Pune Institute of Computer Technology",
    degree: "Bachelor of Engineering in IT",
    year: "2017 — 2021",
  }
];

export default function Credentials() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Credentials
        </h2>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-[#1a73e8]" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* 1. SKILLS */}
        <div className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
           <div className="flex items-center gap-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
             </div>
             <h3 className="text-xl font-bold text-slate-900">Technical Expertise</h3>
           </div>

           <div className="grid gap-8 sm:grid-cols-2">
             {Object.entries(SKILLS).map(([category, data]) => (
               <div key={category}>
                 <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">{category}</h4>
                 <div className="flex flex-wrap gap-2">
                   {data.list.map((skill) => (
                     <span key={skill} className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5 ${COLORS[data.theme]}`}>
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 2. RIGHT COLUMN */}
        <div className="flex flex-col gap-6 lg:col-span-1">
            
            {/* EDUCATION CARD */}
            <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Education</h3>
                </div>

                <div className="space-y-8">
                    {EDUCATION.map((edu, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-slate-100">
                        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-white bg-slate-300 ring-4 ring-white"></div>
                        <h4 className="font-bold text-slate-900 leading-tight">{edu.school}</h4>
                        <p className="text-sm font-medium text-slate-600 mt-1">{edu.degree}</p>
                        <p className="mt-1 text-xs font-bold text-slate-400 uppercase tracking-wide">{edu.year}</p>
                    </div>
                    ))}
                </div>
            </div>

            {/* UPDATED: CLICKABLE CERTIFICATION CARD */}
            <a 
              href="https://www.credly.com/badges/4dd122ed-e8af-41eb-8916-de63366bb870/public_url"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 cursor-pointer"
            >
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition-all duration-500 group-hover:bg-blue-400/30"></div>
                
                <div className="relative z-10 flex items-start justify-between">
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Active Certification</div>
                        <h3 className="text-lg font-bold leading-snug">AWS Certified <br/><span className="text-[#4DB2FF]">AI Practitioner</span></h3>
                    </div>
                    {/* Icon changes color on hover */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 transition-colors group-hover:bg-white/20 group-hover:border-white/30">
                         <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                    </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold text-blue-200 ring-1 ring-inset ring-blue-500/20">
                            Early Adopter
                        </span>
                    </div>
                    {/* External Link Arrow (appears/moves on hover) */}
                    <svg className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:text-white group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            </a>

        </div>

      </div>
    </section>
  );
}