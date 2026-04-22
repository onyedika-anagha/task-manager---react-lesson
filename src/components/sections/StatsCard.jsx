export function StatsCard() {
  return (
    <div className="bg-primary text-white rounded-xl p-8 overflow-hidden relative">
      {/* Content Layer */}
      <div className="relative z-10">
        <h4 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">
          Weekly Progress
        </h4>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black tracking-tighter">84%</span>
          <span className="text-sm opacity-80">+12% from last week</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white w-[84%]"></div>
        </div>
      </div>

      {/* Decorative Blur Background */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}
