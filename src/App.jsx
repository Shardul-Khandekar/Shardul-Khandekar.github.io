// App.jsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceNotes from "./components/ExperienceNotes";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <ExperienceNotes />
      <ProjectsSection />
    </div>
  );
}
