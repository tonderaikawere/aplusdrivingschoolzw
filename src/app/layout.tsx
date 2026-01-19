

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.aplusdrivingschool.co.zw"),
  title: {
    default: "A Plus Driving School",
    template: "%s | A Plus Driving School",
  },
  description:
    "A Plus Driving School in Bulawayo offers professional driving lessons, oral lessons, practical training, and test preparation. Book lessons and learn until you pass.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Images/logo.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "A Plus Driving School",
    title: "A Plus Driving School",
    description:
      "Professional driving lessons in Bulawayo: oral lessons, practical lessons, and exam readiness. Book your first driving lesson today.",
    images: [
      {
        url: "/Images/logo.png",
        width: 1200,
        height: 630,
        alt: "A Plus Driving School",
      },
    ],
    locale: "en_ZW",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Plus Driving School",
    description:
      "Professional driving lessons in Bulawayo: oral lessons, practical lessons, and exam readiness. Book your first driving lesson today.",
    images: ["/Images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "clip", width: "100%", scrollbarGutter: "stable" }}>
      <body
        className={poppins.className}
        style={{ margin: "0", overflowX: "clip", width: "100%", scrollbarGutter: "stable" }}
      >
        <Providers>
          <SiteHeader />
          <div style={{ paddingTop: 72 }}>
            {children}
          </div>
          <Footer />
          <WhatsAppFloatingButton
            phoneNumberE164={"+263772462823"}
            message={
              "Hi A Plus Driving School, I would like to book driving lessons. Please share your prices and available times." 
            }
          />
        </Providers>
      </body>
    </html>
  );
}