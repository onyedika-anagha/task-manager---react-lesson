import { Icon } from "./Icon";

export function FormSelect({
  options = [],
  value = "",
  className = "",
  ...props
}) {
  const baseStyles =
    "w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 focus:bg-surface-container-lowest transition-all p-4 rounded-lg text-on-surface font-medium appearance-none";

  return (
    <div className="relative">
      <select
        className={`${baseStyles} ${className} pr-10`}
        value={value}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        name="expand_more"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
      />
    </div>
  );
}
