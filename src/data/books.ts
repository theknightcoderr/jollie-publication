/* MOCK DATA - replace before launch */
import type { Book } from '@/types';

export const books: Book[] = [
  {
    id: 'bk-1',
    slug: 'the-cartographers-silence',
    title: 'The Cartographer’s Silence',
    subtitle: 'Notes from a Disappearing Coast',
    authorName: 'Clara Vance',
    authorUsername: 'clara-vance',
    genre: 'fiction',
    summary:
      'A contemplative novel following an ordnance surveyor tasked with mapping an eroding tidal island over a single winter.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Set along a windswept estuary in the late 1970s, The Cartographer’s Silence traces the quiet friendship between a visiting surveyor and the island’s retired harbourmaster as they record footpaths, sea walls, and parish boundaries before the spring tides reclaim them. Written in spare, luminous prose, it examines what we choose to measure and what remains unmapped.',
    publicationInfo: {
      format: 'Trade Paperback',
      pages: 248,
      language: 'English (UK)',
      publishedOn: '2026-09-15',
    },
    purchaseMode: 'enquire',
    featured: true,
    isMock: true,
  },
  {
    id: 'bk-2',
    slug: 'wintering-in-amber',
    title: 'Wintering in Amber',
    subtitle: 'Collected Poems',
    authorName: 'Julian Mercer',
    authorUsername: 'julian-mercer',
    genre: 'poetry',
    summary:
      'Forty-two lyric poems arranged across four seasons, attending to orchard frost, herbarium sheets, and domestic stillness.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. In Wintering in Amber, Julian Mercer pairs formal precision with musical warmth. Drawing on old botanical notebooks and winter walks, these poems treat ordinary thresholds—a kitchen window at dusk, a pressed fern between ledger pages—as sites of quiet endurance.',
    publicationInfo: {
      format: 'Sewn Paperback',
      pages: 96,
      language: 'English (UK)',
      publishedOn: '2026-08-20',
    },
    purchaseMode: 'enquire',
    featured: true,
    isMock: true,
  },
  {
    id: 'bk-3',
    slug: 'letters-to-an-unbuilt-city',
    title: 'Letters to an Unbuilt City',
    subtitle: 'Civic Memory and the Architecture of Reading Rooms',
    authorName: 'Miriam Okafor',
    authorUsername: 'miriam-okafor',
    genre: 'non-fiction',
    summary:
      'An architectural and cultural study of municipal reading rooms, community halls, and the unbuilt blueprints that shaped modern cities.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Blending archival research with personal travelogue, Miriam Okafor visits seven historic libraries and examines dozens of unrealised civic blueprints. She argues that the way a city designs its quietest public rooms reveals its deepest democratic ambitions.',
    publicationInfo: {
      format: 'Hardback',
      pages: 312,
      language: 'English (UK)',
      publishedOn: '2026-10-01',
    },
    purchaseMode: 'enquire',
    featured: true,
    isMock: true,
  },
  {
    id: 'bk-4',
    slug: 'small-orbits',
    title: 'Small Orbits',
    subtitle: 'Twelve Short Stories',
    authorName: 'Rowan Lindqvist',
    authorUsername: 'rowan-lindqvist',
    genre: 'short-stories',
    summary:
      'Twelve interconnected stories set along a branch railway line, capturing fleeting conversations between strangers and neighbours.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. From a stationmaster tending beehives on an unused platform to a piano tuner travelling with a notebook of lost melodies, Small Orbits celebrates the understated dramas of provincial life with warmth, dry wit, and psychological acuity.',
    publicationInfo: {
      format: 'Trade Paperback',
      pages: 216,
      language: 'English (UK)',
      publishedOn: '2026-07-11',
    },
    purchaseMode: 'enquire',
    featured: true,
    isMock: true,
  },
  {
    id: 'bk-5',
    slug: 'the-binders-apron',
    title: 'The Binder’s Apron',
    subtitle: 'Forty Years at the Pressing Board',
    authorName: 'Arthur Pendelton',
    authorUsername: 'arthur-pendelton',
    genre: 'memoir',
    summary:
      'A craftsman’s memoir of restoring water-damaged folios, family Bibles, and parish registers in a backstreet bindery.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Beginning with his apprenticeship in a chilly workshop smelling of wheat paste and linen thread, Arthur Pendelton reflects on the tactile afterlife of books and the generations of readers who leave pressed flowers, train tickets, and marginalia inside them.',
    publicationInfo: {
      format: 'Hardback',
      pages: 264,
      language: 'English (UK)',
      publishedOn: '2026-06-05',
    },
    purchaseMode: 'enquire',
    featured: false,
    isMock: true,
  },
  {
    id: 'bk-6',
    slug: 'the-lantern-makers-almanac',
    title: 'The Lantern-Maker’s Almanac',
    subtitle: 'Fables for Long Evenings',
    authorName: 'Elena Rostova',
    authorUsername: 'elena-rostova',
    genre: 'childrens',
    summary:
      'Illustrated bedtime fables following a badger clockmaker who repairs fallen stars and paper lanterns for the woodland post.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Written to be read aloud by lamplight, The Lantern-Maker’s Almanac weaves gentle humour and timeless storytelling for young readers and adults alike.',
    publicationInfo: {
      format: 'Illustrated Hardback',
      pages: 144,
      language: 'English (UK)',
      publishedOn: '2026-05-18',
    },
    purchaseMode: 'enquire',
    featured: false,
    isMock: true,
  },
  {
    id: 'bk-7',
    slug: 'polyphony-and-echo',
    title: 'Polyphony and Echo',
    subtitle: 'On Reading Across Borders',
    authorName: 'Devika Sen',
    authorUsername: 'devika-sen',
    genre: 'non-fiction',
    summary:
      'A collection of critical essays examining how translated novels carry cadence, idiom, and historical memory across languages.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Devika Sen brings clarity and warmth to literary criticism, showing how every act of translation is also an act of hospitality.',
    publicationInfo: {
      format: 'Trade Paperback',
      pages: 232,
      language: 'English (UK)',
      publishedOn: '2026-04-22',
    },
    purchaseMode: 'enquire',
    featured: false,
    isMock: true,
  },
  {
    id: 'bk-8',
    slug: 'cairns-on-the-ridge',
    title: 'Cairns on the Ridge',
    subtitle: 'Field Notes & Lyric Sequence',
    authorName: 'Theo Bellingham',
    authorUsername: 'theo-bellingham',
    genre: 'poetry',
    summary:
      'Poems and prose weather notes composed along high limestone paths and sheepfolds.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Combining walking journals with taut three-stanza lyrics, Theo Bellingham listens closely to wind over drystone walls, curlew calls, and the changing light of upland valleys.',
    publicationInfo: {
      format: 'Sewn Paperback',
      pages: 112,
      language: 'English (UK)',
      publishedOn: '2026-08-03',
    },
    purchaseMode: 'enquire',
    featured: false,
    isMock: true,
  },
  {
    id: 'bk-9',
    slug: 'the-cardamom-ledger',
    title: 'The Cardamom Ledger',
    subtitle: 'A Novel in Three Generations',
    authorName: 'Nadia Al-Mansoor',
    authorUsername: 'nadia-al-mansoor',
    genre: 'fiction',
    summary:
      'An expansive family chronicle traced through a brass-bound spice merchant’s ledger passed down from port to port.',
    description:
      'Fictional catalogue title for Phase 1 demonstration. Spanning sixty years, The Cardamom Ledger follows three women who inherit not only a merchant house’s account book, but the unspoken stories written in its margins.',
    publicationInfo: {
      format: 'Trade Paperback',
      pages: 340,
      language: 'English (UK)',
      publishedOn: '2026-10-18',
    },
    purchaseMode: 'enquire',
    featured: false,
    isMock: true,
  },
];