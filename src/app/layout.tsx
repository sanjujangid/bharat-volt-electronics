import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Bharat Volt Electronics - Premium Electronics & Home Appliances",
  description: "Shop premium electronics, kitchen chimneys, smart gadgets, water purifiers, solar equipment, and lighting solutions at Bharat Volt. Quality products with government subsidies and best prices.",
  keywords: "electronics, kitchen chimneys, smart gadgets, water purifiers, solar equipment, lighting, home appliances, online electronics store",
  authors: [{ name: "Bharat Volt Electronics" }],
  openGraph: {
    title: "Bharat Volt Electronics",
    description: "Premium electronics and home appliances at competitive prices",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
