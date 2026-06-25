import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '@/config/assets';
import { BRAND } from '@/config/brand';
import { PageShell } from '@/components/layout/PageShell';
import { useLanguage } from '@/contexts/LanguageContext';

const LOCATIONS_COPY = {
  ar: {
    pageTitle: 'الفروع',
    headline: 'زورونا في أبها',
    subtitle: 'محطتك المميزة للشاي والقهوة السعودية',
    subtitleSecond: 'والوجبات الخفيفة',
    branch: 'الفرع الرئيسي',
    location: 'المملكة العربية السعودية - أبها - المحالة',
    features: [
      { key: 'car', label: 'خدمة السيارات' },
      { key: 'clock', label: 'مفتوح يومياً' },
      { key: 'whatsapp', label: 'واتساب مباشر' },
    ],
    cardAlt: 'خريطة فرع شَهلا الرئيسي',
    mapButtonAlt: 'افتح الموقع',
    whatsappAlt: 'تواصل واتس أب',
    ready: 'جاهزون لاستقبالكم',
    cta: 'استعرض المنيو',
  },
  en: {
    pageTitle: 'Locations',
    headline: 'Visit Us in Abha',
    subtitle: 'Your special stop for tea and Saudi coffee',
    subtitleSecond: 'and light bites',
    branch: 'Main Branch',
    location: 'Kingdom of Saudi Arabia - Abha - Al-Mahalah',
    features: [
      { key: 'car', label: 'Drive-thru' },
      { key: 'clock', label: 'Open Daily' },
      { key: 'whatsapp', label: 'WhatsApp' },
    ],
    cardAlt: "Sh'Hala main branch map",
    mapButtonAlt: 'Open Location',
    whatsappAlt: 'Contact WhatsApp',
    ready: "you're Welcome",
    cta: 'Browse Menu',
  },
} as const;

const LOCATION_CARDS = [0, 1, 2] as const;
const LOCATION_CAROUSEL_CARDS = [...LOCATION_CARDS, ...LOCATION_CARDS, ...LOCATION_CARDS];

function LocationCard({
  copy,
  language,
}: {
  copy: (typeof LOCATIONS_COPY)['ar'] | (typeof LOCATIONS_COPY)['en'];
  language: 'ar' | 'en';
}) {
  const socialAssets = ASSETS.social[language];

  return (
    <article className="location-card">
      <img src={ASSETS.locations.card} alt={copy.cardAlt} className="location-card-hero" draggable={false} />

      <section dir={language === 'en' ? 'ltr' : 'rtl'} className="location-card-body">
        <h2 className="location-card-title">{copy.branch}</h2>
        <p className="location-card-location">{copy.location}</p>

        <div className="location-feature-row">
          {copy.features.map((feature) => (
            <div key={feature.key} className="location-feature">
              <img
                src={ASSETS.locations.icons[feature.key]}
                alt=""
                className="location-feature-icon"
                draggable={false}
                aria-hidden="true"
              />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        <Link
          to={BRAND.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="location-map-button"
          aria-label={copy.mapButtonAlt}
        >
          <img src={ASSETS.locations.button[language]} alt={copy.mapButtonAlt} draggable={false} />
        </Link>

        <a
          href="https://wa.me/966569472778"
          target="_blank"
          rel="noreferrer"
          className="location-whatsapp-button"
          aria-label={copy.whatsappAlt}
        >
          <img src={socialAssets.whatsapp} alt={copy.whatsappAlt} draggable={false} />
        </a>
      </section>

      <span className="location-ready-pill">{copy.ready}</span>
    </article>
  );
}

export function LocationsPage() {
  const { language } = useLanguage();
  const copy = LOCATIONS_COPY[language];
  const isEnglish = language === 'en';
  const pageFont = isEnglish ? 'font-english' : 'font-arabic';
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) return;

    const card = carousel.querySelector<HTMLElement>('.location-card');
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const loopWidth = carousel.scrollWidth / 3;
    let animationFrame = 0;

    carousel.scrollLeft = loopWidth;

    if (prefersReducedMotion) return;

    const moveCarousel = () => {
      carousel.scrollLeft += 0.35;

      if (carousel.scrollLeft >= loopWidth * 2) {
        carousel.scrollLeft -= loopWidth;
      } else if (carousel.scrollLeft <= loopWidth * 0.5) {
        carousel.scrollLeft += loopWidth;
      }

      animationFrame = window.requestAnimationFrame(moveCarousel);
    };

    animationFrame = window.requestAnimationFrame(moveCarousel);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [language]);

  return (
    <PageShell className={`locations-page-shell ${pageFont}`}>
      <section
        dir={isEnglish ? 'ltr' : 'rtl'}
        lang={language}
        className={`locations-page-content ${pageFont}`}
      >
        <h1 className="locations-title-pill">{copy.pageTitle}</h1>

        <h2 className="locations-headline">{copy.headline}</h2>

        <p className="locations-subtitle">
          <span className="locations-subtitle-first">{copy.subtitle}</span>
          <br />
          <span className="locations-subtitle-second">{copy.subtitleSecond}</span>
        </p>

        <section
          className="locations-carousel-shell md:hidden"
          aria-label={isEnglish ? 'Branch cards carousel' : 'بطاقات الفروع'}
        >
          <div ref={carouselRef} dir="ltr" className="locations-carousel">
            {LOCATION_CAROUSEL_CARDS.map((cardIndex, index) => (
              <LocationCard key={`${cardIndex}-${index}`} copy={copy} language={language} />
            ))}
          </div>
        </section>

        <section
          className="locations-cards-static hidden md:flex"
          aria-label={isEnglish ? 'Branch cards' : 'بطاقات الفروع'}
        >
          {LOCATION_CARDS.map((cardIndex) => (
            <LocationCard key={cardIndex} copy={copy} language={language} />
          ))}
        </section>

        <Link to="/menu" className="locations-menu-cta transition hover:bg-shhala-red-hover active:scale-[0.98]">
          {copy.cta}
        </Link>
      </section>
    </PageShell>
  );
}
