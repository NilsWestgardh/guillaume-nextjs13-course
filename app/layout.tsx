import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guillaume Next.js 13 Course',
  description: 'Learn how to build a fullstack app with Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
