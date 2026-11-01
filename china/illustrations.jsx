/* Decorative botanical line-art SVGs — kept simple, geometric, hand-drawn feel */

const Botanical = ({ variant = "branch", size = 100, className = "" }) => {
  const variants = {
    branch: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <path d="M50 10 Q50 50 50 90" />
        <path d="M50 25 Q40 22 32 28" />
        <ellipse cx="28" cy="29" rx="6" ry="2.5" transform="rotate(-20 28 29)" />
        <path d="M50 35 Q60 32 68 38" />
        <ellipse cx="72" cy="39" rx="6" ry="2.5" transform="rotate(20 72 39)" />
        <path d="M50 50 Q40 47 32 53" />
        <ellipse cx="28" cy="54" rx="6" ry="2.5" transform="rotate(-20 28 54)" />
        <path d="M50 65 Q60 62 68 68" />
        <ellipse cx="72" cy="69" rx="6" ry="2.5" transform="rotate(20 72 69)" />
        <path d="M50 80 Q42 78 36 82" />
        <ellipse cx="32" cy="83" rx="5" ry="2" transform="rotate(-15 32 83)" />
      </svg>
    ),
    sprig: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <path d="M20 80 Q40 60 60 40 Q70 30 80 20" />
        <path d="M30 70 Q35 65 45 65" />
        <path d="M40 60 Q45 55 55 55" />
        <path d="M50 50 Q55 45 65 45" />
        <path d="M60 40 Q65 35 75 35" />
        <circle cx="80" cy="20" r="2" />
        <circle cx="76" cy="24" r="1.5" />
        <circle cx="73" cy="20" r="1.5" />
      </svg>
    ),
    rose: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <circle cx="50" cy="35" r="14" />
        <circle cx="50" cy="35" r="9" />
        <circle cx="50" cy="35" r="5" />
        <path d="M50 49 Q50 70 50 90" />
        <path d="M50 60 Q42 58 36 64 Q34 68 38 70" />
        <path d="M50 75 Q60 73 66 79 Q68 83 64 85" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <path d="M50 10 Q25 30 25 55 Q25 80 50 90 Q75 80 75 55 Q75 30 50 10 Z" />
        <path d="M50 15 Q50 50 50 85" />
        <path d="M50 30 Q40 35 35 45" />
        <path d="M50 30 Q60 35 65 45" />
        <path d="M50 50 Q40 55 35 65" />
        <path d="M50 50 Q60 55 65 65" />
        <path d="M50 70 Q43 73 40 78" />
        <path d="M50 70 Q57 73 60 78" />
      </svg>
    ),
    floral: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <circle cx="50" cy="50" r="6" />
        <ellipse cx="50" cy="32" rx="6" ry="12" />
        <ellipse cx="50" cy="68" rx="6" ry="12" />
        <ellipse cx="32" cy="50" rx="12" ry="6" />
        <ellipse cx="68" cy="50" rx="12" ry="6" />
        <ellipse cx="37" cy="37" rx="5" ry="10" transform="rotate(45 37 37)" />
        <ellipse cx="63" cy="63" rx="5" ry="10" transform="rotate(45 63 63)" />
        <ellipse cx="63" cy="37" rx="5" ry="10" transform="rotate(-45 63 37)" />
        <ellipse cx="37" cy="63" rx="5" ry="10" transform="rotate(-45 37 63)" />
      </svg>
    ),
    arch: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <path d="M20 90 L20 50 Q20 25 50 25 Q80 25 80 50 L80 90" />
        <path d="M30 90 L30 55 Q30 35 50 35 Q70 35 70 55 L70 90" />
        <path d="M50 25 L50 15" />
        <circle cx="50" cy="12" r="2" />
        <path d="M15 90 L85 90" />
        <path d="M40 90 L40 70" />
        <path d="M60 90 L60 70" />
      </svg>
    ),
    pavilion: (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
        <path d="M10 35 L50 12 L90 35" />
        <path d="M14 35 L86 35" />
        <path d="M20 38 L80 38" />
        <path d="M25 38 L25 80" />
        <path d="M75 38 L75 80" />
        <path d="M50 38 L50 80" />
        <path d="M20 80 L80 80" />
        <path d="M15 85 L85 85" />
        <path d="M50 22 L50 12" />
        <circle cx="50" cy="10" r="1.5" />
      </svg>
    ),
  };
  return variants[variant] || variants.branch;
};

/* Corner ornament for hero */
const CornerOrnament = ({ size = 180, className = "" }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
    <path d="M20 60 Q40 40 60 50 Q80 60 70 80 Q60 100 80 110 Q100 120 90 140" />
    <ellipse cx="55" cy="48" rx="8" ry="3" transform="rotate(-30 55 48)" />
    <ellipse cx="45" cy="58" rx="8" ry="3" transform="rotate(30 45 58)" />
    <ellipse cx="75" cy="78" rx="8" ry="3" transform="rotate(-30 75 78)" />
    <ellipse cx="65" cy="92" rx="8" ry="3" transform="rotate(30 65 92)" />
    <ellipse cx="92" cy="115" rx="8" ry="3" transform="rotate(-30 92 115)" />
    <ellipse cx="83" cy="130" rx="8" ry="3" transform="rotate(30 83 130)" />
    <circle cx="20" cy="60" r="2" />
    <circle cx="90" cy="140" r="2" />
    <path d="M30 30 Q50 20 70 30" />
    <circle cx="30" cy="30" r="1.5" />
    <circle cx="50" cy="22" r="1.5" />
    <circle cx="70" cy="30" r="1.5" />
  </svg>
);

const SectionFlourish = ({ size = 60 }) => (
  <svg viewBox="0 0 120 40" width={size * 2} height={size * 0.7} fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
    <path d="M5 20 L40 20" />
    <path d="M80 20 L115 20" />
    <circle cx="60" cy="20" r="3" />
    <path d="M50 20 Q55 14 60 17" />
    <path d="M70 20 Q65 14 60 17" />
    <path d="M50 20 Q55 26 60 23" />
    <path d="M70 20 Q65 26 60 23" />
    <ellipse cx="46" cy="20" rx="4" ry="1.5" />
    <ellipse cx="74" cy="20" rx="4" ry="1.5" />
  </svg>
);

const Monogram = ({ letters = "X & A", size = 80, className = "" }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
    <circle cx="100" cy="100" r="80" />
    <circle cx="100" cy="100" r="72" strokeDasharray="2 4" />
    <text x="100" y="118" textAnchor="middle" fontFamily="var(--font-display)" fontStyle="italic" fontSize="60" fill="currentColor" stroke="none">{letters}</text>
  </svg>
);

Object.assign(window, { Botanical, CornerOrnament, SectionFlourish, Monogram });
