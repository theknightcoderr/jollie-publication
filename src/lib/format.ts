import type { BookGenre, EventStatus, EventType } from '@/types';

export function formatDate(isoDate?: string): string {
  if (!isoDate) return 'Date to be confirmed';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatShortDate(isoDate?: string): string {
  if (!isoDate) return 'TBC';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatGenreLabel(genre: BookGenre): string {
  const map: Record<BookGenre, string> = {
    fiction: 'Literary Fiction',
    poetry: 'Poetry',
    'non-fiction': 'Non-Fiction',
    memoir: 'Memoir',
    'short-stories': 'Short Stories',
    childrens: "Children’s Literature",
  };
  return map[genre];
}

export function formatEventTypeLabel(type: EventType): string {
  const map: Record<EventType, string> = {
    event: 'Literary Event',
    competition: 'Competition',
    submission: 'Open Submission',
    workshop: 'Editorial Workshop',
    initiative: 'Special Initiative',
  };
  return map[type];
}

export function formatEventStatusLabel(status: EventStatus): string {
  const map: Record<EventStatus, string> = {
    open: 'Open for Entries',
    upcoming: 'Upcoming',
    closed: 'Closed',
  };
  return map[status];
}