'use client';

import { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { parseWeightsFromQuery, weightsToQueryString, type Weights } from '@/lib/scoring';
import type { NicheData } from '@/lib/data/aggregateNicheData';
import { ArrowLeft } from 'lucide-react';
import NicheHeader from './components/NicheHeader';
import KeywordsTab from './components/KeywordsTab';
import SerpTab from './components/SerpTab';
import CompetitorsTab from './components/CompetitorsTab';
import PlanTab from './components/PlanTab';
import QuickMetricsPanel from './components/QuickMetricsPanel';

interface NicheDetailClientProps {
  niche: NicheData;
}

export default function NicheDetailClient({ niche }: NicheDetailClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [weights, setWeights] = useState<Weights>(() =>
    parseWeightsFromQuery(Object.fromEntries(searchParams.entries()))
  );

  const handleBackToDashboard = () => {
    const queryString = weightsToQueryString(weights);
    router.push(`/dashboard?${queryString}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col gap-6">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={handleBackToDashboard}
          className="self-start"
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <NicheHeader niche={niche} />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Tabs - Left Column (3/4) */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <Tabs defaultValue="keywords" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  <TabsTrigger value="serp">SERP</TabsTrigger>
                  <TabsTrigger value="competitors">Competitors</TabsTrigger>
                  <TabsTrigger value="plan">Plan</TabsTrigger>
                </TabsList>

                <TabsContent value="keywords">
                  <KeywordsTab keywords={niche.keywords} />
                </TabsContent>

                <TabsContent value="serp">
                  <SerpTab serpData={niche.serpData} />
                </TabsContent>

                <TabsContent value="competitors">
                  <CompetitorsTab competitorData={niche.competitorData} />
                </TabsContent>

                <TabsContent value="plan">
                  <PlanTab
                    contentPlan={niche.contentPlan}
                    ninetyDayPlan={niche.ninetyDayPlan}
                  />
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Rail - Quick Metrics (1/4) */}
          <div className="lg:col-span-1">
            <QuickMetricsPanel niche={niche} weights={weights} onWeightsChange={setWeights} />
          </div>
        </div>
      </div>
    </div>
  );
}
