import Link from "next/link";
import { ArrowRight, Truck, Shield, Headphones, Star } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const bestsellers = products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                🐾 New Collection 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Yêu thương thú cưng
                <span className="block text-primary-600">thông minh hơn</span>
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-lg">
                Khám phá bộ sưu tập phụ kiện thú cưng thông minh, chăm sóc cao cấp. 
                Giao hàng toàn quốc Việt Nam & quốc tế.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition shadow-lg shadow-primary-200"
                >
                  Xem sản phẩm
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products?category=tech"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-primary-300 hover:text-primary-600 transition"
                >
                  Smart Tech
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-gray-700">4.8</span>
                  <span>(2.4k đánh giá)</span>
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <span>Giao hàng 2-5 ngày</span>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                  alt="Happy pets"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-2xl">
                  🐶
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">10.000+</p>
                  <p className="text-xs text-gray-500">Khách hàng hài lòng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Giao hàng nhanh", desc: "2-5 ngày toàn quốc" },
              { icon: Shield, title: "Bảo hành 12 tháng", desc: "Đổi trả dễ dàng" },
              { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Chat & Hotline" },
              { icon: Star, title: "Chất lượng cao", desc: "Kiểm tra trước khi gửi" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bán chạy nhất</h2>
            <p className="mt-1 text-gray-500">Sản phẩm được yêu thích nhất tháng này</p>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* All featured */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sản phẩm nổi bật</h2>
              <p className="mt-1 text-gray-500">Khám phá bộ sưu tập đầy đủ</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 px-8 py-12 md:px-16 md:py-16 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Bắt đầu hành trình yêu thương thú cưng</h2>
          <p className="mt-3 text-primary-100 max-w-xl mx-auto">
            Hàng ngàn sản phẩm chất lượng, giao hàng nhanh, hỗ trợ tận tâm. 
            Mua sắm ngay hôm nay!
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition"
          >
            Khám phá ngay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
