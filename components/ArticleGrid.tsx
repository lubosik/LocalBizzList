import type { Post } from 'contentlayer/generated'
import ArticleCard from './ArticleCard'

interface ArticleGridProps {
  posts: Post[]
}

export default function ArticleGrid({ posts }: ArticleGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600">No articles found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <ArticleCard key={post._id} post={post} />
      ))}
    </div>
  )
}