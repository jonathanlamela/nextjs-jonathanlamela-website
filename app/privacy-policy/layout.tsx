import type { Metadata } from "next";
import "../globals.css";


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
    <>
      {children}
    </>

  );
}

