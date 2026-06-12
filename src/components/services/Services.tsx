export default function Services() {
  const services = [
    {
      title: "Software Development",
      description:
        "Custom software tailored to your business requirements.",
    },
    {
      title: "Web Development",
      description:
        "Modern websites optimized for performance and SEO.",
    },
    {
      title: "AI & Automation",
      description:
        "Reduce repetitive work through intelligent automation.",
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform mobile experiences for modern businesses.",
    },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-white">
          Our Services
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-400">
          We build software solutions that help businesses
          operate smarter and grow faster.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                transition
                hover:-translate-y-2
                hover:border-indigo-500/40
              "
            >
              <h3 className="mb-4 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}