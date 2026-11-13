import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search by title, author, or topic…',
  label = 'Search',
  className = '',
}: SearchBarProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <label htmlFor="jollie-search-input" className="sr-only">
        {label}
      </label>
      <Search
        className="w-4 h-4 text-ink-soft absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <input
        id="jollie-search-input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[44px] pl-10 pr-10 py-2.5 bg-white border border-line rounded text-caption text-charcoal placeholder:text-ink-soft/70 focus:border-burgundy transition-colors"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] inline-flex items-center justify-center text-ink-soft hover:text-burgundy rounded"
          aria-label="Clear search query"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}