import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { routes } from '@/lib/routes';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 text-caption text-ink-soft">
        <li>
          <Link to={routes.home()} className="hover:text-burgundy transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-ink-soft/60" strokeWidth={1.5} aria-hidden="true" />
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-burgundy transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-charcoal font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}