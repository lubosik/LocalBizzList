// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    slug: {
      type: "string",
      description: "The slug of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true
    },
    description: {
      type: "string",
      description: "SEO description",
      required: true
    },
    publishedAt: {
      type: "date",
      description: "The date the post was published",
      required: true
    },
    updatedAt: {
      type: "date",
      description: "The date the post was last updated",
      required: false
    },
    featuredImage: {
      type: "string",
      description: "The featured image URL",
      required: true
    },
    featuredImageAlt: {
      type: "string",
      description: "Alt text for featured image",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true
    },
    categorySlug: {
      type: "string",
      description: "The category slug",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the post",
      required: false
    },
    featured: {
      type: "boolean",
      description: "Whether the post is featured",
      required: false,
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post.slug}`
    },
    categoryUrl: {
      type: "string",
      resolve: (post) => `/blog/${post.categorySlug}`
    },
    readingTime: {
      type: "number",
      resolve: (post) => {
        const wordsPerMinute = 200;
        const wordCount = post.body.raw.split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
      }
    }
  }
}));
var Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: `categories/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the category",
      required: true
    },
    slug: {
      type: "string",
      description: "The slug of the category",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the category",
      required: true
    },
    heroImage: {
      type: "string",
      description: "The hero image URL",
      required: true
    },
    heroImageAlt: {
      type: "string",
      description: "Alt text for hero image",
      required: true
    },
    featured: {
      type: "boolean",
      description: "Whether the category is featured",
      required: false,
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (category) => `/blog/${category.slug}`
    }
  }
}));
var Business = defineDocumentType(() => ({
  name: "Business",
  filePathPattern: `businesses/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the business",
      required: true
    },
    slug: {
      type: "string",
      description: "The slug of the business",
      required: true
    },
    description: {
      type: "string",
      description: "Business description",
      required: true
    },
    category: {
      type: "string",
      description: "Business category",
      required: true
    },
    city: {
      type: "string",
      description: "City",
      required: true
    },
    state: {
      type: "string",
      description: "State",
      required: true
    },
    phone: {
      type: "string",
      description: "Phone number",
      required: false
    },
    website: {
      type: "string",
      description: "Website URL",
      required: false
    },
    services: {
      type: "list",
      of: { type: "string" },
      description: "Services offered",
      required: true
    },
    logo: {
      type: "string",
      description: "Business logo URL",
      required: false
    },
    verified: {
      type: "boolean",
      description: "Whether the business is verified",
      required: false,
      default: false
    },
    featured: {
      type: "boolean",
      description: "Whether the business is featured",
      required: false,
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (business) => `/businesses/${business.slug}`
    },
    categoryUrl: {
      type: "string",
      resolve: (business) => `/businesses/category/${business.category.toLowerCase().replace(/\s+/g, "-")}`
    }
  }
}));
var Issue = defineDocumentType(() => ({
  name: "Issue",
  filePathPattern: `issues/**/*.yml`,
  contentType: "data",
  fields: {
    niche: {
      type: "string",
      description: "The niche this issue belongs to",
      required: true
    },
    nicheTitle: {
      type: "string",
      description: "The display title of the niche",
      required: true
    },
    icon: {
      type: "string",
      description: "The icon for the niche",
      required: true
    },
    issues: {
      type: "list",
      of: {
        type: "nested",
        of: {
          slug: { type: "string", required: true },
          title: { type: "string", required: true },
          snippet: { type: "string", required: true },
          category: { type: "string", required: true },
          cities: { type: "list", of: { type: "string" }, required: true },
          keywords: { type: "list", of: { type: "string" }, required: true },
          articleSlug: { type: "string", required: true },
          priority: { type: "number", required: true }
        }
      },
      description: "List of issues for this niche",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (issue) => `/niches/${issue.niche}/`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Category, Business, Issue]
});
export {
  Business,
  Category,
  Issue,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GBMFGGNS.mjs.map
