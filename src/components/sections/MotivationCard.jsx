export function MotivationCard() {
  return (
    <div className="rounded-xl overflow-hidden relative aspect-square group">
      {/* Image with effects */}
      <img
        alt="Productivity"
        className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOW49_j1OGJJ7NUsuBNsE0DbPLrlT79bblYHCldPIoUPjWEUa-iYBj-8h1rJ9Rp_yLbloaE87qlIbOfRB2Mm6cJrxcL8CPA5wjnosy7emsAzu3JvKY1ciyXx3FpHoQzLq7hpKNcnwE-ANUpy_daaJ6mQfUT64-IWN977VsFJ51IbKFp-0RktfNVN_IJt-85ur7Rx73u9CKYp8sKke6eI90HntC3NT43ti1NELahUSC6n8OhmI3orXfATdK6eBAG800m34FWRYEmUw"
      />

      {/* Gradient Overlay with Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
        <p className="text-white text-xl font-bold leading-tight">
          Focus on what matters most today.
        </p>
        <p className="text-white/60 text-sm mt-2">
          3 tasks remaining for your goal.
        </p>
      </div>
    </div>
  );
}
