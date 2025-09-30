'use client';

import { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ScoreBadge } from '@/components/dashboard/ScoreBadge';
import { RankabilityBarChart } from '@/components/dashboard/RankabilityBarChart';
import { DemandCompetitionScatter } from '@/components/dashboard/DemandCompetitionScatter';
import { WeightsPanel } from '@/components/dashboard/WeightsPanel';
import { ExportButtons } from '@/components/dashboard/ExportButtons';
import { formatNumber, formatCurrency, formatDate } from '@/lib/utils';
import { recalculateScores, parseWeightsFromQuery, weightsToQueryString } from '@/lib/scoring';
import type { NicheData, Weights } from '@/lib/data/aggregateNicheData';
import { getEaseOfRanking, getEaseOfRankingColor } from '@/lib/seo-utils';
import { TrendingUp, Target, DollarSign, MapPin, Calendar, BarChart3, HelpCircle, FileText } from 'lucide-react';

interface DashboardPageClientProps {
  initialNiches: NicheData[];
  initialMetrics: any;
}

export default function DashboardPageClient({
  initialNiches,
  initialMetrics,
}: DashboardPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [weights, setWeights] = useState<Weights>(() =>
    parseWeightsFromQuery(Object.fromEntries(searchParams.entries()))
  );

  const niches = useMemo(() => {
    return recalculateScores(initialNiches, weights);
  }, [initialNiches, weights]);

  const top3 = useMemo(() => niches.slice(0, 3), [niches]);

  const handleWeightsChange = (newWeights: Weights) => {
    setWeights(newWeights);
    const queryString = weightsToQueryString(newWeights);
    router.push(`/dashboard?${queryString}`, { scroll: false });
  };

  const handleNicheClick = (niche: NicheData) => {
    const queryString = weightsToQueryString(weights);
    router.push(`/dashboard/${niche.slug}?${queryString}`);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'score' | 'volume' | 'cpc' | 'kd'>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [easeFilter, setEaseFilter] = useState<'all' | 'EASY' | 'MEDIUM' | 'HARD'>('all');
  const [localPackFilter, setLocalPackFilter] = useState<'all' | 'yes' | 'no'>('all');
  const [paaFilter, setPaaFilter] = useState<'all' | 'yes' | 'no'>('all');

  const filteredNiches = useMemo(() => {
    let filtered = niches.filter((niche) => {
      const matchesSearch = niche.name.toLowerCase().includes(searchTerm.toLowerCase());

      const ease = getEaseOfRanking(niche.scores.total);
      const matchesEase = easeFilter === 'all' || ease === easeFilter;

      const hasLocalPack = niche.serpData.some(s => s.local_pack_present === true);
      const matchesLocalPack = localPackFilter === 'all' ||
        (localPackFilter === 'yes' && hasLocalPack) ||
        (localPackFilter === 'no' && !hasLocalPack);

      const hasPAA = niche.serpData.some(s => s.paa_present === true);
      const matchesPAA = paaFilter === 'all' ||
        (paaFilter === 'yes' && hasPAA) ||
        (paaFilter === 'no' && !hasPAA);

      return matchesSearch && matchesEase && matchesLocalPack && matchesPAA;
    });

    filtered.sort((a, b) => {
      let aVal, bVal;

      switch (sortField) {
        case 'score':
          aVal = a.scores.total;
          bVal = b.scores.total;
          break;
        case 'volume':
          aVal = a.summary.averageVolume;
          bVal = b.summary.averageVolume;
          break;
        case 'cpc':
          aVal = a.summary.averageCPC;
          bVal = b.summary.averageCPC;
          break;
        case 'kd':
          aVal = a.keywords.reduce((sum, k) => sum + k.competition_index, 0) / a.keywords.length;
          bVal = b.keywords.reduce((sum, k) => sum + k.competition_index, 0) / b.keywords.length;
          break;
      }

      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });

    return filtered;
  }, [niches, searchTerm, sortField, sortDirection, easeFilter, localPackFilter, paaFilter]);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              SEO Feasibility Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              South Florida niche analysis across Miami-Dade, Broward, and Palm Beach counties
            </p>
          </div>
          <ExportButtons niches={filteredNiches} />
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          <MetricCard
            title="Niches Analyzed"
            value={initialMetrics.totalNiches}
            icon={<BarChart3 className="h-4 w-4" />}
            description="Complete analysis coverage"
          />
          <MetricCard
            title="Highest Score"
            value={`${initialMetrics.highestScore}/100`}
            icon={<TrendingUp className="h-4 w-4" />}
            description={`Lowest: ${initialMetrics.lowestScore}/100`}
          />
          <MetricCard
            title="Avg CPC"
            value={formatCurrency(initialMetrics.avgCPC)}
            icon={<DollarSign className="h-4 w-4" />}
            description="Across all keywords"
          />
          <MetricCard
            title="Local Pack"
            value={`${initialMetrics.percentWithLocalPack}%`}
            icon={<MapPin className="h-4 w-4" />}
            description="With local pack"
          />
          <MetricCard
            title="PAA Present"
            value={`${initialMetrics.percentWithPAA}%`}
            icon={<HelpCircle className="h-4 w-4" />}
            description="People Also Ask"
          />
          <MetricCard
            title="Featured Snippets"
            value={`${initialMetrics.percentWithFeaturedSnippet}%`}
            icon={<FileText className="h-4 w-4" />}
            description="With featured snippet"
          />
          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="text-xs">Ranking Ease</CardDescription>
              <CardTitle className="text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-green-600">Easy:</span>
                    <span className="font-bold">{initialMetrics.easyToRankCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600">Medium:</span>
                    <span className="font-bold">{initialMetrics.mediumToRankCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600">Hard:</span>
                    <span className="font-bold">{initialMetrics.hardToRankCount}</span>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Top 3 Recommendations */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardHeader>
            <CardTitle className="text-2xl">Top 3 Recommendations</CardTitle>
            <CardDescription>Highest-scoring niches based on current weights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {top3.map((niche, index) => (
                <Card key={niche.slug} className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-primary/10 rounded-full" />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="text-3xl font-bold text-primary">#{index + 1}</div>
                      <ScoreBadge score={niche.scores.total} size="sm" showLabel={false} />
                    </div>
                    <CardTitle className="text-lg mt-2">{niche.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">{niche.rationale}</div>
                      {niche.summary.keyStrengths.length > 0 && (
                        <div>
                          <div className="text-xs font-semibold text-green-600 mb-1">
                            Strengths
                          </div>
                          <ul className="text-xs space-y-1">
                            {niche.summary.keyStrengths.slice(0, 2).map((strength, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-1">✓</span>
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {niche.summary.keyWeaknesses.length > 0 && (
                        <div>
                          <div className="text-xs font-semibold text-amber-600 mb-1">
                            Weaknesses
                          </div>
                          <ul className="text-xs space-y-1">
                            {niche.summary.keyWeaknesses.slice(0, 2).map((weakness, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-1">!</span>
                                <span>{weakness}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <Button
                        onClick={() => handleNicheClick(niche)}
                        className="w-full"
                        size="sm"
                      >
                        View Plan →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts and Weights Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <RankabilityBarChart niches={niches} onBarClick={handleNicheClick} />
            <DemandCompetitionScatter niches={niches} onPointClick={handleNicheClick} />
          </div>

          <div>
            <WeightsPanel weights={weights} onWeightsChange={handleWeightsChange} />
          </div>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <CardTitle>All Niches</CardTitle>
                <CardDescription>Click any row to view detailed analysis</CardDescription>
              </div>
              <div className="flex gap-3 flex-wrap items-center">
                <input
                  type="search"
                  placeholder="Search niches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border rounded-md w-48"
                  aria-label="Search niches"
                />
                <select
                  value={easeFilter}
                  onChange={(e) => setEaseFilter(e.target.value as typeof easeFilter)}
                  className="px-3 py-2 border rounded-md text-sm"
                  aria-label="Filter by ease of ranking"
                >
                  <option value="all">All Difficulty</option>
                  <option value="EASY">Easy to Rank</option>
                  <option value="MEDIUM">Medium to Rank</option>
                  <option value="HARD">Hard to Rank</option>
                </select>
                <select
                  value={localPackFilter}
                  onChange={(e) => setLocalPackFilter(e.target.value as typeof localPackFilter)}
                  className="px-3 py-2 border rounded-md text-sm"
                  aria-label="Filter by local pack"
                >
                  <option value="all">All Local Pack</option>
                  <option value="yes">Has Local Pack</option>
                  <option value="no">No Local Pack</option>
                </select>
                <select
                  value={paaFilter}
                  onChange={(e) => setPaaFilter(e.target.value as typeof paaFilter)}
                  className="px-3 py-2 border rounded-md text-sm"
                  aria-label="Filter by PAA"
                >
                  <option value="all">All PAA</option>
                  <option value="yes">Has PAA</option>
                  <option value="no">No PAA</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Rank</th>
                    <th className="text-left p-3 font-semibold">Niche</th>
                    <th
                      className="text-left p-3 font-semibold cursor-pointer hover:bg-muted"
                      onClick={() => handleSort('score')}
                      role="button"
                      tabIndex={0}
                    >
                      Score {sortField === 'score' && (sortDirection === 'asc' ? '↑' : '↓')}
                    </th>
                    <th className="text-left p-3 font-semibold">Ease to Rank</th>
                    <th className="text-left p-3 font-semibold">Keywords</th>
                    <th
                      className="text-left p-3 font-semibold cursor-pointer hover:bg-muted"
                      onClick={() => handleSort('volume')}
                      role="button"
                      tabIndex={0}
                    >
                      Avg Volume {sortField === 'volume' && (sortDirection === 'asc' ? '↑' : '↓')}
                    </th>
                    <th
                      className="text-left p-3 font-semibold cursor-pointer hover:bg-muted"
                      onClick={() => handleSort('cpc')}
                      role="button"
                      tabIndex={0}
                    >
                      Avg CPC {sortField === 'cpc' && (sortDirection === 'asc' ? '↑' : '↓')}
                    </th>
                    <th
                      className="text-left p-3 font-semibold cursor-pointer hover:bg-muted"
                      onClick={() => handleSort('kd')}
                      role="button"
                      tabIndex={0}
                    >
                      Avg KD {sortField === 'kd' && (sortDirection === 'asc' ? '↑' : '↓')}
                    </th>
                    <th className="text-left p-3 font-semibold text-xs">SERP</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNiches.map((niche, index) => {
                    const avgKD =
                      niche.keywords.reduce((sum, k) => sum + k.competition_index, 0) /
                      niche.keywords.length;
                    const ease = getEaseOfRanking(niche.scores.total);
                    const easeColor = getEaseOfRankingColor(ease);
                    const hasLocalPack = niche.serpData.some(s => s.local_pack_present === true);
                    const hasPAA = niche.serpData.some(s => s.paa_present === true);
                    const hasFeaturedSnippet = niche.serpData.some(s => s.featured_snippet_present === true);

                    return (
                      <tr
                        key={niche.slug}
                        onClick={() => handleNicheClick(niche)}
                        className="border-b hover:bg-muted/50 cursor-pointer transition-colors"
                        role="button"
                        tabIndex={0}
                      >
                        <td className="p-3 font-medium">{index + 1}</td>
                        <td className="p-3">
                          <div className="font-medium">{niche.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {niche.summary.verdict}
                          </div>
                        </td>
                        <td className="p-3">
                          <ScoreBadge score={niche.scores.total} size="sm" showLabel={false} />
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${easeColor}`}>
                            {ease}
                          </span>
                        </td>
                        <td className="p-3 text-muted-foreground">{niche.keywords.length}</td>
                        <td className="p-3 text-muted-foreground">
                          {formatNumber(niche.summary.averageVolume)}
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {formatCurrency(niche.summary.averageCPC)}
                        </td>
                        <td className="p-3 text-muted-foreground">{Math.round(avgKD)}</td>
                        <td className="p-3">
                          <div className="flex gap-1 text-xs">
                            {hasLocalPack && <span className="text-green-600" title="Has Local Pack">LP</span>}
                            {hasPAA && <span className="text-blue-600" title="Has PAA">PAA</span>}
                            {hasFeaturedSnippet && <span className="text-purple-600" title="Has Featured Snippet">FS</span>}
                            {!hasLocalPack && !hasPAA && !hasFeaturedSnippet && <span className="text-muted-foreground">-</span>}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Analysis Date: {formatDate(initialMetrics.dateOfRun)}</span>
          </div>
          <p className="mt-2">
            {initialMetrics.totalKeywords} total keywords analyzed across {initialMetrics.totalNiches} niches
          </p>
        </div>
      </div>
    </div>
  );
}