import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Article, ArticleComment, Writer } from '@/types';
import {
  getArticleBySlug,
  getCommentsByArticleId,
  getWriterByUsername,
} from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleReader } from '@/components/community/ArticleReader';
import { CommentSection } from '@/components/community/CommentSection';
import { LikeButton } from '@/components/community/LikeButton';
import { FollowButton } from '@/components/community/FollowButton';
import { Avatar } from '@/components/shared/Avatar';
import { EmptyState } from '@/components/shared/EmptyState';
import { LoadingState } from '@/components/shared/LoadingState';
import { Toast } from '@/components/shared/Toast';
import { formatDate } from '@/lib/format';
import { routes } from '@/lib/routes';

export default function ArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [writer, setWriter] = useState<Writer | null>(null);
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useDocumentTitle(article ? article.title : 'Reading Room');

  useEffect(() => {
    let active = true;
    setLoading(true);
    getArticleBySlug(slug).then(async (found) => {
      if (!active) return;
      if (found) {
        const [w, c] = await Promise.all([
          getWriterByUsername(found.authorUsername),
          getCommentsByArticleId(found.id),
        ]);
        if (active) {
          setArticle(found);
          setWriter(w);
          setComments(c);
        }
      } else {
        setArticle(null);
      }
      setLoading(false);
    });
    return () => { active = false; };
  }, [slug]);

  if (loading) {
    return (
      <Section variant="paper"><Container><LoadingState count={1} /></Container></Section>
    );
  }

  if (!article) {
    return (
      <Section variant="paper">
        <Container>
          <EmptyState
            title="Piece not found"
            description="This article may have been removed or the URL is incorrect."
            actionLabel="Return to Reading Room"
            actionTo={routes.community()}
          />
        </Container>
      </Section>
    );
  }

  const authorName = writer?.displayName ?? article.authorUsername;

  return (
    <Section variant="paper" borderBottom>
      <Container size="reading">
        <Breadcrumbs
          items={[{ label: 'Community', to: routes.community() }, { label: 'Reading Room' }]}
        />

        <article className="pt-6 space-y-12">
          <header className="space-y-6 border-b border-line pb-8 text-center">
            <h1 className="text-h1 font-serif text-charcoal">{article.title}</h1>
            <p className="text-h3 font-serif text-ink-soft font-normal max-w-prose mx-auto">
              {article.excerpt}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4">
              <Link to={routes.writer(article.authorUsername)} className="inline-flex items-center gap-3 group">
                <Avatar name={authorName} size="md" />
                <div className="text-left">
                  <span className="block font-semibold text-charcoal group-hover:text-burgundy transition-colors">
                    {authorName}
                  </span>
                  <span className="block text-xs text-ink-soft">
                    {formatDate(article.publishedOn)} · {article.readingMinutes} min read
                  </span>
                </div>
              </Link>
            </div>
          </header>

          <ArticleReader blocks={article.body} />

          <footer className="pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4">
            <LikeButton initialLikes={article.likes} onToggleNotice={setToastMsg} />
            {writer && (
              <FollowButton writerName={writer.displayName} onToggleNotice={setToastMsg} />
            )}
          </footer>

          <CommentSection comments={comments} />
        </article>

        <Toast message={toastMsg} onClose={() => setToastMsg(null)} />
      </Container>
    </Section>
  );
}