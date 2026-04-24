import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Raymond Jack | Data Scientist Portfolio',
  description:
    'Portfolio of Raymond Jack, data scientist focused on banking analytics, predictive modeling, Tableau dashboards, and business decision support.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
