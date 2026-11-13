import { useState, useEffect, type FormEvent } from 'react';
import type { Service } from '@/types';
import { FormField } from '@/components/shared/FormField';
import { Button } from '@/components/shared/Button';
import { PlaceholderNotice } from '@/components/shared/PlaceholderNotice';
import { validateServiceEnquiryForm } from '@/lib/validation';

interface EnquiryFormProps {
  services: Service[];
  preselectedServiceSlug?: string;
}

export function EnquiryForm({ services, preselectedServiceSlug = '' }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceSlug, setServiceSlug] = useState(preselectedServiceSlug);
  const [manuscriptStage, setManuscriptStage] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useEffect(() => {
    if (preselectedServiceSlug) {
      setServiceSlug(preselectedServiceSlug);
    }
  }, [preselectedServiceSlug]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validateServiceEnquiryForm({
      name,
      email,
      serviceSlug,
      manuscriptStage,
      notes,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedNotice(false);
      return;
    }

    setErrors({});
    setSubmittedNotice(true);
    // Privacy by design (§2.3): discard personal input after local validation
    setName('');
    setEmail('');
    setManuscriptStage('');
    setNotes('');
  }

  return (
    <div className="bg-white border border-line rounded-sm p-6 md:p-10 max-w-reading mx-auto space-y-6">
      <div className="space-y-2 border-b border-line pb-4">
        <p className="text-eyebrow uppercase text-burgundy font-semibold eyebrow-rule">
          Manuscript Consultation
        </p>
        <h3 className="text-h2 font-serif text-charcoal">Enquire About Publishing Services</h3>
        <p className="text-caption text-ink-soft">
          Share a brief outline of your manuscript. No personal data is stored or transmitted in
          Phase 1.
        </p>
      </div>

      {submittedNotice && (
        <PlaceholderNotice
          title="Form Validated Locally"
          message="Form validated. Submission will be enabled in Phase 2. Your input has been discarded in accordance with Phase 1 privacy guardrails."
        />
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField id="enq-name" label="Your Name" required error={errors.name}>
            <input
              id="enq-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 bg-paper border border-line rounded text-caption text-charcoal"
              placeholder="e.g. Clara Vance"
            />
          </FormField>

          <FormField id="enq-email" label="Email Address" required error={errors.email}>
            <input
              id="enq-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 bg-paper border border-line rounded text-caption text-charcoal"
              placeholder="you@example.com"
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField id="enq-service" label="Service of Interest" required error={errors.serviceSlug}>
            <select
              id="enq-service"
              value={serviceSlug}
              onChange={(e) => setServiceSlug(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 bg-paper border border-line rounded text-caption text-charcoal"
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="enq-stage"
            label="Manuscript Stage"
            required
            error={errors.manuscriptStage}
          >
            <select
              id="enq-stage"
              value={manuscriptStage}
              onChange={(e) => setManuscriptStage(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 bg-paper border border-line rounded text-caption text-charcoal"
            >
              <option value="">Select current stage…</option>
              <option value="first-draft">Completed First Draft</option>
              <option value="revised-draft">Revised Manuscript</option>
              <option value="poetry-collection">Poetry Sequence / Pamphlet</option>
              <option value="proposal">Non-Fiction Proposal &amp; Sample Chapters</option>
            </select>
          </FormField>
        </div>

        <FormField
          id="enq-notes"
          label="Project Overview"
          required
          hint="Briefly describe genre, approximate word count, and what kind of editorial support you are considering."
          error={errors.notes}
        >
          <textarea
            id="enq-notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3.5 bg-paper border border-line rounded text-caption text-charcoal"
            placeholder="Tell us about your book project…"
          />
        </FormField>

        <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-ink-soft">
            Phase 1 preview: validates locally without sending network requests.
          </p>
          <Button type="submit" variant="primary">
            Validate Enquiry
          </Button>
        </div>
      </form>
    </div>
  );
}