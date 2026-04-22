import { Icon } from "./Icon";

export function NavLink({
  icon,
  label,
  active = false,
  onClick,
  className = "",
}) {
  const baseStyles =
    "flex items-center gap-3 px-4 py-3 rounded-lg hover:translate-x-1 transition-transform duration-200";
  const activeStyles = active
    ? "text-primary bg-white"
    : "text-gray-500 hover:bg-gray-100";

  return (
    <a
      className={`${baseStyles} ${activeStyles} ${className} cursor-pointer`}
      onClick={onClick}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </a>
  );
}
