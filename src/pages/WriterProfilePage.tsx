import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Article, Writer } from '@/types';
import { getArticles, getWriterByUsername, getWritersMapSync } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Avatar } from '@/components/shared/Avatar';
import { Tag } from '@/components/shared/Tag';
import { EmptyState } from '@/components/shared/EmptyState';
import { LoadingState } from '@/components/shared/LoadingState';
import { ArticleFeed } from '@/components/community/ArticleFeed';
import { FollowButton } from '@/components/community/FollowButton';
import { Toast } from '@/components/shared/Toast';
import { formatDate } from '@/lib/format';
import { routes } from '@/lib/routes';

export default function WriterProfilePage() {
  const { username = '' } = useParams<{ username: string }>();
  const [writer, setWriter] = useState<Writer | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  
  const writersMap = getWritersMapSync();

  useDocumentTitle(writer ? writer.displayName : 'Writer Profile');

  useEffect(() => {
    let active = true;
    setLoading(true);
    getWriterByUsername(username).then(async (found) => {
      if (!active) return;
      setWriter(found);
      if (found) {
        const arts = await getArticles({ authorUsername: found.username });
        if (active) setArticles(arts);
      }
      setLoading(false);
    });
    return () => { active = false; };
  }, [username]);

  if (loading) {
    return <Section variant="paper"><Container><LoadingState count={2} /></Container></Section>;
  }

  if (!writer) {
    return (
      <Section variant="paper">
        <Container>
          <EmptyState
            title="Writer not found"
            description="This community profile does not exist."
            actionLabel="Return to Community"
            actionTo={routes.community()}
          />
        </Container>
      </Section>
    );
  }

  return (
    <div>
      <Section variant="paper-deep" borderBottom>
        <Container size="reading">
          <div className="bg-white border border-line rounded-sm p-8 md:p-12 text-center space-y-6">
            <Avatar name={writer.displayName} size="lg" className="mx-auto" />
            <div className="space-y-2">
              <h1 className="text-h2 font-serif text-charcoal">{writer.displayName}</h1>
              <p className="text-caption text-ink-soft">@{writer.username} · Joined {formatDate(writer.joinedOn)}</p>
            </div>
            <p className="text-body text-charcoal leading-relaxed max-w-prose mx-auto">
              {writer.bio}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {writer.interests.map((interest) => (
                <Tag key={interest} variant="outline">{interest}</Tag>
              ))}
            </div>
            <div className="pt-4 flex justify-center">
              <FollowButton writerName={writer.displayName} onToggleNotice={setToastMsg} />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="paper">
        <Container>
          <h2 className="text-h3 font-serif text-charcoal mb-8 border-b border-line pb-2">
            Writing by {writer.displayName}
          </h2>
          {articles.length === 0 ? (
            <p className="text-caption text-ink-soft italic bg-paper-deep p-5 border border-line rounded-sm">
              No published pieces in the reading room yet.
            </p>
          ) : (
            <ArticleFeed articles={articles} writersMap={writersMap} />
          )}
        </Container>
      </Section>
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />
    </div>
  );
}