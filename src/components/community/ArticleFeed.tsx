import type { Article, Category, Writer } from '@/types';
import { ArticleCard } from './ArticleCard';

interface ArticleFeedProps {
  articles: Article[];
  writersMap: Record<string, Writer>;
  categories?: Category[];
}

export function ArticleFeed({ articles, writersMap, categories = [] }: ArticleFeedProps) {
  const categoryMap = categories.reduce<Record<string, string>>((acc, cat) => {
    acc[cat.slug] = cat.name;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          writer={writersMap[article.authorUsername]}
          categoryName={categoryMap[article.categorySlug]}
        />
      ))}
    </div>
  );
}