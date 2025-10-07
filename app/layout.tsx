import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://localbizzlist.com'),
  title: 'LocalBizzList - South Florida Business Directory',
  description: 'Your trusted directory for South Florida local businesses, services, and expert advice. Find reliable contractors, plumbers, electricians, and more.',
  keywords: ['South Florida', 'business directory', 'local businesses', 'contractors', 'services'],
  authors: [{ name: 'LocalBizzList' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localbizzlist.com',
    siteName: 'LocalBizzList',
    title: 'LocalBizzList - South Florida Business Directory',
    description: 'Your trusted directory for South Florida local businesses and services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocalBizzList - South Florida Business Directory',
    description: 'Your trusted directory for South Florida local businesses and services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}