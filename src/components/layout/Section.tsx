import type { ReactNode } from 'react';

export type SectionVariant = 'paper' | 'paper-deep' | 'cream' | 'burgundy' | 'charcoal' | 'white';

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
}

const variantClasses: Record<SectionVariant, string> = {
  paper: 'bg-paper text-charcoal',
  'paper-deep': 'bg-paper-deep text-charcoal',
  cream: 'bg-cream text-charcoal',
  white: 'bg-white text-charcoal',
  burgundy: 'bg-burgundy text-cream dark-surface',
  charcoal: 'bg-charcoal text-cream dark-surface',
};

export function Section({
  id,
  variant = 'paper',
  children,
  className = '',
  borderTop = false,
  borderBottom = false,
}: SectionProps) {
  const borders = [
    borderTop ? 'border-t border-line' : '',
    borderBottom ? 'border-b border-line' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${variantClasses[variant]} ${borders} ${className}`}
    >
      {children}
    </section>
  );
}