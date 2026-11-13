export interface FilterOption {
  value: string;
  label: string;
}

interface CategoryFilterProps {
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
  ariaLabel?: string;
  className?: string;
}

export function CategoryFilter({
  options,
  selected,
  onSelect,
  ariaLabel = 'Filter by category',
  className = '',
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`flex flex-wrap items-center gap-2 ${className}`}
    >
      {options.map((option) => {
        const isSelected = selected === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            aria-pressed={isSelected}
            className={`min-h-[40px] px-4 py-1.5 rounded-full text-caption font-medium transition-colors border ${
              isSelected
                ? 'bg-burgundy text-cream border-burgundy'
                : 'bg-white text-charcoal border-line hover:bg-cream/60 hover:border-burgundy/40'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}