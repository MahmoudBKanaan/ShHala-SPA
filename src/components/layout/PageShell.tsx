import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = '' }: PageShellProps) {
  const isHome = useLocation().pathname === '/';

  return (
    <main
      className={`page-shell relative z-10 mx-auto flex w-full max-w-[455px] flex-col px-4 pb-8 pt-3 ${
        isHome ? '' : 'ml-[30px] w-[calc(100%-30px)]'
      } ${className}`}
    >
      {children}
    </main>
  );
}