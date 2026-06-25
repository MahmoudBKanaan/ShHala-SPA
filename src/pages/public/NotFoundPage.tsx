import { Link } from 'react-router-dom';
import { PageShell } from '@/components/layout/PageShell';
import { useLanguage } from '@/contexts/LanguageContext';

export function NotFoundPage() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <PageShell className="items-center text-center">
      <h1 className={`text-6xl font-bold text-shhala-red ${isEnglish ? 'font-english' : 'font-arabic'}`}>
        404
      </h1>
      <p className={`mt-3 text-lg font-bold text-shhala-green-dark ${isEnglish ? 'font-english' : 'font-arabic'}`}>
        {isEnglish ? 'Page not found' : 'الصفحة غير موجودة'}
      </p>
      <Link
        to="/"
        className={`btn-primary mt-6 inline-flex ${isEnglish ? 'font-english' : 'font-arabic'}`}
      >
        {isEnglish ? 'Back to Home' : 'العودة للرئيسية'}
      </Link>
    </PageShell>
  );
}