import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import ArticleGrid from '@/components/ArticleGrid'
import TableOfContents from '@/components/TableOfContents'
import { useEffect, useState } from 'react'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - LocalBizzList`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [post.featuredImage],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  // Extract headings from the MDX content for table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /^#{1,4}\s+(.+)$/gm
    const headings: Array<{ id: string; text: string; level: number }> = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[0].match(/^#+/)?.[0].length || 1
      const text = match[1].trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      headings.push({ id, text, level })
    }

    return headings
  }

  const headings = extractHeadings(post.body.raw)

  // Get related posts
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.categorySlug === post.categorySlug ||
          p.tags?.some((tag) => post.tags?.includes(tag)))
    )
    .slice(0, 3)

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <article>
        {/* Breadcrumbs */}
        <div className="border-b border-neutral-200 bg-neutral-50">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-neutral-600">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span>/</span>
              <Link
                href={post.categoryUrl}
                className="hover:text-primary transition-colors"
              >
                {post.category}
              </Link>
              <span>/</span>
              <span className="text-neutral-800 truncate">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="container py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-int font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <Link
              href={post.categoryUrl}
              className="category-tag mb-4"
            >
              {post.category}
            </Link>

            <h1 className="text-4xl font-bold text-neutral-800 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-neutral-600 mb-6">{post.excerpt}</p>

            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>{publishedDate}</time>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              )}
              <div>
                <span className="font-semibold text-neutral-800">
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mb-12">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <MDXContent 
                  components={{
                    h1: ({ children, ...props }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .trim()
                      return <h1 id={id} {...props}>{children}</h1>
                    },
                    h2: ({ children, ...props }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .trim()
                      return <h2 id={id} {...props}>{children}</h2>
                    },
                    h3: ({ children, ...props }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .trim()
                      return <h3 id={id} {...props}>{children}</h3>
                    },
                    h4: ({ children, ...props }) => {
                      const id = children?.toString()
                        .toLowerCase()
                        .replace(/[^a-z0-9\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-')
                        .trim()
                      return <h4 id={id} {...props}>{children}</h4>
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Sidebar with Table of Contents */}
            <div className="lg:col-span-1">
              <TableOfContents 
                headings={headings}
                activeId=""
              />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-neutral-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">
              Related Articles
            </h2>
            <ArticleGrid posts={relatedPosts} />
          </div>
        </section>
      )}
    </>
  )
}