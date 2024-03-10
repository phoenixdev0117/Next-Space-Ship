import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { CustomFooter } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space-Ship-Forum",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} style={{ backgroundColor: 'var(--background)' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <header className="justify-center items-center pb-4">
              <Navbar />
            </header>
            {children}
          </div>
          <CustomFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
