interface EditorialImageProps {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: '3:2' | '4:5' | '3:4' | '16:10';
  className?: string;
}

const aspectClasses = {
  '3:2': 'aspect-[3/2]',
  '4:5': 'aspect-[4/5]',
  '3:4': 'aspect-[3/4]',
  '16:10': 'aspect-[16/10]',
};

export function EditorialImage({
  src,
  alt,
  caption = 'Editorial illustration placeholder',
  aspect = '3:2',
  className = '',
}: EditorialImageProps) {
  if (src) {
    return (
      <figure className={`overflow-hidden rounded-sm border border-line bg-paper-deep ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover ${aspectClasses[aspect]}`}
        />
        {caption && (
          <figcaption className="px-3 py-2 text-caption text-ink-soft border-t border-line bg-paper">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={`relative overflow-hidden rounded-sm border border-line bg-paper-deep flex flex-col justify-between p-6 ${aspectClasses[aspect]} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Subtle geometric editorial lines */}
      <svg
        className="absolute inset-0 w-full h-full text-line/80 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="editorial-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#editorial-grid)" />
      </svg>

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.16em] text-burgundy font-semibold">
          Jollie Archive
        </span>
        <span className="w-8 h-px bg-gold" aria-hidden="true" />
      </div>

      <div className="relative z-10 my-auto max-w-xs">
        <p className="font-serif italic text-charcoal/80 text-base md:text-lg leading-snug">
          “{alt}”
        </p>
      </div>

      <figcaption className="relative z-10 text-caption text-ink-soft pt-3 border-t border-line flex items-center justify-between">
        <span>{caption}</span>
        <span className="text-xs uppercase tracking-widest opacity-75">{aspect}</span>
      </figcaption>
    </figure>
  );
}