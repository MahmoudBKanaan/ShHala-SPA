import { ASSETS } from '@/config/assets';

export function BrandBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f8f4ed]" aria-hidden>
      <picture className="block h-full w-full">
        <source media="(min-width: 768px)" srcSet={ASSETS.backgroundDesktop} />
        <img
          src={ASSETS.background}
          alt=""
          className="brand-background-image h-full w-full object-fill md:object-cover md:object-center"
          draggable={false}
        />
      </picture>
    </div>
  );
}
