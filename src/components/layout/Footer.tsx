import { Link } from 'react-router-dom';
import { Container } from './Container';
import { routes } from '@/lib/routes';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream dark-surface border-t border-line">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream/15">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to={routes.home()} className="inline-block">
              <span className="block font-serif text-2xl font-bold tracking-[0.08em] text-cream">
                JOLLIE
              </span>
              <span className="block text-[10px] tracking-[0.24em] uppercase text-gold font-medium">
                PUBLICATION
              </span>
            </Link>
            <p className="text-caption text-cream/80 max-w-sm leading-relaxed">
              An independent publishing house and literary community dedicated to thoughtful books,
              careful editing, and emerging voices.
            </p>
          </div>

          {/* Publishing Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-eyebrow uppercase tracking-widest text-gold font-semibold">
              Publishing House
            </p>
            <ul className="space-y-2.5 text-caption">
              <li>
                <Link to={routes.books()} className="text-cream/80 hover:text-cream transition-colors">
                  Book Catalogue
                </Link>
              </li>
              <li>
                <Link to={routes.services()} className="text-cream/80 hover:text-cream transition-colors">
                  Publishing Services
                </Link>
              </li>
              <li>
                <Link to={routes.events()} className="text-cream/80 hover:text-cream transition-colors">
                  Events &amp; Submissions
                </Link>
              </li>
              <li>
                <Link to={routes.about()} className="text-cream/80 hover:text-cream transition-colors">
                  About Jollie
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Contact */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-eyebrow uppercase tracking-widest text-gold font-semibold">
              Community &amp; Enquiries
            </p>
            <ul className="space-y-2.5 text-caption">
              <li>
                <Link to={routes.community()} className="text-cream/80 hover:text-cream transition-colors">
                  Writers’ Community
                </Link>
              </li>
              <li>
                <Link to={routes.contact()} className="text-cream/80 hover:text-cream transition-colors">
                  Contact &amp; Manuscript Enquiries
                </Link>
              </li>
            </ul>
            <p className="text-xs text-cream/60 pt-2">
              TODO (Jollie): provide official correspondence address and social channels in siteConfig.ts.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-cream/65">
          <p>© {new Date().getFullYear()} Jollie Publication. All rights reserved.</p>
          <p>Phase 1 Front-End Preview — Mock catalogue &amp; community content.</p>
        </div>
      </Container>
    </footer>
  );
}