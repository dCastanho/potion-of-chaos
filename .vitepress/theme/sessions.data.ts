import { createContentLoader } from 'vitepress'

export interface Data {
	number: number, 
	author: string, 
	title: string, 
	tldr: string, 
	date?: string, 
	url: string,
	arc: number 
}

declare const data: Data[]
export { data }

export default createContentLoader('sessions/session-*.md', {
  excerpt: true,
  transform(raw): Data[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
		number: frontmatter.number,
		author: frontmatter.author, 
		tldr: frontmatter.tldr,
		date: frontmatter.date, 
        url,
		arc: frontmatter.arc 
	}))
      .sort((a, b) => b.number - a.number)
  }
    })

