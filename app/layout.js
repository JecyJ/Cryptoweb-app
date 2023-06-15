import Footer from '@components/footer'
import Navbar from '@components/navbar'
import '@styles/globals.css'
// import { SessionProvider } from 'next-auth/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Currency Tracker',
  description: 'Cloned by Jecy Jehu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />        
      </body>
    </html>
  )
}
