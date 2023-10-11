// import './globals.css'
import type { Metadata } from 'next'
import { Inter, Pangolin } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })
const pangolin = Pangolin({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calistung',
  description: 'Baca Tulis Hitung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pangolin.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
