import './globals.css'
import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raymond Jack — Data Scientist',
  description:
    'Data scientist at a top-10 US bank, building production ML for Reg-E and Reg-Z dispute analytics and the Tableau dashboards leadership uses to track operational risk. Side projects in Android.',
  openGraph: {
    title: 'Raymond Jack — Data Scientist',
    description:
      'Data scientist at a top-10 US bank, building production ML for Reg-E and Reg-Z dispute analytics and the Tableau dashboards leadership uses to track operational risk.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
