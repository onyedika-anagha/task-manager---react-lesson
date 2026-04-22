import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

export function FloatingActionButton({ onCreateTask }) {
  return (
    <div className="fixed bottom-10 right-10">
      <Button
        onClick={onCreateTask}
        className="flex items-center gap-3 bg-on-surface text-surface-container-lowest px-8 py-5 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all group"
      >
        <Icon
          name="add"
          className="transition-transform group-hover:rotate-90"
        />
        <span>Create Task</span>
      </Button>
    </div>
  );
}
