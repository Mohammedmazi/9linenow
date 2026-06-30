export default function AnalyticsPreview() {
  return (
    <div className="h-64 rounded-t-3xl bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-5">

      <div
        className="
          flex
          h-full
          flex-col
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-5
          shadow-lg
        "
      >

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Revenue
            </p>

            <h3 className="mt-1 text-3xl font-bold text-gray-900">
              £42.8K
            </h3>

          </div>

          <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            +28%
          </div>

        </div>

        {/* Chart */}

        <div className="flex h-36 items-end gap-3">

          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-[30%] w-full rounded-t-lg bg-emerald-500" />
            <span className="text-[10px] text-gray-500">Jan</span>
          </div>

          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-[45%] w-full rounded-t-lg bg-emerald-500" />
            <span className="text-[10px] text-gray-500">Feb</span>
          </div>

          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-[40%] w-full rounded-t-lg bg-emerald-500" />
            <span className="text-[10px] text-gray-500">Mar</span>
          </div>

          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-[65%] w-full rounded-t-lg bg-emerald-500" />
            <span className="text-[10px] text-gray-500">Apr</span>
          </div>

          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-[58%] w-full rounded-t-lg bg-emerald-500" />
            <span className="text-[10px] text-gray-500">May</span>
          </div>

          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-[90%] w-full rounded-t-lg bg-blue-500" />
            <span className="text-[10px] text-gray-500">Jun</span>
          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-6 grid grid-cols-3 gap-3">

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Clients
            </p>

            <p className="mt-1 text-lg font-bold text-gray-900">
              128
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Projects
            </p>

            <p className="mt-1 text-lg font-bold text-gray-900">
              42
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Growth
            </p>

            <p className="mt-1 text-lg font-bold text-emerald-600">
              +18%
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}