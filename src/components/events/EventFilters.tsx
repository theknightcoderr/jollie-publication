import { CategoryFilter, type FilterOption } from '@/components/shared/CategoryFilter';

const TYPE_OPTIONS: FilterOption[] = [
  { value: 'all', label: 'All Opportunities' },
  { value: 'competition', label: 'Competitions' },
  { value: 'submission', label: 'Submission Calls' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'initiative', label: 'Initiatives' },
  { value: 'event', label: 'Events' },
];

const STATUS_OPTIONS: FilterOption[] = [
  { value: 'all', label: 'All Statuses' },
  { value: 'open', label: 'Open Now' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'closed', label: 'Archive / Closed' },
];

interface EventFiltersProps {
  selectedType: string;
  selectedStatus: string;
  onTypeChange: (type: string) => void;
  onStatusChange: (status: string) => void;
}

export function EventFilters({
  selectedType,
  selectedStatus,
  onTypeChange,
  onStatusChange,
}: EventFiltersProps) {
  return (
    <div className="bg-paper-deep border border-line rounded-sm p-5 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="text-xs uppercase tracking-wider font-semibold text-ink-soft block">
            Filter by Category
          </span>
          <CategoryFilter
            options={TYPE_OPTIONS}
            selected={selectedType}
            onSelect={onTypeChange}
            ariaLabel="Filter events by type"
          />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs uppercase tracking-wider font-semibold text-ink-soft block">
            Status
          </span>
          <CategoryFilter
            options={STATUS_OPTIONS}
            selected={selectedStatus}
            onSelect={onStatusChange}
            ariaLabel="Filter events by status"
          />
        </div>
      </div>
    </div>
  );
}