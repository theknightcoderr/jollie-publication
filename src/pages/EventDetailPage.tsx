import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { JollieEvent } from '@/types';
import { getEventBySlug } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EventDetail } from '@/components/events/EventDetail';
import { EmptyState } from '@/components/shared/EmptyState';
import { LoadingState } from '@/components/shared/LoadingState';
import { routes } from '@/lib/routes';

export default function EventDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<JollieEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useDocumentTitle(event ? event.title : 'Event Details');

  useEffect(() => {
    let active = true;
    setLoading(true);
    getEventBySlug(slug).then((found) => {
      if (!active) return;
      setEvent(found);
      setLoading(false);
    });
    return () => { active = false; };
  }, [slug]);

  if (loading) {
    return (
      <Section variant="paper"><Container><LoadingState count={2} /></Container></Section>
    );
  }

  if (!event) {
    return (
      <Section variant="paper">
        <Container>
          <EmptyState
            title="Opportunity Not Found"
            description="This event or submission window may have been removed."
            actionLabel="Return to Calendar"
            actionTo={routes.events()}
          />
        </Container>
      </Section>
    );
  }

  return (
    <Section variant="paper" borderBottom>
      <Container size="reading">
        <Breadcrumbs
          items={[{ label: 'Events & Submissions', to: routes.events() }, { label: event.title }]}
        />
        <div className="pt-6">
          <EventDetail event={event} />
        </div>
      </Container>
    </Section>
  );
}