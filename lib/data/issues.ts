import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { NicheIssues, Issue } from '@/lib/types/issues'

const ISSUES_DIR = path.join(process.cwd(), 'content', 'issues')

/**
 * Get all issues for a specific niche
 */
export function getIssuesByNiche(nicheSlug: string): Issue[] {
  try {
    const filePath = path.join(ISSUES_DIR, `${nicheSlug}.yml`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = yaml.load(fileContents) as NicheIssues
    return data.issues || []
  } catch (error) {
    console.warn(`Could not load issues for niche: ${nicheSlug}`, error)
    return []
  }
}

/**
 * Get all issues across all niches
 */
export function getAllIssues(): Issue[] {
  try {
    const files = fs.readdirSync(ISSUES_DIR).filter(file => file.endsWith('.yml'))
    const allIssues: Issue[] = []

    files.forEach(file => {
      const filePath = path.join(ISSUES_DIR, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const data = yaml.load(fileContents) as NicheIssues
      if (data.issues) {
        allIssues.push(...data.issues)
      }
    })

    return allIssues
  } catch (error) {
    console.warn('Could not load all issues', error)
    return []
  }
}

/**
 * Get top issues for homepage display
 * Sorted by priority (lower number = higher priority)
 */
export function getHomepageIssues(count: number = 12): Issue[] {
  const allIssues = getAllIssues()
  
  // Sort by priority (ascending), then by title
  const sorted = allIssues.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }
    return a.title.localeCompare(b.title)
  })

  return sorted.slice(0, count)
}

/**
 * Get all issues in a specific category
 */
export function getIssuesByCategory(categorySlug: string): Issue[] {
  const allIssues = getAllIssues()
  return allIssues.filter(issue => issue.category === categorySlug)
}

/**
 * Get all issues for a specific city
 */
export function getIssuesByCity(citySlug: string): Issue[] {
  const allIssues = getAllIssues()
  return allIssues.filter(issue => issue.cities.includes(citySlug))
}

/**
 * Get all niche issues data (includes niche metadata)
 */
export function getAllNicheIssues(): NicheIssues[] {
  try {
    const files = fs.readdirSync(ISSUES_DIR).filter(file => file.endsWith('.yml'))
    const nicheIssues: NicheIssues[] = []

    files.forEach(file => {
      const filePath = path.join(ISSUES_DIR, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const data = yaml.load(fileContents) as NicheIssues
      nicheIssues.push(data)
    })

    return nicheIssues
  } catch (error) {
    console.warn('Could not load niche issues', error)
    return []
  }
}

/**
 * Get a specific issue by niche and slug
 */
export function getIssue(nicheSlug: string, issueSlug: string): Issue | null {
  const nicheIssues = getIssuesByNiche(nicheSlug)
  return nicheIssues.find(issue => issue.slug === issueSlug) || null
}

