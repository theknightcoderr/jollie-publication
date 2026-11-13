import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from './Button';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  variant?: 'burgundy' | 'cream';
}

export function CTASection({
  eyebrow = 'Next Steps',
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  variant = 'burgundy',
}: CTASectionProps) {
  const isDark = variant === 'burgundy';

  return (
    <Section variant={variant} borderTop>
      <Container>
        <div className="max-w-reading mx-auto text-center space-y-6">
          <p
            className={`text-eyebrow uppercase font-semibold eyebrow-rule ${
              isDark ? 'text-gold' : 'text-burgundy'
            }`}
          >
            {eyebrow}
          </p>
          <h2 className={`text-h2 font-serif ${isDark ? 'text-cream' : 'text-charcoal'}`}>
            {title}
          </h2>
          <p className={`text-body max-w-prose mx-auto ${isDark ? 'text-cream/85' : 'text-ink-soft'}`}>
            {description}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button
              to={primaryTo}
              variant={isDark ? 'on-dark-primary' : 'primary'}
              withArrow
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button
                to={secondaryTo}
                variant={isDark ? 'on-dark-secondary' : 'secondary'}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}