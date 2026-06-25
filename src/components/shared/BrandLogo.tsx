import { Link } from 'react-router-dom';

export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-1 ${className}`}>
      <span className="font-english text-2xl font-bold leading-none text-shhala-red md:text-3xl">
        Sh<span className="text-shhala-green">&apos;Hala</span>
      </span>
      <span className="hidden text-xs font-medium text-shhala-green sm:block">ش هلا</span>
    </Link>
  );
}