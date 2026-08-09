import './globals.css'

export const metadata = {
  title: "Vimal Santosh Kansotia | Big Data & AI Portfolio",
  description: "Master's in Big Data Analytics | Data Analytics Engineer & Product Architect",
  icons: {
    icon: '📊',
  },
  openGraph: {
    title: "Vimal Santosh Kansotia's Portfolio",
    description: "Data Analytics Engineer | Product Architect",
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}