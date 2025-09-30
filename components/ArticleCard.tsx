'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import type { Post } from 'contentlayer/generated'

interface ArticleCardProps {
  post: Post
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="card">
      <Link href={post.url} className="block">
        <div className="relative h-48 w-full bg-neutral-100">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="category-tag">
              {post.category}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1 text-xs text-neutral-500">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-neutral-800 leading-7 tracking-tight-1 hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-base text-neutral-600 leading-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-2">
            <span className="text-sm font-semibold text-primary hover:text-primary-int transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}