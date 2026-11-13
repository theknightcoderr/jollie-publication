// src/components/home/AboutPreview.tsx
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/shared/Button';
import { getSiteConfigSync } from '../../services/dataAccess';
import { routes } from '@/lib/routes';

export function AboutPreview() {
  const config = getSiteConfigSync();

  return (
    <Section variant="cream" borderBottom>
      <Container size="reading">
        <div className="text-center space-y-6">
          <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
            Our Ethos
          </p>
          <h2 className="text-h2 font-serif text-charcoal">
            Plain-spoken craft. Attentive editing.
          </h2>
          <p className="text-body text-charcoal/90 leading-relaxed">{config.shortIntro}</p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button to={routes.about()} variant="primary" withArrow>
              About Jollie Publication
            </Button>
            <Button to={routes.contact()} variant="secondary">
              Contact the Editors
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}