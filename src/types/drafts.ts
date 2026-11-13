/**
 * RESERVED FOR PHASE 2 — DO NOT IMPORT INTO PHASE 1 UI COMPONENTS.
 *
 * Privacy by design (§2.3): A writer's public profile and their private drafts
 * are separate concepts. Public types and components MUST NOT contain draft fields.
 * This file models unpublished and draft states exclusively for Phase 2 backend integration.
 */

export type DraftStatus = 'draft' | 'submitted' | 'in_review' | 'revision_requested';

export type DraftBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'poem'; lines: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface WriterDraft {
  id: string;
  authorUsername: string;
  workingTitle: string;
  categorySlug?: string;
  body: DraftBlock[];
  status: DraftStatus;
  lastSavedAt: string; // ISO 8601
  editorialNotes?: string;
}