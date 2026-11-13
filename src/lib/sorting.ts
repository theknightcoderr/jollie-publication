import type { Article, Book, JollieEvent } from '@/types';

export type BookSortOption = 'featured' | 'title-asc' | 'newest';
export type ArticleSortOption = 'latest' | 'popular' | 'editors-pick';

export function sortBooks(books: Book[], sort: string = 'featured'): Book[] {
  const copy = [...books];
  switch (sort) {
    case 'title-asc':
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
      return copy.sort((a, b) =>
        (b.publicationInfo.publishedOn ?? '').localeCompare(a.publicationInfo.publishedOn ?? ''),
      );
    case 'featured':
    default:
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}

export function sortArticles(articles: Article[], sort: string = 'latest'): Article[] {
  const copy = [...articles];
  switch (sort) {
    case 'popular':
      return copy.sort((a, b) => b.likes + b.comments - (a.likes + a.comments));
    case 'editors-pick':
      return copy.sort(
        (a, b) =>
          Number(b.editorsPick) - Number(a.editorsPick) ||
          b.publishedOn.localeCompare(a.publishedOn),
      );
    case 'latest':
    default:
      return copy.sort((a, b) => b.publishedOn.localeCompare(a.publishedOn));
  }
}

export function sortEvents(events: JollieEvent[]): JollieEvent[] {
  const statusWeight: Record<JollieEvent['status'], number> = {
    open: 0,
    upcoming: 1,
    closed: 2,
  };
  return [...events].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return statusWeight[a.status] - statusWeight[b.status];
  });
}