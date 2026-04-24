import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

export function FloatingActionButton({ onCreateTask }) {
  return (
    <div className="fixed bottom-10 right-10">
      <Button onClick={onCreateTask} variant="dark">
        <Icon
          name="add"
          className="transition-transform group-hover:rotate-90"
        />
        <span>Create Task</span>
      </Button>
    </div>
  );
}
