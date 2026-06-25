import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShhalaWordmark } from '@/components/shared/ShhalaWordmark';
import { useLanguage, type AppLanguage } from '@/contexts/LanguageContext';

const NAV_LINKS = [
  { to: '/', label: 'الرئيسية', labelEn: 'Home' },
  { to: '/story', label: 'قصتنا', labelEn: 'Our Story' },
  { to: '/menu', label: 'المنيو', labelEn: 'Menu' },
  { to: '/locations', label: 'الفروع', labelEn: 'Locations' },
  { to: '/contact', label: 'تواصل معنا', labelEn: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const handleLanguageSelect = (nextLanguage: AppLanguage) => {
    setLanguage(nextLanguage);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="app-bar-stack home-app-bar relative w-full pb-[4px]">
        <div className="app-bar-duplicate" aria-hidden />
        <div
          dir="ltr"
          className="app-bar-original relative z-[2] flex h-[clamp(68px,20.15vw,82px)] w-full items-center justify-between px-3 py-1 md:h-[86px] md:px-9 lg:px-14"
        >
          <ShhalaWordmark
            variant={language === 'en' ? 'arabic' : 'english'}
            className={`shrink-0 [&_img]:!h-[clamp(58px,15.7vw,66px)] [&_img]:!max-w-[clamp(132px,36.8vw,150px)] [&_img]:drop-shadow-[0_5px_4px_rgba(0,0,0,0.34)] ${
              language === 'en'
                ? 'translate-x-[calc(clamp(58px,15.7vw,66px)*0.1)]'
                : ''
            }`}
          />

          <nav
            dir={language === 'en' ? 'ltr' : 'rtl'}
            className="hidden items-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 lg:gap-12"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`border-b-2 px-1 py-2 text-sm font-bold transition ${
                  language === 'en' ? 'font-english' : 'font-arabic'
                } ${
                  location.pathname === link.to
                    ? 'border-shhala-green text-shhala-green'
                    : 'border-transparent text-shhala-green/75 hover:text-shhala-green'
                }`}
              >
                {language === 'en' ? link.labelEn : link.label}
              </Link>
            ))}
          </nav>

          {!open && (
            <Link
              to="/menu"
              dir={language === 'en' ? 'ltr' : 'rtl'}
              className={`absolute left-1/2 inline-flex h-[clamp(36px,10.8vw,44px)] w-[clamp(126px,36.8vw,150px)] -translate-x-1/2 items-center justify-center rounded-full bg-[#075c34] p-0 text-[clamp(18px,5.6vw,23px)] font-normal leading-none text-white shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition md:hidden ${
                language === 'en' ? 'font-english' : 'font-dinar-one'
              }`}
            >
              <span className="block w-full text-center leading-none">
                {language === 'en' ? 'Order Now' : 'أطلب الآن'}
              </span>
            </Link>
          )}

          <div className="flex shrink-0 items-center gap-[7px] md:gap-3">
            {!open && (
              <Link
                to="/menu"
                dir={language === 'en' ? 'ltr' : 'rtl'}
                className={`hidden md:inline-flex h-[clamp(36px,10.8vw,44px)] w-[clamp(126px,36.8vw,150px)] items-center justify-center rounded-full bg-[#075c34] p-0 text-[clamp(18px,5.6vw,23px)] font-normal leading-none text-white shadow-[0_5px_7px_rgba(0,0,0,0.3)] transition ${
                  language === 'en' ? 'font-english' : 'font-dinar-one'
                }`}
              >
                <span className="block w-full text-center leading-none">
                  {language === 'en' ? 'Order Now' : 'أطلب الآن'}
                </span>
              </Link>
            )}

            <div dir="ltr" className={`flex gap-[7px] ${open ? 'flex' : 'hidden md:flex'}`}>
              {(['ar', 'en'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleLanguageSelect(option)}
                  className={`font-english flex shrink-0 items-center justify-center rounded-[9px] bg-[#075c34] font-black uppercase leading-none text-[#fff7e3] shadow-[0_5px_7px_rgba(0,0,0,0.3)] ring-2 transition ${
                    open
                      ? 'h-[clamp(29px,8.4vw,34px)] w-[clamp(38px,10.5vw,43px)] text-[clamp(17px,4.9vw,21px)]'
                      : 'h-8 w-10 text-sm'
                  } ${
                    language === option ? 'ring-[#c8d999] opacity-100' : 'ring-transparent opacity-95'
                  }`}
                  aria-pressed={language === option}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 shrink-0 items-center justify-center text-shhala-green md:hidden [&_svg]:!h-[clamp(31px,9.3vw,38px)] [&_svg]:!w-[clamp(31px,9.3vw,38px)] [&_svg]:drop-shadow-[0_4px_3px_rgba(0,0,0,0.38)]"
              aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {open ? <X size={27} strokeWidth={3} /> : <Menu size={31} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full overflow-hidden border-t border-shhala-green/10 bg-[#F9F1DC] md:hidden"
          >
            <ul className="space-y-1 px-4 py-4" dir={language === 'en' ? 'ltr' : 'rtl'}>
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-center ${
                      location.pathname === link.to ? 'bg-shhala-green text-white' : 'text-shhala-green'
                    }`}
                  >
                    <span
                      aria-hidden
                      className="relative h-[2px] w-10 rounded-full bg-current opacity-80 before:absolute before:left-1/2 before:top-1/2 before:h-[10px] before:w-[10px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:rounded-[3px] before:border-2 before:border-current before:bg-[#F9F1DC] after:absolute after:right-0 after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-full after:bg-current"
                    />
                    <span
                      className={`min-w-[98px] font-bold ${language === 'en' ? 'font-english' : 'font-arabic'}`}
                    >
                      {language === 'en' ? link.labelEn : link.label}
                    </span>
                    <span
                      aria-hidden
                      className="relative h-[2px] w-10 rounded-full bg-current opacity-80 before:absolute before:left-1/2 before:top-1/2 before:h-[10px] before:w-[10px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:rounded-[3px] before:border-2 before:border-current before:bg-[#F9F1DC] after:absolute after:left-0 after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-full after:bg-current"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
