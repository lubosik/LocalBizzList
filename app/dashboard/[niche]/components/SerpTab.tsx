'use client';

import { useMemo } from 'react';
import type { SerpResult } from '@/lib/data/aggregateNicheData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, X, MapPin, HelpCircle, FileText, ExternalLink } from 'lucide-react';
import { formatPercent } from '@/lib/utils';

interface SerpTabProps {
  serpData: SerpResult[];
}

export default function SerpTab({ serpData }: SerpTabProps) {
  // Calculate SERP features percentages
  const serpMetrics = useMemo(() => {
    if (serpData.length === 0) return {
      localPackPercent: 0,
      paaPercent: 0,
      featuredSnippetPercent: 0,
      serpDifficulty: 0,
      withLocalPack: 0,
      withPAA: 0,
      withFeaturedSnippet: 0
    };

    const withLocalPack = serpData.filter(s => s.local_pack_present).length;
    const withPAA = serpData.filter(s => s.paa_present).length;
    const withFeaturedSnippet = serpData.filter(s => s.featured_snippet_present).length;

    const localPackPercent = (withLocalPack / serpData.length) * 100;
    const paaPercent = (withPAA / serpData.length) * 100;
    const featuredSnippetPercent = (withFeaturedSnippet / serpData.length) * 100;

    // Calculate SERP Difficulty (more features = harder to rank)
    const avgFeaturesPerKeyword = serpData.reduce((sum, s) => {
      let count = 0;
      if (s.local_pack_present) count++;
      if (s.paa_present) count++;
      if (s.featured_snippet_present) count++;
      return sum + count;
    }, 0) / serpData.length;

    const serpDifficulty = (avgFeaturesPerKeyword / 3) * 100; // 3 is max features

    return {
      localPackPercent,
      paaPercent,
      featuredSnippetPercent,
      serpDifficulty,
      withLocalPack,
      withPAA,
      withFeaturedSnippet
    };
  }, [serpData]);

  // Get top competitor domains
  const topCompetitors = useMemo(() => {
    const domainCounts = serpData.reduce((acc, result) => {
      if (result.top_competitor_domain) {
        acc[result.top_competitor_domain] = (acc[result.top_competitor_domain] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(domainCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([domain, count]) => ({ domain, count }));
  }, [serpData]);

  const getDifficultyLevel = (score: number): { label: string; color: string } => {
    if (score >= 70) return { label: 'Very Hard', color: 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200' };
    if (score >= 50) return { label: 'Hard', color: 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200' };
    if (score >= 30) return { label: 'Medium', color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200' };
    return { label: 'Easy', color: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200' };
  };

  const difficulty = getDifficultyLevel(serpMetrics.serpDifficulty);

  return (
    <div className="space-y-6 mt-4">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Local Pack Present
            </CardDescription>
            <CardTitle className="text-3xl">{formatPercent(serpMetrics.localPackPercent)}</CardTitle>
            <p className="text-xs text-muted-foreground">
              {serpMetrics.withLocalPack} of {serpData.length} keywords
            </p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              People Also Ask
            </CardDescription>
            <CardTitle className="text-3xl">{formatPercent(serpMetrics.paaPercent)}</CardTitle>
            <p className="text-xs text-muted-foreground">
              {serpMetrics.withPAA} of {serpData.length} keywords
            </p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Featured Snippets
            </CardDescription>
            <CardTitle className="text-3xl">{formatPercent(serpMetrics.featuredSnippetPercent)}</CardTitle>
            <p className="text-xs text-muted-foreground">
              {serpMetrics.withFeaturedSnippet} of {serpData.length} keywords
            </p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>SERP Difficulty</CardDescription>
            <CardTitle className="text-3xl">
              <span className={`px-3 py-1 rounded text-lg font-semibold ${difficulty.color}`}>
                {difficulty.label}
              </span>
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Based on SERP features density
            </p>
          </CardHeader>
        </Card>
      </div>

      {/* SERP Features Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>SERP Features Matrix</CardTitle>
          <CardDescription>Detailed breakdown of SERP features per keyword</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold">Keyword</th>
                  <th className="text-left p-3 font-semibold">City</th>
                  <th className="text-center p-3 font-semibold">
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Local Pack
                    </div>
                  </th>
                  <th className="text-center p-3 font-semibold">
                    <div className="flex items-center justify-center gap-1">
                      <HelpCircle className="h-4 w-4" />
                      PAA
                    </div>
                  </th>
                  <th className="text-center p-3 font-semibold">
                    <div className="flex items-center justify-center gap-1">
                      <FileText className="h-4 w-4" />
                      Featured Snippet
                    </div>
                  </th>
                  <th className="text-left p-3 font-semibold">Top Competitor</th>
                </tr>
              </thead>
              <tbody>
                {serpData.map((result, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{result.keyword}</td>
                    <td className="p-3 text-sm text-muted-foreground">{result.city}</td>
                    <td className="p-3 text-center">
                      {result.local_pack_present ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {result.paa_present ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {result.featured_snippet_present ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-3">
                      <a
                        href={`https://${result.top_competitor_domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                      >
                        {result.top_competitor_domain}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Top Organic URLs */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Competitors */}
        <Card>
          <CardHeader>
            <CardTitle>Top Competitor Domains</CardTitle>
            <CardDescription>Most frequently appearing as top competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {topCompetitors.map(({ domain, count }, index) => (
                <div
                  key={domain}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-muted-foreground w-6">
                      {index + 1}
                    </span>
                    <a
                      href={`https://${domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline flex items-center gap-1"
                    >
                      {domain}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-semibold">
                    {count} keyword{count !== 1 ? 's' : ''}
                  </span>
                </div>
              ))}
              {topCompetitors.length === 0 && (
                <p className="text-muted-foreground text-center py-4">
                  No competitor data available
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Top Organic URLs */}
        <Card>
          <CardHeader>
            <CardTitle>Top Organic URLs</CardTitle>
            <CardDescription>Ranking URLs across all keywords</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {serpData.slice(0, 10).map((result, index) => (
                <div key={index} className="border-b pb-2">
                  <div className="font-medium text-sm mb-1">{result.keyword}</div>
                  <div className="space-y-1">
                    {result.top_organic_urls.slice(0, 3).map((url, urlIndex) => (
                      <div key={urlIndex} className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">{urlIndex + 1}.</span>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline truncate flex items-center gap-1"
                          title={url}
                        >
                          {new URL(url).hostname}
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SERP Insights */}
      <Card>
        <CardHeader>
          <CardTitle>SERP Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {serpMetrics.localPackPercent > 50 && (
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                    Strong Local Pack Presence ({formatPercent(serpMetrics.localPackPercent)})
                  </div>
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    Focus on local SEO: optimize Google Business Profile, build local citations, and gather reviews.
                  </div>
                </div>
              </div>
            )}
            {serpMetrics.paaPercent > 50 && (
              <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <HelpCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-purple-900 dark:text-purple-100">
                    High PAA Presence ({formatPercent(serpMetrics.paaPercent)})
                  </div>
                  <div className="text-sm text-purple-800 dark:text-purple-200">
                    Create FAQ content targeting "People Also Ask" questions to capture additional SERP real estate.
                  </div>
                </div>
              </div>
            )}
            {serpMetrics.featuredSnippetPercent > 30 && (
              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <FileText className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-green-900 dark:text-green-100">
                    Featured Snippet Opportunities ({formatPercent(serpMetrics.featuredSnippetPercent)})
                  </div>
                  <div className="text-sm text-green-800 dark:text-green-200">
                    Structure content with clear headings, lists, and concise answers to capture featured snippets.
                  </div>
                </div>
              </div>
            )}
            {serpMetrics.serpDifficulty > 70 && (
              <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                <FileText className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-red-900 dark:text-red-100">
                    High SERP Complexity
                  </div>
                  <div className="text-sm text-red-800 dark:text-red-200">
                    SERPs are crowded with features. Focus on comprehensive content and strong on-page SEO to compete.
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
