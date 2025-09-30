import Link from 'next/link'

interface CategoryTagProps {
  name: string
  slug: string
  href?: string
}

export default function CategoryTag({ name, slug, href }: CategoryTagProps) {
  const url = href || `/blog/${slug}`

  return (
    <Link href={url} className="category-tag">
      {name}
    </Link>
  )
}