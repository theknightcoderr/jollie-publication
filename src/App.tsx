import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BooksPage from '@/pages/BooksPage';
import BookDetailPage from '@/pages/BookDetailPage';
import ServicesPage from '@/pages/ServicesPage';
import CommunityPage from '@/pages/CommunityPage';
import ArticlePage from '@/pages/ArticlePage';
import WriterProfilePage from '@/pages/WriterProfilePage';
import EventsPage from '@/pages/EventsPage';
import EventDetailPage from '@/pages/EventDetailPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Scroll Restoration Utility: Automatically scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-paper text-charcoal selection:bg-burgundy/20">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:slug" element={<BookDetailPage />} />
            <Route path="/publishing-services" element={<ServicesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/:slug" element={<ArticlePage />} />
            <Route path="/writers/:username" element={<WriterProfilePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}