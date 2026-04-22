import { Modal } from "../ui/Modal";
import { FormField } from "../ui/FormField";
import { FormInput } from "../ui/FormInput";
import { FormTextarea } from "../ui/FormTextarea";
import { FormSelect } from "../ui/FormSelect";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";

export function CreateTaskModal({ onClose }) {
  const priorityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    onClose?.();
  };

  return (
    <Modal title="Create New Task" subtitle="New Entry in Digital Workspace">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Title Field */}
        <FormField label="Task Title" required>
          <FormInput placeholder="What needs to be done?" />
        </FormField>

        {/* Description Field */}
        <FormField label="Description" required>
          <FormTextarea placeholder="Add context or sub-tasks..." rows={4} />
        </FormField>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Due Date Field */}
          <FormField label="Due Date">
            <div className="relative">
              <FormInput type="date" />
              <Icon
                name="calendar_today"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
              />
            </div>
          </FormField>

          {/* Priority Field */}
          <FormField label="Priority">
            <FormSelect options={priorityOptions} defaultValue="medium" />
          </FormField>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-col md:flex-row items-center gap-4">
          {/* Save Button */}
          <Button className="w-full md:flex-1 bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <Icon name="check_circle" filled />
            Save Task
          </Button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full md:w-auto px-8 py-4 text-outline font-semibold hover:text-on-surface transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
