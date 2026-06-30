import Container from "../shared/Container";

const features = [
  {
    title: "Custom Solutions",
    description:
      "Every solution is tailored to your business requirements, workflows, and long-term goals.",
    icon: "⚙️",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI-Driven Innovation",
    description:
      "Leverage modern AI technologies to automate processes, improve productivity, and accelerate growth.",
    icon: "🤖",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Scalable Architecture",
    description:
      "Engineered for performance, security, and future expansion as your business evolves.",
    icon: "📈",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We don't just build software—we continuously support, improve, and grow your digital ecosystem.",
    icon: "🤝",
    color: "from-orange-500 to-amber-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28">
      <Container>
        {/* Header */}

        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Why Choose 9LineNow
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Technology That Creates Real Business Value
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We combine world-class software engineering, Artificial
            Intelligence, automation, and cloud technologies to build
            solutions that deliver measurable business impact—not just
            software.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-lg
                shadow-gray-200/60
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-200
                hover:shadow-2xl
              "
            >
              {/* Icon */}

              <div
                className={`
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${feature.color}
                  text-3xl
                  shadow-lg
                `}
              >
                {feature.icon}
              </div>

              {/* Title */}

              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="leading-8 text-gray-600">
                {feature.description}
              </p>

              {/* Bottom Accent */}

              <div className="mt-8 h-1 w-14 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-28" />
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-10 text-center text-white shadow-2xl">
          <h3 className="mb-4 text-3xl font-bold">
            More Than a Development Company
          </h3>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-emerald-50">
            We become your long-term technology partner, helping you
            innovate, automate, and scale your business with modern
            digital solutions designed for the future.
          </p>
        </div>
      </Container>
    </section>
  );
}