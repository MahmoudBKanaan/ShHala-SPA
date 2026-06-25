import { useLocation } from 'react-router-dom';
import { IconWaterfallTape } from '@/components/layout/IconWaterfallTape';

export function AppIconWaterfall() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return null;
  }

  return (
    <>
      <IconWaterfallTape side="left" />
      <IconWaterfallTape side="right" />
    </>
  );
}