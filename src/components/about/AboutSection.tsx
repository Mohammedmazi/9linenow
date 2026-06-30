import Container from "../shared/Container";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-50 py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              About 9LineNow
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Technology That Accelerates Business Growth
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              At <span className="font-semibold text-gray-900">9LineNow</span>,
              we help organizations modernize their operations through custom
              software development, Artificial Intelligence, cloud computing,
              workflow automation, and digital transformation.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to build scalable, secure, and future-ready
              technology that increases productivity, reduces operational costs,
              and enables sustainable business growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700">
                AI Solutions
              </div>

              <div className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
                Cloud Platforms
              </div>

              <div className="rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-sm font-medium text-purple-700">
                Business Automation
              </div>
            </div>
          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl shadow-gray-200/60">
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-3xl font-bold text-emerald-600">
                  AI
                </h3>

                <p className="mt-3 text-gray-600">
                  Intelligent Automation
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-3xl font-bold text-blue-600">
                  Cloud
                </h3>

                <p className="mt-3 text-gray-600">
                  Modern Infrastructure
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-3xl font-bold text-purple-600">
                  Apps
                </h3>

                <p className="mt-3 text-gray-600">
                  Web & Mobile Solutions
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-3xl font-bold text-orange-500">
                  Data
                </h3>

                <p className="mt-3 text-gray-600">
                  Analytics & Insights
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
              <h3 className="mb-2 text-xl font-semibold">
                Building Future-Ready Businesses
              </h3>

              <p className="leading-7 text-emerald-50">
                We combine engineering excellence with modern AI technologies to
                deliver software that drives measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}