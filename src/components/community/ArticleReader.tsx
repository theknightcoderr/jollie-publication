import type { ArticleBlock } from '@/types';
import { EditorialImage } from '@/components/shared/EditorialImage';

interface ArticleReaderProps {
  blocks: ArticleBlock[];
}

export function ArticleReader({ blocks }: ArticleReaderProps) {
  return (
    <div className="max-w-prose mx-auto space-y-6 text-article-body font-serif text-charcoal">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2
                key={index}
                className="text-h2 font-serif text-charcoal pt-6 pb-1 border-b border-line"
              >
                {block.text}
              </h2>
            );

          case 'quote':
            return (
              <blockquote
                key={index}
                className="my-8 pl-6 border-l-2 border-burgundy bg-paper-deep/60 py-5 pr-6 rounded-r-sm space-y-2"
              >
                <p className="italic text-charcoal leading-relaxed">“{block.text}”</p>
                {block.cite && (
                  <footer className="text-caption font-sans text-ink-soft not-italic">
                    — {block.cite}
                  </footer>
                )}
              </blockquote>
            );

          case 'poem':
            return (
              <div
                key={index}
                className="my-6 py-6 px-6 md:px-10 bg-paper-deep/50 border-l-2 border-gold rounded-r-sm font-serif text-charcoal overflow-x-auto"
              >
                {block.lines.map((line, lineIdx) =>
                  line === '' ? (
                    <div key={lineIdx} className="h-5" aria-hidden="true" />
                  ) : (
                    <p key={lineIdx} className="leading-relaxed whitespace-pre-wrap">
                      {line}
                    </p>
                  ),
                )}
              </div>
            );

          case 'image':
            return (
              <div key={index} className="my-8 font-sans">
                <EditorialImage
                  src={block.src}
                  alt={block.alt}
                  caption={block.caption}
                  aspect="3:2"
                />
              </div>
            );

          case 'paragraph':
          default:
            return (
              <p key={index} className="leading-[1.8] text-charcoal">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}