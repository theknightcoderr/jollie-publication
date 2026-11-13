import { useState, type FormEvent } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { getSiteConfigSync } from '../services/dataAccess';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FormField } from '@/components/shared/FormField';
import { Button } from '@/components/shared/Button';
import { PlaceholderNotice } from '@/components/shared/PlaceholderNotice';
import { validateContactForm } from '@/lib/validation';

export default function ContactPage() {
  useDocumentTitle('Contact & Enquiries');
  const config = getSiteConfigSync();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validateContactForm({ name, email, subject, message });

    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <Section variant="paper" borderBottom>
      <Container size="reading">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        <div className="space-y-4 pt-6 mb-12 border-b border-line pb-8">
          <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
            Correspondence
          </p>
          <h1 className="text-h1 font-serif text-charcoal">Get in Touch</h1>
          <p className="text-body text-ink-soft">
            For editorial enquiries, press materials, or general questions, please use the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 text-caption text-charcoal">
            <section className="space-y-2">
              <h2 className="text-h3 font-serif">General Enquiries</h2>
              <p className="text-ink-soft">{config.contact.generalEmailPlaceholder}</p>
            </section>
            
            <section className="space-y-2">
              <h2 className="text-h3 font-serif">Editorial Desk</h2>
              <p className="text-ink-soft">{config.contact.officeHoursPlaceholder}</p>
              <p className="text-ink-soft italic pt-1">{config.contact.submissionsNotice}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-h3 font-serif">Studio Address</h2>
              <p className="text-ink-soft whitespace-pre-line">{config.contact.locationPlaceholder}</p>
            </section>
          </div>

          <div className="bg-paper-deep border border-line rounded-sm p-6 space-y-6">
            <h2 className="text-h3 font-serif">Send a Message</h2>
            
            {submitted && (
              <PlaceholderNotice
                title="Message Validated Locally"
                message="Form successfully validated. Email submission routing will be enabled in Phase 2."
              />
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormField id="contact-name" label="Your Name" required error={errors.name}>
                <input
                  id="contact-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-line rounded text-caption"
                  placeholder="e.g. Miriam Okafor"
                />
              </FormField>

              <FormField id="contact-email" label="Email Address" required error={errors.email}>
                <input
                  id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-line rounded text-caption"
                  placeholder="you@example.com"
                />
              </FormField>

              <FormField id="contact-subject" label="Subject" required error={errors.subject}>
                <select
                  id="contact-subject" value={subject} onChange={(e) => setSubject(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-line rounded text-caption"
                >
                  <option value="">Select a topic…</option>
                  <option value="general">General Enquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="rights">Foreign Rights</option>
                  <option value="support">Website Support</option>
                </select>
              </FormField>

              <FormField id="contact-message" label="Message" required error={errors.message}>
                <textarea
                  id="contact-message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3.5 bg-white border border-line rounded text-caption"
                  placeholder="How can we help?"
                />
              </FormField>

              <div className="pt-2 flex justify-end">
                <Button type="submit" variant="primary">Validate Message</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}