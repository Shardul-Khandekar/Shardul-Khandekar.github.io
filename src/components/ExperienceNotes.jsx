import React, { useMemo, useState } from "react";

/** Data */
const JOBS = [
  {
    id: "theorem-ce",
    title: "Cloud Engineer",
    company: "Theoremlabs",
    location: "Raleigh, NC",
    period: "May 2025 — Present",
    bullets: [
      "Engineered natural language → SQL agentic AI workflow on AWS Bedrock; reduced production support resolution time by 65%.",
      "Built a serverless ML-powered document classifier with Amazon Textract to parse contracts from S3; accelerated enterprise client onboarding by 70%.",
      "Designed AWS Glue ETL orchestration between Advice Pay and Salesforce to process 10k+ PDF records daily.",
    ],
    tech: ["AWS Bedrock", "Textract", "Glue", "S3", "Salesforce", "Serverless"],
  },
  {
    id: "theorem-intern",
    title: "Cloud Engineer Intern",
    company: "Theoremlabs",
    location: "Raleigh, NC",
    period: "May 2024 — April 2025",
    bullets: [
      "Implemented event-driven architecture with EventBridge, SQS, and Lambda to handle 100k+ commission transactions daily.",
      "Automated IaC deployments using AWS CloudFormation to eliminate manual console configuration.",
      "Developed a GenAI-powered JIRA automation bot integrated with Amazon Q Business.",
    ],
    tech: ["EventBridge", "SQS", "Lambda", "CloudFormation", "Q Business"],
  },
  {
    id: "ncsu-ra",
    title: "Research Assistant",
    company: "North Carolina State University",
    location: "Raleigh, NC",
    period: "May 2024 — July 2024",
    bullets: [
      "Modeled Neo4j graph database for interconnected product transactions, boosting query performance by 75%.",
      "Architected GraphQL APIs to reduce latency by 60% for retrieving customer behavior insights.",
    ],
    tech: ["Neo4j", "GraphQL"],
  },
  {
    id: "hsbc-dev",
    title: "Software Developer",
    company: "HSBC",
    location: "Pune, India",
    period: "August 2021 — July 2023",
    bullets: [
      "Engineered a high-throughput, asynchronous backend using Spring Integration and JMS, achieving sub-millisecond EOD trade settlement times.",
      "Built CI/CD pipelines in Jenkins to automate deployment of 80+ microservices, reducing manual effort by 95%.",
      "Created a Risk-Control bot to reduce SAST/DAST vulnerabilities by 20% and improve remediation visibility.",
      "Automated 150+ UNIX patching tasks using Ansible, saving 20+ hours per month.",
    ],
    tech: ["Spring Integration", "JMS", "Jenkins", "Ansible", "SAST/DAST"],
  },
  {
    id: "pict-intern",
    title: "Research Intern",
    company: "PICT",
    location: "Pune, India",
    period: "February 2021 — August 2021",
    bullets: [
      "Developed OpenCV pipelines augmenting 4,000+ images per class, increasing dataset volume by 25%.",
      "Trained a ResNet-50 model with TensorFlow, achieving 92% accuracy on digit recognition.",
    ],
    tech: ["OpenCV", "TensorFlow", "ResNet-50"],
  },
  {
    id: "tss-intern",
    title: "Software Development Intern",
    company: "Tech Smart System",
    location: "Pune, India",
    period: "June 2019 — July 2019",
    bullets: [
      "Developed a PDF parser to accelerate document processing by 60% for 2,000+ records.",
      "Collaborated in Agile sprints using JIRA and Confluence for documentation.",
    ],
    tech: ["Python", "PDF parsing", "JIRA", "Confluence"],
  },
];

/** Left Row */
function Row({ job, active, pinned, onHover, onLeave, onClick }) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(job.id)}
      onMouseLeave={onLeave}
      onClick={() => onClick(job.id)}
      className={[
        "w-full text-left px-4 py-3 border-b border-slate-100",
        "transition-colors",
        active ? "bg-blue-50" : "hover:bg-slate-50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 rounded-md",
      ].join(" ")}
      aria-pressed={pinned}
    >
      <div className="flex items-center gap-2">
        {pinned && (
          <span className="text-slate-400" aria-hidden>
            📌
          </span>
        )}
        <div>
          <div className="text-base font-semibold text-slate-900">
            {job.title}
          </div>
          <div className="text-xs text-slate-500 mt-0.5">
            {job.company} • {job.period}
          </div>
        </div>
      </div>
    </button>
  );
}

/** Right Detail */
function Detail({ job }) {
  if (!job) return null;

  return (
    <>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        {job.title}
      </h3>

      <ul className="space-y-2 mb-5">
        {job.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-slate-800 leading-relaxed">
            <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {job.tech.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-slate-200 px-2 py-1 text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

/** Main Experience Section */
export default function ExperienceSection() {
  const [pinnedId, setPinnedId] = useState(JOBS[0].id);
  const [hoverId, setHoverId] = useState(null);

  const activeId = hoverId ?? pinnedId;
  const activeJob = useMemo(
    () => JOBS.find((j) => j.id === activeId),
    [activeId]
  );

  const handleHover = (id) => setHoverId(id);
  const clearHover = () => setHoverId(null);
  const handlePin = (id) => setPinnedId(id);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 md:px-8">
      {/* Heading */}
      <h2 className="text-[40px] md:text-[56px] leading-none font-extrabold tracking-tight mt-28 mb-6">
        <span className="text-slate-900">Work </span>
        <span className="text-[#2b62ff]">Experience</span>
      </h2>

      {/* Container */}
      <div className="rounded-2xl border border-slate-100 bg-white">
        <div className="flex">
          {/* Left list (slightly wider + extra right padding to push separator) */}
          <div className="w-[400px] pr-4 shrink-0 rounded-l-2xl overflow-hidden">
            {JOBS.map((job) => (
              <Row
                key={job.id}
                job={job}
                active={job.id === activeId}
                pinned={job.id === pinnedId}
                onHover={handleHover}
                onLeave={clearHover}
                onClick={handlePin}
              />
            ))}
            <div className="px-4 py-3 text-xs text-slate-400">
              Hover to preview • Click to pin
            </div>
          </div>

          {/* Single thin separator (now slightly to the right due to pr-4 above) */}
          <div className="w-px bg-slate-100" aria-hidden />

          {/* Right panel (no inner card) */}
          <div className="flex-1 p-4 md:p-6 relative">
            <Detail job={activeJob} />
            {/* Location anchored bottom-right of the single box */}
            {activeJob && (
              <div className="absolute right-6 bottom-5 text-sm text-slate-400">
                {activeJob.location}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}