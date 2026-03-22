import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arcadia Home Care | Specialized Home Care in Toronto & GTA",
  description:
    "Clinical expertise and human compassion in the home. Dementia, brain injury, rehabilitation, and complex aging care. Serving GTA families since 2005.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XY1HL4D6TT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XY1HL4D6TT');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
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
        <AccessibilityWidget />
      </body>
    </html>
  );
}
