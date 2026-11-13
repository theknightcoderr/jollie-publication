interface BookCoverProps {
  title: string;
  subtitle?: string;
  authorName: string;
  genreLabel?: string;
  variantIndex?: number;
  className?: string;
}

const palettes = [
  { bg: 'bg-burgundy', text: 'text-cream', rule: 'border-gold', accent: 'text-gold' },
  { bg: 'bg-charcoal', text: 'text-cream', rule: 'border-gold', accent: 'text-gold' },
  { bg: 'bg-cream', text: 'text-charcoal', rule: 'border-burgundy', accent: 'text-burgundy' },
  { bg: 'bg-paper-deep', text: 'text-charcoal', rule: 'border-charcoal', accent: 'text-burgundy' },
];

export function BookCover({
  title,
  subtitle,
  authorName,
  genreLabel = 'Jollie Editions',
  variantIndex = 0,
  className = '',
}: BookCoverProps) {
  const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), variantIndex);
  const scheme = palettes[hash % palettes.length];

  return (
    <div
      className={`aspect-[2/3] w-full rounded-sm ${scheme.bg} ${scheme.text} p-5 flex flex-col justify-between border border-line relative overflow-hidden select-none shadow-sm ${className}`}
      role="img"
      aria-label={`Book cover for ${title} by ${authorName}`}
    >
      {/* Book spine vertical accent */}
      <div className="absolute left-2.5 top-0 bottom-0 w-px bg-current opacity-20" aria-hidden="true" />

      {/* Inner frame */}
      <div className={`border ${scheme.rule} border-opacity-40 h-full w-full p-4 pl-5 flex flex-col justify-between`}>
        <div className="space-y-1">
          <p className={`text-[10px] uppercase tracking-[0.18em] font-sans ${scheme.accent}`}>
            {genreLabel}
          </p>
          <div className={`w-6 border-b ${scheme.rule} opacity-70`} />
        </div>

        <div className="my-auto py-3 space-y-2">
          <h4 className="font-serif text-lg md:text-xl leading-snug font-semibold line-clamp-3">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs opacity-80 font-sans leading-relaxed line-clamp-2">
              {subtitle}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-current/20 flex items-center justify-between text-xs">
          <span className="font-medium tracking-wide truncate">{authorName}</span>
          <span className={`font-serif italic text-[11px] ${scheme.accent}`}>Jollie</span>
        </div>
      </div>
    </div>
  );
}