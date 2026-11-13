import type { Article, Writer } from '@/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ArticleFeed } from '@/components/community/ArticleFeed';
import { routes } from '@/lib/routes';

interface CommunityIntroProps {
  articles: Article[];
  writersMap: Record<string, Writer>;
}

export function CommunityIntro({ articles, writersMap }: CommunityIntroProps) {
  return (
    <Section variant="paper" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="The Reading Room"
          title="Editor’s Picks from the Writers’ Community"
          description="Selected essays, stories, and poems from our sample literary community. In Phase 2, contributors will share work directly and submit pieces for print."
          actionLabel="Enter the Community"
          actionTo={routes.community()}
        />

        <ArticleFeed articles={articles.slice(0, 4)} writersMap={writersMap} />
      </Container>
    </Section>
  );
}