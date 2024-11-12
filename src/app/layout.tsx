import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Chatbot from "@/components/ui/Chatbot";
import { ThemeProvider } from '@/contexts/ThemeContext';

const montserrat = Montserrat({ 
  subsets: ['vietnamese'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "Currency VN | Đồ Da Thủ Công Cao Cấp Việt Nam",
  description: "Currency VN - Thương hiệu đồ da thủ công cao cấp tại Việt Nam. Thiết kế tối giản, chất liệu da bò thật 100%, kỹ thuật thủ công truyền thống từ những nghệ nhân lành nghề.",
  keywords: "currency vn, currencyvn, đồ da, ví da, đồ da thủ công, leather wallet vietnam, handmade leather, currencyvn.vercel.app",
  openGraph: {
    title: "Currency VN | Đồ Da Thủ Công Cao Cấp Việt Nam",
    description: "Thương hiệu đồ da thủ công cao cấp tại Việt Nam",
    url: "https://currencyvn.vercel.app",
    siteName: "Currency VN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider>
          <CartProvider>
            <div className="min-h-screen bg-white dark:bg-[#1A1A1A] text-light-text dark:text-white transition-colors">
              <Header />
              <main>{children}</main>
              <Footer />
              <Chatbot />
              <Toaster 
                position="top-center"
                gutter={8}
                toastOptions={{
                  style: {
                    marginTop: '4rem'
                  }
                }}
              />
              <SpeedInsights />
              <Analytics />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
