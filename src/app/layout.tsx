import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import Footer from '@/components/Footer'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'View DataUrl',
  description: 'Visualize your data URLs',
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
