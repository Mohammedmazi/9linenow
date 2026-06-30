import Container from "../shared/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your business goals, existing workflows, and the challenges you're looking to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team designs intuitive user experiences, scalable architecture, and a clear implementation roadmap.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Using modern technologies, we build secure, scalable software, AI systems, and automation solutions.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "After rigorous testing, we launch your solution with monitoring, optimization, and ongoing support.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-32">
      <Container>

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Our Process
          </p>

          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            How We Transform Ideas Into Digital Products
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Every successful solution follows a proven process—from
            discovery and planning to development, deployment, and
            continuous improvement.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-300
                hover:shadow-xl
              "
            >

              {/* Number */}

              <div className="mb-6 text-6xl font-black text-emerald-100 transition group-hover:text-emerald-200">
                {step.number}
              </div>

              {/* Line */}

              <div className="mb-6 h-1 w-16 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-24" />

              {/* Title */}

              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}

              <p className="leading-7 text-gray-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}