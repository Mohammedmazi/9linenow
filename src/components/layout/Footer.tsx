import Container from "../shared/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-4">

          {/* Company */}

          <div>

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-200">
                9L
              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  9LineNow
                </h3>

                <p className="text-sm text-gray-500">
                  Software • AI • Automation
                </p>

              </div>

            </div>

            <p className="max-w-sm leading-7 text-gray-600">
              We build modern software, AI-powered solutions,
              intelligent automation platforms and scalable digital
              products that help businesses innovate and grow.
            </p>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-5 text-lg font-semibold text-gray-900">
              Services
            </h4>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  Mobile Applications
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  AI Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  Business Automation
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="mb-5 text-lg font-semibold text-gray-900">
              Company
            </h4>

            <ul className="space-y-3">

              <li>
                <a
                  href="#about"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  Solutions
                </a>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition hover:text-emerald-600"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Technologies */}

          <div>

            <h4 className="mb-5 text-lg font-semibold text-gray-900">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "Python",
                "FastAPI",
                "Docker",
                "AWS",
                "PostgreSQL",
                "OpenAI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-gray-700
                    transition
                    hover:border-emerald-300
                    hover:bg-emerald-50
                    hover:text-emerald-700
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm md:flex-row">

          <p className="text-gray-500">
            © 2026 <span className="font-semibold text-gray-900">9LineNow</span>.
            All rights reserved.
          </p>

          <div className="flex gap-8">

            <Link
              href="/privacy"
              className="text-gray-500 transition hover:text-emerald-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 transition hover:text-emerald-600"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </Container>
    </footer>
  );
}