import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { EmptyState } from '@/components/shared/EmptyState';
import { routes } from '@/lib/routes';

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found');

  return (
    <Section variant="paper" className="min-h-[60vh] flex items-center">
      <Container>
        <EmptyState
          title="404 — Page Not Found"
          description="The page you are looking for has been moved or does not exist."
          actionLabel="Return to Homepage"
          actionTo={routes.home()}
        />
      </Container>
    </Section>
  );
}