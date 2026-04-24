import { Modal } from "../ui/Modal";
import { FormField } from "../ui/FormField";
import { FormInput } from "../ui/FormInput";
import { FormTextarea } from "../ui/FormTextarea";
import { FormSelect } from "../ui/FormSelect";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { useState } from "react";

const defaultTaskData = {
  title: "",
  description: "",
  dueDate: new Date().toISOString().split("T")[0], // Default to today's date
  priority: "medium",
};
export function CreateTaskModal({ onClose, addTask }) {
  const [taskData, setTaskData] = useState(defaultTaskData);
  const priorityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];
  const resetForm = () => setTaskData(defaultTaskData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    addTask(taskData);
    resetForm();
    onClose?.();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal title="Create New Task" subtitle="New Entry in Digital Workspace">
      <form className="" onSubmit={handleSubmit}>
        <div className="space-y-8 h-[calc(100vh-300px)] overflow-y-auto pr-2">
          {/* Title Field */}
          <FormField label="Task Title" required>
            <FormInput
              placeholder="What needs to be done?"
              name="title"
              value={taskData.title}
              onChange={handleChange}
            />
          </FormField>
          {/* Description Field */}
          <FormField label="Description" required>
            <FormTextarea
              placeholder="Add context or sub-tasks..."
              rows={4}
              name="description"
              value={taskData.description}
              onChange={handleChange}
            />
          </FormField>
          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Due Date Field */}
            <FormField label="Due Date">
              <FormInput
                type="date"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleChange}
              />
            </FormField>

            {/* Priority Field */}
            <FormField label="Priority">
              <FormSelect
                options={priorityOptions}
                defaultValue="medium"
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
              />
            </FormField>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="pt-6 flex flex-col md:flex-row items-center gap-4">
          {/* Save Button */}
          <Button className="w-full md:flex-1 bg-linear-to-br from-primary to-primary-container text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
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
