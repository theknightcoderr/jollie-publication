import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Article, Category } from '@/types';
import { getArticles, getCategories, getWritersMapSync } from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CategoryNav } from '@/components/community/CategoryNav';
import { ArticleFeed } from '@/components/community/ArticleFeed';
import { LoadingState } from '@/components/shared/LoadingState';
import { EmptyState } from '@/components/shared/EmptyState';

export default function CommunityPage() {
  useDocumentTitle('Writers’ Community');
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') ?? 'all';

  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const writersMap = getWritersMapSync();

  function updateCategory(cat: string) {
    const next = new URLSearchParams(searchParams);
    if (cat === 'all') next.delete('category');
    else next.set('category', cat);
    setSearchParams(next);
  }

  useEffect(() => {
    let active = true;
    setLoading(true);
    Promise.all([
      getArticles({ category: selectedCategory }),
      getCategories(),
    ]).then(([arts, cats]) => {
      if (!active) return;
      setArticles(arts);
      setCategories(cats);
      setLoading(false);
    });
    return () => { active = false; };
  }, [selectedCategory]);

  return (
    <Section variant="paper" borderBottom>
      <Container>
        <Breadcrumbs items={[{ label: 'Writers’ Community' }]} />
        
        <div className="max-w-reading space-y-4 pt-2 mb-10">
          <p className="text-eyebrow uppercase font-semibold text-burgundy eyebrow-rule">
            The Reading Room
          </p>
          <h1 className="text-h1 font-serif text-charcoal">Writers’ Community</h1>
          <p className="text-body text-ink-soft">
            Explore sample essays, stories, and poetry from our contributors. In Phase 2, readers will be able to leave persistent comments and writers can submit drafts directly.
          </p>
        </div>

        <div className="mb-8 border-b border-line pb-2">
          <CategoryNav
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={updateCategory}
          />
        </div>

        {loading ? (
          <LoadingState label="Loading community writing…" count={4} />
        ) : articles.length === 0 ? (
          <EmptyState
            title="No pieces found"
            description="There are currently no mock articles published in this category."
            actionLabel="View All Writing"
            onAction={() => updateCategory('all')}
          />
        ) : (
          <ArticleFeed articles={articles} writersMap={writersMap} categories={categories} />
        )}
      </Container>
    </Section>
  );
}