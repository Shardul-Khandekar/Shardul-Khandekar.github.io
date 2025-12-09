import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceNotes from "./components/ExperienceNotes";
import ProjectsSection from "./components/ProjectsSection";
import Publications from "./components/Publications";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

function GeometricShapes() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[10%] -left-[5%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float-slow mix-blend-multiply" />
      <div className="absolute top-[15%] -right-[5%] w-64 h-64 bg-red-400/20 rounded-[3rem] blur-3xl animate-float-medium mix-blend-multiply rotate-12" />
      <div className="absolute top-[45%] left-[2%] w-48 h-48 bg-yellow-400/20 rounded-3xl blur-2xl animate-float-fast mix-blend-multiply -rotate-45" />
      <div className="absolute bottom-[10%] right-[2%] w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-float-slow mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-200/30 rounded-full blur-[100px] opacity-50" />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.5]" 
      />
    </div>
  );
}

/** UPDATED SIDE NAV */
function SideNav() {
  const [activeSection, setActiveSection] = useState("top");

  const SECTIONS = [
    { id: "top", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    // ADDED CREDENTIALS HERE (Mapping to the #education ID we set in Credentials.jsx)
    { id: "education", label: "Credentials" }, 
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Bottom of Page Detection
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contact");
        return;
      }

      // 2. Center Line Detection
      const centerLine = window.scrollY + (window.innerHeight / 2);
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (centerLine >= offsetTop && centerLine < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break; 
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 xl:flex">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            // Added 'group' and padding to make the hover target larger and more reliable
            className="group relative flex items-center justify-end py-2 pl-8 pr-2"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Label (Tooltip) 
               - opacity-0 by default (Invisible)
               - group-hover:opacity-100 (Visible on hover)
               - whitespace-nowrap (Prevents text breaking)
            */}
            <span
              className={`absolute right-8 mr-4 rounded-md bg-slate-900 px-2 py-1 text-[10px] font-medium text-white shadow-lg transition-all duration-300 whitespace-nowrap
                opacity-0 translate-x-2 
                group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {section.label}
            </span>

            {/* The Dot Indicator */}
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-8 bg-[#1a73e8]" : "w-2 bg-slate-300 group-hover:bg-slate-400"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <BackgroundGrid />
      <GeometricShapes />
      <SideNav />

      <div className="relative z-10">
        <Header />
        <main className="flex flex-col gap-0">
          <Hero />
          <ExperienceNotes />
          <ProjectsSection />
          
          {/* Credentials Section */}
          <Credentials />
          
          <Publications />
          <Contact />
        </main>
      </div>
    </div>
  );
}