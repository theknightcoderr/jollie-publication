import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { routes } from '@/lib/routes';
import { Button } from '@/components/shared/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden bg-charcoal/40 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-paper border-l border-line p-6 flex flex-col justify-between shadow-hover">
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <Link to={routes.home()} onClick={onClose} className="group">
              <span className="block font-serif text-xl font-bold tracking-wider text-charcoal">
                JOLLIE
              </span>
              <span className="block text-[10px] tracking-[0.22em] uppercase text-burgundy font-medium">
                PUBLICATION
              </span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-charcoal hover:text-burgundy rounded"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile primary" className=" flex flex-col space-y-1">
            {links.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`py-3 px-3 rounded text-body font-medium transition-colors ${
                    isActive
                      ? 'bg-cream text-burgundy font-semibold'
                      : 'text-charcoal hover:bg-paper-deep'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-line space-y-3">
          <Button to={routes.community()} onClick={onClose} variant="primary" className="w-full">
            Explore Community
          </Button>
          <Button to={routes.services()} onClick={onClose} variant="secondary" className="w-full">
            Publishing Services
          </Button>
        </div>
      </div>
    </div>
  );
}