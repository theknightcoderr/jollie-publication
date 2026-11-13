import { UserCheck, UserPlus } from 'lucide-react';
import { useLocalToggle } from '@/hooks/useLocalToggle';

interface FollowButtonProps {
  writerName: string;
  onToggleNotice?: (msg: string) => void;
}

export function FollowButton({ writerName, onToggleNotice }: FollowButtonProps) {
  const { active, toggle } = useLocalToggle(false, 0);

  function handleClick() {
    toggle();
    if (onToggleNotice) {
      onToggleNotice(
        !active
          ? `Following ${writerName} in this session. Persistent writer subscriptions will be enabled in Phase 2.`
          : `Unfollowed ${writerName} in this session.`,
      );
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      className={`min-h-[44px] px-5 py-2.5 rounded text-caption font-medium inline-flex items-center gap-2 transition-colors border ${
        active
          ? 'bg-cream text-burgundy border-burgundy'
          : 'bg-burgundy text-cream border-burgundy hover:bg-[#5E182A]'
      }`}
    >
      {active ? (
        <>
          <UserCheck className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          <span>Following (Session)</span>
        </>
      ) : (
        <>
          <UserPlus className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          <span>Follow Writer</span>
        </>
      )}
    </button>
  );
}