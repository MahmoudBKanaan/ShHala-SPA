import { Link } from 'react-router-dom';
import { ASSETS } from '@/config/assets';
import { PageShell } from '@/components/layout/PageShell';
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
    href: 'https://wa.me/qr/HHKEO63NHYYDP1',
  },
  {
    key: 'snapchat',
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/shhala_sa?share_id=Tiu42HcgbuM&locale=en-US',
  },
] as const;

const CONTACT_COPY = {
  ar: {
    pageTitle: 'تواصل معنا',
    headline: 'دائماً نسعد بخدمتكم',
    subtitle: 'للاستفسارات، الطلبات، الملاحظات، أو الشكاوى',
    subtitleSecond: 'فريق شَهلا قريب منك',
    cardAlt: 'طرق التواصل مع شَهلا',
    cta: 'استعرض المنيو',
  },
  en: {
    pageTitle: 'Contact Us',
    headline: 'Always Happy to Serve You',
    subtitle: 'For questions, orders, feedback, or complaints',
    subtitleSecond: "Sh'Hala team is close to you",
    cardAlt: "Sh'Hala contact methods",
    cta: 'Browse Menu',
  },
} as const;

export function ContactPage() {
  const { language } = useLanguage();
  const copy = CONTACT_COPY[language];
  const isEnglish = language === 'en';
  const pageFont = isEnglish ? 'font-english' : 'font-arabic';
  const socialAssets = ASSETS.social[language];

  return (
    <PageShell className={`contact-page-shell ${pageFont}`}>
      <section
        dir={isEnglish ? 'ltr' : 'rtl'}
        lang={language}
        className={`contact-page-content ${pageFont}`}
      >
        <h1 className="contact-title-pill">{copy.pageTitle}</h1>

        <h2 className="contact-headline">{copy.headline}</h2>

        <p className="contact-subtitle">
          {copy.subtitle}
          <br />
          {copy.subtitleSecond}
        </p>

        <section className="contact-card" aria-label={isEnglish ? 'Social media links' : 'روابط التواصل الاجتماعي'}>
          <img
            src={ASSETS.contact.card}
            alt={copy.cardAlt}
            className="contact-card-image"
            draggable={false}
          />

          <div className="contact-social-grid">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
                aria-label={social.label}
              >
                <img
                  src={socialAssets[social.key]}
                  alt={social.label}
                  className="contact-social-image"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </section>

        <Link to="/menu" className="contact-menu-cta transition hover:bg-shhala-red-hover active:scale-[0.98]">
          {copy.cta}
        </Link>
      </section>
    </PageShell>
  );
}
