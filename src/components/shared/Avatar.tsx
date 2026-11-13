interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-9 h-9 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-20 h-20 text-xl',
};

const bgCycle = [
  'bg-burgundy text-cream',
  'bg-charcoal text-cream',
  'bg-cream text-burgundy border border-burgundy/30',
];

export function Avatar({ name, src, size = 'md', className = '' }: AvatarProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  const colorIndex = name.charCodeAt(0) % bgCycle.length;

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        loading="lazy"
        className={`aspect-square rounded-full object-cover shrink-0 ${sizeMap[size]} ${className}`}
      />
    );
  }

  return (
    <div
      className={`aspect-square rounded-full shrink-0 inline-flex items-center justify-center font-serif font-semibold tracking-wider select-none ${sizeMap[size]} ${bgCycle[colorIndex]} ${className}`}
      aria-label={name}
    >
      {initials || 'JP'}
    </div>
  );
}