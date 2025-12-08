// App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceNotes from "./components/ExperienceNotes";
import ProjectsSection from "./components/ProjectsSection";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <ExperienceNotes />
      <ProjectsSection />
      <Publications />
      <Contact />
    </div>
  );
}
