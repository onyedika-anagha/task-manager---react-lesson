import { Icon } from "../ui/Icon";

export function UpcomingDeadlines() {
  const deadlines = [
    {
      month: "MAY",
      day: 18,
      title: "Client Review",
      subtitle: "Q2 Roadmap Presentation",
    },
    {
      month: "MAY",
      day: 22,
      title: "Budget Approval",
      subtitle: "Marketing Dept",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-[0px_12px_32px_rgba(25,28,30,0.04)]">
      <h4 className="text-sm font-bold uppercase tracking-widest text-outline mb-6">
        Upcoming Deadlines
      </h4>

      <div className="space-y-6">
        {deadlines.map((deadline, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Date Box */}
            <div className="w-12 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary">
                {deadline.month}
              </span>
              <span className="text-lg font-black leading-none">
                {deadline.day}
              </span>
            </div>

            {/* Content */}
            <div>
              <p className="font-bold text-on-surface">{deadline.title}</p>
              <p className="text-xs text-outline">{deadline.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
