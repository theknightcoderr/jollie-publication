/**
 * Public TypeScript Interfaces — Jollie Publication (Phase 1, v2)
 * Follows §6.4 specifications. All mock records carry `isMock: true`.
 */

export type BookGenre =
  | 'fiction'
  | 'poetry'
  | 'non-fiction'
  | 'memoir'
  | 'short-stories'
  | 'childrens';

export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  authorName: string;
  authorUsername?: string;
  genre: BookGenre;
  summary: string;
  description: string;
  coverImage?: string; // falls back to <BookCover />
  publicationInfo: {
    format?: string;
    pages?: number;
    language?: string;
    publishedOn?: string;
    isbn?: string;
  };
  purchaseMode: 'enquire' | 'external'; // no live links in Phase 1
  purchaseUrl?: string;
  featured: boolean;
  isMock: true;
}

export type EventType =
  | 'event'
  | 'competition'
  | 'submission'
  | 'workshop'
  | 'initiative';

export type EventStatus = 'upcoming' | 'open' | 'closed';

export interface JollieEvent {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  type: EventType;
  status: EventStatus;
  startDate?: string; // ISO 8601 string
  endDate?: string;   // ISO 8601 string
  deadline?: string;  // ISO 8601 string
  locationLabel?: 'Online' | 'In person' | 'TBC' | string;
  eligibility: string[];
  howToApply: string;
  applicationUrl?: string; // placeholder only; undefined means show notice
  image?: string;
  featured: boolean;
  isMock: true;
}

export interface Writer {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  interests: string[];
  avatar?: string;
  coverImage?: string;
  social: {
    website?: string;
    instagram?: string;
    x?: string;
  };
  featured: boolean;
  joinedOn: string; // ISO 8601 string
  isMock: true;
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'poem'; lines: string[] } // preserves line breaks and stanzas
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: ArticleBlock[]; // structured, not raw HTML
  authorUsername: string;
  categorySlug: string;
  publishedOn: string; // ISO 8601 string
  readingMinutes: number;
  likes: number;
  comments: number;
  image?: string;
  imageAlt?: string;
  editorsPick: boolean;
  isMock: true;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
}

export interface ArticleComment {
  id: string;
  articleId: string;
  authorName: string;
  authorUsername?: string;
  createdAt: string; // ISO 8601 string
  body: string;
  isMock: true;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SiteConfig {
  organisationName: string;
  tagline: string;
  shortIntro: string;
  editorialPhilosophy: string[];
  communityMission: string;
  contact: {
    generalEmailPlaceholder: string;
    submissionsNotice: string;
    locationPlaceholder: string;
    officeHoursPlaceholder: string;
  };
  socialPlaceholders: {
    instagramLabel: string;
    xLabel: string;
    newsletterNotice: string;
  };
  phaseNotice: string;
}