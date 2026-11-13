import type { ArticleBlock } from '@/types';

const WORDS_PER_MINUTE = 220;

export function calculateReadingMinutes(blocks: ArticleBlock[]): number {
  const totalWords = blocks.reduce((acc, block) => {
    if (block.type === 'paragraph' || block.type === 'heading' || block.type === 'quote') {
      const words = block.text.trim().split(/\s+/).filter(Boolean).length;
      return acc + words;
    }
    if (block.type === 'poem') {
      const words = block.lines
        .join(' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;
      return acc + words;
    }
    return acc;
  }, 0);

  return Math.max(1, Math.ceil(totalWords / WORDS_PER_MINUTE));
}