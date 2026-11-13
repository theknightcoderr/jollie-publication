import { Check } from 'lucide-react';
import type { Service } from '@/types';
import { Button } from '@/components/shared/Button';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

interface ServiceCardProps {
  service: Service;
  index: number;
  onSelectService?: (slug: string) => void;
}

export function ServiceCard({ service, index, onSelectService }: ServiceCardProps) {
  const numeral = ROMAN_NUMERALS[index] ?? String(index + 1);

  return (
    <article className="bg-white border border-line rounded-sm p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-hover">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <span className="font-serif text-sm tracking-widest text-burgundy font-semibold">
            SERVICE {numeral}
          </span>
          <span className="w-6 h-px bg-gold" aria-hidden="true" />
        </div>

        <h3 className="text-h3 font-serif text-charcoal">{service.title}</h3>

        <p className="text-body text-charcoal font-medium leading-relaxed">{service.summary}</p>

        <p className="text-caption text-ink-soft leading-relaxed">{service.description}</p>

        <div className="pt-2 space-y-2">
          <p className="text-xs uppercase tracking-wider font-semibold text-charcoal">
            What this service includes:
          </p>
          <ul className="space-y-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-caption text-ink-soft">
                <Check
                  className="w-4 h-4 text-burgundy shrink-0 mt-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {onSelectService && (
        <div className="pt-4 border-t border-line">
          <Button
            variant="secondary"
            onClick={() => onSelectService(service.slug)}
            className="w-full"
          >
            Enquire About This Service
          </Button>
        </div>
      )}
    </article>
  );
}