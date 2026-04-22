export function FormField({ children, label, required = false }) {
  return (
    <div className="group">
      {label && (
        <label className="block text-[10px] font-bold tracking-widest text-outline uppercase mb-2 group-focus-within:text-primary transition-colors">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      {children}
    </div>
  );
}
