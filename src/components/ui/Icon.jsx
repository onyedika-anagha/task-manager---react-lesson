export function Icon({ name, className = "", filled = false, weight = 400 }) {
  const fillValue = filled ? 1 : 0;

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fillValue}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}
