import Container from "../shared/Container";
import {
  BrainCircuit,
  Users,
  BarChart3,
  Boxes,
  Workflow,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: BrainCircuit,
    title: "AI Assistants",
    description:
      "Private AI assistants trained on your business knowledge, documents, and workflows.",
  },
  {
    icon: Users,
    title: "Customer Portals",
    description:
      "Secure self-service platforms where customers can manage projects, invoices, and support.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description:
      "Interactive dashboards with live KPIs, reporting, forecasting, and business intelligence.",
  },
  {
    icon: Boxes,
    title: "Inventory Systems",
    description:
      "Manage products, warehouses, suppliers, and inventory through one centralized platform.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes using AI and intelligent workflow orchestration.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform Android and iOS applications built for performance and scalability.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-32"
    >
      <Container>

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Digital Solutions
          </p>

          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            Built For Modern Businesses
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We build intelligent digital products that improve
            productivity, automate operations, and help organizations
            grow faster.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
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

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50">

                  <Icon
                    size={30}
                    className="text-emerald-600"
                  />

                </div>

                {/* Accent */}

                <div className="mb-6 h-1 w-14 rounded-full bg-emerald-500 transition-all duration-500 group-hover:w-24" />

                {/* Title */}

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {solution.title}
                </h3>

                {/* Description */}

                <p className="leading-7 text-gray-600">
                  {solution.description}
                </p>

                {/* CTA */}

                <div className="mt-8 flex items-center gap-2 font-medium text-emerald-600 transition-all duration-300 group-hover:translate-x-1">

                  <span>
                    Learn More
                  </span>

                  <ArrowRight size={16} />

                </div>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}