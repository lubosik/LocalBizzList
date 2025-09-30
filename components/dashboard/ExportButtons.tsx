'use client';

import { Button } from '@/components/ui/button';
import { Download, Printer } from 'lucide-react';
import type { NicheData } from '@/lib/data/aggregateNicheData';

interface ExportButtonsProps {
  niches: NicheData[];
  filename?: string;
}

export function ExportButtons({ niches, filename = 'seo-feasibility-analysis' }: ExportButtonsProps) {
  const handleExportCSV = () => {
    // Create CSV header
    const headers = [
      'Rank',
      'Niche',
      'Score',
      'Verdict',
      'Keywords',
      'Avg Volume',
      'Avg CPC',
      'Avg KD',
      'Demand Score',
      'Competition Score',
      'Local Pack Score',
      'Content Gap Score',
      'Seasonality Score',
      'Key Strengths',
      'Key Weaknesses',
    ];

    // Create CSV rows
    const rows = niches.map((niche, index) => {
      const avgKD =
        niche.keywords.reduce((sum, k) => sum + k.competition_index, 0) /
        niche.keywords.length;

      return [
        index + 1,
        `"${niche.name}"`,
        niche.scores.total,
        niche.summary.verdict,
        niche.keywords.length,
        niche.summary.averageVolume,
        niche.summary.averageCPC.toFixed(2),
        Math.round(avgKD),
        niche.scores.subScores.demand,
        niche.scores.subScores.competition,
        niche.scores.subScores.localPack,
        niche.scores.subScores.contentGap,
        niche.scores.subScores.seasonality,
        `"${niche.summary.keyStrengths.join('; ')}"`,
        `"${niche.summary.keyWeaknesses.join('; ')}"`,
      ].join(',');
    });

    const csv = [headers.join(','), ...rows].join('\n');

    // Create blob and download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex gap-2 print:hidden">
      <Button onClick={handleExportCSV} variant="outline" size="sm">
        <Download className="mr-2 h-4 w-4" />
        Export CSV
      </Button>
      <Button onClick={handlePrint} variant="outline" size="sm">
        <Printer className="mr-2 h-4 w-4" />
        Print / PDF
      </Button>
    </div>
  );
}
