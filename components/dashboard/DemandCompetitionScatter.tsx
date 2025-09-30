'use client';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getScoreColor } from '@/lib/scoring';
import type { NicheData } from '@/lib/data/aggregateNicheData';

interface DemandCompetitionScatterProps {
  niches: NicheData[];
  onPointClick?: (niche: NicheData) => void;
}

export function DemandCompetitionScatter({ niches, onPointClick }: DemandCompetitionScatterProps) {
  const data = niches.map((niche) => {
    const avgKD =
      niche.keywords.reduce((sum, k) => sum + k.competition_index, 0) /
      niche.keywords.length;

    return {
      x: avgKD,
      y: niche.scores.subScores.demand,
      z: niche.summary.averageCPC * 10, // Scale for bubble size
      name: niche.name,
      score: niche.scores.total,
      cpc: niche.summary.averageCPC,
      niche,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demand vs Competition</CardTitle>
        <CardDescription>
          Bubble size represents CPC value. Lower competition (left) and higher demand (top) is
          better.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              type="number"
              dataKey="x"
              name="Avg KD"
              domain={[0, 100]}
              label={{
                value: 'Avg Keyword Difficulty',
                position: 'insideBottom',
                offset: -10,
              }}
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Demand Score"
              domain={[0, 100]}
              label={{
                value: 'Demand Score',
                angle: -90,
                position: 'insideLeft',
              }}
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <ZAxis type="number" dataKey="z" range={[50, 400]} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg border bg-background p-3 shadow-lg">
                      <div className="font-medium">{data.name}</div>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <div>
                          <div className="text-muted-foreground">Score</div>
                          <div className="font-semibold">{data.score}/100</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Avg KD</div>
                          <div className="font-semibold">{Math.round(data.x)}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Demand</div>
                          <div className="font-semibold">{data.y}/100</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Avg CPC</div>
                          <div className="font-semibold">${data.cpc.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ strokeDasharray: '3 3' }}
            />
            <Scatter
              data={data}
              cursor="pointer"
              onClick={(data) => {
                if (onPointClick && data.niche) {
                  onPointClick(data.niche);
                }
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getScoreColor(entry.score)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
