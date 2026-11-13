import type { Article, Book, JollieEvent, Writer } from '@/types';

function normalise(value: string): string {
  return value.toLowerCase().trim();
}

export function searchBooks(books: Book[], query: string): Book[] {
  const q = normalise(query);
  if (!q) return books;
  return books.filter(
    (b) =>
      normalise(b.title).includes(q) ||
      normalise(b.authorName).includes(q) ||
      normalise(b.summary).includes(q) ||
      normalise(b.genre).includes(q),
  );
}

export function searchArticles(articles: Article[], query: string): Article[] {
  const q = normalise(query);
  if (!q) return articles;
  return articles.filter(
    (a) =>
      normalise(a.title).includes(q) ||
      normalise(a.excerpt).includes(q) ||
      normalise(a.authorUsername).includes(q) ||
      normalise(a.categorySlug).includes(q),
  );
}

export function searchEvents(events: JollieEvent[], query: string): JollieEvent[] {
  const q = normalise(query);
  if (!q) return events;
  return events.filter(
    (e) =>
      normalise(e.title).includes(q) ||
      normalise(e.summary).includes(q) ||
      normalise(e.type).includes(q),
  );
}

export function searchWriters(writers: Writer[], query: string): Writer[] {
  const q = normalise(query);
  if (!q) return writers;
  return writers.filter(
    (w) =>
      normalise(w.displayName).includes(q) ||
      normalise(w.username).includes(q) ||
      normalise(w.bio).includes(q) ||
      w.interests.some((i) => normalise(i).includes(q)),
  );
}