import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "4F Studio — Premium Software Solutions for the Gulf",
    template: "%s | 4F Studio",
  },
  description:
    "4F Studio delivers custom software development, mobile apps, AI solutions, and enterprise platforms for UAE, Saudi Arabia, and GCC markets. Trusted by Gulf enterprises.",
  keywords: [
    "software company UAE",
    "custom software development Saudi Arabia",
    "mobile app development Gulf",
    "software house Pakistan Gulf clients",
    "enterprise software GCC",
    "AI development Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://4fstudio.com",
    siteName: "4F Studio",
    title: "4F Studio — Premium Software Solutions for the Gulf",
    description:
      "Custom software, mobile apps, AI & enterprise platforms for GCC markets.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4F Studio — Premium Software Solutions for the Gulf",
    description:
      "Custom software, mobile apps, AI & enterprise platforms for GCC markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "4F Studio",
              url: "https://4fstudio.com",
              description:
                "Premium custom software development for Gulf enterprises",
              areaServed: [
                "United Arab Emirates",
                "Saudi Arabia",
                "Qatar",
                "Kuwait",
                "Bahrain",
                "Oman",
              ],
              serviceType: [
                "Custom Software Development",
                "Mobile App Development",
                "Enterprise Software",
                "AI & Automation",
                "UI/UX Design",
                "Cloud & DevOps",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg-deep text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
