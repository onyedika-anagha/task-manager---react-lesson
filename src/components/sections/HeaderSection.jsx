import { Badge } from "../ui/Badge";

export function HeaderSection({ stats }) {
  const today = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateString = today.toLocaleDateString("en-US", options);

  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface">
          My Tasks
        </h1>
        <p className="text-outline text-lg mt-2">{dateString}</p>
      </div>
      <div className="flex gap-3">
        <Badge priority="active">Active ({stats.pending})</Badge>
        <Badge priority="urgent">Urgent ({stats.byPriority.high})</Badge>
      </div>
    </section>
  );
}
