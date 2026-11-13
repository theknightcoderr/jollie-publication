import { Link } from 'react-router-dom';
import { Clock, Heart, MessageSquare } from 'lucide-react';
import type { Article, Writer } from '@/types';
import { Tag } from '@/components/shared/Tag';
import { Avatar } from '@/components/shared/Avatar';
import { formatShortDate } from '@/lib/format';
import { routes } from '@/lib/routes';

interface ArticleCardProps {
  article: Article;
  writer?: Writer;
  categoryName?: string;
}

export function ArticleCard({ article, writer, categoryName }: ArticleCardProps) {
  const authorDisplayName = writer?.displayName ?? article.authorUsername;

  return (
    <article className="bg-white border border-line rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Tag variant="cream">{categoryName ?? article.categorySlug}</Tag>
            {article.editorsPick && <Tag variant="dark">Editor’s Pick</Tag>}
          </div>
          <span className="text-xs text-ink-soft inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
            {article.readingMinutes} min read
          </span>
        </div>

        <h3 className="text-h3 font-serif text-charcoal hover:text-burgundy transition-colors">
          <Link to={routes.article(article.slug)}>{article.title}</Link>
        </h3>

        <p className="text-caption text-ink-soft leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="pt-5 mt-6 border-t border-line flex items-center justify-between gap-4">
        {/* Consistent byline styling: name — role/date (§5.9) */}
        <Link
          to={routes.writer(article.authorUsername)}
          className="inline-flex items-center gap-2.5 group min-w-0"
        >
          <Avatar name={authorDisplayName} size="sm" />
          <div className="text-xs truncate">
            <span className="font-semibold text-charcoal group-hover:text-burgundy transition-colors">
              {authorDisplayName}
            </span>
            <span className="text-ink-soft"> — {formatShortDate(article.publishedOn)}</span>
          </div>
        </Link>

        <div className="flex items-center gap-3 text-xs text-ink-soft shrink-0">
          <span className="inline-flex items-center gap-1" aria-label={`${article.likes} likes`}>
            <Heart className="w-3.5 h-3.5 text-burgundy" strokeWidth={1.5} aria-hidden="true" />
            {article.likes}
          </span>
          <span
            className="inline-flex items-center gap-1"
            aria-label={`${article.comments} comments`}
          >
            <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
            {article.comments}
          </span>
        </div>
      </div>
    </article>
  );
}