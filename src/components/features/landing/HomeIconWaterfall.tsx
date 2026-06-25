import type { LucideIcon } from 'lucide-react';
import {
  Bean,
  CakeSlice,
  Candy,
  Cherry,
  Coffee,
  Cookie,
  Croissant,
  CupSoda,
  Donut,
  IceCreamBowl,
  Leaf,
  Mountain,
  Pizza,
  Popcorn,
  Sandwich,
  Soup,
  Sprout,
  UtensilsCrossed,
  Wheat,
} from 'lucide-react';

const ICONS: LucideIcon[] = [
  Coffee,
  Croissant,
  Leaf,
  CupSoda,
  Bean,
  Sandwich,
  Sprout,
  Cookie,
  Mountain,
  Soup,
  Cherry,
  CakeSlice,
  Wheat,
  Donut,
  Pizza,
  Candy,
  IceCreamBowl,
  Popcorn,
  UtensilsCrossed,
];

/** Two mirrored halves keep the -50% translateY loop seamless. */
const STREAM_COUNT = 6;

type HomeIconWaterfallProps = {
  side?: 'left' | 'right';
};

function IconStream() {
  return (
    <div className="flex flex-col items-center gap-[3px] py-[3px]" aria-hidden>
      {ICONS.map((Icon, index) => (
        <span
          key={index}
          className={`grid h-[17px] w-[22px] shrink-0 place-items-center rounded-[4px] ${
            index % 5 === 1
              ? 'bg-shhala-green text-[#e9efce]'
              : index % 5 === 3
                ? 'bg-[#b9cf8a] text-shhala-green-dark'
                : 'text-shhala-green'
          }`}
        >
          <Icon size={14} strokeWidth={2.2} />
        </span>
      ))}
    </div>
  );
}

export function HomeIconWaterfall({ side = 'left' }: HomeIconWaterfallProps) {
  const isLeft = side === 'left';

  return (
    <aside
      className={
        isLeft
          ? 'home-icon-waterfall-tape home-icon-waterfall-tape--left pointer-events-none absolute left-0 top-[199px] z-30 h-[calc(100dvh-72px-199px)] w-[30px] overflow-hidden border-r border-shhala-green/25 bg-[#e8edcf]/95 shadow-[2px_0_5px_rgba(20,76,45,0.12)] md:w-11'
          : 'home-icon-waterfall-tape home-icon-waterfall-tape--right pointer-events-none z-30 hidden w-[30px] overflow-hidden border-l border-shhala-green/25 bg-[#e8edcf]/95 shadow-[-2px_0_5px_rgba(20,76,45,0.12)] md:block md:w-11'
      }
      aria-hidden="true"
    >
      <div className="home-icon-waterfall flex flex-col will-change-transform">
        {Array.from({ length: STREAM_COUNT }, (_, index) => (
          <IconStream key={index} />
        ))}
      </div>
    </aside>
  );
}