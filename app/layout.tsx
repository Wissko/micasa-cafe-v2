import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Mi Casa Cafe — South Brisbane',
  description: 'Casual premium cafe. 100% Halal. South Brisbane, QLD.',
  keywords: 'Mi Casa Cafe, South Brisbane, halal cafe, brunch, Mediterranean, fusion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
