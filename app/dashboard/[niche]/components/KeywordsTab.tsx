'use client';

import { useState, useMemo } from 'react';
import type { KeywordData } from '@/lib/data/aggregateNicheData';
import { calculateVolatility } from '@/lib/seo-utils';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';

interface KeywordsTabProps {
  keywords: KeywordData[];
}

export default function KeywordsTab({ keywords }: KeywordsTabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [intentFilter, setIntentFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<'keyword' | 'search_volume' | 'cpc' | 'competition_index'>('search_volume');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [expandedKeyword, setExpandedKeyword] = useState<string | null>(null);

  // Get unique intents for filter
  const intents = useMemo(() => {
    const uniqueIntents = new Set(keywords.map(k => k.intent || 'unknown'));
    return ['all', ...Array.from(uniqueIntents)];
  }, [keywords]);

  const filteredKeywords = useMemo(() => {
    let filtered = keywords.filter((keyword) => {
      const matchesSearch = keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIntent = intentFilter === 'all' || keyword.intent === intentFilter;
      return matchesSearch && matchesIntent;
    });

    filtered.sort((a, b) => {
      let aVal, bVal;

      switch (sortField) {
        case 'keyword':
          aVal = a.keyword;
          bVal = b.keyword;
          return sortDirection === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        case 'search_volume':
          aVal = a.search_volume;
          bVal = b.search_volume;
          break;
        case 'cpc':
          aVal = a.cpc;
          bVal = b.cpc;
          break;
        case 'competition_index':
          aVal = a.competition_index;
          bVal = b.competition_index;
          break;
      }

      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });

    return filtered;
  }, [keywords, searchTerm, intentFilter, sortField, sortDirection]);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const exportKeywords = () => {
    const csv = [
      ['Keyword', 'Volume', 'CPC', 'Competition', 'Competition Index', 'Intent', 'Geo', 'Volatility'].join(','),
      ...filteredKeywords.map(kw => {
        const volatility = calculateVolatility(kw.monthly_searches);
        return [
          `"${kw.keyword}"`,
          kw.search_volume,
          kw.cpc,
          kw.competition,
          kw.competition_index,
          kw.intent || '',
          kw.geo || '',
          Math.round(volatility)
        ].join(',');
      })
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keywords-export.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition.toUpperCase()) {
      case 'LOW':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200';
      case 'MEDIUM':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200';
      case 'HIGH':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTrendData = (monthlySearches: Record<string, number>) => {
    const sorted = Object.entries(monthlySearches)
      .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
      .map(([date, value]) => ({
        month: date.substring(5, 7) + '/' + date.substring(2, 4),
        volume: value
      }));
    return sorted;
  };

  return (
    <div className="space-y-4 mt-4">
      {/* Filters */}
      <div className="flex gap-4 items-center flex-wrap">
        <Input
          type="search"
          placeholder="Search keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
          aria-label="Search keywords"
        />
        <div className="flex gap-2 items-center">
          <label htmlFor="intent-filter" className="text-sm font-medium">
            Intent:
          </label>
          <select
            id="intent-filter"
            value={intentFilter}
            onChange={(e) => setIntentFilter(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          >
            {intents.map((intent) => (
              <option key={intent} value={intent}>
                {intent === 'all' ? 'All' : intent}
              </option>
            ))}
          </select>
        </div>
        <Button onClick={exportKeywords} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Keywords
        </Button>
        <div className="text-sm text-muted-foreground ml-auto">
          Showing {filteredKeywords.length} of {keywords.length} keywords
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th
                className="text-left p-3 font-semibold cursor-pointer hover:bg-muted/80"
                onClick={() => handleSort('keyword')}
                role="button"
                tabIndex={0}
              >
                Keyword {sortField === 'keyword' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="text-left p-3 font-semibold cursor-pointer hover:bg-muted/80"
                onClick={() => handleSort('search_volume')}
                role="button"
                tabIndex={0}
              >
                Volume {sortField === 'search_volume' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th className="text-left p-3 font-semibold">Trend</th>
              <th
                className="text-left p-3 font-semibold cursor-pointer hover:bg-muted/80"
                onClick={() => handleSort('cpc')}
                role="button"
                tabIndex={0}
              >
                CPC {sortField === 'cpc' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className="text-left p-3 font-semibold cursor-pointer hover:bg-muted/80"
                onClick={() => handleSort('competition_index')}
                role="button"
                tabIndex={0}
              >
                KD {sortField === 'competition_index' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th className="text-left p-3 font-semibold">Competition</th>
              <th className="text-left p-3 font-semibold">Volatility</th>
              <th className="text-left p-3 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredKeywords.map((keyword, index) => {
              const volatility = calculateVolatility(keyword.monthly_searches);
              const trendData = getTrendData(keyword.monthly_searches);
              const isExpanded = expandedKeyword === keyword.keyword;

              return (
                <>
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{keyword.keyword}</td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {formatNumber(keyword.search_volume)}
                    </td>
                    <td className="p-3">
                      <div className="w-24 h-8">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={trendData}>
                            <Line
                              type="monotone"
                              dataKey="volume"
                              stroke="#3b82f6"
                              strokeWidth={2}
                              dot={false}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {formatCurrency(keyword.cpc)}
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">
                      {keyword.competition_index}
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getCompetitionColor(keyword.competition)}`}>
                        {keyword.competition}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      <div className="flex items-center gap-1">
                        {volatility > 50 ? (
                          <TrendingUp className="h-4 w-4 text-orange-600" />
                        ) : volatility > 25 ? (
                          <TrendingUp className="h-4 w-4 text-yellow-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-green-600" />
                        )}
                        <span className={volatility > 50 ? 'text-orange-600 font-semibold' : volatility > 25 ? 'text-yellow-600' : 'text-green-600'}>
                          {Math.round(volatility)}%
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedKeyword(isExpanded ? null : keyword.keyword)}
                      >
                        {isExpanded ? 'Hide' : 'Show'}
                      </Button>
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="border-b bg-muted/30">
                      <td colSpan={8} className="p-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">12-Month Trend for "{keyword.keyword}"</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={trendData}>
                                  <XAxis dataKey="month" />
                                  <YAxis />
                                  <Tooltip />
                                  <Line
                                    type="monotone"
                                    dataKey="volume"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={{ fill: '#3b82f6', r: 4 }}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                              <div>
                                <div className="text-sm text-muted-foreground">Avg Volume</div>
                                <div className="text-lg font-bold">{formatNumber(keyword.search_volume)}</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">CPC</div>
                                <div className="text-lg font-bold">{formatCurrency(keyword.cpc)}</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">Competition</div>
                                <div className="text-lg font-bold">{keyword.competition}</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">Volatility</div>
                                <div className="text-lg font-bold">{Math.round(volatility)}%</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
