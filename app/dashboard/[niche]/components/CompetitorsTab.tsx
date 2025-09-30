'use client';

import { useMemo, useState } from 'react';
import type { CompetitorInfo } from '@/lib/data/aggregateNicheData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star, ExternalLink, ChevronDown, ChevronUp, Award, Link2, FileText, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CompetitorsTabProps {
  competitorData: Record<string, CompetitorInfo>;
}

export default function CompetitorsTab({ competitorData }: CompetitorsTabProps) {
  const [sortField, setSortField] = useState<'domain' | 'rating'>('rating');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);

  const competitors = useMemo(() => {
    return Object.entries(competitorData).map(([key, info]) => ({ key, ...info }));
  }, [competitorData]);

  const sortedCompetitors = useMemo(() => {
    return [...competitors].sort((a, b) => {
      let aVal, bVal;

      switch (sortField) {
        case 'domain':
          aVal = a.domain || '';
          bVal = b.domain || '';
          return sortDirection === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        case 'rating':
          aVal = a.rating || 0;
          bVal = b.rating || 0;
          break;
        default:
          return 0;
      }

      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }, [competitors, sortField, sortDirection]);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const renderArrayField = (field: string[] | string | undefined, emptyText: string = '-') => {
    if (!field) return emptyText;
    if (Array.isArray(field)) {
      return field.length > 0 ? field.join(', ') : emptyText;
    }
    return field || emptyText;
  };

  const getEEATSignals = (competitor: CompetitorInfo) => {
    // Check both old and new data structures
    if (competitor.content_analysis?.e_e_a_t_signals) {
      return competitor.content_analysis.e_e_a_t_signals;
    }
    if (competitor.e_e_a_t_signals) {
      return competitor.e_e_a_t_signals;
    }
    return null;
  };

  return (
    <div className="space-y-4 mt-4">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Competitors</CardDescription>
            <CardTitle className="text-3xl">{competitors.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Avg Rating</CardDescription>
            <CardTitle className="text-3xl">
              {competitors.filter(c => c.rating).length > 0
                ? (competitors.reduce((sum, c) => sum + (c.rating || 0), 0) / competitors.filter(c => c.rating).length).toFixed(1)
                : 'N/A'}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>With Content Analysis</CardDescription>
            <CardTitle className="text-3xl">
              {competitors.filter(c => c.content_analysis || c.on_page_patterns).length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="text-sm text-muted-foreground">
        Found {competitors.length} competitor domains
      </div>

      {/* Competitors List */}
      <div className="space-y-4">
        {sortedCompetitors.map((competitor) => {
          const isExpanded = expandedCompetitor === competitor.key;
          const eeAtSignals = getEEATSignals(competitor);

          return (
            <Card key={competitor.key} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <a
                        href={`https://${competitor.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-blue-600 hover:underline flex items-center gap-2"
                      >
                        {competitor.domain || competitor.title || 'Unknown'}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {competitor.rating && (
                        <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{competitor.rating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                    {competitor.title && competitor.title !== competitor.domain && (
                      <p className="text-sm text-muted-foreground mt-1">{competitor.title}</p>
                    )}
                    {competitor.description && (
                      <p className="text-sm mt-2">{competitor.description}</p>
                    )}
                    {competitor.phone && (
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="font-semibold">Phone:</span> {competitor.phone}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedCompetitor(isExpanded ? null : competitor.key)}
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              {!isExpanded && (
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {competitor.services && competitor.services.length > 0 && (
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground mb-2">
                          Services ({competitor.services.length})
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {competitor.services.slice(0, 3).map((service, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-xs"
                            >
                              {service.length > 30 ? `${service.substring(0, 30)}...` : service}
                            </span>
                          ))}
                          {competitor.services.length > 3 && (
                            <span className="px-2 py-1 text-muted-foreground text-xs">
                              +{competitor.services.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    {eeAtSignals && (
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          E-E-A-T Signals
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {Array.isArray(eeAtSignals)
                            ? eeAtSignals.slice(0, 2).join(' • ')
                            : typeof eeAtSignals === 'string'
                            ? eeAtSignals.substring(0, 100) + '...'
                            : 'Available'}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}

              {isExpanded && (
                <CardContent className="pt-4">
                  <div className="space-y-6">
                    {/* Services */}
                    {competitor.services && competitor.services.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold mb-2">
                          Services ({competitor.services.length})
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {competitor.services.map((service, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    {competitor.features && competitor.features.length > 0 && (
                      <div>
                        <div className="text-sm font-semibold mb-2">
                          Features ({competitor.features.length})
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {competitor.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Content Analysis */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* On-Page Patterns */}
                      {(competitor.content_analysis?.on_page_patterns || competitor.on_page_patterns) && (
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              On-Page Patterns
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm space-y-1">
                              {renderArrayField(
                                competitor.content_analysis?.on_page_patterns || competitor.on_page_patterns
                              ).split(',').map((pattern, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-green-600 mt-0.5">•</span>
                                  <span className="text-muted-foreground">{pattern.trim()}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Schema */}
                      {(competitor.content_analysis?.schema || competitor.schema) && (
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Schema Markup
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-muted-foreground">
                              {renderArrayField(competitor.content_analysis?.schema || competitor.schema)}
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Internal Linking */}
                      {(competitor.content_analysis?.internal_linking || competitor.internal_linking) && (
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <Link2 className="h-4 w-4" />
                              Internal Linking
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm space-y-1">
                              {renderArrayField(
                                competitor.content_analysis?.internal_linking || competitor.internal_linking
                              ).split(',').map((link, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-0.5">•</span>
                                  <span className="text-muted-foreground">{link.trim()}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* CTAs */}
                      {(competitor.content_analysis?.cta_elements || competitor.ctas) && (
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <Target className="h-4 w-4" />
                              Call-to-Actions
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm space-y-1">
                              {renderArrayField(
                                competitor.content_analysis?.cta_elements || competitor.ctas
                              ).split(',').map((cta, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-orange-600 mt-0.5">•</span>
                                  <span className="text-muted-foreground">{cta.trim()}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    {/* E-E-A-T Signals - Full Display */}
                    {eeAtSignals && (
                      <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-purple-600" />
                            E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trust)
                          </CardTitle>
                          <CardDescription>
                            Key trust and authority indicators found on this competitor's website
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {Array.isArray(eeAtSignals) ? (
                              eeAtSignals.map((signal, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                                  <Award className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{signal}</span>
                                </div>
                              ))
                            ) : (
                              <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                                {eeAtSignals}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Competitive Analysis Summary */}
                    <Card className="bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-sm">Competitive Analysis Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground mb-1">Rating</div>
                            <div className="font-semibold">
                              {competitor.rating ? `${competitor.rating.toFixed(1)} ⭐` : 'N/A'}
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Services</div>
                            <div className="font-semibold">
                              {competitor.services?.length || 0}
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Features</div>
                            <div className="font-semibold">
                              {competitor.features?.length || 0}
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground mb-1">Word Count</div>
                            <div className="font-semibold">
                              {competitor.word_count || 'N/A'}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {competitors.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <p className="text-center text-muted-foreground">
              No competitor data available
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
