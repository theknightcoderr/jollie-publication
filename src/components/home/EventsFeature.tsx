
// src/components/home/EventsFeature.tsx
import type { JollieEvent } from '@/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { FeaturedEvent } from '@/components/events/FeaturedEvent';
import { routes } from '@/lib/routes';

interface EventsFeatureProps {
  event: JollieEvent | null;
}

export function EventsFeature({ event }: EventsFeatureProps) {
  if (!event) return null;

  return (
    <Section variant="paper" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="Calendar &amp; Open Calls"
          title="Literary Prizes, Workshops &amp; Submissions"
          description="Opportunities for emerging authors and community contributors."
          actionLabel="View All Opportunities"
          actionTo={routes.events()}
        />
        <FeaturedEvent event={event} />
      </Container>
    </Section>
  );
}