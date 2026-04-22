import { CreateTaskModal } from "./CreateTaskModal";

export function ModalOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6 md:p-12"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <CreateTaskModal onClose={onClose} />
      </div>
    </div>
  );
}
