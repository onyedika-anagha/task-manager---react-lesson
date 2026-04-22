export function Badge({ children, priority = "low" }) {
  const badgeStyles = {
    high: "bg-error-container text-on-error-container",
    medium: "bg-secondary-container text-on-secondary-container",
    low: "bg-surface-container-high text-outline",
    active: "bg-primary text-white",
    urgent: "bg-primary text-white",
  };

  return (
    <span
      className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${badgeStyles[priority]}`}
    >
      {children}
    </span>
  );
}
