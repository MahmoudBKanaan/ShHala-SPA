import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ASSETS } from '@/config/assets';
import { PageShell } from '@/components/layout/PageShell';
import { useLanguage } from '@/contexts/LanguageContext';

type MenuItem = {
  id: string;
  nameAr: string;
  nameEn: string;
  price: string;
  imageIndex: number;
};

type OrderItems = Record<string, number>;

const MENU_ITEMS: MenuItem[] = [
  { id: 'saudi-coffee', nameAr: 'قهوة سعودية', nameEn: 'Saudi Coffee', price: '20', imageIndex: 0 },
  { id: 'minted-green-tea', nameAr: 'شاي أخضر بالنعناع', nameEn: 'Minted Green Tea', price: '25', imageIndex: 1 },
  { id: 'red-tea', nameAr: 'شاي أحمر', nameEn: 'Red Tea', price: '30', imageIndex: 2 },
  { id: 'cheese-bread', nameAr: 'خبز بالجبن', nameEn: 'Cheese Bread', price: '20', imageIndex: 3 },
  { id: 'plain-bread', nameAr: 'خبز سادة', nameEn: 'Plain Bread', price: '18', imageIndex: 4 },
  { id: 'sambuusa-cheese', nameAr: 'سمبوسة جبن', nameEn: 'Sambuusa Cheese', price: '20', imageIndex: 5 },
  { id: 'sambuusa-chicken', nameAr: 'سمبوسة دجاج', nameEn: 'Sambuusa Chicken', price: '18', imageIndex: 6 },
  { id: 'buttered-corn-cup', nameAr: 'كوب ذرة بالزبدة', nameEn: 'Buttered Corn Cup', price: '12', imageIndex: 7 },
  { id: 'spring-roll-sweet', nameAr: 'حلا سبرنج رول', nameEn: 'Spring-Roll Sweet', price: '07', imageIndex: 8 },
  { id: 'americano', nameAr: 'أمريكانو', nameEn: 'Americano', price: '08', imageIndex: 9 },
  { id: 'water', nameAr: 'ماء', nameEn: 'Water', price: '01', imageIndex: 10 },
];

const MENU_COPY = {
  ar: {
    pageTitle: 'المنيو',
    confirm: 'تأكيد الطلب',
    add: 'أضف',
    emptyOrder: 'لم يتم اختيار أي عنصر بعد.',
    messageTitle: 'السلام عليكم',
    messageIntro: 'لو سمحت، أبغى أطلب طلب جديد',
    quantityLabel: 'الكمية',
    unitPriceLabel: 'السعر',
    totalLabel: 'الإجمالي',
    currency: 'ريال',
    closing: 'يعطيكم العافية',
  },
  en: {
    pageTitle: 'Menu',
    confirm: 'Confirm Order',
    add: 'Add',
    emptyOrder: 'No items selected yet.',
    messageTitle: "New Sh'Hala Order",
    messageIntro: 'Hello, I would like to place a new order:',
    quantityLabel: 'Qty',
    unitPriceLabel: 'Price',
    totalLabel: 'Total',
    currency: 'SAR',
    closing: 'Thank you',
  },
} as const;

const WHATSAPP_ORDER_URL = 'https://wa.me/966569472778';

function getItemPrice(item: MenuItem) {
  return Number.parseInt(item.price, 10);
}

function buildOrderMessage({
  orderItems,
  language,
}: {
  orderItems: Array<{ item: MenuItem; quantity: number }>;
  language: 'ar' | 'en';
}) {
  const copy = MENU_COPY[language];
  const isEnglish = language === 'en';
  const total = orderItems.reduce((sum, { item, quantity }) => sum + getItemPrice(item) * quantity, 0);

  const lines = orderItems.map(({ item, quantity }, index) => {
    const itemName = isEnglish ? item.nameEn : item.nameAr;
    const unitTotal = getItemPrice(item) * quantity;

    return `${index + 1}. ${itemName} — ${copy.quantityLabel}: ${quantity} — ${copy.unitPriceLabel}: ${item.price} ${copy.currency} — ${copy.totalLabel}: ${unitTotal} ${copy.currency}`;
  });

  return [
    copy.messageTitle,
    '',
    copy.messageIntro,
    '',
    ...lines,
    '',
    `${copy.totalLabel}: ${total} ${copy.currency}`,
    '',
    copy.closing,
  ].join('\n');
}

function MenuItemTitle({ title, isEnglish }: { title: string; isEnglish: boolean }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text) return;

    const checkOverflow = () => {
      setOverflows(text.scrollWidth > wrap.clientWidth);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(wrap);

    return () => observer.disconnect();
  }, [title]);

  return (
    <h2 className={`menu-item-title${isEnglish ? '' : ' menu-item-title-ar'}`}>
      <span ref={wrapRef} className="menu-item-title-wrap">
        <span
          className={`menu-item-title-track${overflows ? ' menu-item-title-track--marquee' : ''}${
            isEnglish ? '' : ' menu-item-title-track--rtl'
          }`}
        >
          <span ref={textRef} className="menu-item-title-text">
            {title}
          </span>
          {overflows && (
            <span className="menu-item-title-text" aria-hidden>
              {title}
            </span>
          )}
        </span>
      </span>
    </h2>
  );
}

function MenuCard({
  item,
  language,
  onAdd,
}: {
  item: MenuItem;
  language: 'ar' | 'en';
  onAdd: () => void;
}) {
  const image = ASSETS.menu.cards[item.imageIndex] ?? ASSETS.menu.cards[0];
  const isEnglish = language === 'en';
  const title = isEnglish ? item.nameEn : item.nameAr;

  return (
    <article className="menu-item-card">
      <img src={image} alt={title} className="menu-item-image" draggable={false} />

      <section dir={isEnglish ? 'ltr' : 'rtl'} className="menu-item-body">
        <button type="button" onClick={onAdd} className="menu-add-button" aria-label={`${MENU_COPY[language].add} ${title}`}>
          <span className="menu-add-symbol" aria-hidden>
            +
          </span>
        </button>

        <div className="menu-item-text">
          <MenuItemTitle title={title} isEnglish={isEnglish} />
          <p className="menu-item-subtitle">
            <strong>{item.price}</strong>
          </p>
        </div>
      </section>
    </article>
  );
}

export function MenuPage() {
  const { language } = useLanguage();
  const copy = MENU_COPY[language];
  const isEnglish = language === 'en';
  const pageFont = isEnglish ? 'font-english' : 'font-arabic';
  const [orderItems, setOrderItems] = useState<OrderItems>({});

  const visibleItems = useMemo(() => MENU_ITEMS, []);
  const selectedOrderItems = useMemo(
    () =>
      visibleItems
        .map((item) => ({ item, quantity: orderItems[item.id] ?? 0 }))
        .filter(({ quantity }) => quantity > 0),
    [orderItems, visibleItems],
  );
  const orderCount = selectedOrderItems.reduce((sum, { quantity }) => sum + quantity, 0);

  const handleAddItem = (item: MenuItem) => {
    setOrderItems((currentItems) => ({
      ...currentItems,
      [item.id]: (currentItems[item.id] ?? 0) + 1,
    }));
  };

  const handleConfirmOrder = () => {
    if (selectedOrderItems.length === 0) {
      window.alert(copy.emptyOrder);
      return;
    }

    const message = buildOrderMessage({ orderItems: selectedOrderItems, language });
    window.open(`${WHATSAPP_ORDER_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setOrderItems({});
  };

  return (
    <PageShell className={`menu-page-shell ${pageFont}`}>
      <section
        dir={isEnglish ? 'ltr' : 'rtl'}
        lang={language}
        className={`menu-page-content ${pageFont}`}
      >
        <h1 className="menu-title-pill">{copy.pageTitle}</h1>

        <section className="menu-grid" aria-label={isEnglish ? 'Menu items' : 'عناصر المنيو'}>
          {visibleItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              language={language}
              onAdd={() => handleAddItem(item)}
            />
          ))}
        </section>

        <section
          className={`menu-order-bar ${isEnglish ? 'menu-order-bar-english' : ''}`}
          aria-label={isEnglish ? 'Confirm order' : 'تأكيد الطلب'}
        >
          <span className="menu-order-count">{orderCount}</span>
          <button type="button" onClick={handleConfirmOrder} className="menu-confirm-button">
            {copy.confirm}
          </button>
        </section>
      </section>
    </PageShell>
  );
}
