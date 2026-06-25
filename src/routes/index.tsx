import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/public/HomePage';
import { StoryPage } from '@/pages/public/StoryPage';
import { MenuPage } from '@/pages/public/MenuPage';
import { LocationsPage } from '@/pages/public/LocationsPage';
import { ContactPage } from '@/pages/public/ContactPage';
import { NotFoundPage } from '@/pages/public/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}