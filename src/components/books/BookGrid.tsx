import type { Book } from '@/types';
import { BookCard } from './BookCard';

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {books.map((book, idx) => (
        <BookCard key={book.id} book={book} index={idx} />
      ))}
    </div>
  );
}