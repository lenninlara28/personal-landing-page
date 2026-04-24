import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lennin Lara | Full Stack Developer & Senior Frontend",
  description:
    "Portafolio profesional de Lennin Lara, Ingeniero de Sistemas especializado en React, Node.js y soluciones Web3.",
  keywords: [
    "Desarrollador Full Stack",
    "Frontend Senior",
    "Blockchain Developer",
    "React",
    "Next.js",
    "Lennin Lara",
  ],
  authors: [{ name: "Lennin Lara" }],
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
