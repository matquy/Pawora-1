import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pawora – Phụ kiện thú cưng thông minh",
  description:
    "Cửa hàng phụ kiện thú cưng thông minh & chăm sóc cao cấp. Giao hàng toàn quốc Việt Nam và quốc tế.",
  keywords: "phụ kiện thú cưng, máy cho ăn tự động, GPS thú cưng, pet accessories, smart pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
