/* MOCK DATA - replace before launch */
import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'srv-1',
    slug: 'editorial-development',
    title: 'Editorial Assessment & Structural Editing',
    summary:
      'In-depth manuscript evaluation focusing on narrative architecture, pacing, argument, and voice.',
    description:
      'TODO (Jollie): provide exact scope for structural editing. Typically suited to completed first or second drafts seeking a comprehensive editorial report and margin annotations before line-level work begins.',
    includes: [
      'Full manuscript read with an editorial assessment letter',
      'Chapter-by-chapter notes on structure, pacing, and clarity',
      'Editorial consultation call to discuss revision strategy',
      'TODO (Jollie): confirm specific deliverables for this service',
    ],
  },
  {
    id: 'srv-2',
    slug: 'copy-editing-proofreading',
    title: 'Line Editing, Copy-Editing & Proofreading',
    summary:
      'Sentence-level refinement for rhythm, clarity, consistency, and British/Commonwealth house style.',
    description:
      'TODO (Jollie): provide exact copy-editing and proofreading workflow details. Ensures grammatical precision, stylistic consistency, and clean page proofs prior to print or digital release.',
    includes: [
      'Line-by-line editing for prose flow and tone',
      'Custom style sheet tracking spellings, hyphenation, and timelines',
      'Final page-proof check against typeset layouts',
      'TODO (Jollie): confirm specific deliverables for this service',
    ],
  },
  {
    id: 'srv-3',
    slug: 'cover-book-design',
    title: 'Book Interior Typesetting & Cover Design',
    summary:
      'Bespoke cover art direction and classical interior typography tailored to your book’s genre.',
    description:
      'TODO (Jollie): provide design specifications. Our design approach favours enduring typographic clarity, considered paper stocks, and covers that stand beside established literary editions.',
    includes: [
      'Custom front, spine, and back cover concepts',
      'Print-ready interior typesetting (widow/orphan control, running heads)',
      'Reflowable eBook formatting (EPUB) for digital readers',
      'TODO (Jollie): confirm specific deliverables for this service',
    ],
  },
  {
    id: 'srv-4',
    slug: 'full-publication-programme',
    title: 'Guided Independent Publication',
    summary:
      'End-to-end editorial, design, and production guidance from finished manuscript to finished book.',
    description:
      'TODO (Jollie): provide details on Jollie’s full publication packages and selection process for authors seeking complete project stewardship.',
    includes: [
      'Dedicated editorial and production coordination',
      'Structural edit, copy-edit, typesetting, and cover design',
      'Print production supervision and bibliographic metadata setup',
      'TODO (Jollie): confirm specific deliverables for this service',
    ],
  },
  {
    id: 'srv-5',
    slug: 'poetry-anthology-curation',
    title: 'Poetry Collections & Chapbook Production',
    summary:
      'Specialist sequencing, stanza typesetting, and tactile production for poetry manuscripts.',
    description:
      'TODO (Jollie): provide specifics on poetry and anthology publishing. Poetry demands attentive page proportions so line breaks and white space remain intact across formats.',
    includes: [
      'Collection ordering and sequence consultation',
      'Precision poetry typesetting preserving indentation and form',
      'Short-run or standard print edition preparation',
      'TODO (Jollie): confirm specific deliverables for this service',
    ],
  },
  {
    id: 'srv-6',
    slug: 'author-launch-guidance',
    title: 'Author Positioning & Launch Strategy',
    summary:
      'Practical, plain-spoken preparation for book launches, press materials, and reader outreach.',
    description:
      'TODO (Jollie): provide launch support details. Focused on credible literary outreach, advance reader materials, and long-term author presence without exaggerated marketing claims.',
    includes: [
      'Press release and bibliographic advance information sheet (AIS)',
      'Blurb, jacket copy, and author biography refinement',
      'Launch reading and independent bookshop outreach guidance',
      'TODO (Jollie): confirm specific deliverables for this service',
    ],
  },
];