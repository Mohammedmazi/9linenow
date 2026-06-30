import Container from "../shared/Container";

const services = [
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Custom software engineered to solve complex business challenges with scalability and performance in mind.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications optimized for speed, SEO, and user experience.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Leverage artificial intelligence and intelligent automation to improve productivity and reduce manual work.",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile experiences built for Android and iOS using modern development frameworks.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-32"
    >
      <Container>

        {/* Section Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Our Services
          </p>

          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            Technology Solutions Built For Growth
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We design and develop modern digital solutions that help
            businesses automate operations, improve customer experiences,
            and accelerate growth.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-300
                hover:shadow-2xl
              "
            >

              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-3xl">
                {service.icon}
              </div>

              {/* Accent */}

              <div className="mb-6 h-1 w-14 rounded-full bg-emerald-500 transition-all duration-500 group-hover:w-24" />

              {/* Title */}

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}

              <p className="leading-7 text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}