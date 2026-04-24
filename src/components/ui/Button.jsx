export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold shadow-sm cursor-pointer active:scale-95 transition-all hover:shadow-md",
    dark: "flex items-center gap-3 bg-on-surface text-surface-container-lowest px-8 py-5 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all group",
    secondary:
      "border-2 border-outline-variant text-on-surface py-3 rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer",
    icon: "text-outline cursor-pointer hover:text-primary transition-colors",
  };

  return (
    <button
      className={`${variants[variant]} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
