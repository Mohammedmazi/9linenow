export default function AIAssistantPreview() {
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

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              AI Assistant
            </span>

          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Online
          </span>

        </div>

        {/* Conversation */}

        <div className="flex flex-1 flex-col justify-center space-y-4">

          {/* User */}

          <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-emerald-600 px-4 py-3 text-sm text-white shadow-md">
            Show me last month&apos;s sales performance.
          </div>

          {/* AI */}

          <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            Revenue increased{" "}
            <span className="font-semibold text-emerald-600">
              18%
            </span>{" "}
            compared to the previous month.
          </div>

          {/* AI */}

          <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            The strongest growth came from subscription renewals.
          </div>

          {/* AI */}

          <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            Would you like a detailed breakdown by product category?
          </div>

        </div>

      </div>

    </div>
  );
}