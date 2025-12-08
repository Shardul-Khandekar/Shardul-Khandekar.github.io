import heroLight from "../assets/hero-light.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[calc(100dvh-64px)] flex flex-col items-center justify-center px-6 bg-white"
    >
      {/* Illustration */}
      <div className="w-full max-w-4xl mx-auto mb-10 overflow-hidden">
        <img
          src={heroLight}
          alt="AWS, LLMs, Agents, Kubernetes, IaC illustration"
          className="w-full object-contain select-none"
          draggable="false"
        />
      </div>

      {/* Tagline */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-semibold text-slate-900 leading-tight">
          Building <span className="text-blue-600">cloud-native</span><br />
          <span className="text-blue-600">agentic AI</span> solutions
        </h1>
      </div>
    </section>
  );
}