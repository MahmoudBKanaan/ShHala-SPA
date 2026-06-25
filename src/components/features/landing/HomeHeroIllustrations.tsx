export function ShhalaCalligraphy() {
  return (
    <svg
      viewBox="0 0 320 120"
      fill="none"
      className="pointer-events-none absolute left-1/2 top-2 z-30 w-[min(88vw,320px)] -translate-x-1/2"
      aria-hidden
    >
      <path
        d="M30 78 C55 42 95 28 140 34 C175 38 200 52 215 70"
        stroke="#B03A2E"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M250 30 C238 48 220 58 198 62"
        stroke="#B03A2E"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <text
        x="160"
        y="72"
        textAnchor="middle"
        fontFamily="Amiri, serif"
        fontSize="56"
        fontWeight="700"
        fill="#B03A2E"
      >
        ش
      </text>
      <text
        x="198"
        y="72"
        textAnchor="middle"
        fontFamily="Amiri, serif"
        fontSize="56"
        fontWeight="700"
        fill="#2E5A3C"
      >
        هلا
      </text>
      <ellipse cx="118" cy="52" rx="9" ry="14" fill="#2E5A3C" transform="rotate(-25 118 52)" />
      <ellipse cx="108" cy="58" rx="7" ry="12" fill="#3D7A52" transform="rotate(-35 108 58)" />
    </svg>
  );
}

export function TeaGlassIllustration() {
  return (
    <svg viewBox="0 0 120 200" fill="none" className="h-[min(42vw,200px)] w-auto drop-shadow-card" aria-hidden>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${52 + i * 4} ${18 - i * 6} Q${56 + i * 3} ${4 - i * 4} ${60 + i * 2} ${18 - i * 6}`}
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.5 - i * 0.1}
        />
      ))}

      <rect x="38" y="28" width="44" height="8" rx="3" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <path
        d="M36 36 L36 158 Q36 172 60 172 Q84 172 84 158 L84 36 Z"
        fill="url(#teaLiquid)"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
      />
      <path
        d="M38 38 L38 156 Q38 168 60 168 Q82 168 82 156 L82 38 Z"
        fill="url(#glassShine)"
        opacity="0.25"
      />

      <circle cx="60" cy="92" r="11" fill="#C9A227" opacity="0.9" />
      <path d="M60 86 L60 98 M54 92 L66 92" stroke="#F8F4ED" strokeWidth="1.2" />
      <path d="M58 100 Q60 104 62 100" stroke="#2E5A3C" strokeWidth="1" fill="none" />

      <ellipse cx="48" cy="178" rx="8" ry="4" fill="#5A8F62" transform="rotate(-30 48 178)" />
      <ellipse cx="58" cy="182" rx="9" ry="4" fill="#3D7A52" transform="rotate(10 58 182)" />
      <ellipse cx="70" cy="179" rx="7" ry="3.5" fill="#6BA070" transform="rotate(25 70 179)" />

      <defs>
        <linearGradient id="teaLiquid" x1="60" y1="36" x2="60" y2="172" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(180,80,50,0.35)" />
          <stop offset="35%" stopColor="#8B3A2A" />
          <stop offset="100%" stopColor="#5C2418" />
        </linearGradient>
        <linearGradient id="glassShine" x1="38" y1="36" x2="82" y2="172" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DallahIllustration() {
  return (
    <svg viewBox="0 0 140 180" fill="none" className="h-[min(38vw,175px)] w-auto drop-shadow-card" aria-hidden>
      <ellipse cx="70" cy="158" rx="42" ry="10" fill="rgba(0,0,0,0.08)" />

      <path
        d="M42 118 Q42 78 70 68 Q98 78 98 118 L98 138 Q98 152 70 152 Q42 152 42 138 Z"
        fill="url(#dallahBody)"
        stroke="#8B6914"
        strokeWidth="1.5"
      />
      <path
        d="M48 78 Q70 58 92 78 L90 72 Q70 52 50 72 Z"
        fill="url(#dallahLid)"
        stroke="#8B6914"
        strokeWidth="1.2"
      />
      <circle cx="70" cy="66" r="5" fill="#D4AF37" stroke="#8B6914" strokeWidth="1" />
      <path
        d="M98 108 C118 104 128 100 132 92"
        stroke="#B8860B"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M42 108 C28 104 18 98 14 90" stroke="#B8860B" strokeWidth="4" strokeLinecap="round" fill="none" />

      <path d="M56 118 L56 148" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
      <path d="M84 118 L84 148" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

      <defs>
        <linearGradient id="dallahBody" x1="42" y1="68" x2="98" y2="152" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8C547" />
          <stop offset="45%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="dallahLid" x1="48" y1="58" x2="92" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0D060" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
    </svg>
  );
}