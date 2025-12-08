export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold text-slate-900">
          Shardul Khandekar
        </a>
        <nav className="flex items-center gap-8 text-slate-600">
          <a href="#experience"   className="hover:text-slate-900 transition">Experience</a>
          <a href="#projects"     className="hover:text-slate-900 transition">Projects</a>
          <a href="#publications" className="hover:text-slate-900 transition">Publications</a>
          <a href="#contact"      className="hover:text-slate-900 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
