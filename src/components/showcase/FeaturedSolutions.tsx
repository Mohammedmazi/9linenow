import Container from "../shared/Container";
import AIAssistantPreview from "../projects/previews/AIAssistantPreview";
import AnalyticsPreview from "../projects/previews/AnalyticsPreview";
import InventoryPreview from "../projects/previews/InventoryPreview";
import PortalPreview from "../projects/previews/PortalPreview";

const projects = [
  {
    title: "AI Business Assistant",
    category: "Artificial Intelligence",
    description:
      "An intelligent assistant trained on your company's knowledge, documents, and workflows to improve productivity and decision-making.",
    preview: <AIAssistantPreview />,
  },
  {
    title: "Inventory Management System",
    category: "Business Software",
    description:
      "A centralized inventory platform that streamlines stock management, suppliers, warehouses, and operations.",
    preview: <InventoryPreview />,
  },
  {
    title: "Analytics Dashboard",
    category: "Business Intelligence",
    description:
      "Interactive dashboards providing real-time KPIs, business insights, and performance analytics.",
    preview: <AnalyticsPreview />,
  },
  {
    title: "Customer Portal",
    category: "Web Application",
    description:
      "Secure self-service portals where customers can manage projects, documents, invoices, and support requests.",
    preview: <PortalPreview />,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container>

        {/* Section Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Featured Solutions
          </p>

          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            Software Solutions We Can Build
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            From AI assistants to enterprise dashboards,
            we create custom digital products designed to
            solve real business challenges.
          </p>

        </div>

        {/* Project Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-emerald-300
                hover:shadow-2xl
              "
            >

              {/* Preview */}

              {project.preview}

              {/* Content */}

              <div className="p-8">

                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  {project.category}
                </p>

                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    Custom Solution
                  </span>

                  <button
                    className="
                      rounded-full
                      border
                      border-emerald-300
                      bg-white
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-emerald-700
                      transition-all
                      duration-300
                      hover:bg-emerald-600
                      hover:text-white
                      hover:shadow-lg
                    "
                  >
                    Learn More →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}