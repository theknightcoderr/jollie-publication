import type { Article, Book, BookGenre, EventStatus, EventType, JollieEvent } from '@/types';

export function filterBooksByGenre(books: Book[], genre?: string): Book[] {
  if (!genre || genre === 'all') return books;
  return books.filter((book) => book.genre === (genre as BookGenre));
}

export function filterArticlesByCategory(articles: Article[], categorySlug?: string): Article[] {
  if (!categorySlug || categorySlug === 'all') return articles;
  if (categorySlug === 'editors-pick') {
    return articles.filter((article) => article.editorsPick);
  }
  return articles.filter((article) => article.categorySlug === categorySlug);
}

export function filterEvents(
  events: JollieEvent[],
  filters?: { type?: string; status?: string },
): JollieEvent[] {
  return events.filter((event) => {
    const matchesType =
      !filters?.type || filters.type === 'all' || event.type === (filters.type as EventType);
    const matchesStatus =
      !filters?.status ||
      filters.status === 'all' ||
      event.status === (filters.status as EventStatus);
    return matchesType && matchesStatus;
  });
}