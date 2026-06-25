import { Link } from 'react-router-dom';
import { PageShell } from '@/components/layout/PageShell';
import { useLanguage } from '@/contexts/LanguageContext';

const STORY_COPY = {
  ar: {
    pageTitle: 'قصتنا',
    cta: 'استعرض المنيو',
    sections: [
      {
        title: 'قصّتنا',
        body: 'تأسست شَهلا في أبها على يد رائد أعمال محلي يمتلك خبرة طويلة في قطاع الضيافة، بهدف تقديم تجربة مقهى يومية أفضل، مستوحاة من دفء الضيافة السعودية، وثقافة الشاي الأصيلة. تجمع شَهلا بين المشروبات عالية الجودة، والوجبات الخفيفة الطازجة، والخدمة السريعة والتحسين المستمر. سواء كان العميل متجهاً إلى العمل، أو في رحلة سفر، أو يقضي وقتاً مع عائلته، تسعى شَهلا إلى أن تكون محطة مألوفة تجعل يومه أفضل.',
      },
      {
        title: 'الغاية',
        body: 'إثراء الرحلات اليومية للناس وجعلها أكثر دفئاً وسهولة ومتعة من خلال الضيافة المميزة والمنتجات عالية الجودة، والتحسين المستمر.',
      },
      {
        title: 'قيمنا',
        body: 'الضيافة: نجعل كل عميل يشعر بالترحيب والتقدير. الجودة: مكونات مميزة وتحضير متقن في كل طلب. الأصالة: مستوحاة من كرم الضيافة السعودية وقيمها. الكرم: نترجم قيم الكرم السعودي إلى تفاصيل ملموسة في كل خدمة ومنتج نقدمه.',
      },
    ],
  },
  en: {
    pageTitle: 'Our Story',
    cta: 'Browse Menu',
    sections: [
      {
        title: 'Our Story',
        body: "Sh'Hala was founded in Abha by a local son of the city who wanted a better daily café experience, inspired by warm moments, Saudi hospitality, and the authentic culture of tea. Sh'Hala brings together high-quality drinks, fresh light bites, fast service, and continuous design improvement. Whether you are on your way to work, starting your morning, traveling, or spending time with family, Sh'Hala aims to be a familiar stop that makes your day better.",
      },
      {
        title: 'Purpose',
        body: 'To enrich people’s daily journeys and make them warmer, easier, and more enjoyable through distinctive hospitality, high-quality products, and continuous improvement.',
      },
      {
        title: 'Values',
        body: 'Hospitality: we make every customer feel welcomed and appreciated. Quality: premium ingredients and careful preparation in every order. Authenticity: inspired by Saudi hospitality and its values. Generosity: we translate Saudi generosity into tangible details in every service and product we offer.',
      },
    ],
  },
} as const;

export function StoryPage() {
  const { language } = useLanguage();
  const copy = STORY_COPY[language];
  const isEnglish = language === 'en';
  const storyFont = isEnglish ? 'font-english' : 'font-arabic';

  return (
    <PageShell className={`story-page-shell ${storyFont}`}>
      <section
        dir={isEnglish ? 'ltr' : 'rtl'}
        lang={language}
        className={`story-page-content flex flex-col items-center ${storyFont}`}
      >
        <h1 className="story-title-pill">{copy.pageTitle}</h1>

        <div className="story-sections">
          {copy.sections.map((section) => (
            <article key={section.title} className="flex w-full flex-col">
              <div
                className={`story-section-heading ${
                  isEnglish ? 'story-section-heading-en' : 'story-section-heading-ar'
                }`}
              >
                <h2
                  dir={isEnglish ? 'ltr' : 'rtl'}
                  className={`story-section-title ${isEnglish ? 'font-black' : 'font-bold'}`}
                >
                  {section.title}
                </h2>
                <div className="story-title-rule">
                  <span className="absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rotate-45 rounded-[1px] bg-shhala-green-dark ltr:left-0 rtl:right-0" />
                  <span className="absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rotate-45 rounded-[1px] bg-shhala-green-dark ltr:right-0 rtl:left-0" />
                </div>
              </div>

              <p className={`story-copy ${isEnglish ? 'text-left' : 'text-right'}`}>
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <Link to="/menu" className="story-cta transition active:scale-[0.98]">
          {copy.cta}
        </Link>
      </section>
    </PageShell>
  );
}
