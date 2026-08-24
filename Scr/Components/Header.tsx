"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
              P
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Pawora
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition"
            >
              Sản phẩm
            </Link>
            <Link
              href="/products?category=tech"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition"
            >
              Smart Tech
            </Link>
            <Link
              href="/products?category=grooming"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition"
            >
              Chăm sóc
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition"
            >
              Về chúng tôi
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-primary-600 transition hidden sm:block">
              <Heart className="w-5 h-5" />
            </button>

            <Link
              href="/cart"
              className="relative p-2 text-gray-500 hover:text-primary-600 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-gray-500"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all",
          mobileOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          <Link
            href="/products"
            className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50"
            onClick={() => setMobileOpen(false)}
          >
            Tất cả sản phẩm
          </Link>
          <Link
            href="/products?category=tech"
            className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50"
            onClick={() => setMobileOpen(false)}
          >
            Smart Tech
          </Link>
          <Link
            href="/products?category=grooming"
            className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50"
            onClick={() => setMobileOpen(false)}
          >
            Chăm sóc
          </Link>
          <Link
            href="/about"
            className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50"
            onClick={() => setMobileOpen(false)}
          >
            Về chúng tôi
          </Link>
        </nav>
      </div>
    </header>
  );
}
