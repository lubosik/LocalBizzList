'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { NicheData, Weights } from '@/lib/data/aggregateNicheData';
import { formatNumber, formatCurrency, formatPercent } from '@/lib/utils';
import { TrendingUp, DollarSign, Target, MapPin, BarChart3, Calendar } from 'lucide-react';
import { WeightsPanel } from '@/components/dashboard/WeightsPanel';

interface QuickMetricsPanelProps {
  niche: NicheData;
  weights: Weights;
  onWeightsChange: (weights: Weights) => void;
}

export default function QuickMetricsPanel({ niche, weights, onWeightsChange }: QuickMetricsPanelProps) {
  const avgKD = niche.keywords.reduce((sum, k) => sum + k.competition_index, 0) / niche.keywords.length;
  const hasLocalPack = niche.serpData.some(s => s.local_pack_present === true);

  return (
    <div className="space-y-4">
      {/* Quick Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Metrics</CardTitle>
          <CardDescription>Key performance indicators</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Total Keywords</div>
              <div className="text-lg font-semibold">{niche.keywords.length}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Avg Volume</div>
              <div className="text-lg font-semibold">{formatNumber(niche.summary.averageVolume)}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Avg CPC</div>
              <div className="text-lg font-semibold">{formatCurrency(niche.summary.averageCPC)}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Avg KD</div>
              <div className="text-lg font-semibold">{Math.round(avgKD)}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Local Pack</div>
              <div className="text-lg font-semibold">{hasLocalPack ? 'Yes' : 'No'}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Analyzed</div>
              <div className="text-sm font-medium">
                {new Date(niche.processedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strengths & Weaknesses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {niche.summary.keyStrengths.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-green-600 mb-2">Strengths</div>
              <ul className="space-y-2">
                {niche.summary.keyStrengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {niche.summary.keyWeaknesses.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-amber-600 mb-2">Weaknesses</div>
              <ul className="space-y-2">
                {niche.summary.keyWeaknesses.map((weakness, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-600 mt-0.5">!</span>
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recommendations */}
      {niche.recommendations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {niche.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 font-bold">{i + 1}.</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Weights Panel */}
      <WeightsPanel weights={weights} onWeightsChange={onWeightsChange} />
    </div>
  );
}
