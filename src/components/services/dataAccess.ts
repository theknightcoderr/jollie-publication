import { books } from '@/data/books';
import { events } from '@/data/events';
import { articles } from '@/data/articles';
import { writers } from '@/data/writers';
import { categories } from '@/data/categories';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import { commentsByArticleId } from '@/data/comments';
import { filterArticlesByCategory, filterBooksByGenre, filterEvents } from '@/lib/filters';
import { searchArticles, searchBooks, searchEvents, searchWriters } from '@/lib/search';
import { sortArticles, sortBooks, sortEvents } from '@/lib/sorting';
import type {
  Article,
  ArticleComment,
  Book,
  Category,
  JollieEvent,
  Service,
  SiteConfig,
  Writer,
} from '@/types';

const SIMULATED_DELAY_MS = 180;

function withDelay<T>(data: T): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(data), SIMULATED_DELAY_MS);
  });
}

export function getSiteConfigSync(): SiteConfig {
  return siteConfig;
}

export async function getBooks(params?: {
  genre?: string;
  sort?: string;
  query?: string;
  featuredOnly?: boolean;
}): Promise<Book[]> {
  let result = [...books];
  if (params?.featuredOnly) {
    result = result.filter((b) => b.featured);
  }
  result = filterBooksByGenre(result, params?.genre);
  if (params?.query) {
    result = searchBooks(result, params.query);
  }
  result = sortBooks(result, params?.sort);
  return withDelay(result);
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  const found = books.find((b) => b.slug === slug) ?? null;
  return withDelay(found);
}

export async function getEvents(params?: {
  type?: string;
  status?: string;
  query?: string;
}): Promise<JollieEvent[]> {
  let result = filterEvents(events, { type: params?.type, status: params?.status });
  if (params?.query) {
    result = searchEvents(result, params.query);
  }
  result = sortEvents(result);
  return withDelay(result);
}

export async function getFeaturedEvent(): Promise<JollieEvent | null> {
  const found = events.find((e) => e.featured) ?? events[0] ?? null;
  return withDelay(found);
}

export async function getEventBySlug(slug: string): Promise<JollieEvent | null> {
  const found = events.find((e) => e.slug === slug) ?? null;
  return withDelay(found);
}

export async function getCategories(): Promise<Category[]> {
  return withDelay([...categories]);
}

export async function getArticles(params?: {
  category?: string;
  sort?: string;
  query?: string;
  authorUsername?: string;
  editorsPickOnly?: boolean;
}): Promise<Article[]> {
  let result = [...articles];
  if (params?.authorUsername) {
    result = result.filter((a) => a.authorUsername === params.authorUsername);
  }
  if (params?.editorsPickOnly) {
    result = result.filter((a) => a.editorsPick);
  }
  result = filterArticlesByCategory(result, params?.category);
  if (params?.query) {
    result = searchArticles(result, params.query);
  }
  result = sortArticles(result, params?.sort);
  return withDelay(result);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const found = articles.find((a) => a.slug === slug) ?? null;
  return withDelay(found);
}

export async function getCommentsByArticleId(articleId: string): Promise<ArticleComment[]> {
  return withDelay(commentsByArticleId[articleId] ?? []);
}

export async function getWriters(params?: {
  featuredOnly?: boolean;
  query?: string;
}): Promise<Writer[]> {
  let result = [...writers];
  if (params?.featuredOnly) {
    result = result.filter((w) => w.featured);
  }
  if (params?.query) {
    result = searchWriters(result, params.query);
  }
  return withDelay(result);
}

export function getWritersMapSync(): Record<string, Writer> {
  return writers.reduce<Record<string, Writer>>((acc, writer) => {
    acc[writer.username] = writer;
    return acc;
  }, {});
}

export async function getWriterByUsername(username: string): Promise<Writer | null> {
  const found = writers.find((w) => w.username === username) ?? null;
  return withDelay(found);
}

export async function getServices(): Promise<Service[]> {
  return withDelay([...services]);
}