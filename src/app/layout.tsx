import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ 
  subsets: ['vietnamese'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "currency.vn | Đồ Da Tối Giản",
  description: "Sản phẩm ví da và phụ kiện thủ công với thiết kế tối giản",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster 
            position="top-center"
            gutter={8}
            toastOptions={{
              style: {
                marginTop: '4rem'
              }
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
