import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceNotes from "./components/ExperienceNotes";
import ProjectsSection from "./components/ProjectsSection";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

/** * NEW COMPONENT: GeometricShapes
 * Renders Google-style primitives with a "Tech Glass" material.
 * They are positioned absolutely on the sides to fill the empty space.
 */
function GeometricShapes() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* 1. Top Left - The "Google Blue" Circle */}
      {/* A perfect circle, blurred heavily to look like a distant planet/cloud */}
      <div className="absolute top-[10%] -left-[5%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float-slow mix-blend-multiply" />
      
      {/* 2. Top Right - The "Google Red" Squircle (Rounded Square) */}
      {/* Positioned to balance the Hero text */}
      <div className="absolute top-[15%] -right-[5%] w-64 h-64 bg-red-400/20 rounded-[3rem] blur-3xl animate-float-medium mix-blend-multiply rotate-12" />

      {/* 3. Middle Left - The "Google Yellow" Triangle (Abstract) */}
      {/* We use a clip-path or just a rotated square to simulate geometry */}
      <div className="absolute top-[45%] left-[2%] w-48 h-48 bg-yellow-400/20 rounded-3xl blur-2xl animate-float-fast mix-blend-multiply -rotate-45" />

      {/* 4. Bottom Right - The "Google Green" Pill */}
      {/* Fills the space near contact/projects */}
      <div className="absolute bottom-[10%] right-[2%] w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-float-slow mix-blend-multiply" />
      
      {/* 5. Center Deep - A subtle anchor */}
      {/* Very faint purple to add depth to the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-200/30 rounded-full blur-[100px] opacity-50" />
      
    </div>
  );
}

/** * UPDATED BackgroundGrid 
 * We removed the old "Glow" divs because GeometricShapes replaces them.
 */
function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.5]" 
      />
    </div>
  );
}

function SideNav() {
  const [activeSection, setActiveSection] = useState("top");
  const SECTIONS = [
    { id: "top", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${section.label}`}
          >
            <span
              className={`absolute right-8 mr-2 rounded-md bg-slate-900 px-2 py-1 text-[10px] font-medium text-white shadow-lg transition-all duration-300 ${
                isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? "w-8 bg-[#1a73e8]" : "w-2 bg-slate-300 hover:bg-slate-400"
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
      
      {/* 1. The Blueprint Grid */}
      <BackgroundGrid />
      
      {/* 2. The New Google Shapes (Glassmorphism) */}
      <GeometricShapes />
      
      {/* 3. Navigation */}
      <SideNav />

      <div className="relative z-10">
        <Header />
        <main className="flex flex-col gap-0">
          <Hero />
          <ExperienceNotes />
          <ProjectsSection />
          <Publications />
          <Contact />
        </main>
      </div>
    </div>
  );
}