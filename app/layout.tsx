import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
// import './fonts.css'

const brandFont = localFont({
  src: [
    {
      path: "../public/fonts/brandFont.ttf",
      style: "normal",
    }
  ],
  variable: "--font-brand",
  weight: "600"
})

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "700"
})

export const metadata: Metadata = {
  title: "Производство BaCO3 | Высококачественный углекислый барий",
  description: "BARICHEM INC. — ведущий производитель углекислого бария (BaCO3) для керамической, стекольной, строительной и химической промышленности в России и Узбекистане.",
  keywords: [
    "углекислый барий",
    "производство BaCO3",
    "керамическая промышленность",
    "стекольная промышленность",
    "строительные материалы",
    "химическое производство",
    "высокочистый углекислый барий",
    "рынок BaCO3 в России",
    "BaCO3 в Узбекистане",
    "BARICHEM INC."
  ],
  authors: [{ name: "BARICHEM INC." }],
  creator: "BARICHEM INC.",
  publisher: "BARICHEM INC.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://barichem.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Производство BaCO3 | Высококачественный углекислый барий",
    description: "Современное производство углекислого бария (BaCO3), ориентированное на российский и узбекский рынки. Качество, надежность, эффективность.",
    url: "https://barichem.com/",
    siteName: "BARICHEM INC.",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://barichem.com/barichem-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Производство углекислого бария"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Производство BaCO3 | Высококачественный углекислый барий",
    description: "BARICHEM INC. специализируется на производстве высокочистого углекислого бария для различных отраслей промышленности.",
    images: ["https://barichem.com/barichem-banner.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandFont.variable} ${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserratSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
