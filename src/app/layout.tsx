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
  description: 'Explore Codename Hi-Five by Kura Homes - a premium 5.3-acre gated community adjacent to ORR Exit-5, Hyderabad. Offering luxury 2 BHK & Duplex homes starting from ₹59 Lakhs. 90% constructed, possession soon. HMDA & TG RERA Approved (P02200002810).',
  keywords: [
    'Codename Hi-Five',
    'Codename Hi Five',
    'Kura Homes',
    'Kura Homes Hyderabad',
    'Kura Homes Bowrampet',
    'flats in Bowrampet',
    '2 BHK flats in Bowrampet',
    'duplex homes in Bowrampet',
    'gated community near ORR Exit 5',
    'flats near ORR Exit 5 Hyderabad',
    'apartments near Dundigal',
    'flats near Gandimaisamma',
    'property in Bowrampet Road',
    '2 BHK starting from 59 lakhs Hyderabad',
    'luxury apartments Bowrampet',
    'HMDA approved flats Bowrampet',
    'TG RERA registered project Bowrampet',
    'P02200002810',
    'apartments near Bachupally',
    'flats near Miyapur',
    'luxury township ORR Exit 5',
    'Kura Homes 55 years legacy',
  ].join(', '),
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
        alt: 'Codename Hi-Five Architectural Render by Kura Homes',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codename Hi-Five by Kura Homes | Premium Gated Homes from ₹59L',
    description: 'Discover premium 2 BHK & Duplex homes near ORR Exit-5, Hyderabad. 90% built, 40+ lifestyle amenities, 25K sq.ft clubhouse. TG RERA: P02200002810.',
    images: ['/images/Front view.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const listingJsonLd = {
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is the starting price for 2 BHK & Duplex homes at Codename Hi-Five?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Prices at Codename Hi-Five by Kura Homes start from ₹59 Lakhs for premium 2 BHK Smart Luxe residences and range up to ₹98 Lakhs for spacious Duplex suites.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Where is Codename Hi-Five located in Hyderabad?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Codename Hi-Five is strategically situated adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is Codename Hi-Five HMDA and TG RERA approved?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, Codename Hi-Five is fully approved by HMDA (Permit No: G1/DM/2237/BP/2021) and registered under TG RERA (Registration No: P02200002810).',
      },
    },
    {
      '@type': 'Question',
      'name': 'What is the construction progress of Codename Hi-Five?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Codename Hi-Five is 90% constructed with structural work complete and handover expected soon.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://kurahomes.in',
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Bowrampet Projects',
      'item': 'https://kurahomes.in/#location',
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Codename Hi-Five',
      'item': 'https://kurahomes.in',
    },
  ],
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
        {/* Local Geo-Targeting Metadata for Hyderabad Local SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Bowrampet" />
        <meta name="geo.position" content="17.5684;78.3756" />
        <meta name="ICBM" content="17.5684, 78.3756" />

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
        {/* Schema.org JSON-LD Structured Data: RealEstateListing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
        />
        {/* Schema.org JSON-LD Structured Data: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Schema.org JSON-LD Structured Data: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
