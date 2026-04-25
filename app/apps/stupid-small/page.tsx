import fs from 'node:fs/promises'
import path from 'node:path'
import type { Metadata } from 'next'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Stupid Small — Raymond Jack',
  description:
    'AI-powered Android app that breaks scary tasks into stupidly small steps you actually finish.',
}

export default async function StupidSmallPage() {
  const file = path.join(process.cwd(), 'app/apps/stupid-small/content.md')
  const md = await fs.readFile(file, 'utf-8')
  const html = await marked.parse(md, { gfm: true, breaks: false })

  return (
    <main className="appPage">
      <div className="wrap appPageHeader">
        <a href="/" className="backLink">← Back</a>
      </div>
      <article className="wrap prose" dangerouslySetInnerHTML={{ __html: html }} />
      <footer className="footer wrap">
        <div>© {new Date().getFullYear()} Raymond Jack</div>
        <div className="footerMeta">Built with Next.js</div>
      </footer>
    </main>
  )
}
