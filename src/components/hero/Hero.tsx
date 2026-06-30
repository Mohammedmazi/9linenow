import Container from "../shared/Container";
import NeuralBackground from "./NeuralBackground";
import DashboardMockup from "./DashboardMockup";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-50"
    >
      <NeuralBackground />

      <Container>
        <div className="grid min-h-[850px] items-center gap-20 lg:grid-cols-[1fr_1fr]">

          {/* Left Side */}

          <div className="max-w-2xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
             
            </p>

            <div
              className="
                mb-8
                inline-flex
                items-center
                rounded-full
                border
                border-emerald-200
                bg-emerald-50
                px-5
                py-2
                text-sm
                font-semibold
                text-emerald-700
              "
            >
              🚀 Accelerating Business Through Technology
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl xl:text-7xl">
              Building the Future with{" "}

              <span className="text-emerald-600">
                Software
              </span>

              ,{" "}

              <span className="text-blue-600">
                AI
              </span>

              {" "} & Digital Innovation
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-gray-600">
              9LineNow empowers businesses with custom software,
              AI-powered solutions, intelligent automation,
              cloud technologies, and digital transformation
              designed to improve productivity, reduce costs,
              and accelerate sustainable growth.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-emerald-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-700
                  hover:shadow-xl
                  hover:shadow-emerald-300
                "
              >
                Start Your Project
              </Link>

              <a
                href="#services"
                className="
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-gray-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300
                  hover:bg-emerald-50
                  hover:text-emerald-700
                "
              >
                Explore Services
              </a>

            </div>

            {/* Stats */}

            <div className="mt-16 flex flex-wrap gap-12">

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  100%
                </h3>

                <p className="mt-2 text-gray-600">
                  Tailor-Made Solutions
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  AI
                </h3>

                <p className="mt-2 text-gray-600">
                  Powered Automation
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gray-900">
                  24/7
                </h3>

                <p className="mt-2 text-gray-600">
                  Continuous Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">
            <DashboardMockup />
          </div>

        </div>
      </Container>
    </section>
  );
}