import { Icon } from "./Icon";

export function Modal({ children, title, subtitle }) {
  return (
    <div className="w-full max-w-xl bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] relative overflow-hidden">
      {/* Branding Accent Top Border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-container"></div>

      {/* Modal Header */}
      {title && (
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-outline text-sm font-medium uppercase tracking-[0.05em]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Modal Content */}
      {children}
    </div>
  );
}
