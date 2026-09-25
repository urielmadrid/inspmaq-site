import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";

const manrope = Manrope({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = "https://inspmaq.com.br";
const siteName = "INSPMAQ";
const siteDescription = "Manutenção industrial, inspeções técnicas e locação de caminhão guindauto em Rio Grande - RS e região.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "INSPMAQ | Manutenção, Inspeção e Locação", template: "%s | INSPMAQ" },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "industrial services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "INSPMAQ | Manutenção, Inspeção e Locação",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/porto-rio-grande.webp", width: 1920, height: 1440, alt: "Operação portuária em Rio Grande - RS" }],
  },
  twitter: { card: "summary_large_image", title: "INSPMAQ | Manutenção, Inspeção e Locação", description: siteDescription, images: ["/porto-rio-grande.webp"] },
};

const organization = {
  "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#organization`,
  name: siteName, url: siteUrl, logo: `${siteUrl}/icons/icon-512.png`, description: siteDescription,
  email: "contato@inspmaq.com.br", telephone: "+55 53 98101-8934",
  areaServed: { "@type": "City", name: "Rio Grande", containedInPlace: { "@type": "State", name: "Rio Grande do Sul" } },
  sameAs: ["https://www.instagram.com/inspmaq"],
};
const website = {
  "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteUrl}/#website`,
  url: siteUrl, name: siteName, description: siteDescription, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "pt-BR",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${inter.variable} font-body`}>
        <StructuredData data={organization} />
        <StructuredData data={website} />
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  );
}
