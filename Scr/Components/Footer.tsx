import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="text-xl font-bold text-white">Pawora</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Phụ kiện thú cưng thông minh & chăm sóc cao cấp. Giao hàng toàn quốc và quốc tế.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products?category=feeder" className="hover:text-primary-400 transition">Cho ăn & Uống</Link></li>
              <li><Link href="/products?category=grooming" className="hover:text-primary-400 transition">Chăm sóc</Link></li>
              <li><Link href="/products?category=toy" className="hover:text-primary-400 transition">Đồ chơi</Link></li>
              <li><Link href="/products?category=tech" className="hover:text-primary-400 transition">Smart Tech</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/shipping" className="hover:text-primary-400 transition">Vận chuyển</Link></li>
              <li><Link href="/returns" className="hover:text-primary-400 transition">Đổi trả</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition">Câu hỏi thường gặp</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Vũng Tàu, Việt Nam</li>
              <li>support@pawora.com</li>
              <li>+84 9xx xxx xxx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Pawora. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Chính sách bảo mật</Link>
            <Link href="/terms" className="hover:text-gray-300">Điều khoản</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
