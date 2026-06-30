import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-white via-gray-50 to-emerald-50 px-6">

      {/* Background */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative w-full max-w-3xl rounded-4xl border border-gray-200 bg-white p-12 shadow-2xl">

        {/* Success Icon */}

        <div className="mb-10 flex justify-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 shadow-lg shadow-emerald-200">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-5xl text-white">
              ✓
            </div>

          </div>

        </div>

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Request Received
          </span>

          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            Thank You!
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We&apos;ve successfully received your project inquiry.
            Our team will carefully review your requirements and
            reach out to you shortly.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

          <h2 className="mb-6 text-xl font-bold text-gray-900">
            What Happens Next?
          </h2>

          <div className="space-y-5">

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                1
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Project Review
                </h3>

                <p className="text-gray-600">
                  Our specialists will review your requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                2
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Initial Consultation
                </h3>

                <p className="text-gray-600">
                  We&apos;ll contact you within 24 hours to discuss your project.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                3
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Proposal & Timeline
                </h3>

                <p className="text-gray-600">
                  You&apos;ll receive a customized roadmap, quotation,
                  and delivery timeline.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Info Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
            <div className="mb-3 text-3xl">⚡</div>

            <h3 className="font-semibold text-gray-900">
              Fast Response
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Usually within 24 hours.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
            <div className="mb-3 text-3xl">🔒</div>

            <h3 className="font-semibold text-gray-900">
              Confidential
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Your ideas remain secure.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
            <div className="mb-3 text-3xl">🤝</div>

            <h3 className="font-semibold text-gray-900">
              Dedicated Team
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Experts assigned to your project.
            </p>
          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/"
            className="
              rounded-full
              bg-emerald-600
              px-8
              py-4
              text-center
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-emerald-700
              hover:shadow-lg
              hover:shadow-emerald-300
            "
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="
              rounded-full
              border
              border-gray-300
              bg-white
              px-8
              py-4
              text-center
              font-semibold
              text-gray-700
              transition-all
              duration-300
              hover:bg-gray-100
            "
          >
            Submit Another Request
          </Link>

        </div>

      </div>

    </main>
  );
}