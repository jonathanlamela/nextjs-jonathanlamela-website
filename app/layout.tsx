import type { Metadata } from "next";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";




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
    <html lang="en" className="!scroll-smooth">

      <body>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>

      </body>
    </html>
  );
}
