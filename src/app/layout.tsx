

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
  title: "A Plus Driving School",
  description: "www.aplusdrivingschool.co.zw",
  icons:{
    icon: "/Images/logo.png"
  }
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