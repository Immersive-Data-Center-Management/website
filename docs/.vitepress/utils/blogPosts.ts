import { readdirSync, readFileSync } from 'node:fs'
import { resolve, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))

export interface BlogPost {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt?: string
}

export function getBlogSidebarItems(): BlogPost[] {
  const blogDir = resolve(__dirname, '../../news')
  return readdirSync(blogDir)
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => {
      const { data } = matter(readFileSync(resolve(blogDir, file), 'utf-8'))
      return {
        title: (data.title as string),
        url: `/news/${basename(file, '.md')}`,
        date: formatDate(data.date),
      }
    })
    .filter(p => p.title)
    .sort((a, b) => (b.date.time - a.date.time))
}

function formatDate(raw: string): BlogPost['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: date.getTime(),
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
