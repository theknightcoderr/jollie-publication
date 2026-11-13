import type { Book } from '@/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { BookCard } from '@/components/books/BookCard';
import { routes } from '@/lib/routes';

interface FeaturedPublicationsProps {
  books: Book[];
}

export function FeaturedPublications({ books }: FeaturedPublicationsProps) {
  return (
    <Section variant="paper-deep" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="From the Press"
          title="Featured Publications"
          description="Sample editions demonstrating Jollie’s typographic covers and catalogue presentation across fiction, poetry, and non-fiction."
          actionLabel="Browse Full Catalogue"
          actionTo={routes.books()}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book, idx) => (
            <BookCard key={book.id} book={book} index={idx} />
          ))}
        </div>
      </Container>
    </Section>
  );
}