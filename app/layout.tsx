import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export const metadata: Metadata = {
  title: "Moody fox",
  description: "Moody fox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
