import { getNicheBySlug, getAllNicheSlugs } from '@/lib/data/aggregateNicheData';
import { notFound } from 'next/navigation';
import NicheDetailClient from './NicheDetailClient';

export async function generateStaticParams() {
  const slugs = getAllNicheSlugs();
  return slugs.map((slug) => ({
    niche: slug,
  }));
}

export async function generateMetadata({ params }: { params: { niche: string } }) {
  const nicheData = getNicheBySlug(params.niche);

  if (!nicheData) {
    return {
      title: 'Niche Not Found | LocalBizzList',
    };
  }

  return {
    title: `${nicheData.name} SEO Analysis | LocalBizzList Dashboard`,
    description: `Detailed SEO feasibility analysis for ${nicheData.name} in South Florida. ${nicheData.summary.verdict} verdict with score of ${nicheData.scores.total}/100.`,
  };
}

export default function NichePage({ params }: { params: { niche: string } }) {
  const nicheData = getNicheBySlug(params.niche);

  if (!nicheData) {
    notFound();
  }

  return <NicheDetailClient niche={nicheData} />;
}
