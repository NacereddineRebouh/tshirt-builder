import "@/styles/globals.css";
import Providers from "@/utils/Providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T-Shirt Customizer",
  description: "T-Shirt Customizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-w-full min-h-screen bg-neutral-100 `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
