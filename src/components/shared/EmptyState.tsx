import { BookOpen } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionTo?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  actionTo,
}: EmptyStateProps) {
  return (
    <div className="border border-line bg-paper-deep/60 rounded-sm p-10 md:p-14 text-center max-w-reading mx-auto my-6 space-y-4">
      <div className="w-11 h-11 rounded-full bg-cream border border-line mx-auto flex items-center justify-center text-burgundy">
        <BookOpen className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="text-h3 font-serif text-charcoal">{title}</h3>
      <p className="text-body text-ink-soft max-w-md mx-auto">{description}</p>
      {actionLabel && actionTo && (
        <div className="pt-2">
          <Button to={actionTo} variant="secondary">
            {actionLabel}
          </Button>
        </div>
      )}
      {actionLabel && onAction && !actionTo && (
        <div className="pt-2">
          <Button onClick={onAction} variant="secondary">
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}