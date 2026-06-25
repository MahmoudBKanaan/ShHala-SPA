import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HomeFeatureStrip() {
  const { language } = useLanguage();
  const featureText = language === 'en' ? 'Natural Ingredients' : 'مكونات طبيعية';

  return (
    <section className="mx-auto mt-[23px] w-[272px]" aria-label={language === 'en' ? "Sh'Hala features" : 'مزايا شَهلا'}>
      <div className="grid grid-cols-2 gap-x-[12px] gap-y-[9px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex h-[38px] items-center justify-center rounded-[9px] border-[4px] border-shhala-green bg-[#fff8dc] px-2 shadow-[inset_0_0_0_1px_#d7b84f,0_4px_5px_rgba(0,0,0,0.28)]"
          >
            <Star size={14} fill="#c49a27" className="ml-1 shrink-0 text-[#c49a27]" />
            <span
              className={`whitespace-nowrap text-[10px] font-bold leading-none text-shhala-green-dark ${
                language === 'en' ? 'font-english' : 'font-arabic'
              }`}
            >
              {featureText}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
