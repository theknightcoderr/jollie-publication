
import { useEffect, useRef, useState } from 'react';
import type { Service } from '@/types';
import { getServices } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceSection } from '@/components/services/ServiceSection';
import { EnquiryForm } from '@/components/services/EnquiryForm';
import { LoadingState } from '@/components/shared/LoadingState';

export default function ServicesPage() {
  useDocumentTitle('Publishing Services');
  const [services, setServices] = useState<Service[]>([]);
  const [selectedSlug, setSelectedSlug] = useState('');
  const [loading, setLoading] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    getServices().then((data) => {
      if (!active) return;
      setServices(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  function handleSelectService(slug: string) {
    setSelectedSlug(slug);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div>
      <Section variant="paper" borderBottom>
        <Container>
          <Breadcrumbs items={[{ label: 'Publishing Services' }]} />

          <div className="max-w-reading space-y-4 pt-2">
            <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
              For Authors &amp; Manuscripts
            </p>
            <h1 className="text-h1 font-serif text-charcoal">
              Editorial, Design &amp; Publishing Services
            </h1>
            <p className="text-body text-ink-soft leading-relaxed">
              Whether you are preparing a debut novel, sequencing a poetry collection, or seeking a
              full independent publication programme, Jollie Publication provides structured,
              transparent craft support. Specific deliverables marked with TODO placeholders will be
              finalised by Jollie prior to launch.
            </p>
          </div>

          <div className="mt-12">
            {loading ? (
              <LoadingState label="Loading publishing services…" count={4} />
            ) : (
              <ServiceSection services={services} onSelectService={handleSelectService} />
            )}
          </div>
        </Container>
      </Section>

      <Section variant="paper-deep" id="service-enquiry">
        <Container>
          <div ref={formRef}>
            <SectionHeading
              eyebrow="Initial Consultation"
              title="Discuss Your Manuscript"
              description="Complete the form below to test local validation. In Phase 1, no personal data is transmitted or stored."
              align="center"
            />
            <EnquiryForm services={services} preselectedServiceSlug={selectedSlug} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
