export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface-container-lowest rounded-xl p-10 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
