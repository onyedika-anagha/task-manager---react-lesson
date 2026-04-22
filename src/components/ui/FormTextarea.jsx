export function FormTextarea({
  placeholder = "",
  value = "",
  rows = 4,
  className = "",
  ...props
}) {
  const baseStyles =
    "w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 focus:bg-surface-container-lowest transition-all p-4 rounded-lg text-on-surface placeholder:text-outline/50 font-medium resize-none";

  return (
    <textarea
      className={`${baseStyles} ${className}`}
      placeholder={placeholder}
      rows={rows}
      value={value}
      {...props}
    />
  );
}
