'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Weights } from '@/lib/data/aggregateNicheData';
import { DEFAULT_WEIGHTS, normalizeWeights } from '@/lib/scoring';

interface WeightsPanelProps {
  weights: Weights;
  onWeightsChange: (weights: Weights) => void;
}

export function WeightsPanel({ weights, onWeightsChange }: WeightsPanelProps) {
  const [localWeights, setLocalWeights] = useState({
    demand: Math.round(weights.demand * 100),
    competition: Math.round(weights.competition * 100),
    localPack: Math.round(weights.localPack * 100),
    contentGap: Math.round(weights.contentGap * 100),
    seasonality: Math.round(weights.seasonality * 100),
  });

  const total = Object.values(localWeights).reduce((sum, val) => sum + val, 0);

  const handleSliderChange = (key: keyof typeof localWeights, value: number) => {
    setLocalWeights((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    const normalized = normalizeWeights({
      demand: localWeights.demand / 100,
      competition: localWeights.competition / 100,
      localPack: localWeights.localPack / 100,
      contentGap: localWeights.contentGap / 100,
      seasonality: localWeights.seasonality / 100,
    });

    onWeightsChange(normalized);
  };

  const handleReset = () => {
    const defaultPercentages = {
      demand: DEFAULT_WEIGHTS.demand * 100,
      competition: DEFAULT_WEIGHTS.competition * 100,
      localPack: DEFAULT_WEIGHTS.localPack * 100,
      contentGap: DEFAULT_WEIGHTS.contentGap * 100,
      seasonality: DEFAULT_WEIGHTS.seasonality * 100,
    };
    setLocalWeights(defaultPercentages);
  };

  useEffect(() => {
    setLocalWeights({
      demand: Math.round(weights.demand * 100),
      competition: Math.round(weights.competition * 100),
      localPack: Math.round(weights.localPack * 100),
      contentGap: Math.round(weights.contentGap * 100),
      seasonality: Math.round(weights.seasonality * 100),
    });
  }, [weights]);

  const sliders = [
    { key: 'demand' as const, label: 'Demand (Search Volume & CPC)', max: 50 },
    { key: 'competition' as const, label: 'Competition (Difficulty & SERP)', max: 50 },
    { key: 'localPack' as const, label: 'Local Pack Friendliness', max: 30 },
    { key: 'contentGap' as const, label: 'Content Gap & Intent', max: 30 },
    { key: 'seasonality' as const, label: 'Seasonality/Volatility', max: 20 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scoring Weights</CardTitle>
        <CardDescription>
          Adjust the importance of each factor. Will be normalized to 100%.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sliders.map(({ key, label, max }) => (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`weight-${key}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {label}
                </label>
                <span className="text-sm font-bold text-primary">
                  {localWeights[key]}%
                </span>
              </div>
              <input
                id={`weight-${key}`}
                type="range"
                min="0"
                max={max}
                step="5"
                value={localWeights[key]}
                onChange={(e) => handleSliderChange(key, parseInt(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                aria-label={`${label} weight`}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={localWeights[key]}
              />
            </div>
          ))}

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Total</span>
              <span
                className={`text-sm font-bold ${
                  Math.abs(total - 100) < 5 ? 'text-green-600' : 'text-amber-600'
                }`}
              >
                {total}%
              </span>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleApply} className="flex-1" size="sm">
                Recalculate Scores
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1"
                size="sm"
              >
                Reset to Default
              </Button>
            </div>

            {Math.abs(total - 100) >= 5 && (
              <p className="text-xs text-muted-foreground mt-2">
                Note: Weights will be normalized to sum to 100%
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
