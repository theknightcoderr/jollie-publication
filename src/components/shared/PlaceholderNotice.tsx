import { Info } from 'lucide-react';

interface PlaceholderNoticeProps {
  title?: string;
  message?: string;
  className?: string;
}

export function PlaceholderNotice({
  title = 'Phase 1 Front-End Preview',
  message = 'Form validated. Submission and persistent accounts will be enabled in Phase 2.',
  className = '',
}: PlaceholderNoticeProps) {
  return (
    <div
      role="status"
      className={`rounded border border-gold/60 bg-cream/60 p-4 text-charcoal flex items-start gap-3 ${className}`}
    >
      <Info className="w-5 h-5 text-burgundy shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
      <div className="space-y-1 text-caption">
        <p className="font-semibold text-charcoal">{title}</p>
        <p className="text-ink-soft">{message}</p>
      </div>
    </div>
  );
}