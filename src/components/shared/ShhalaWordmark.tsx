import { Link } from 'react-router-dom';
import { ASSETS } from '@/config/assets';

type ShhalaWordmarkProps = {
  className?: string;
  variant?: 'english' | 'arabic';
};

export function ShhalaWordmark({ className = '', variant = 'english' }: ShhalaWordmarkProps) {
  const isArabicLogo = variant === 'arabic';

  return (
    <Link to="/" className={`inline-block ${className}`} aria-label="شَهلا — الصفحة الرئيسية">
      <img
        src={isArabicLogo ? ASSETS.logo.arabic : ASSETS.logo.english}
        alt={isArabicLogo ? 'شَهلا' : "Sh'Hala"}
        className="h-10 w-auto max-w-[155px] object-contain object-left mix-blend-multiply md:h-14 md:max-w-[230px]"
        draggable={false}
      />
    </Link>
  );
}
