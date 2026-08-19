import type { Metadata } from 'next';
import { Playfair_Display, Figtree, Gloock, Cormorant_Garamond, Cinzel } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
});

const gloock = Gloock({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gloock',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kurahomes.com'),
  title: 'Codename Hi-Five by Kura Homes | 2 BHK & Duplex Homes from ₹55L at ORR Exit-5, Hyderabad',
  description: 'Explore Codename Hi-Five by Kura Homes - a premium 5.3-acre gated community adjacent to ORR Exit-5, Hyderabad. Offering luxury 2 BHK & Duplex homes starting from ₹55 Lakhs. 90% constructed, possession soon. HMDA & TG RERA Approved.',
  keywords: 'Codename Hi-Five, Kura Homes, Gated Community Bowrampet, Flats near ORR Exit 5, 2 BHK Hyderabad, Duplex Bowrampet Dundigal, Gandimaisamma real estate, Kura Homes Hyderabad',
  openGraph: {
    title: 'Codename Hi-Five by Kura Homes | Premium Gated Homes from ₹55L',
    description: 'Discover premium 2 BHK & Duplex homes near ORR Exit-5, Hyderabad. 90% built, 40+ lifestyle amenities, 25K sq.ft clubhouse. By Kura Homes - 55 years of trust.',
    url: 'https://kurahomes.com/hi-five',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${figtree.variable} ${gloock.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Figtree:wght@400;500;600;700&family=Gloock&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-alabaster text-noir font-sans antialiased selection:bg-caramel selection:text-white">
        {children}
      </body>
    </html>
  );
}
