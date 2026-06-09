import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";
import LazyAccessibilityWidget from "@/components/ui/LazyAccessibilityWidget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arcadia Home Care | Specialized Home Care in Toronto & GTA",
  description:
    "Clinical expertise and human compassion in the home. Dementia, brain injury, rehabilitation, and complex aging care. Serving GTA families since 2005.",
  alternates: {
    canonical: 'https://www.arcadiahomecare.ca/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/home-hero-caregiver-senior.png"
          as="image"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XY1HL4D6TT"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XY1HL4D6TT');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '797249154391797');
            fbq('track', 'PageView');
          `}
        </Script>
        <SiteLayout>{children}</SiteLayout>
        <LazyAccessibilityWidget />
      </body>
    </html>
  );
}
