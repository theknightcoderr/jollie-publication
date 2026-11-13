import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-charcoal text-cream border border-gold/40 rounded shadow-hover p-4 flex items-start gap-3"
    >
      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
      <div className="flex-1 text-caption leading-relaxed">{message}</div>
      <button
        type="button"
        onClick={onClose}
        className="text-cream/70 hover:text-cream p-1 rounded"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" strokeWidth={1.5} />
      </button>
    </div>
  );
}