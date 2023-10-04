import './globals.css'

import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  style: 'normal',
  display: 'auto',
})

export const metadata: Metadata = {
  title: 'Visualize Data URLs',
  description:
    'Preview your data URLs. Check validity of data URL & get parsed information such as content type, media type, base64 status & data content of inputted data URLs!',
  metadataBase: new URL('https://data-url.sivaramp.com'),
  alternates: { canonical: 'https://data-url.sivaramp.com' },
  twitter: {
    title: 'Visualize Data URLs',
    description:
      'Preview your data URLs. Check validity of data URL & get parsed information such as content type, media type, base64 status & data content of inputted data URLs!',
    card: 'summary',
    images: [
      {
        type: 'image/png',
        url: '/og.png',
        width: 800,
        height: 800,
        alt: 'Visualize Data URLs',
      },
    ],
    creator: '@SivaramPg',
  },
  openGraph: {
    title: 'Visualize Data URLs',
    description:
      'Preview your data URLs. Check validity of data URL & get parsed information such as content type, media type, base64 status & data content of inputted data URLs!',
    siteName: 'Visualize Data URL',
    url: 'https://data-url.sivaramp.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        type: 'image/png',
        url: '/og.png',
        width: 800,
        height: 800,
        alt: 'Visualize Data URLs',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
