import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/shared/Button';
import { EditorialImage } from '@/components/shared/EditorialImage';
import { routes } from '@/lib/routes';

export function Hero() {
  return (
    <Section variant="paper" borderBottom>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
              Independent Publishing House &amp; Literary Magazine
            </p>
            <h1 className="text-display font-serif text-charcoal">
              Enduring books and a reading room for new voices.
            </h1>
            <p className="text-body text-ink-soft max-w-prose">
              Jollie Publication combines the editorial care of an independent press with a
              browsable community where writers share essays, short fiction, and poetry.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to={routes.books()} variant="primary" withArrow>
                Explore the Catalogue
              </Button>
              <Button to={routes.services()} variant="secondary">
                Publishing Services
              </Button>
              <Button to={routes.community()} variant="tertiary" withArrow>
                Visit the Reading Room
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EditorialImage
              aspect="4:5"
              alt="Sewn proofs, fountain pen annotations, and archival paper samples on an editor’s table"
              caption="Jollie Publication — Editorial & Community Preview"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}