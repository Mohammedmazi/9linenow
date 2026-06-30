export default function PortalPreview() {
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

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              Customer Portal
            </h3>

            <p className="text-xs text-gray-500">
              Client workspace overview
            </p>

          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Active
          </span>

        </div>

        {/* Dashboard Grid */}

        <div className="grid flex-1 grid-cols-2 gap-3">

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100">

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Projects
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              4
            </p>

            <p className="mt-1 text-xs font-medium text-emerald-600">
              In Progress
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100">

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Support
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              2
            </p>

            <p className="mt-1 text-xs font-medium text-yellow-600">
              Open Tickets
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100">

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Documents
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              18
            </p>

            <p className="mt-1 text-xs font-medium text-blue-600">
              Available
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:bg-gray-100">

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Invoices
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              3
            </p>

            <p className="mt-1 text-xs font-medium text-emerald-600">
              Paid
            </p>

          </div>

        </div>

        {/* Bottom Status */}

        <div className="mt-5 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">

          <span className="text-sm text-gray-600">
            Last Login
          </span>

          <span className="text-sm font-semibold text-emerald-600">
            Today • 09:42 AM
          </span>

        </div>

      </div>

    </div>
  );
}