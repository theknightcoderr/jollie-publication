import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import type { JollieEvent } from '@/types';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';
import { Button } from '@/components/shared/Button';
import { formatEventTypeLabel, formatShortDate } from '@/lib/format';
import { routes } from '@/lib/routes';

interface EventCardProps {
  event: JollieEvent;
  onQuickView?: (event: JollieEvent) => void;
}

export function EventCard({ event, onQuickView }: EventCardProps) {
  return (
    <article className="bg-white border border-line rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Tag variant="outline">{formatEventTypeLabel(event.type)}</Tag>
          <StatusBadge status={event.status} />
        </div>

        <h3 className="text-h3 font-serif text-charcoal hover:text-burgundy transition-colors">
          <Link to={routes.event(event.slug)}>{event.title}</Link>
        </h3>

        <p className="text-caption text-ink-soft leading-relaxed">{event.summary}</p>
      </div>

      <div className="pt-5 mt-6 border-t border-line space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-soft">
          {event.deadline && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>Deadline: {formatShortDate(event.deadline)}</span>
            </span>
          )}
          {!event.deadline && event.startDate && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>Date: {formatShortDate(event.startDate)}</span>
            </span>
          )}
          {event.locationLabel && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>{event.locationLabel}</span>
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <Button to={routes.event(event.slug)} variant="tertiary" withArrow>
            Full details
          </Button>
          {onQuickView && (
            <button
              type="button"
              onClick={() => onQuickView(event)}
              className="text-xs font-medium text-ink-soft hover:text-burgundy underline underline-offset-4 py-2 px-2"
            >
              Quick view
            </button>
          )}
        </div>
      </div>
    </article>
  );
}