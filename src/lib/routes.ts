export const routes = {
  home: () => '/',
  about: () => '/about',
  books: (params?: { genre?: string; sort?: string; q?: string }) => {
    const search = new URLSearchParams();
    if (params?.genre && params.genre !== 'all') search.set('genre', params.genre);
    if (params?.sort) search.set('sort', params.sort);
    if (params?.q) search.set('q', params.q);
    const qs = search.toString();
    return qs ? `/books?${qs}` : '/books';
  },
  book: (slug: string) => `/books/${slug}`,
  services: () => '/publishing-services',
  community: (params?: { category?: string; sort?: string; q?: string }) => {
    const search = new URLSearchParams();
    if (params?.category && params.category !== 'all') search.set('category', params.category);
    if (params?.sort) search.set('sort', params.sort);
    if (params?.q) search.set('q', params.q);
    const qs = search.toString();
    return qs ? `/community?${qs}` : '/community';
  },
  article: (slug: string) => `/community/${slug}`,
  writer: (username: string) => `/writers/${username}`,
  events: (params?: { type?: string; status?: string }) => {
    const search = new URLSearchParams();
    if (params?.type && params.type !== 'all') search.set('type', params.type);
    if (params?.status && params.status !== 'all') search.set('status', params.status);
    const qs = search.toString();
    return qs ? `/events?${qs}` : '/events';
  },
  event: (slug: string) => `/events/${slug}`,
  contact: () => '/contact',
} as const;