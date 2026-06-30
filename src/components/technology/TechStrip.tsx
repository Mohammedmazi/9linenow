import Container from "../shared/Container";
import {
  BrainCircuit,
  Server,
  Globe,
  Boxes,
  Cloud,
  Database,
  Code2,
  Cpu,
} from "lucide-react";

const technologies = [
  {
    name: "Python",
    icon: BrainCircuit,
  },
  {
    name: "FastAPI",
    icon: Server,
  },
  {
    name: "Next.js",
    icon: Globe,
  },
  {
    name: "React",
    icon: Code2,
  },
  {
    name: "Docker",
    icon: Boxes,
  },
  {
    name: "AWS",
    icon: Cloud,
  },
  {
    name: "PostgreSQL",
    icon: Database,
  },
  {
    name: "TypeScript",
    icon: Cpu,
  },
];

export default function TechStrip() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-14">
      <Container>
        {/* Heading */}

        <div className="mb-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Powered By Modern Technologies
          </p>

        </div>

        {/* Technologies */}

        <div className="flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-3
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300
                  hover:shadow-lg
                "
              >
                <Icon
                  size={18}
                  className="text-emerald-600 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-sm font-semibold text-gray-800">
                  {tech.name}
                </span>

              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}