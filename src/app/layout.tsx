import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalog app",
  description: "A modern catalog using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className}">
        <header className="bg-customBlue p-4 text-white text-xl text-center font-bold">Nextjs Catalog</header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center font-bold">
          Footer content
        </footer>
      </body>
    </html>
  );
}
