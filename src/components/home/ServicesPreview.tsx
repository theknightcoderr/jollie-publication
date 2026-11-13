import type { Service } from '@/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/shared/Button';
import { routes } from '@/lib/routes';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

interface ServicesPreviewProps {
  services: Service[];
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <Section variant="burgundy" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="For Authors"
          title="Editorial &amp; Publishing Services"
          description="From structural manuscript assessment to bespoke interior typesetting and guided publication."
          actionLabel="Explore All Six Services"
          actionTo={routes.services()}
          onDark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-charcoal/40 border border-cream/20 rounded-sm p-6 flex flex-col justify-between space-y-5 relative pl-7"
            >
              {/* Book-spine vertical accent on dark panel (§5.9) */}
              <div className="absolute left-3 top-6 bottom-6 w-px bg-gold/60" aria-hidden="true" />
              <div className="space-y-3">
                <span className="text-xs font-serif tracking-widest text-gold">
                  {ROMAN[idx]}
                </span>
                <h3 className="text-h3 font-serif text-cream">{srv.title}</h3>
                <p className="text-caption text-cream/80 leading-relaxed">{srv.summary}</p>
              </div>
              <div className="pt-2">
                <Button to={routes.services()} variant="on-dark-secondary" withArrow>
                  Service specifications
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

