import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mnshine.cz"),
  title: {
    default: "MN Shine Detailing | Profesionální detailing Brno, Vojkovice",
    template: "%s | MN Shine Detailing",
  },
  description: "Profesionální auto detailing studio v Vojkovicích u Brna. Čištění interiéru, renovace laku, keramická ochrana. Prémiová péče o vaše vozidlo.",
  keywords: ["detailing Brno", "čištění interiéru Brno", "renovace laku Brno", "ochrana laku Brno", "auto detailing"],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://mnshine.cz",
    siteName: "MN Shine Detailing",
    title: "MN Shine Detailing | Profesionální detailing Brno",
    description: "Profesionální auto detailing studio v Vojkovicích u Brna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
