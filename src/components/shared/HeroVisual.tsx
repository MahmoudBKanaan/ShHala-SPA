export function HeroVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative mx-auto flex max-w-lg items-end justify-center gap-4 px-4 ${className}`}>
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute -top-6 rounded-full bg-white/60"
              style={{
                left: `${12 + i * 8}px`,
                width: 6 + i * 2,
                height: 6 + i * 2,
                opacity: 0.5 - i * 0.1,
                animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
          <div className="h-44 w-20 rounded-b-3xl rounded-t-lg border-2 border-white/50 bg-gradient-to-b from-amber-100/30 via-red-900/20 to-red-800/40 shadow-card backdrop-blur-sm md:h-52 md:w-24">
            <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-white/40" />
            <div className="absolute -right-1 top-8 text-[10px] text-shhala-gold">🌴</div>
          </div>
        </div>
        <div className="mt-1 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-3 w-2 rounded-full bg-shhala-sage" style={{ transform: `rotate(${-15 + i * 15}deg)` }} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 font-display text-5xl font-bold text-shhala-red md:text-6xl">
        ش هلا
      </div>

      <div className="relative z-10">
        <div className="relative h-36 w-28 md:h-44 md:w-32">
          <div className="absolute bottom-0 left-1/2 h-28 w-20 -translate-x-1/2 rounded-b-full rounded-t-3xl bg-gradient-to-b from-shhala-gold via-shhala-brass to-amber-700 shadow-card md:h-36 md:w-24" />
          <div className="absolute bottom-24 left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-shhala-gold to-amber-600 md:bottom-28 md:h-10 md:w-16" />
          <div className="absolute bottom-20 left-0 h-3 w-10 rounded-full bg-shhala-brass md:bottom-24" />
          <div className="absolute right-0 bottom-16 h-2 w-8 rounded-full bg-shhala-gold md:bottom-20" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-8px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}