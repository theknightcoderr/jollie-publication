import { Button } from './Button';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionTo?: string;
  onDark?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionLabel,
  actionTo,
  onDark = false,
  align = 'left',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-10 md:mb-14 flex flex-col gap-4 ${
        isCenter
          ? 'items-center text-center'
          : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={`space-y-3 ${isCenter ? 'max-w-reading mx-auto' : 'max-w-reading'}`}>
        {eyebrow && (
          <p
            className={`text-eyebrow font-semibold uppercase eyebrow-rule ${
              onDark ? 'text-cream' : 'text-burgundy'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2 className={`text-h2 font-serif ${onDark ? 'text-cream' : 'text-charcoal'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-body max-w-prose ${onDark ? 'text-cream/85' : 'text-ink-soft'}`}>
            {description}
          </p>
        )}
      </div>

      {actionLabel && actionTo && (
        <div className="shrink-0">
          <Button
            to={actionTo}
            variant={onDark ? 'on-dark-secondary' : 'tertiary'}
            withArrow
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}