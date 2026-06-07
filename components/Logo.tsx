export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
        <defs>
          <linearGradient id="lylu-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path
          d="M16 14 L16 44 Q16 50 22 50 L40 50"
          stroke="url(#lylu-g)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="46" cy="20" r="6" fill="url(#lylu-g)" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">
        Lylu
      </span>
    </div>
  );
}
