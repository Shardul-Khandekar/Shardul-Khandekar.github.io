import React, { useMemo, useState, useEffect } from "react";

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

function NavItem({ job, active, onClick, onHover, onLeave }) {
  return (
    <button
      type="button"
      onClick={() => onClick(job.id)}
      onMouseEnter={() => onHover(job.id)}
      onMouseLeave={onLeave}
      className={`group relative flex w-full flex-col items-start rounded-r-full py-4 pl-6 pr-4 text-left transition-all duration-200 focus:outline-none ${
        active ? "bg-blue-50/50" : "hover:bg-slate-50"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-md bg-[#1a73e8]" />
      )}
      <span
        className={`text-sm font-bold tracking-tight transition-colors ${
          active ? "text-[#1a73e8]" : "text-slate-600 group-hover:text-slate-900"
        }`}
      >
        {job.company}
      </span>
      <span
        className={`mt-1 text-xs transition-colors ${
          active ? "text-blue-600/80" : "text-slate-400"
        }`}
      >
        {job.title}
      </span>
    </button>
  );
}

function DetailView({ job }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timer);
  }, [job.id]);

  if (!job) return null;

  return (
    <div
      className={`relative h-full w-full transition-opacity duration-300 ease-out ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="mb-6 flex flex-col items-start justify-between border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            {job.title}
          </h3>
          <p className="mt-1 text-base font-medium text-slate-500">
            {job.company}
          </p>
        </div>
        <div className="mt-2 flex flex-col items-end sm:mt-0">
          <span className="text-sm font-medium text-slate-900">
            {job.period}
          </span>
          <span className="text-xs text-slate-400">{job.location}</span>
        </div>
      </div>

      <div className="space-y-6">
        <ul className="space-y-3">
          {job.bullets.map((b, i) => (
            <li key={i} className="group flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a73e8] shadow-sm transition-transform group-hover:scale-125" />
              <span className="text-[15px] leading-relaxed text-slate-600">
                {b}
              </span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState(JOBS[0].id);
  const [hoverId, setHoverId] = useState(null);
  const activeJob = useMemo(
    () => JOBS.find((j) => j.id === selectedId),
    [selectedId]
  );

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Work Experience
        </h2>
        <div className="mt-4 h-1.5 w-20 rounded-full bg-[#1a73e8]" />
      </div>

      {/* THE FIX:
          1. 'grid': Replaces flexbox.
          2. 'md:grid-cols-[20rem_1fr]': Forces two columns. The left is ALWAYS 20rem. The right is ALWAYS "the rest of the space" (1fr).
          3. 'min-h-[600px]': Keeps the height stable.
      */}
     <div className="w-full h-[600px] overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5 grid grid-cols-1 md:grid-cols-[20rem_1fr]">
        
        {/* Left Sidebar */}
        <div className="h-full overflow-y-auto border-b border-slate-100 bg-white py-4 md:border-b-0 md:border-r md:py-8">
          <div className="px-6 mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Timeline
            </h3>
          </div>
          <div className="space-y-1 pr-4">
            {JOBS.map((job) => (
              <NavItem
                key={job.id}
                job={job}
                active={selectedId === job.id}
                onClick={setSelectedId}
                onHover={setHoverId}
                onLeave={() => setHoverId(null)}
              />
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        {/* Note: In Grid, this naturally fills the 1fr column space */}
        <div className="h-full overflow-y-auto bg-white p-6 md:p-12">
          <DetailView job={activeJob} />
        </div>
      </div>
    </section>
  );
}