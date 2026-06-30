import Container from "../shared/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-linear-to-b from-gray-50 to-white py-28"
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-gray-200
            bg-linear-to-br
            from-emerald-600
            via-emerald-500
            to-teal-500
            px-8
            py-20
            shadow-2xl
            lg:px-20
          "
        >
          {/* Decorative Background */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          {/* Content */}

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100">
              Let&apos;s Build Something Amazing
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-white lg:text-6xl">
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-emerald-50">
              Build faster, automate smarter, and unlock new opportunities
              through custom software, Artificial Intelligence,
              workflow automation, and scalable cloud solutions
              designed specifically for your business.
            </p>

            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-emerald-600
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                Schedule a Free Consultation
              </Link>

              <a
                href="#services"
                className="
                  rounded-full
                  border
                  border-white/30
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:-translate-y-1
                "
              >
                Explore Our Services
              </a>
            </div>

            {/* Bottom Stats */}

            <div className="mt-16 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  AI
                </h3>

                <p className="mt-2 text-emerald-100">
                  Intelligent Automation
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  Cloud
                </h3>

                <p className="mt-2 text-emerald-100">
                  Scalable Infrastructure
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  24/7
                </h3>

                <p className="mt-2 text-emerald-100">
                  Dedicated Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}