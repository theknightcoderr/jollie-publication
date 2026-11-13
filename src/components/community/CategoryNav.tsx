import type { Category } from '@/types';
import { CategoryFilter, type FilterOption } from '@/components/shared/CategoryFilter';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export function CategoryNav({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryNavProps) {
  const options: FilterOption[] = [
    { value: 'all', label: 'All Writing' },
    { value: 'editors-pick', label: 'Editor’s Picks' },
    ...categories.map((cat) => ({ value: cat.slug, label: cat.name })),
  ];

  return (
    <nav aria-label="Community writing categories" className="py-2">
      <CategoryFilter
        options={options}
        selected={selectedCategory}
        onSelect={onSelectCategory}
        ariaLabel="Filter articles by literary category"
      />
    </nav>
  );
}