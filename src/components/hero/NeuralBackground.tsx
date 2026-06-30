export default function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* White Base */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-emerald-50" />

      {/* Top Left Glow */}
      <div
        className="
          absolute
          -left-40
          -top-40
          h-162.5
          w-162.5
          rounded-full
          bg-emerald-200/60
          blur-[170px]
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute
          -bottom-48
          -right-40
          h-175
          w-175
          rounded-full
          bg-blue-100/60
          blur-[180px]
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-112.5
          w-112.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-100/70
          blur-[170px]
        "
      />

      {/* Decorative Circles */}

      <div className="absolute left-[12%] top-[18%] h-5 w-5 rounded-full bg-emerald-400 opacity-40 blur-sm" />

      <div className="absolute right-[18%] top-[28%] h-4 w-4 rounded-full bg-blue-400 opacity-40 blur-sm" />

      <div className="absolute bottom-[18%] left-[22%] h-6 w-6 rounded-full bg-emerald-300 opacity-30 blur-md" />

      <div className="absolute bottom-[22%] right-[12%] h-5 w-5 rounded-full bg-cyan-300 opacity-30 blur-md" />

      {/* Soft Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />

    </div>
  );
}