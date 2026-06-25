type Props = { titleAr: string; titleEn?: string; variant?: 'green' | 'green-pins' };
export function SectionBadge({ titleAr, titleEn, variant = 'green' }: Props) {
  return <div className={`mx-auto mb-4 inline-flex min-w-[76px] flex-col items-center rounded-full bg-shhala-green px-4 py-1.5 text-center font-semibold leading-tight text-white shadow-soft ${variant === 'green-pins' ? 'relative' : ''}`}>
    <span className="text-xs font-bold">{titleAr}</span>
    {titleEn && <span className="font-english text-[9px] font-normal opacity-80">{titleEn}</span>}
  </div>;
}
