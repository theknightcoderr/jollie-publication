import type { Service } from '@/types';
import { ServiceCard } from './ServiceCard';

interface ServiceSectionProps {
  services: Service[];
  onSelectService?: (slug: string) => void;
}

export function ServiceSection({ services, onSelectService }: ServiceSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          onSelectService={onSelectService}
        />
      ))}
    </div>
  );
}