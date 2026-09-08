import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kurahomes.in'),
  title: 'Codename Hi-Five by Kura Homes | 2 BHK & Duplex Homes from ₹59L at ORR Exit-5, Hyderabad',
  description: 'Explore Codename Hi-Five by Kura Homes - a premium 5.3-acre gated community adjacent to ORR Exit-5, Hyderabad. Offering luxury 2 BHK & Duplex homes starting from ₹59 Lakhs. 90% constructed, possession soon. HMDA & TG RERA Approved.',
  keywords: 'Codename Hi-Five, Kura Homes, Gated Community Bowrampet, Flats near ORR Exit 5, 2 BHK Hyderabad, Duplex Bowrampet Dundigal, Gandimaisamma real estate, Kura Homes Hyderabad',
  openGraph: {
    title: 'Codename Hi-Five by Kura Homes | Premium Gated Homes from ₹59L',
    description: 'Discover premium 2 BHK & Duplex homes near ORR Exit-5, Hyderabad. 90% built, 40+ lifestyle amenities, 25K sq.ft clubhouse. By Kura Homes - 55 years of trust.',
    url: 'https://kurahomes.in',
    siteName: 'Codename Hi-Five by Kura Homes',
    images: [
      {
        url: '/images/Front view.webp',
        width: 1200,
        height: 630,
        alt: 'Codename Hi-Five Architectural Render',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  'name': 'Codename Hi-Five by Kura Homes',
  'description': 'Premium 5.3-acre gated community featuring 2 BHK & Duplex homes starting from ₹59 Lakhs at ORR Exit-5, Bowrampet, Hyderabad.',
  'url': 'https://kurahomes.in',
  'telephone': '+918008008946',
  'priceRange': '₹59 Lakhs - ₹98 Lakhs',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma',
    'addressLocality': 'Hyderabad',
    'addressRegion': 'Telangana',
    'postalCode': '500043',
    'addressCountry': 'IN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 17.5684,
    'longitude': 78.3756,
  },
  'offeredBy': {
    '@type': 'RealEstateAgent',
    'name': 'Kura Homes',
    'url': 'https://kurahomes.in',
    'telephone': '+918008008946',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17602634500"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17602634500');
          `}
        </Script>
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-alabaster text-obsidian font-sans antialiased selection:bg-bronze selection:text-white">
        {children}
      </body>
    </html>
  );
}
