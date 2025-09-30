'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScoreBadge } from '@/components/dashboard/ScoreBadge';
import { getVerdict } from '@/lib/scoring';
import type { NicheData } from '@/lib/data/aggregateNicheData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface NicheHeaderProps {
  niche: NicheData;
}

export default function NicheHeader({ niche }: NicheHeaderProps) {
  const verdict = getVerdict(niche.scores.total);

  const radarData = [
    {
      metric: 'Demand',
      value: niche.scores.subScores.demand,
    },
    {
      metric: 'Competition',
      value: niche.scores.subScores.competition,
    },
    {
      metric: 'Local Pack',
      value: niche.scores.subScores.localPack,
    },
    {
      metric: 'Content Gap',
      value: niche.scores.subScores.contentGap,
    },
    {
      metric: 'Seasonality',
      value: niche.scores.subScores.seasonality,
    },
  ];

  const verdictColorClasses = {
    EXCELLENT: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    GO: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    CAUTION: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    'NO-GO': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-3xl mb-2">{niche.name}</CardTitle>
            <p className="text-muted-foreground text-sm mb-4">{niche.rationale}</p>
            <div className="flex gap-3 items-center">
              <ScoreBadge score={niche.scores.total} size="lg" />
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  verdictColorClasses[verdict as keyof typeof verdictColorClasses]
                }`}
              >
                {verdict}
              </span>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="w-64 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar
                  name="Sub-scores"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Demand</div>
            <div className="font-semibold text-lg">{niche.scores.subScores.demand}/100</div>
          </div>
          <div>
            <div className="text-muted-foreground">Competition</div>
            <div className="font-semibold text-lg">{niche.scores.subScores.competition}/100</div>
          </div>
          <div>
            <div className="text-muted-foreground">Local Pack</div>
            <div className="font-semibold text-lg">{niche.scores.subScores.localPack}/100</div>
          </div>
          <div>
            <div className="text-muted-foreground">Content Gap</div>
            <div className="font-semibold text-lg">{niche.scores.subScores.contentGap}/100</div>
          </div>
          <div>
            <div className="text-muted-foreground">Seasonality</div>
            <div className="font-semibold text-lg">{niche.scores.subScores.seasonality}/100</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
