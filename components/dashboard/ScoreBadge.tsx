import { cn } from '@/lib/utils';
import { getScoreColorClass } from '@/lib/scoring';

interface ScoreBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function ScoreBadge({ score, size = 'md', showLabel = true, className }: ScoreBadgeProps) {
  const colorClass = getScoreColorClass(score);

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const colorClasses = {
    excellent: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    good: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    caution: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    'no-go': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-semibold',
        sizeClasses[size],
        colorClasses[colorClass as keyof typeof colorClasses],
        className
      )}
      role="status"
      aria-label={`Score: ${score} out of 100`}
    >
      {showLabel && <span className="mr-1">Score:</span>}
      {score}
      <span className="text-xs ml-0.5">/100</span>
    </span>
  );
}
