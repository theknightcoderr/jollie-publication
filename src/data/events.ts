/* MOCK DATA - replace before launch */
import type { JollieEvent } from '@/types';

export const events: JollieEvent[] = [
  {
    id: 'evt-1',
    slug: 'annual-emerging-voices-prize-sample',
    title: 'Sample event — The Jollie Emerging Voices Essay Prize',
    summary:
      'Sample event: An annual open call celebrating long-form personal and cultural essays by unagented writers.',
    description:
      'Sample event for Phase 1 demonstration. The Jollie Emerging Voices Essay Prize invites original, previously unpublished essays between 2,500 and 4,000 words that explore place, craft, or cultural memory with clarity and warmth. Selected pieces are featured in our community reading room and considered for our annual print anthology.',
    type: 'competition',
    status: 'open',
    startDate: '2026-10-01',
    endDate: '2026-12-15',
    deadline: '2026-12-15',
    locationLabel: 'Online',
    eligibility: [
      'Sample event criterion: Open to writers worldwide writing in English',
      'Sample event criterion: Work must be original and previously unpublished',
      'Sample event criterion: Maximum one submission per contributor during the reading window',
    ],
    howToApply:
      'Sample event instructions: Prepare your manuscript as a clean double-spaced document without identifying marks. Online submission intake will be enabled in Phase 2.',
    featured: true,
    isMock: true,
  },
  {
    id: 'evt-2',
    slug: 'winter-poetry-pamphlet-window-sample',
    title: 'Sample event — Winter Poetry Pamphlet Submission Window',
    summary:
      'Sample event: Seasonal editorial reading window for cohesive poetry sequences of 18 to 28 pages.',
    description:
      'Sample event for Phase 1 demonstration. Our winter reading window welcomes manuscripts for sewn poetry pamphlets. We look for attentive craft, musical coherence, and sequences that reward slow re-reading.',
    type: 'submission',
    status: 'open',
    startDate: '2026-11-01',
    endDate: '2026-12-20',
    deadline: '2026-12-20',
    locationLabel: 'Online',
    eligibility: [
      'Sample event criterion: 18–28 pages of lyric, narrative, or formal poetry',
      'Sample event criterion: Individual poems may have appeared in journals provided acknowledgment is noted',
    ],
    howToApply:
      'Sample event instructions: Upload a single PDF with a table of contents. Direct portal uploads will activate in Phase 2.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-3',
    slug: 'short-fiction-open-call-sample',
    title: 'Sample event — Quarterly Short Fiction Reading Window',
    summary:
      'Sample event: Open call for character-driven short stories up to 5,000 words for the Jollie Community Anthology.',
    description:
      'Sample event for Phase 1 demonstration. We invite literary short stories with strong sense of place and understated emotional resonance.',
    type: 'submission',
    status: 'open',
    startDate: '2026-10-15',
    endDate: '2026-11-30',
    deadline: '2026-11-30',
    locationLabel: 'Online',
    eligibility: [
      'Sample event criterion: Fiction between 1,500 and 5,000 words',
      'Sample event criterion: Open to all community contributors',
    ],
    howToApply:
      'Sample event instructions: Submit via the Phase 2 contributor dashboard once launched.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-4',
    slug: 'structural-revision-workshop-sample',
    title: 'Sample event — The Architecture of the Second Draft',
    summary:
      'Sample event: A two-hour editorial seminar on structural pacing, scene transitions, and cutting with confidence.',
    description:
      'Sample event for Phase 1 demonstration. Led by fictional guest editors Clara Vance and Rowan Lindqvist, this practical workshop walks through real manuscript revision letters and structural maps.',
    type: 'workshop',
    status: 'upcoming',
    startDate: '2026-12-05',
    endDate: '2026-12-05',
    deadline: '2026-12-01',
    locationLabel: 'Online',
    eligibility: [
      'Sample event criterion: Ideal for prose writers working on a completed first draft',
      'Sample event criterion: Limited seminar places to allow discussion',
    ],
    howToApply:
      'Sample event instructions: Registration forms are in preview mode during Phase 1.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-5',
    slug: 'poetry-line-and-stanza-clinic-sample',
    title: 'Sample event — Line, Breath, and Stanza: Poetry Craft Clinic',
    summary:
      'Sample event: Close-reading workshop focusing on enjambment, caesura, and typesetting for print.',
    description:
      'Sample event for Phase 1 demonstration. Poets bring twelve lines of verse for collaborative discussion on cadence, punctuation, and page white space.',
    type: 'workshop',
    status: 'upcoming',
    startDate: '2026-12-12',
    endDate: '2026-12-12',
    deadline: '2026-12-08',
    locationLabel: 'In person',
    eligibility: [
      'Sample event criterion: Open to poets at any stage of practice',
    ],
    howToApply:
      'Sample event instructions: Reserve a seat once Phase 2 booking opens.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-6',
    slug: 'first-chapter-critique-fellowship-sample',
    title: 'Sample event — First Chapter Editorial Mentorship Initiative',
    summary:
      'Sample event: Community initiative pairing four debut novelists with developmental editors for detailed opening-chapter notes.',
    description:
      'Sample event for Phase 1 demonstration. Designed to demystify the editorial process for debut prose writers preparing a manuscript for publication.',
    type: 'initiative',
    status: 'upcoming',
    startDate: '2027-01-10',
    endDate: '2027-02-28',
    deadline: '2026-12-28',
    locationLabel: 'Online',
    eligibility: [
      'Sample event criterion: Writers who have not yet published a full-length novel',
      'Sample event criterion: Must have an opening chapter (up to 4,000 words) and one-page synopsis ready',
    ],
    howToApply:
      'Sample event instructions: Applications will open in Phase 2.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-7',
    slug: 'autumn-short-story-award-sample',
    title: 'Sample event — Autumn Short Story Competition (Archive)',
    summary:
      'Sample event: Past seasonal short story prize celebrating regional and domestic realism.',
    description:
      'Sample event for Phase 1 demonstration. This archived competition welcomed stories exploring quiet turning points in everyday life.',
    type: 'competition',
    status: 'closed',
    startDate: '2026-06-01',
    endDate: '2026-08-31',
    deadline: '2026-08-31',
    locationLabel: 'Online',
    eligibility: [
      'Sample event criterion: Short stories up to 4,000 words',
    ],
    howToApply: 'Sample event notice: This reading window is now closed.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-8',
    slug: 'summer-reading-evening-sample',
    title: 'Sample event — Summer Catalogue Reading & Evening Conversation',
    summary:
      'Sample event: An evening of readings and discussion on independent publishing and book craft.',
    description:
      'Sample event for Phase 1 demonstration. Contributors read excerpts from mock catalogue titles followed by an open Q&A on editorial craft.',
    type: 'event',
    status: 'closed',
    startDate: '2026-07-18',
    endDate: '2026-07-18',
    locationLabel: 'In person',
    eligibility: ['Sample event criterion: Open to all readers and writers'],
    howToApply: 'Sample event notice: This event has concluded.',
    featured: false,
    isMock: true,
  },
  {
    id: 'evt-9',
    slug: 'translation-symposium-sample',
    title: 'Sample event — Carrying the Cadence: Literary Translation Roundtable',
    summary:
      'Sample event: Past colloquium on translating contemporary poetry and short prose.',
    description:
      'Sample event for Phase 1 demonstration. Fictional contributors Devika Sen and Julian Mercer discussed footnoting, rhythm, and bilingual editions.',
    type: 'event',
    status: 'closed',
    startDate: '2026-05-22',
    endDate: '2026-05-22',
    locationLabel: 'Online',
    eligibility: ['Sample event criterion: Open public broadcast'],
    howToApply: 'Sample event notice: This event has concluded.',
    featured: false,
    isMock: true,
  },
];