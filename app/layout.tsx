import type { Metadata } from "next";
import "./globals.css";
import { IS_GTM_ENABLED } from "@/src/libs/tracking/config.tracking";
import { GoogleTagManager } from "@/src/components/tracking/GoogleTagManager";
import CookieConsentBanner from "@/src/components/tracking/CookieConsentBanner";



export const metadata: Metadata = {
  title: "Jonathan La Mela - Official Website",
  description: "Sviluppatore fullstack"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-grow h-full">
      <body
        className="antialiased flex flex-grow "
      >
        <div className="flex flex-grow bg-gray-100">
          <div className="bg-white flex flex-grow">
            {children}
          </div>
        </div>
        {IS_GTM_ENABLED && <GoogleTagManager />}

        <CookieConsentBanner></CookieConsentBanner>
      </body>
    </html>
  );
}
