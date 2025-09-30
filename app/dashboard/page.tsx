import { loadAllNicheData } from '@/lib/data/aggregateNicheData';
import DashboardPageClient from './DashboardPageClient';

export const metadata = {
  title: 'SEO Feasibility Dashboard | LocalBizzList',
  description: 'Comprehensive South Florida niche SEO analysis and feasibility dashboard',
};

export default function DashboardPage() {
  const { niches, metrics } = loadAllNicheData();

  return <DashboardPageClient initialNiches={niches} initialMetrics={metrics} />;
}
