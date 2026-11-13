import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocalToggle } from '@/hooks/useLocalToggle';

interface LikeButtonProps {
  initialLikes: number;
  onToggleNotice?: (msg: string) => void;
}

export function LikeButton({ initialLikes, onToggleNotice }: LikeButtonProps) {
  const { active, count, toggle } = useLocalToggle(false, initialLikes);

  function handleClick() {
    toggle();
    if (!active && onToggleNotice) {
      onToggleNotice(
        'Appreciation noted for this session. Persistent reader likes will be enabled in Phase 2.',
      );
    }
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.94 }}
      onClick={handleClick}
      aria-pressed={active}
      aria-label={active ? `Remove appreciation (${count})` : `Appreciate piece (${count})`}
      className={`min-h-[44px] px-4 py-2 rounded-full border text-caption font-medium inline-flex items-center gap-2 transition-colors ${
        active
          ? 'bg-burgundy text-cream border-burgundy'
          : 'bg-white text-charcoal border-line hover:border-burgundy'
      }`}
    >
      <Heart
        className={`w-4 h-4 ${active ? 'fill-current' : ''}`}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span>{active ? 'Appreciated' : 'Appreciate'}</span>
      <span className="opacity-80">· {count}</span>
    </motion.button>
  );
}