import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Jonathan La Mela - Official Website",
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
      </body>
    </html>
  );
}
