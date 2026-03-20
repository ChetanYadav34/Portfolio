import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chetan Yadav | Full Stack Developer',
  description: 'Portfolio of Chetan Yadav - Building Scalable Systems and Interactive Web Experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased selection:bg-accent selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
