import type { Writer } from '@/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { WriterCard } from '@/components/community/WriterCard';
import { routes } from '@/lib/routes';

interface FeaturedAuthorsProps {
  writers: Writer[];
}

export function FeaturedAuthors({ writers }: FeaturedAuthorsProps) {
  return (
    <Section variant="paper-deep" borderBottom>
      <Container>
        <SectionHeading
          eyebrow="Contributors"
          title="Featured Community Voices"
          description="Meet sample essayists, poets, translators, and fiction writers contributing to the Jollie reading room."
          actionLabel="Read Community Work"
          actionTo={routes.community()}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {writers.slice(0, 3).map((writer) => (
            <WriterCard key={writer.id} writer={writer} />
          ))}
        </div>
      </Container>
    </Section>
  );
}