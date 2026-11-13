/* MOCK DATA - replace before launch */
import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'essays',
    name: 'Essays & Ideas',
    description: 'Personal essays, cultural reflections, and long-form argument.',
    icon: 'Feather',
  },
  {
    id: 'cat-2',
    slug: 'short-fiction',
    name: 'Short Fiction',
    description: 'Character-driven stories, quiet realism, and experimental prose.',
    icon: 'BookOpen',
  },
  {
    id: 'cat-3',
    slug: 'poetry',
    name: 'Poetry',
    description: 'Lyric, narrative, and formal verse with preserved stanza structure.',
    icon: 'Sparkles',
  },
  {
    id: 'cat-4',
    slug: 'memoir',
    name: 'Memoir & Life Writing',
    description: 'First-person accounts of place, memory, and lived experience.',
    icon: 'Compass',
  },
  {
    id: 'cat-5',
    slug: 'criticism',
    name: 'Literary Criticism',
    description: 'Close readings, book reviews, and essays on literary craft.',
    icon: 'Glasses',
  },
  {
    id: 'cat-6',
    slug: 'craft',
    name: 'On Craft & Publishing',
    description: 'Notes on revision, structure, and the working life of writers.',
    icon: 'PenTool',
  },
  {
    id: 'cat-7',
    slug: 'translation',
    name: 'World & Translation',
    description: 'Dialogues across languages, regional voices, and translated excerpts.',
    icon: 'Globe',
  },
];