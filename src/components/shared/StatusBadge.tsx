import { CheckCircle2, Clock, Archive } from 'lucide-react';
import type { EventStatus } from '@/types';
import { formatEventStatusLabel } from '@/lib/format';

interface StatusBadgeProps {
  status: EventStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config: Record<
    EventStatus,
    { bg: string; dot: string; icon: typeof CheckCircle2 }
  > = {
    open: {
      bg: 'bg-cream text-charcoal border-line',
      dot: 'bg-burgundy',
      icon: CheckCircle2,
    },
    upcoming: {
      bg: 'bg-paper-deep text-charcoal border-line',
      dot: 'bg-orange',
      icon: Clock,
    },
    closed: {
      bg: 'bg-white text-ink-soft border-line',
      dot: 'bg-ink-soft',
      icon: Archive,
    },
  };

  const { bg, dot, icon: Icon } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-caption font-medium ${bg}`}
    >
      <span className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
      <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      <span>{formatEventStatusLabel(status)}</span>
    </span>
  );
}