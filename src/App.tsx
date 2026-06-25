import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { BrandBackground } from '@/components/layout/BrandBackground';
import { AppIconWaterfall } from '@/components/layout/AppIconWaterfall';
import { AppRoutes } from '@/routes';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative min-h-dvh">
          <BrandBackground />
          <Navbar />
          <AppIconWaterfall />
          <AppRoutes />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
