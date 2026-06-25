import { ASSETS } from '@/config/assets';

export function HomeHero() {
  return (
    <section className="home-hero-section relative h-[205px] w-full overflow-visible bg-transparent md:mx-auto md:mt-0 md:h-[329px] md:w-[70%] md:max-w-[770px]">
      <div className="absolute -top-[18px] bottom-0 left-0 right-0 bg-[#a8c96b] shadow-[0_8px_11px_rgba(24,48,29,0.34)] md:inset-0 md:rounded-[28px]" aria-hidden />
      <div className="absolute -top-[18px] bottom-[6px] left-0 right-[6px] overflow-hidden rounded-br-[27px] md:inset-0 md:rounded-[28px]">
        <img
          src={ASSETS.heroes.home}
          alt="كوب شَهلا الساخن مع النعناع"
          className="h-full w-full max-w-none select-none object-cover object-center [transform-origin:58%_72%] scale-[1.5] md:scale-100"
          draggable={false}
        />
      </div>
    </section>
  );
}
