import { Calendar, MapPin } from 'lucide-react';
import type { JollieEvent } from '@/types';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';
import { Button } from '@/components/shared/Button';
import { EditorialImage } from '@/components/shared/EditorialImage';
import { formatDate, formatEventTypeLabel } from '@/lib/format';
import { routes } from '@/lib/routes';

interface FeaturedEventProps {
  event: JollieEvent;
}

export function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <div className="bg-cream/60 border border-line rounded-sm p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7 space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="dark">Featured Opportunity</Tag>
          <Tag variant="outline">{formatEventTypeLabel(event.type)}</Tag>
          <StatusBadge status={event.status} />
        </div>

        <h2 className="text-h2 font-serif text-charcoal">{event.title}</h2>

        <p className="text-body text-ink-soft max-w-prose">{event.description}</p>

        <div className="flex flex-wrap items-center gap-6 text-caption text-charcoal pt-1">
          {event.deadline && (
            <span className="inline-flex items-center gap-2 font-medium">
              <Calendar className="w-4 h-4 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>Closing date: {formatDate(event.deadline)}</span>
            </span>
          )}
          {event.locationLabel && (
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>Format: {event.locationLabel}</span>
            </span>
          )}
        </div>

        <div className="pt-2">
          <Button to={routes.event(event.slug)} variant="primary" withArrow>
            Read Guidelines &amp; Eligibility
          </Button>
        </div>
      </div>

      <div className="lg:col-span-5">
        <EditorialImage
          aspect="16:10"
          alt={event.title}
          caption="Sample event illustration — Jollie Reading Room"
        />
      </div>
    </div>
  );
}