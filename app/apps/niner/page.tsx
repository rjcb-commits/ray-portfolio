import fs from 'node:fs/promises'
import path from 'node:path'
import type { Metadata } from 'next'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Niner — Raymond Jack',
  description:
    'A clean, calm sudoku for Android. One daily puzzle, five modes, zero ads, zero tracking.',
}

export default async function NinerPage() {
  const file = path.join(process.cwd(), 'app/apps/niner/content.md')
  const md = await fs.readFile(file, 'utf-8')
  const html = await marked.parse(md, { gfm: true, breaks: false })

  return (
    <main className="appPage">
      <div className="wrap appPageHeader">
        <a href="/" className="backLink">← Back</a>
        <a href="https://github.com/rjcb-commits/niner_sudoku" target="_blank" rel="noreferrer" className="repoLink">
          View on GitHub
        </a>
      </div>
      <article className="wrap prose" dangerouslySetInnerHTML={{ __html: html }} />
      <footer className="footer wrap">
        <div>© {new Date().getFullYear()} Raymond Jack</div>
        <div className="footerMeta">Built with Next.js</div>
      </footer>
    </main>
  )
}
