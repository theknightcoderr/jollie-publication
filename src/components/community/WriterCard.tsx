import { Link } from 'react-router-dom';
import type { Writer } from '@/types';
import { Avatar } from '@/components/shared/Avatar';
import { Tag } from '@/components/shared/Tag';
import { routes } from '@/lib/routes';

interface WriterCardProps {
  writer: Writer;
}

export function WriterCard({ writer }: WriterCardProps) {
  return (
    <article className="bg-white border border-line rounded-sm p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      <div className="space-y-4">
        <div className="flex items-center gap-3.5">
          <Avatar name={writer.displayName} src={writer.avatar} size="md" />
          <div>
            <h3 className="text-h3 font-serif text-charcoal hover:text-burgundy transition-colors">
              <Link to={routes.writer(writer.username)}>{writer.displayName}</Link>
            </h3>
            <p className="text-xs text-ink-soft">@{writer.username}</p>
          </div>
        </div>

        <p className="text-caption text-ink-soft leading-relaxed line-clamp-3">{writer.bio}</p>

        <div className="flex flex-wrap gap-1.5">
          {writer.interests.map((interest) => (
            <Tag key={interest} variant="outline" className="text-xs px-2.5 py-0.5">
              {interest}
            </Tag>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-line flex items-center justify-between text-caption">
        <Link
          to={routes.writer(writer.username)}
          className="font-medium text-burgundy hover:underline underline-offset-4"
        >
          Read profile &amp; essays →
        </Link>
        <span className="text-xs text-ink-soft">Mock contributor</span>
      </div>
    </article>
  );
}