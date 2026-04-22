export function FormInput({
  placeholder = "",
  type = "text",
  value = "",
  icon = null,
  className = "",
  ...props
}) {
  const baseStyles =
    "w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 focus:bg-surface-container-lowest transition-all p-4 rounded-lg text-on-surface placeholder:text-outline/50 font-medium";

  return (
    <input
      className={`${baseStyles} ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      {...props}
    />
  );
}
