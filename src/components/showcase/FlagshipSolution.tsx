import Container from "../shared/Container";

export default function FlagshipSolution() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container>

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Flagship Solution
          </p>

          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            AI Business Assistant Platform
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            A private AI assistant trained exclusively on your company&apos;s
            documents, workflows, processes and business knowledge.
          </p>

        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">

          {/* Left */}

          <div>

            <h3 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Turn Company Knowledge Into Business Intelligence
            </h3>

            <p className="mb-10 text-lg leading-8 text-gray-600">
              Empower your team with an AI assistant that understands
              your business, answers questions instantly, automates
              repetitive work, and transforms internal knowledge into
              actionable insights.
            </p>

            <div className="space-y-5">

              {[
                "Knowledge Base Search",
                "Document Intelligence",
                "Workflow Automation",
                "Business Analytics",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">

                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-600" />

                  </div>

                  <span className="text-lg font-medium text-gray-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div
            className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-2xl
            "
          >

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100 blur-3xl" />

            {/* Header */}

            <div className="relative mb-8 flex items-center justify-between">

              <div>

                <h4 className="text-xl font-semibold text-gray-900">
                  AI Assistant
                </h4>

                <p className="text-sm text-gray-500">
                  Company Knowledge Model
                </p>

              </div>

              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                ● Online
              </span>

            </div>

            {/* Conversation */}

            <div className="relative space-y-5">

              <div className="ml-auto max-w-[75%] rounded-3xl rounded-br-lg bg-emerald-600 px-5 py-4 text-sm text-white shadow-lg">
                Show me last month&apos;s sales performance.
              </div>

              <div className="max-w-[90%] rounded-3xl rounded-bl-lg border border-gray-200 bg-gray-50 px-5 py-4 text-sm leading-7 text-gray-700">
                Revenue increased{" "}
                <span className="font-semibold text-emerald-600">
                  18%
                </span>{" "}
                compared to the previous month.
                Subscription renewals were the strongest performing
                segment.
              </div>

              <div className="max-w-[80%] rounded-3xl rounded-bl-lg border border-gray-200 bg-gray-50 px-5 py-4 text-sm leading-7 text-gray-700">
                Would you like a detailed breakdown by product category?
              </div>

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-4">

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">

                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Queries
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  1.2K
                </p>

              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">

                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Accuracy
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  96%
                </p>

              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">

                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Time Saved
                </p>

                <p className="mt-2 text-2xl font-bold text-emerald-600">
                  37h
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}