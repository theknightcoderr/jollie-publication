import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Container } from './Container';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/shared/Button';
import { routes } from '@/lib/routes';

const NAV_LINKS = [
  { label: 'Home', path: routes.home() },
  { label: 'Books', path: routes.books() },
  { label: 'Publishing Services', path: routes.services() },
  { label: 'Community', path: routes.community() },
  { label: 'Events', path: routes.events() },
  { label: 'About', path: routes.about() },
  { label: 'Contact', path: routes.contact() },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative z-40 bg-paper border-b border-line">
      <Container className="h-20 flex items-center justify-between gap-6">
        {/* Clean text wordmark per §2.1 */}
        <Link to={routes.home()} className="shrink-0 group py-1">
          <span className="block font-serif text-2xl font-bold tracking-[0.08em] text-charcoal group-hover:text-burgundy transition-colors">
            JOLLIE
          </span>
          <span className="block text-[10px] tracking-[0.24em] uppercase text-ink-soft font-medium -mt-1">
            PUBLICATION
          </span>
        </Link>

        {/* Desktop Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-caption font-medium transition-colors py-2 relative ${
                  isActive ? 'text-burgundy font-semibold' : 'text-charcoal hover:text-burgundy'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button to={routes.community()} variant="secondary">
            Writers’ Community
          </Button>
          <Button to={routes.services()} variant="primary">
            Publish With Us
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-charcoal hover:text-burgundy rounded"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </Container>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </header>
  );
}