import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />
      <Hero />

      {/* Placeholders for iterative build */}
      <section id="about" className="border-t border-slate-200 dark:border-slate-800 py-24 px-6">
        <div className="mx-auto max-w-4xl text-slate-700 dark:text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">About</h2>
          <p>We’ll craft this next.</p>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-200 dark:border-slate-800 py-24 px-6">
        <div className="mx-auto max-w-5xl text-slate-700 dark:text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Projects</h2>
          <p>Grid/list cards coming next.</p>
        </div>
      </section>

      <section id="experience" className="border-t border-slate-200 dark:border-slate-800 py-24 px-6">
        <div className="mx-auto max-w-4xl text-slate-700 dark:text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Experience</h2>
          <p>Timeline to follow.</p>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 dark:border-slate-800 py-24 px-6">
        <div className="mx-auto max-w-4xl text-slate-700 dark:text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Contact</h2>
          <p>Links & simple form later.</p>
        </div>
      </section>
    </div>
  );
}