import { Link } from 'react-router-dom';
import type { Book } from '@/types';
import { BookCover } from './BookCover';
import { Tag } from '@/components/shared/Tag';
import { formatGenreLabel } from '@/lib/format';
import { routes } from '@/lib/routes';

interface BookCardProps {
  book: Book;
  index?: number;
}

export function BookCard({ book, index = 0 }: BookCardProps) {
  return (
    <article className="group flex flex-col justify-between bg-white border border-line rounded-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      <div className="space-y-4">
        <Link
          to={routes.book(book.slug)}
          className="block overflow-hidden rounded-sm focus-visible:outline-offset-4"
        >
          <BookCover
            title={book.title}
            subtitle={book.subtitle}
            authorName={book.authorName}
            genreLabel={formatGenreLabel(book.genre)}
            variantIndex={index}
          />
        </Link>

        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between gap-2">
            <Tag variant="cream">{formatGenreLabel(book.genre)}</Tag>
            {book.publicationInfo.format && (
              <span className="text-xs text-ink-soft">{book.publicationInfo.format}</span>
            )}
          </div>

          <h3 className="text-h3 font-serif text-charcoal group-hover:text-burgundy transition-colors">
            <Link to={routes.book(book.slug)}>{book.title}</Link>
          </h3>

          <p className="text-caption font-medium text-ink-soft">
            By{' '}
            {book.authorUsername ? (
              <Link
                to={routes.writer(book.authorUsername)}
                className="text-charcoal underline decoration-line hover:text-burgundy hover:decoration-burgundy"
              >
                {book.authorName}
              </Link>
            ) : (
              <span className="text-charcoal">{book.authorName}</span>
            )}
          </p>

          <p className="text-caption text-ink-soft line-clamp-3 leading-relaxed">
            {book.summary}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-line flex items-center justify-between text-caption">
        <Link
          to={routes.book(book.slug)}
          className="font-medium text-burgundy hover:underline underline-offset-4"
        >
          Read edition notes →
        </Link>
        <span className="text-xs text-ink-soft">Sample title</span>
      </div>
    </article>
  );
}