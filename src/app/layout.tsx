import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mnshine.cz"),
  title: {
    default: "Detailing Vojkovice u Brna | MN Shine Detailing",
    template: "%s | MN Shine Detailing",
  },
  description: "Profesionální auto detailing studio ve Vojkovicích u Brna – jih Moravy. Čištění interiéru, renovace laku, keramická ochrana. Obsluha Brna a okolí.",
  keywords: ["detailing Brno", "detailing Vojkovice", "auto detailing Brno", "čištění interiéru Brno", "renovace laku Brno", "ochrana laku Brno", "detailing jih Moravy", "autodetailing jižní Morava", "MN Shine detailing", "keramická ochrana Brno"],
  alternates: {
    canonical: "https://mnshine.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://mnshine.cz",
    siteName: "MN Shine Detailing",
    title: "MN Shine Detailing | Profesionální detailing Brno a okolí",
    description: "Profesionální auto detailing studio ve Vojkovicích u Brna. Obsluha Brna a jihu Moravy.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MN Shine Detailing – Profesionální detailing Brno, Vojkovice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MN Shine Detailing | Profesionální detailing Brno a okolí",
    description: "Profesionální auto detailing studio ve Vojkovicích u Brna. Obsluha Brna a jihu Moravy.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="cs" className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${rubik.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preload" href="/icons/exterier.webp" as="image" type="image/webp" />
        <link rel="preload" href="/icons/ochrana.webp" as="image" type="image/webp" />
        <link rel="preload" href="/icons/interier.webp" as="image" type="image/webp" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <LoadingScreen>
          <Header />
          <main>{children}</main>
          <Footer />
        </LoadingScreen>
      </body>
    </html>
  );
}
