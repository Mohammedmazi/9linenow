import Container from "../shared/Container";
import NeuralBackground from "./NeuralBackground";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NeuralBackground />

      <Container>
        <div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-indigo-400">
              Software • AI • Automation
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Transforming Businesses Through{" "}
              <span className="text-indigo-500">
                Software
              </span>
              ,{" "}
              <span className="text-cyan-400">
                AI
              </span>{" "}
              & Automation
            </h1>

            <p className="mb-8 max-w-xl text-lg text-zinc-400">
              We help businesses streamline operations,
              improve productivity, and accelerate growth
              through custom software development,
              intelligent automation, and digital
              transformation solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white">
                Start Your Project
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 font-medium text-white">
                Explore Services
              </button>
            </div>
          </div>

          <div>
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}