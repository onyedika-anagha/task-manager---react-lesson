import { CreateTaskModal } from "./CreateTaskModal";

export function ModalOverlay({ isOpen, onClose, addTask }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 md:p-12"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate__animated animate__fadeInUp"
      >
        <CreateTaskModal onClose={onClose} addTask={addTask} />
      </div>
    </div>
  );
}
