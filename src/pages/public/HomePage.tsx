import { Link } from 'react-router-dom';
import { ASSETS } from '@/config/assets';
import { BRAND } from '@/config/brand';
import { PageShell } from '@/components/layout/PageShell';
import { HomeHero } from '@/components/features/landing/HomeHero';
import { HomeIconWaterfall } from '@/components/features/landing/HomeIconWaterfall';
import { useLanguage } from '@/contexts/LanguageContext';

const SOCIAL_LINKS = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/shhala_sa?utm_source=qr',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@shhala_sa?is_from_webapp=1&sender_device=pc',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${BRAND.whatsapp}`,
  },
  {
    key: 'snapchat',
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/shhala_sa?share_id=Tiu42HcgbuM&locale=en-US',
  },
] as const;

export function HomePage() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const socialAssets = ASSETS.social[language];

  return (
    <PageShell className="home-page-shell min-h-[calc(100dvh-72px)] max-w-none !px-0 pb-3 !pt-0 md:max-w-[1200px] md:!px-8 md:!pt-0">
      <HomeHero />
      <HomeIconWaterfall side="left" />
      <HomeIconWaterfall side="right" />

      <div className="home-main-content ml-[30px] w-[calc(100%-30px)] md:mx-auto md:w-full">
        <section className="home-brand-panel flex flex-col items-center text-center">
          <img
            src={isEnglish ? ASSETS.logo.english : ASSETS.logo.arabic}
            alt={isEnglish ? "Sh'Hala" : 'شَهلا'}
            className="home-main-logo -translate-y-[5%] mt-[18px] h-[190px] w-[88%] max-w-[330px] select-none object-contain drop-shadow-[0_8px_6px_rgba(0,0,0,0.3)] md:h-[260px] md:w-[460px]"
            draggable={false}
          />

          <div className="home-tagline-wrap -mt-2">
            <h1
              className={`home-tagline leading-none text-shhala-green-dark ${
                isEnglish
                  ? 'font-english text-[1.6rem] font-normal tracking-[-0.04em] md:text-[1.79rem]'
                  : 'font-home-arabic text-[2.1rem] font-normal md:text-[2.35rem]'
              }`}
            >
              {isEnglish ? BRAND.taglineEn : BRAND.tagline}
            </h1>
          </div>

          <Link
            to="/menu"
            className={`home-order-cta mt-[20px] w-[78%] max-w-[296px] rounded-[26px] bg-[#AA202D] py-[14px] text-center text-[25px] font-normal leading-[30px] text-white shadow-none transition hover:bg-[#8F1B26] active:scale-[0.98] ${
              isEnglish ? 'font-english' : 'font-arabic'
            }`}
          >
            {isEnglish ? 'Order Now' : 'أطلب الآن'}
          </Link>

          <section
            className="home-social-grid mt-[18px] grid w-[78%] max-w-[280px] grid-cols-2 gap-x-[10px] gap-y-[8px]"
            aria-label={isEnglish ? "Sh'Hala social media links" : 'روابط شَهلا الاجتماعية'}
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="home-social-link block rounded-full transition hover:scale-[1.02] active:scale-[0.98]"
                aria-label={social.label}
              >
                <img
                  src={socialAssets[social.key]}
                  alt={social.label}
                  className="home-social-image h-auto w-full select-none object-contain"
                  draggable={false}
                />
              </a>
            ))}
          </section>
        </section>

        <p
          className={`home-location-text mt-[16px] text-center text-[14px] font-bold leading-none text-shhala-green-dark ${
            isEnglish ? 'font-english' : 'font-arabic'
          }`}
        >
          {isEnglish ? BRAND.locationEn : BRAND.location}
        </p>
      </div>
    </PageShell>
  );
}
