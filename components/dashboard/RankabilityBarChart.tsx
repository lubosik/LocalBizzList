'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getScoreColor } from '@/lib/scoring';
import type { NicheData } from '@/lib/data/aggregateNicheData';

interface RankabilityBarChartProps {
  niches: NicheData[];
  onBarClick?: (niche: NicheData) => void;
}

export function RankabilityBarChart({ niches, onBarClick }: RankabilityBarChartProps) {
  const data = niches.map((niche) => ({
    name: niche.name.length > 30 ? niche.name.substring(0, 30) + '...' : niche.name,
    fullName: niche.name,
    score: niche.scores.total,
    slug: niche.slug,
    niche,
  }));

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Rankability Score by Niche</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={100}
              className="text-xs"
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <YAxis
              domain={[0, 100]}
              className="text-xs"
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg border bg-background p-3 shadow-lg">
                      <div className="font-medium">{data.fullName}</div>
                      <div className="text-2xl font-bold mt-1">
                        {data.score}
                        <span className="text-sm text-muted-foreground">/100</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="score"
              radius={[8, 8, 0, 0]}
              cursor="pointer"
              onClick={(data: any) => {
                if (onBarClick && data.niche) {
                  onBarClick(data.niche);
                }
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getScoreColor(entry.score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
