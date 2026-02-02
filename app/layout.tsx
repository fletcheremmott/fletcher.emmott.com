import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Portfolio showcasing software engineering projects and skills',
  keywords: ['software engineer', 'portfolio', 'web development', 'projects'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
