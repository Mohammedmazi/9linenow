export default function InventoryPreview() {
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
              Inventory Overview
            </h3>

            <p className="text-xs text-gray-500">
              Live warehouse status
            </p>

          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Updated
          </span>

        </div>

        {/* Inventory Table */}

        <div className="space-y-3">

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">

            <div>

              <p className="text-sm font-semibold text-gray-900">
                Premium Plan
              </p>

              <p className="text-xs text-gray-500">
                SKU-1001
              </p>

            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              145 In Stock
            </span>

          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">

            <div>

              <p className="text-sm font-semibold text-gray-900">
                Business Suite
              </p>

              <p className="text-xs text-gray-500">
                SKU-2048
              </p>

            </div>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
              42 Low Stock
            </span>

          </div>

          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">

            <div>

              <p className="text-sm font-semibold text-gray-900">
                Enterprise Kit
              </p>

              <p className="text-xs text-gray-500">
                SKU-3025
              </p>

            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              8 Critical
            </span>

          </div>

        </div>

        {/* Bottom Summary */}

        <div className="mt-auto grid grid-cols-3 gap-3">

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Products
            </p>

            <p className="mt-1 text-lg font-bold text-gray-900">
              315
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Warehouses
            </p>

            <p className="mt-1 text-lg font-bold text-gray-900">
              12
            </p>

          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
              Alerts
            </p>

            <p className="mt-1 text-lg font-bold text-red-600">
              3
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}