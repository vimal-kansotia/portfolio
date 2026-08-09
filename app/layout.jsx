import '../src/index.css';
import Script from 'next/script';

export const viewport = {
  themeColor: '#415B06',
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata = {
  title: 'Vimal Santosh Kansotia | Big Data & AI Portfolio',
  description: 'Vimal Santosh Kansotia - Master\'s in Big Data Analytics | Data Analytics Engineer & Product Architect specializing in machine learning, big data, and cloud-native solutions.',
  keywords: 'Vimal Santosh Kansotia, Big Data Analytics, Data Analytics Engineer, Machine Learning, Python, Portfolio, Artificial Intelligence, Bioinformatics',
  authors: [{ name: 'Vimal Santosh Kansotia' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vimalkansotia.netlify.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://vimalkansotia.netlify.app',
    title: 'Vimal Santosh Kansotia | Big Data & AI Portfolio',
    description: 'Master\'s in Big Data Analytics | Data Analytics Engineer & Product Architect.',
    siteName: 'Vimal Santosh Kansotia Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://vimalkansotia.netlify.app/profile.png',
        width: 1200,
        height: 630,
        alt: 'Vimal Santosh Kansotia - Big Data & AI Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://vimalkansotia.netlify.app',
    title: 'Vimal Santosh Kansotia | Big Data & AI Portfolio',
    description: 'Master\'s in Big Data Analytics | Data Analytics Engineer & Product Architect.',
    images: ['https://vimalkansotia.netlify.app/profile.png'],
    creator: '@vimalkansotia',
    site: '@vimalkansotia',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vimal Santosh Kansotia",
  "jobTitle": "Data Analytics Engineer & Product Architect",
  "url": "https://vimalkansotia.netlify.app",
  "sameAs": [
    "https://github.com/vimal-kansotia",
    "https://www.linkedin.com/in/vimal-kansotia-586665231/"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Big Data Analytics",
    "Data Science",
    "Python Programming",
    "Bioinformatics",
    "Cloud Computing",
    "Data Analysis"
  ],
  "description": "Master's in Big Data Analytics | Data Analytics Engineer & Product Architect.",
  "image": "https://vimalkansotia.netlify.app/profile.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <link rel="icon" href="/profile.png" />

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