import { Icon } from "../ui/Icon";
import { Card } from "../ui/Card";
import { TaskItem } from "./TaskItem";

export function TaskList() {
  const tasks = [
    {
      title: "Finalize Branding Guidelines",
      description:
        "Complete the typography and color palette documentation for the new visual identity project.",
      priority: "high",
      priorityLabel: "High Priority",
      date: "Today, 5:00 PM",
      files: 3,
      completed: false,
    },
    {
      title: "Stakeholder Sync Call",
      description:
        "Weekly sync with the engineering team to discuss the upcoming sprint goals and blockers.",
      priority: "medium",
      priorityLabel: "Medium",
      date: "Tomorrow, 10:00 AM",
      files: null,
      completed: false,
    },
    {
      title: "User Interview Scripts",
      description:
        "Prepare interview questions for the upcoming usability testing sessions.",
      priority: "low",
      priorityLabel: "Low",
      date: "May 20, 2:00 PM",
      files: null,
      completed: true,
    },
  ];

  return (
    <Card>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold">Priority Workflow</h3>
        <Icon name="tune" className="text-outline cursor-pointer" />
      </div>

      {/* Task List */}
      <div className="space-y-0">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} completed={task.completed} />
        ))}
      </div>
    </Card>
  );
}
