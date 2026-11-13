import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Book } from '@/types';
import { getBooks } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SearchBar } from '@/components/shared/SearchBar';
import { CategoryFilter, type FilterOption } from '@/components/shared/CategoryFilter';
import { BookGrid } from '@/components/books/BookGrid';
import { LoadingState } from '@/components/shared/LoadingState';
import { EmptyState } from '@/components/shared/EmptyState';
import { CTASection } from '@/components/shared/CTASection';
import { routes } from '@/lib/routes';

const GENRE_OPTIONS: FilterOption[] = [
  { value: 'all', label: 'All Genres' },
  { value: 'fiction', label: 'Literary Fiction' },
  { value: 'poetry', label: 'Poetry' },
  { value: 'non-fiction', label: 'Non-Fiction' },
  { value: 'memoir', label: 'Memoir' },
  { value: 'short-stories', label: 'Short Stories' },
  { value: 'childrens', label: 'Children’s' },
];

export default function BooksPage() {
  useDocumentTitle('Book Catalogue');
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGenre = searchParams.get('genre') ?? 'all';
  const selectedSort = searchParams.get('sort') ?? 'featured';
  const initialQuery = searchParams.get('q') ?? '';

  const [searchInput, setSearchInput] = useState(initialQuery);
  const debouncedQuery = useDebouncedValue(searchInput, 200);

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  function updateParams(updates: { genre?: string; sort?: string; q?: string }) {
    const next = new URLSearchParams(searchParams);
    if (updates.genre !== undefined) {
      if (updates.genre === 'all') next.delete('genre');
      else next.set('genre', updates.genre);
    }
    if (updates.sort !== undefined) {
      if (updates.sort === 'featured') next.delete('sort');
      else next.set('sort', updates.sort);
    }
    if (updates.q !== undefined) {
      if (!updates.q.trim()) next.delete('q');
      else next.set('q', updates.q.trim());
    }
    setSearchParams(next, { replace: true });
  }

  useEffect(() => {
    updateParams({ q: debouncedQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getBooks({
      genre: selectedGenre,
      sort: selectedSort,
      query: debouncedQuery,
    }).then((data) => {
      if (!active) return;
      setBooks(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [selectedGenre, selectedSort, debouncedQuery]);

  function handleReset() {
    setSearchInput('');
    setSearchParams({});
  }

  return (
    <div>
      <Section variant="paper" borderBottom>
        <Container>
          <Breadcrumbs items={[{ label: 'Books' }]} />

          <div className="max-w-reading space-y-4 pt-2">
            <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
              Jollie Editions (Mock Catalogue)
            </p>
            <h1 className="text-h1 font-serif text-charcoal">Book Catalogue</h1>
            <p className="text-body text-ink-soft">
              Browse sample titles across fiction, poetry, memoir, and non-fiction. All titles and
              authors below are fictional placeholders illustrating Jollie’s catalogue layout.
            </p>
          </div>

          <div className="mt-10 bg-paper-deep border border-line rounded-sm p-5 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8">
                <SearchBar
                  value={searchInput}
                  onChange={setSearchInput}
                  placeholder="Search catalogue by title, author, or theme…"
                  label="Search books"
                />
              </div>

              <div className="md:col-span-4 flex items-center gap-3">
                <label htmlFor="book-sort" className="text-caption font-medium text-charcoal shrink-0">
                  Sort by:
                </label>
                <select
                  id="book-sort"
                  value={selectedSort}
                  onChange={(e) => updateParams({ sort: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-line rounded text-caption text-charcoal"
                >
                  <option value="featured">Featured First</option>
                  <option value="newest">Publication Date (Newest)</option>
                  <option value="title-asc">Title (A–Z)</option>
                </select>
              </div>
            </div>

            <CategoryFilter
              options={GENRE_OPTIONS}
              selected={selectedGenre}
              onSelect={(genre) => updateParams({ genre })}
              ariaLabel="Filter books by genre"
            />
          </div>

          <div className="mt-10">
            {loading ? (
              <LoadingState label="Loading catalogue editions…" count={6} />
            ) : books.length === 0 ? (
              <EmptyState
                title="No matching books in the sample catalogue"
                description="Try clearing your search filter or selecting another literary genre."
                actionLabel="Reset Catalogue Filters"
                onAction={handleReset}
              />
            ) : (
              <BookGrid books={books} />
            )}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="For Authors"
        title="Preparing a manuscript of your own?"
        description="Learn how Jollie Publication supports authors with structural editing, interior typesetting, and bespoke cover design."
        primaryLabel="Explore Publishing Services"
        primaryTo={routes.services()}
        secondaryLabel="Contact the Press"
        secondaryTo={routes.contact()}
        variant="cream"
      />
    </div>
  );
}