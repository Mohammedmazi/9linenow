import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-linear-to-br from-white via-gray-50 to-emerald-50 py-24">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-20 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <span
              className="
                inline-flex
                rounded-full
                bg-emerald-100
                px-4
                py-2
                text-sm
                font-semibold
                text-emerald-700
              "
            >
              Contact 9LineNow
            </span>

            <h1
              className="
                mt-6
                text-5xl
                font-extrabold
                leading-tight
                text-gray-900
                md:text-6xl
              "
            >
              Let&apos;s Build
              <span className="block text-emerald-600">
                Something Amazing
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Whether you&apos;re launching a startup, modernizing
              your business, building AI solutions, or creating
              enterprise software, our team is ready to help.
            </p>

            {/* Features */}

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  🚀
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Free Strategy Call
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Tell us about your project and receive expert
                    guidance before making any commitment.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                  ⚡
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Fast Response
                  </h3>

                  <p className="mt-1 text-gray-600">
                    We usually respond within one business day.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                  🔒
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Confidential Discussion
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Your ideas, business plans, and documents
                    remain completely confidential.
                  </p>
                </div>
              </div>

            </div>

            {/* Services */}

            <div
              className="
                mt-14
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-lg
              "
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                We Can Help With
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-gray-50 p-4">
                  ✓ Custom Software
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✓ AI Solutions
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✓ Web Applications
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✓ Mobile Apps
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✓ Cloud Platforms
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  ✓ Automation
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div
            className="
              rounded-4xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-2xl
            "
          >
            <div className="mb-8">

              <h2 className="text-3xl font-bold text-gray-900">
                Start Your Project
              </h2>

              <p className="mt-2 text-gray-600">
                Complete the form below and we&apos;ll contact you shortly.
              </p>

            </div>

            <ContactForm />

          </div>

        </div>

      </div>

    </main>
  );
}