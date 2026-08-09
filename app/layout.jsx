import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vimal Kansotia | Data Science & Big Data Analytics',
  description: 'Portfolio of Vimal Kansotia - Big Data Engineer, Machine Learning Enthusiast, Data Scientist based in Mumbai',
  keywords: ['Data Science', 'Big Data', 'Machine Learning', 'Analytics', 'Python', 'Streamlit'],
  authors: [{ name: 'Vimal Kansotia' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vimalkansotia.vercel.app',
    title: 'Vimal Kansotia | Data Science & Big Data Analytics',
    description: 'Portfolio showcasing data science projects, machine learning models, and analytics dashboards',
    siteName: 'Vimal Kansotia',
    images: [
      {
        url: 'https://vimalkansotia.vercel.app/Assets/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Vimal Kansotia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vimal Kansotia | Data Science & Big Data Analytics',
    description: 'Portfolio of Vimal Kansotia - Big Data Engineer, Machine Learning Enthusiast',
    images: ['https://vimalkansotia.vercel.app/Assets/profile.jpg'],
    creator: '@vimal_kansotia'
  },
  robots: 'index, follow',
  canonical: 'https://vimalkansotia.vercel.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#415B06" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vimalkansotia.vercel.app" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vimal Santosh Kansotia",
              "url": "https://vimalkansotia.vercel.app",
              "image": "https://vimalkansotia.vercel.app/Assets/profile.jpg",
              "jobTitle": "Data Science Engineer | Big Data Analyst",
              "worksFor": {
                "@type": "Organization",
                "name": "Atomnik Technologies"
              },
              "sameAs": [
                "https://github.com/vimal-kansotia",
                "https://www.linkedin.com/in/vimal-kansotia-586665231/"
              ],
              "knowsAbout": [
                "Data Science",
                "Machine Learning",
                "Big Data Analytics",
                "Python",
                "Streamlit",
                "Power BI"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
