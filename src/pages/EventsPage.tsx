import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { JollieEvent } from '@/types';
import { getEvents } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EventFilters } from '@/components/events/EventFilters';
import { EventCard } from '@/components/events/EventCard';
import { LoadingState } from '@/components/shared/LoadingState';
import { EmptyState } from '@/components/shared/EmptyState';
import { CTASection } from '@/components/shared/CTASection';
import { routes } from '@/lib/routes';

export default function EventsPage() {
  useDocumentTitle('Events & Submissions');
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedType = searchParams.get('type') ?? 'all';
  const selectedStatus = searchParams.get('status') ?? 'all';

  const [events, setEvents] = useState<JollieEvent[]>([]);
  const [loading, setLoading] = useState(true);

  function updateParams(updates: { type?: string; status?: string }) {
    const next = new URLSearchParams(searchParams);
    if (updates.type !== undefined) {
      if (updates.type === 'all') next.delete('type');
      else next.set('type', updates.type);
    }
    if (updates.status !== undefined) {
      if (updates.status === 'all') next.delete('status');
      else next.set('status', updates.status);
    }
    setSearchParams(next, { replace: true });
  }

  useEffect(() => {
    let active = true;
    setLoading(true);
    getEvents({ type: selectedType, status: selectedStatus }).then((data) => {
      if (!active) return;
      setEvents(data);
      setLoading(false);
    });
    return () => { active = false; };
  }, [selectedType, selectedStatus]);

  return (
    <div>
      <Section variant="paper" borderBottom>
        <Container>
          <Breadcrumbs items={[{ label: 'Events & Submissions' }]} />

          <div className="max-w-reading space-y-4 pt-2 mb-10">
            <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
              Calendar &amp; Noticeboard
            </p>
            <h1 className="text-h1 font-serif text-charcoal">Events &amp; Open Calls</h1>
            <p className="text-body text-ink-soft">
              Browse upcoming literary workshops, manuscript reading windows, and community initiatives. (Note: Submission forms and ticketing are preview-only in Phase 1).
            </p>
          </div>

          <div className="mb-10">
            <EventFilters
              selectedType={selectedType}
              selectedStatus={selectedStatus}
              onTypeChange={(t) => updateParams({ type: t })}
              onStatusChange={(s) => updateParams({ status: s })}
            />
          </div>

          {loading ? (
            <LoadingState label="Loading calendar events…" count={4} />
          ) : events.length === 0 ? (
            <EmptyState
              title="No opportunities found"
              description="Try adjusting your filters to see past or upcoming events."
              actionLabel="Clear Filters"
              onAction={() => {
                setSearchParams({});
              }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        eyebrow="Keep in Touch"
        title="Want to hear about future reading windows?"
        description="Join our newsletter to receive updates on editorial submissions, poetry pamphlets, and community workshops."
        primaryLabel="Contact Us"
        primaryTo={routes.contact()}
        variant="cream"
      />
    </div>
  );
}