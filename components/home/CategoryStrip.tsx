import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { DollarSign, ClipboardCheck, Wrench, Clock, TrendingUp } from 'lucide-react'

interface CategoryChipProps {
  label: string
  slug: string
  icon: LucideIcon
  colorScheme: 'primary' | 'secondary' | 'accent' | 'primary-int' | 'neutral'
  isActive?: boolean
}

function CategoryChip({ label, slug, icon: Icon, colorScheme, isActive = false }: CategoryChipProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition min-h-[44px] focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2'
  
  const activeClasses = 'bg-brand-600 text-white shadow-sm'
  const idleClasses = 'bg-white text-brand-700 border border-brand-600 hover:bg-brand-600/10'

  return (
    <Link
      href={`/blog?cat=${slug}`}
      className={`${baseClasses} ${isActive ? activeClasses : idleClasses}`}
      aria-pressed={isActive}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </Link>
  )
}

interface CategoryStripProps {
  categories: Array<{
    slug: string
    label: string
    icon: string
    colorScheme: 'primary' | 'secondary' | 'accent' | 'primary-int' | 'neutral'
  }>
}

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  ClipboardCheck,
  Wrench,
  Clock,
  TrendingUp,
}

export default function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-start md:justify-center">
      {categories.map((category) => {
        const Icon = iconMap[category.icon]
        return (
          <CategoryChip
            key={category.slug}
            label={category.label}
            slug={category.slug}
            icon={Icon}
            colorScheme={category.colorScheme}
          />
        )
      })}
    </div>
  )
}
