import { useEffect, useState } from 'react';
import type { Article, Book, JollieEvent, Service, Writer } from '@/types';
import {
  getArticles,
  getBooks,
  getFeaturedEvent,
  getServices,
  getWriters,
  getWritersMapSync,
} from '../services/dataAccess';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Hero } from '@/components/home/Hero';
import { FeaturedPublications } from '@/components/home/FeaturedPublications';
import { CommunityIntro } from '@/components/home/CommunityIntro';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FeaturedAuthors } from '@/components/home/FeaturedAuthors';
import { EventsFeature } from '@/components/home/EventsFeature';
import { AboutPreview } from '@/components/home/AboutPreview';
import { LoadingState } from '@/components/shared/LoadingState';
import { Container } from '@/components/layout/Container';

export default function HomePage() {
  useDocumentTitle('Independent Publishing House & Literary Community');

  const [books, setBooks] = useState<Book[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [writers, setWriters] = useState<Writer[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [featuredEvent, setFeaturedEvent] = useState<JollieEvent | null>(null);
  const [loading, setLoading] = useState(true);

  const writersMap = getWritersMapSync();

  useEffect(() => {
    let active = true;
    Promise.all([
      getBooks({ featuredOnly: true }),
      getArticles({ editorsPickOnly: true }),
      getWriters({ featuredOnly: true }),
      getServices(),
      getFeaturedEvent(),
    ]).then(([bks, arts, wrts, srvs, evt]) => {
      if (!active) return;
      setBooks(bks);
      setArticles(arts);
      setWriters(wrts);
      setServices(srvs);
      setFeaturedEvent(evt);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      <Hero />
      {loading ? (
        <Container className="py-16">
          <LoadingState label="Loading Jollie Publication highlights…" count={3} />
        </Container>
      ) : (
        <>
          <FeaturedPublications books={books} />
          <CommunityIntro articles={articles} writersMap={writersMap} />
          <ServicesPreview services={services} />
          <FeaturedAuthors writers={writers} />
          <EventsFeature event={featuredEvent} />
          <AboutPreview />
        </>
      )}
    </div>
  );
}