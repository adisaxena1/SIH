import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AirFareX — India Airfare Price Index",
  description:
    "Real-time airfare price intelligence and inflation index for India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
