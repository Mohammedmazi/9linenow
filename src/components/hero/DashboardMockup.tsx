export default function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div
        className="
          rounded-[32px]
          border
          border-gray-200
          bg-white
          p-8
          shadow-2xl
          shadow-gray-200/60
        "
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              9LineNow Platform
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Smart software solutions powered by AI & automation
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />

            <span className="text-sm font-medium text-emerald-700">
              System Online
            </span>
          </div>
        </div>

        {/* KPI Cards */}

        <div className="mb-8 grid grid-cols-3 gap-5">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Projects
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              24
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Solutions
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              18
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Growth
            </p>

            <p className="mt-3 text-3xl font-bold text-gray-900">
              +63%
            </p>
          </div>
        </div>

        {/* Chart */}

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-900">
              Business Performance
            </h4>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
              +28% This Quarter
            </span>
          </div>

          <div className="flex h-48 items-end gap-3">
            <div className="h-[22%] w-full rounded-t-xl bg-emerald-400 transition-all hover:bg-emerald-500" />

            <div className="h-[38%] w-full rounded-t-xl bg-emerald-400 transition-all hover:bg-emerald-500" />

            <div className="h-[35%] w-full rounded-t-xl bg-emerald-400 transition-all hover:bg-emerald-500" />

            <div className="h-[58%] w-full rounded-t-xl bg-emerald-400 transition-all hover:bg-emerald-500" />

            <div className="h-[48%] w-full rounded-t-xl bg-emerald-400 transition-all hover:bg-emerald-500" />

            <div className="h-[82%] w-full rounded-t-xl bg-blue-500 transition-all hover:bg-blue-600" />
          </div>

          <div className="mt-5 flex justify-between text-sm text-gray-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "AI",
            "Automation",
            "Web Apps",
            "Mobile",
            "Cloud",
            "Analytics",
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
                text-sm
                font-medium
                text-gray-700
                transition-all
                duration-300
                hover:border-emerald-200
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
  );
}