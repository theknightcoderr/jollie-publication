/* MOCK DATA - replace before launch */
import type { NavItem } from '@/types';
import { routes } from '@/lib/routes';

export const primaryNavigation: NavItem[] = [
  { label: 'Home', path: routes.home() },
  { label: 'Books', path: routes.books() },
  { label: 'Publishing Services', path: routes.services() },
  { label: 'Community', path: routes.community() },
  { label: 'Events', path: routes.events() },
  { label: 'About', path: routes.about() },
  { label: 'Contact', path: routes.contact() },
];