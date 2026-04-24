import { Icon } from "../ui/Icon";
import { Badge } from "../ui/Badge";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export function TaskItem({ task, completed = false, toggleTaskCompletion }) {
  return (
    <>
      <div
        className={`group flex items-start gap-6 py-6 border-transparent transition-all ${completed ? "opacity-60" : ""}`}
      >
        {/* Checkbox */}
        <div className="mt-1">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              completed
                ? "bg-primary flex items-center justify-center"
                : "border-2 border-primary-container hover:bg-primary-container/10"
            }`}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {completed && (
              <Icon name="check" className="text-white text-sm" filled />
            )}
          </div>
        </div>

        {/* Task Content */}
        <div className="flex-1">
          {/* Title & Priority Badge */}
          <div className="flex items-center justify-between mb-1">
            <h4
              className={`text-lg font-bold group-hover:text-primary transition-colors ${completed ? "line-through text-outline" : ""}`}
            >
              {task.title}
            </h4>
            <Badge priority={task.priority}>{task.priority}</Badge>
          </div>

          {/* Description */}
          <p
            className={`text-outline text-sm leading-relaxed mb-4 ${completed ? "line-through" : ""}`}
          >
            {task.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-outline text-xs">
              <Icon name="calendar_today" className="text-sm" />
              <span>
                {format(new Date(task.dueDate), "MMM dd, yyyy 'at' h:mm a")}
              </span>
            </div>
            {task.files && (
              <div className="flex items-center gap-1.5 text-outline text-xs">
                <Icon name="link" className="text-sm" />
                <span>{task.files} Files attached</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="h-px bg-surface-container-low mx-0"></div>
    </>
  );
}
