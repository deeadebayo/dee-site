import 'dotenv/config'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './global.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { myPerson, schemaOrgWebPage } from './schema'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Adeolu Adebayo | Front-end focused Software Engineer',
    template: '%s | Adeolu Adebayo',
  },
  description: process.env.SITE_DESCRIPTION,
  keywords:
    "adeolu adebayo, dee adebayo, front-end developer, ui/ux, bachelor's, georgia state university, software implementation, web development, freelance, website building, front-end designer, full stack developer, front end developer, software engineer, css engineer, HTML, CSS, JavaScript, Node.js, React.js, Gatsby.js, Jamstack, GraphQL, PostgreSQL, Typescript, Shopify",
  alternates: {
    canonical: process.env.SITE_URL,
    // languages: {
    //   'en-US': '/en-US',
    // },
  },
  metadataBase: new URL('https://deeadebayo.com'),
  openGraph: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    url: process.env.SITE_URL,
    type: 'website',
    images: ['/icon.png'],
    locale: 'en_US',
  },
  creator: 'Adeolu Adebayo',
  twitter: {
    card: 'summary_large_image',
    images: ['/icon.png'],
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    // siteId: '1467726470533754880',
    creator: 'Adeolu Adebayo',
    // creatorId: '1467726470533754880',
  },
  manifest: '/manifest.json',
  category: 'personal website',
}

const schemaOptions = [myPerson, schemaOrgWebPage]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head id="numbaOne">
        {schemaOptions.map((option) => (
          <script
            async
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(option).replace(/</g, '\\u003c'),
            }}
          />
        ))}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="page-wrapper">
          <Navbar />
          <main className="page-wrapper--body">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
