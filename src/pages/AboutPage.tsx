import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getSiteConfigSync } from '../services/dataAccess';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { EditorialImage } from '@/components/shared/EditorialImage';
import { CTASection } from '@/components/shared/CTASection';
import { routes } from '@/lib/routes';

const ROMAN = ['I', 'II', 'III'];

export default function AboutPage() {
  useDocumentTitle('About Jollie Publication');
  const config = getSiteConfigSync();

  return (
    <div>
      <Section variant="paper" borderBottom>
        <Container>
          <Breadcrumbs items={[{ label: 'About Jollie' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
                About the Press
              </p>
              <h1 className="text-h1 font-serif text-charcoal">
                An independent house built for attentive reading.
              </h1>
              <p className="text-body text-charcoal leading-relaxed max-w-prose">
                {config.shortIntro}
              </p>
            </div>

            <div className="lg:col-span-5">
              <EditorialImage
                aspect="3:2"
                alt="Editorial desk with typeset page proofs and linen-bound editions"
                caption="Image placeholder — replace via src/assets/images/about.jpg"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="paper-deep" borderBottom>
        <Container>
          <div className="max-w-reading mb-12 space-y-3">
            <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
              Editorial Pillars
            </p>
            <h2 className="text-h2 font-serif text-charcoal">How We Approach Every Manuscript</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.editorialPhilosophy.map((pillar, index) => (
              <div
                key={index}
                className="bg-white border border-line rounded-sm p-6 space-y-4"
              >
                <span className="font-serif text-sm tracking-widest text-burgundy font-semibold block border-b border-line pb-2">
                  PILLAR {ROMAN[index] ?? index + 1}
                </span>
                <p className="text-caption text-charcoal leading-relaxed">{pillar}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="paper" borderBottom>
        <Container size="reading">
          <div className="space-y-6">
            <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
              The Literary Community
            </p>
            <h2 className="text-h2 font-serif text-charcoal">
              A Bridge Between Emerging Writing and Print Publication
            </h2>
            <p className="text-body text-ink-soft leading-relaxed">
              {config.communityMission}
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Work With Jollie"
        title="Considering publishing services or looking to read new work?"
        description="Explore our six editorial and production services for authors, or step into the community reading room."
        primaryLabel="Publishing Services"
        primaryTo={routes.services()}
        secondaryLabel="Browse Book Catalogue"
        secondaryTo={routes.books()}
      />
    </div>
  );
}