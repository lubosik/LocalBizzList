import fs from 'fs';
import path from 'path';

export interface KeywordData {
  keyword: string;
  search_volume: number;
  cpc: number;
  competition_index: number;
  competition: string;
  monthly_searches: Record<string, number>;
  intent?: string;
  geo?: string;
  serp_features?: string[];
  top_urls?: string[];
}

export interface SerpResult {
  keyword: string;
  city: string;
  local_pack_present: boolean;
  paa_present: boolean;
  featured_snippet_present: boolean;
  top_organic_urls: string[];
  top_competitor_domain: string;
}

export interface CompetitorInfo {
  domain?: string;
  title?: string;
  phone?: string;
  rating?: number;
  description?: string;
  services?: string[];
  features?: string[];
  content_analysis?: {
    on_page_patterns?: string[] | string;
    schema?: string[] | string;
    internal_linking?: string[] | string;
    cta_elements?: string[] | string;
    e_e_a_t_signals?: string[] | string;
  };
  on_page_patterns?: string;
  schema?: string | string[];
  internal_linking?: string;
  ctas?: string;
  e_e_a_t_signals?: string;
  title_length?: number;
  h1?: string;
  word_count?: number;
}

export interface SubScores {
  demand: number;
  competition: number;
  localPack: number;
  contentGap: number;
  seasonality: number;
}

export interface Weights {
  demand: number;
  competition: number;
  localPack: number;
  contentGap: number;
  seasonality: number;
}

export interface Scores {
  total: number;
  subScores: SubScores;
  weights: Weights;
}

export interface ContentPlan {
  pillarPages: string[];
  clusterPages: string[];
  locationPages: string[];
  leadMagnets: string[];
}

export interface NinetyDayPlan {
  month1: string[];
  month2: string[];
  month3: string[];
}

export interface NicheSummary {
  totalKeywords: number;
  averageVolume: number;
  averageCPC: number;
  rankabilityScore: number;
  verdict: string;
  keyStrengths: string[];
  keyWeaknesses: string[];
}

export interface NicheData {
  name: string;
  slug: string;
  keywords: KeywordData[];
  serpData: SerpResult[];
  competitorData: Record<string, CompetitorInfo>;
  processedAt: string;
  scores: Scores;
  rationale: string;
  summary: NicheSummary;
  recommendations: string[];
  contentPlan: ContentPlan;
  ninetyDayPlan: NinetyDayPlan;
}

export interface DashboardMetrics {
  totalNiches: number;
  avgKD: number;
  avgCPC: number;
  percentWithLocalPack: number;
  percentWithPAA: number;
  percentWithFeaturedSnippet: number;
  easyToRankCount: number;
  mediumToRankCount: number;
  hardToRankCount: number;
  dateOfRun: string;
  highestScore: number;
  lowestScore: number;
  totalKeywords: number;
}

export interface AggregatedData {
  niches: NicheData[];
  metrics: DashboardMetrics;
  top3: NicheData[];
}

const OUTPUTS_PATH = path.join(process.cwd(), 'LocalBizzList research', 'outputs', 'niches');

export function loadAllNicheData(): AggregatedData {
  const nicheFiles = fs.readdirSync(OUTPUTS_PATH).filter(file => file.endsWith('.json'));

  const niches: NicheData[] = nicheFiles.map(file => {
    const filePath = path.join(OUTPUTS_PATH, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as NicheData;
  });

  // Sort by score descending
  niches.sort((a, b) => b.scores.total - a.scores.total);

  // Calculate metrics
  const totalKeywords = niches.reduce((sum, n) => sum + n.keywords.length, 0);
  const avgKD = niches.reduce((sum, n) => {
    const nicheAvgKD = n.keywords.reduce((s, k) => s + k.competition_index, 0) / n.keywords.length;
    return sum + nicheAvgKD;
  }, 0) / niches.length;

  const avgCPC = niches.reduce((sum, n) => sum + n.summary.averageCPC, 0) / niches.length;

  // Calculate SERP feature metrics
  const nichesWithLocalPack = niches.filter(n =>
    n.serpData.some(s => s.local_pack_present === true)
  ).length;
  const percentWithLocalPack = (nichesWithLocalPack / niches.length) * 100;

  const nichesWithPAA = niches.filter(n =>
    n.serpData.some(s => s.paa_present === true)
  ).length;
  const percentWithPAA = (nichesWithPAA / niches.length) * 100;

  const nichesWithFeaturedSnippet = niches.filter(n =>
    n.serpData.some(s => s.featured_snippet_present === true)
  ).length;
  const percentWithFeaturedSnippet = (nichesWithFeaturedSnippet / niches.length) * 100;

  // Calculate ease of ranking distribution
  const easyToRankCount = niches.filter(n => n.scores.total >= 70).length;
  const mediumToRankCount = niches.filter(n => n.scores.total >= 40 && n.scores.total < 70).length;
  const hardToRankCount = niches.filter(n => n.scores.total < 40).length;

  const scores = niches.map(n => n.scores.total);
  const highestScore = Math.max(...scores);
  const lowestScore = Math.min(...scores);

  // Get most recent processedAt date
  const dates = niches.map(n => new Date(n.processedAt));
  const dateOfRun = new Date(Math.max(...dates.map(d => d.getTime()))).toISOString();

  const metrics: DashboardMetrics = {
    totalNiches: niches.length,
    avgKD: Math.round(avgKD),
    avgCPC: Math.round(avgCPC * 100) / 100,
    percentWithLocalPack: Math.round(percentWithLocalPack),
    percentWithPAA: Math.round(percentWithPAA),
    percentWithFeaturedSnippet: Math.round(percentWithFeaturedSnippet),
    easyToRankCount,
    mediumToRankCount,
    hardToRankCount,
    dateOfRun,
    highestScore,
    lowestScore,
    totalKeywords,
  };

  const top3 = niches.slice(0, 3);

  return {
    niches,
    metrics,
    top3,
  };
}

export function getNicheBySlug(slug: string): NicheData | null {
  try {
    const filePath = path.join(OUTPUTS_PATH, `${slug}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as NicheData;
  } catch (error) {
    return null;
  }
}

export function getAllNicheSlugs(): string[] {
  const nicheFiles = fs.readdirSync(OUTPUTS_PATH).filter(file => file.endsWith('.json'));
  return nicheFiles.map(file => file.replace('.json', ''));
}
