'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ContentPlan, NinetyDayPlan } from '@/lib/data/aggregateNicheData';
import { Copy, Download, CheckCircle2 } from 'lucide-react';

interface PlanTabProps {
  contentPlan: ContentPlan;
  ninetyDayPlan: NinetyDayPlan;
}

export default function PlanTab({ contentPlan, ninetyDayPlan }: PlanTabProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleExport = () => {
    const content = `# Content Plan\n\n## Pillar Pages\n${contentPlan.pillarPages.join('\n')}\n\n## Cluster Pages\n${contentPlan.clusterPages.join('\n')}\n\n## Location Pages\n${contentPlan.locationPages.join('\n')}\n\n## Lead Magnets\n${contentPlan.leadMagnets.join('\n')}\n\n# 90-Day Plan\n\n## Month 1\n${ninetyDayPlan.month1.join('\n')}\n\n## Month 2\n${ninetyDayPlan.month2.join('\n')}\n\n## Month 3\n${ninetyDayPlan.month3.join('\n')}`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content-plan.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 mt-4">
      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button onClick={handleExport} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Plan
        </Button>
      </div>

      {/* Content Plan Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Content Plan</CardTitle>
              <CardDescription>Comprehensive content strategy for this niche</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Pillar Pages */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Pillar Pages</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(contentPlan.pillarPages.join('\n'), 'pillar')}
                >
                  {copiedSection === 'pillar' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {contentPlan.pillarPages.map((page, index) => (
                  <li key={index} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50">
                    <span className="font-medium text-primary mt-0.5">{index + 1}.</span>
                    <span>{page}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cluster Pages */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Cluster Pages</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(contentPlan.clusterPages.join('\n'), 'cluster')}
                >
                  {copiedSection === 'cluster' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {contentPlan.clusterPages.map((page, index) => (
                  <li key={index} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50">
                    <span className="font-medium text-blue-600 mt-0.5">{index + 1}.</span>
                    <span>{page}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Pages */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Location Pages</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(contentPlan.locationPages.join('\n'), 'location')}
                >
                  {copiedSection === 'location' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {contentPlan.locationPages.map((page, index) => (
                  <li key={index} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50">
                    <span className="font-medium text-green-600 mt-0.5">{index + 1}.</span>
                    <span>{page}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lead Magnets */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Lead Magnets</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(contentPlan.leadMagnets.join('\n'), 'magnets')}
                >
                  {copiedSection === 'magnets' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {contentPlan.leadMagnets.map((magnet, index) => (
                  <li key={index} className="flex items-start gap-2 p-2 rounded hover:bg-muted/50">
                    <span className="font-medium text-amber-600 mt-0.5">{index + 1}.</span>
                    <span>{magnet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 90-Day Plan Section */}
      <Card>
        <CardHeader>
          <CardTitle>90-Day Implementation Plan</CardTitle>
          <CardDescription>Phased approach to launching this niche</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Month 1 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-blue-600">Month 1: Foundation</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(ninetyDayPlan.month1.join('\n'), 'month1')}
                >
                  {copiedSection === 'month1' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {ninetyDayPlan.month1.map((task, index) => (
                  <li key={index} className="flex items-start gap-2 p-3 rounded bg-blue-50 dark:bg-blue-950">
                    <span className="font-medium text-blue-600 mt-0.5">Week {Math.ceil((index + 1) / 2)}:</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Month 2 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-green-600">Month 2: Growth</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(ninetyDayPlan.month2.join('\n'), 'month2')}
                >
                  {copiedSection === 'month2' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {ninetyDayPlan.month2.map((task, index) => (
                  <li key={index} className="flex items-start gap-2 p-3 rounded bg-green-50 dark:bg-green-950">
                    <span className="font-medium text-green-600 mt-0.5">Week {Math.ceil((index + 1) / 2) + 4}:</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Month 3 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-purple-600">Month 3: Optimization</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleCopy(ninetyDayPlan.month3.join('\n'), 'month3')}
                >
                  {copiedSection === 'month3' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <ul className="space-y-2">
                {ninetyDayPlan.month3.map((task, index) => (
                  <li key={index} className="flex items-start gap-2 p-3 rounded bg-purple-50 dark:bg-purple-950">
                    <span className="font-medium text-purple-600 mt-0.5">Week {Math.ceil((index + 1) / 2) + 8}:</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
