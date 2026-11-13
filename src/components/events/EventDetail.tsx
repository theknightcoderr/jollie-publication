import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import type { JollieEvent } from '@/types';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';
import { EditorialImage } from '@/components/shared/EditorialImage';
import { PlaceholderNotice } from '@/components/shared/PlaceholderNotice';
import { formatDate, formatEventTypeLabel } from '@/lib/format';

interface EventDetailProps {
  event: JollieEvent;
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-5 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <Tag variant="cream">{formatEventTypeLabel(event.type)}</Tag>
          <StatusBadge status={event.status} />
          <span className="text-xs text-ink-soft uppercase tracking-wider">
            Sample Event Record
          </span>
        </div>

        <h1 className="text-h1 font-serif text-charcoal">{event.title}</h1>

        <p className="text-body text-ink-soft max-w-prose">{event.summary}</p>

        <div className="flex flex-wrap items-center gap-6 text-caption text-charcoal pt-2">
          {event.startDate && (
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>Opens: {formatDate(event.startDate)}</span>
            </span>
          )}
          {event.deadline && (
            <span className="inline-flex items-center gap-2 font-semibold text-burgundy">
              <Calendar className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              <span>Deadline: {formatDate(event.deadline)}</span>
            </span>
          )}
          {event.locationLabel && (
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
              <span>Location: {event.locationLabel}</span>
            </span>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-8">
          <section className="space-y-3">
            <h2 className="text-h3 font-serif text-charcoal">Overview</h2>
            <p className="text-body text-charcoal leading-relaxed">{event.description}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-serif text-charcoal">Eligibility Criteria</h2>
            <ul className="space-y-2.5">
              {event.eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body text-charcoal">
                  <CheckCircle2
                    className="w-5 h-5 text-burgundy shrink-0 mt-1"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-paper-deep border border-line rounded-sm p-6 space-y-4">
            <h2 className="text-h3 font-serif text-charcoal">How to Apply or Participate</h2>
            <p className="text-body text-ink-soft">{event.howToApply}</p>
            <PlaceholderNotice
              title="Application Portal Disabled in Phase 1"
              message="This is a sample event record. Online entry forms and manuscript uploads will be enabled in Phase 2."
            />
          </section>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <EditorialImage
            aspect="16:10"
            alt={event.title}
            caption="Sample event visual placeholder"
          />
          <div className="border border-line bg-white rounded-sm p-5 space-y-2 text-caption">
            <p className="font-semibold text-charcoal">Editorial Note</p>
            <p className="text-ink-soft">
              All dates, guidelines, and prizes shown on this page are fictional placeholders for
              Phase 1 review. Replace in <code>src/data/events.ts</code> before launch.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}