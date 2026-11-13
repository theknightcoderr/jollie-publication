import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Book } from '@/types';
import { getBookBySlug, getBooks } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BookCover } from '@/components/books/BookCover';
import { BookGrid } from '@/components/books/BookGrid';
import { Tag } from '@/components/shared/Tag';
import { Button } from '@/components/shared/Button';
import { EmptyState } from '@/components/shared/EmptyState';
import { LoadingState } from '@/components/shared/LoadingState';
import { PlaceholderNotice } from '@/components/shared/PlaceholderNotice';
import { formatDate, formatGenreLabel } from '@/lib/format';
import { routes } from '@/lib/routes';

export default function BookDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useDocumentTitle(book ? `${book.title} by ${book.authorName}` : 'Book Edition');

  useEffect(() => {
    let active = true;
    setLoading(true);
    Promise.all([getBookBySlug(slug), getBooks()]).then(([found, all]) => {
      if (!active) return;
      setBook(found);
      if (found) {
        setRelatedBooks(
          all.filter((b) => b.slug !== found.slug && b.genre === found.genre).slice(0, 3),
        );
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <Section variant="paper">
        <Container>
          <LoadingState label="Loading book edition details…" count={3} />
        </Container>
      </Section>
    );
  }

  if (!book) {
    return (
      <Section variant="paper">
        <Container>
          <EmptyState
            title="We couldn’t find that book"
            description="The edition you are looking for is not in our sample catalogue, or the link may have changed."
            actionLabel="Back to Book Catalogue"
            actionTo={routes.books()}
          />
        </Container>
      </Section>
    );
  }

  return (
    <div>
      <Section variant="paper" borderBottom>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Books', to: routes.books() },
              { label: book.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pt-4 items-start">
            <div className="lg:col-span-4 max-w-xs mx-auto lg:mx-0 w-full">
              <BookCover
                title={book.title}
                subtitle={book.subtitle}
                authorName={book.authorName}
                genreLabel={formatGenreLabel(book.genre)}
              />
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Tag variant="cream">{formatGenreLabel(book.genre)}</Tag>
                <span className="text-xs uppercase tracking-wider text-ink-soft">
                  Mock Catalogue Record
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-h1 font-serif text-charcoal">{book.title}</h1>
                {book.subtitle && (
                  <p className="text-h3 font-serif text-ink-soft font-normal">{book.subtitle}</p>
                )}
              </div>

              <p className="text-body font-medium text-charcoal">
                By{' '}
                {book.authorUsername ? (
                  <Link
                    to={routes.writer(book.authorUsername)}
                    className="text-burgundy underline underline-offset-4"
                  >
                    {book.authorName}
                  </Link>
                ) : (
                  book.authorName
                )}
              </p>

              <p className="text-body text-charcoal leading-relaxed max-w-prose">
                {book.description}
              </p>

              <div className="bg-paper-deep border border-line rounded-sm p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-caption">
                <div>
                  <span className="block text-xs text-ink-soft uppercase tracking-wider">
                    Format
                  </span>
                  <span className="font-medium text-charcoal">
                    {book.publicationInfo.format ?? 'Standard Edition'}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-ink-soft uppercase tracking-wider">
                    Extent
                  </span>
                  <span className="font-medium text-charcoal">
                    {book.publicationInfo.pages ? `${book.publicationInfo.pages} pages` : 'TBC'}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-ink-soft uppercase tracking-wider">
                    Language
                  </span>
                  <span className="font-medium text-charcoal">
                    {book.publicationInfo.language ?? 'English (UK)'}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-ink-soft uppercase tracking-wider">
                    Release Date
                  </span>
                  <span className="font-medium text-charcoal">
                    {formatDate(book.publicationInfo.publishedOn)}
                  </span>
                </div>
              </div>

              <PlaceholderNotice
                title="Enquiry-Only Sample Edition"
                message="This is a fictional sample book demonstrating Jollie’s catalogue layout. No live e-commerce or ISBN links are active in Phase 1."
              />

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to={routes.contact()} variant="primary" withArrow>
                  Enquire About Trade / Review Copies
                </Button>
                {book.authorUsername && (
                  <Button to={routes.writer(book.authorUsername)} variant="secondary">
                    View Author’s Community Profile
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {relatedBooks.length > 0 && (
        <Section variant="paper-deep">
          <Container>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-h2 font-serif text-charcoal">More in This Genre</h2>
              <Button to={routes.books({ genre: book.genre })} variant="tertiary" withArrow>
                View all {formatGenreLabel(book.genre)}
              </Button>
            </div>
            <BookGrid books={relatedBooks} />
          </Container>
        </Section>
      )}
    </div>
  );
}