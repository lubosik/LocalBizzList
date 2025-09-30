import { allPosts } from 'contentlayer/generated'
import Hero from '@/components/Hero'
import ArticleGrid from '@/components/ArticleGrid'

export const metadata = {
  title: 'Blog - LocalBizzList',
  description: 'Expert advice, how-to guides, and cost information for South Florida homeowners and businesses.',
}

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <>
      <Hero
        title="Blog & Resources"
        description="Expert advice, how-to guides, cost information, and local insights for South Florida homeowners and businesses."
        showSearch={true}
        searchPlaceholder="Search articles..."
      />

      <section className="container py-16">
        <ArticleGrid posts={posts} />
      </section>
    </>
  )
}