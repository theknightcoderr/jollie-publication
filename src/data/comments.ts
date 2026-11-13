/* MOCK DATA - replace before launch */
import type { ArticleComment } from '@/types';

export const commentsByArticleId: Record<string, ArticleComment[]> = {
  'art-1': [
    {
      id: 'cmt-1',
      articleId: 'art-1',
      authorName: 'Julian Mercer',
      authorUsername: 'julian-mercer',
      createdAt: '2026-10-29T11:15:00Z',
      body: 'The image of the hydrographer’s fair sheet with “not yet sounded” pencilled in the margin is one I shall keep pinned above my desk all winter.',
      isMock: true,
    },
    {
      id: 'cmt-2',
      articleId: 'art-1',
      authorName: 'Rowan Lindqvist',
      authorUsername: 'rowan-lindqvist',
      createdAt: '2026-10-30T14:40:00Z',
      body: 'A timely reminder as I edit my own short stories—leaving space for the reader to supply the wind off the water makes all the difference.',
      isMock: true,
    },
  ],
  'art-2': [
    {
      id: 'cmt-3',
      articleId: 'art-2',
      authorName: 'Arthur Pendelton',
      authorUsername: 'arthur-pendelton',
      createdAt: '2026-10-20T09:20:00Z',
      body: 'Those seven-foot window sills in old municipal libraries also kept direct sunlight off the leather spines along the wall presses. Practical craft and civic dignity went hand in hand.',
      isMock: true,
    },
  ],
  'art-3': [
    {
      id: 'cmt-4',
      articleId: 'art-3',
      authorName: 'Clara Vance',
      authorUsername: 'clara-vance',
      createdAt: '2026-10-12T18:05:00Z',
      body: '“Ballast settlement, sir.” What a wonderfully understated ending—I could hear the hiss of the brake valve.',
      isMock: true,
    },
  ],
  'art-4': [
    {
      id: 'cmt-5',
      articleId: 'art-4',
      authorName: 'Devika Sen',
      authorUsername: 'devika-sen',
      createdAt: '2026-09-30T16:10:00Z',
      body: 'The “Compost—save for another book” envelope has rescued many of my essays from becoming top-heavy.',
      isMock: true,
    },
  ],
  'art-5': [
    {
      id: 'cmt-6',
      articleId: 'art-5',
      authorName: 'Theo Bellingham',
      authorUsername: 'theo-bellingham',
      createdAt: '2026-10-23T10:00:00Z',
      body: 'The turn in “Folio 14” on the rust-brown shadow on the opposite rag-pulp page is extraordinarily fine.',
      isMock: true,
    },
  ],
  'art-7': [
    {
      id: 'cmt-7',
      articleId: 'art-7',
      authorName: 'Miriam Okafor',
      authorUsername: 'miriam-okafor',
      createdAt: '2026-09-13T12:30:00Z',
      body: '“Watch the page numerals, not the edge of the paper”—there is a whole philosophy of craftsmanship in that single instruction.',
      isMock: true,
    },
  ],
};