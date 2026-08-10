import '../src/index.css';
import Script from 'next/script';

export const viewport = {
  themeColor: '#415B06',
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata = {
  title: 'Vimal Santosh Kansotia | Big Data Analytics & Software Developer – Portfolio',
  description: 'Vimal Santosh Kansotia - Big Data Analytics graduate student specializing in data engineering, machine learning, Python, SQL, and modern web applications. Explore my portfolio of projects.',
  keywords: 'Vimal Santosh Kansotia, Big Data Analytics, Data Engineer, Python, SQL, Power BI, Tableau, Machine Learning, Portfolio, Software Developer',
  authors: [{ name: 'Vimal Santosh Kansotia' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vimalkansotia.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://vimalkansotia.vercel.app',
    title: 'Vimal Santosh Kansotia | Big Data Analytics Portfolio',
    description: 'Big Data Analytics student & developer specializing in data pipelines, analytics dashboards, and modern software applications.',
    siteName: 'Vimal Santosh Kansotia Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://vimalkansotia.vercel.app/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Vimal Santosh Kansotia - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://vimalkansotia.vercel.app',
    title: 'Vimal Santosh Kansotia | Big Data Analytics Portfolio',
    description: 'Big Data Analytics student & developer specializing in data pipelines, analytics dashboards, and modern software applications.',
    images: ['https://vimalkansotia.vercel.app/profile.jpg'],
    creator: '@vimalkansotia',
    site: '@vimalkansotia',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vimal Santosh Kansotia",
  "jobTitle": "Big Data Analytics Developer & Student",
  "url": "https://vimalkansotia.vercel.app",
  "sameAs": [
    "https://github.com/",
    "https://linkedin.com/"
  ],
  "knowsAbout": [
    "Big Data Analytics",
    "Data Engineering",
    "Python Programming",
    "SQL",
    "Power BI",
    "Tableau",
    "Machine Learning",
    "Cloud Computing",
    "Software Development"
  ],
  "description": "Big Data Analytics graduate student and software developer building interactive analytics dashboards and data-driven solutions.",
  "image": "https://vimalkansotia.vercel.app/profile.jpg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Intercept third-party extension errors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(event) {
                if (
                  event.message && (
                    event.message.includes('addListener') ||
                    event.message.includes('chrome-extension') ||
                    event.message.includes('extension')
                  )
                ) {
                  event.stopImmediatePropagation();
                }
              }, true);
            `
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EG5JXK7QN2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EG5JXK7QN2');
          `}
        </Script>

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/profile.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}