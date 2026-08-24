export type Product = {
  id: string;
  slug: string;
  name: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  price: number; // VND
  priceUSD: number;
  originalPrice?: number;
  images: string[];
  category: "feeder" | "grooming" | "toy" | "comfort" | "tech" | "travel";
  petType: ("dog" | "cat" | "both")[];
  rating: number;
  reviewCount: number;
  tags: string[];
  inStock: boolean;
  cjProductId?: string; // For future CJ API mapping
  features: {
    vi: string[];
    en: string[];
  };
};

export const products: Product[] = [
  {
    id: "1",
    slug: "smart-automatic-pet-feeder",
    name: {
      vi: "Máy Cho Ăn Tự Động Thông Minh",
      en: "Smart Automatic Pet Feeder",
    },
    description: {
      vi: "Máy cho ăn tự động có camera 2K, điều khiển qua app, hẹn giờ cho ăn, ghi âm giọng chủ. Phù hợp chó mèo mọi kích cỡ.",
      en: "Smart automatic feeder with 2K camera, app control, scheduled feeding and voice recording. Suitable for all dog & cat sizes.",
    },
    price: 899000,
    priceUSD: 35.99,
    originalPrice: 1290000,
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    ],
    category: "feeder",
    petType: ["both"],
    rating: 4.8,
    reviewCount: 1247,
    tags: ["bestseller", "smart", "camera"],
    inStock: true,
    features: {
      vi: ["Camera 2K", "Điều khiển App", "Hẹn giờ 6 bữa/ngày", "Ghi âm giọng chủ", "Dung tích 6L"],
      en: ["2K Camera", "App Control", "6 meals/day scheduling", "Voice recording", "6L capacity"],
    },
  },
  {
    id: "2",
    slug: "self-cleaning-deshedding-brush",
    name: {
      vi: "Bàn Chải Deshedding Tự Làm Sạch",
      en: "Self-Cleaning Deshedding Brush",
    },
    description: {
      vi: "Bàn chải lấy lông chết hiệu quả, nút đẩy tự làm sạch. Giảm rụng lông đến 95%. An toàn cho da thú cưng.",
      en: "Effective deshedding brush with self-cleaning button. Reduces shedding by up to 95%. Safe for pet skin.",
    },
    price: 249000,
    priceUSD: 9.99,
    originalPrice: 399000,
    images: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
    ],
    category: "grooming",
    petType: ["both"],
    rating: 4.7,
    reviewCount: 892,
    tags: ["bestseller", "grooming"],
    inStock: true,
    features: {
      vi: ["Tự làm sạch 1 chạm", "Giảm rụng lông 95%", "Lông mềm không gây đau", "Dễ vệ sinh"],
      en: ["One-click self cleaning", "95% less shedding", "Gentle bristles", "Easy to clean"],
    },
  },
  {
    id: "3",
    slug: "interactive-motion-ball-toy",
    name: {
      vi: "Bóng Đồ Chơi Tương Tác Tự Động",
      en: "Interactive Motion-Activated Ball Toy",
    },
    description: {
      vi: "Bóng tự động lăn khi phát hiện chuyển động, giúp thú cưng vận động và giảm stress khi chủ vắng nhà.",
      en: "Motion-activated rolling ball that keeps pets active and reduces stress when owners are away.",
    },
    price: 329000,
    priceUSD: 12.99,
    images: [
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
    ],
    category: "toy",
    petType: ["dog", "cat"],
    rating: 4.6,
    reviewCount: 654,
    tags: ["interactive", "toy"],
    inStock: true,
    features: {
      vi: ["Tự động kích hoạt", "Pin sạc USB", "An toàn không độc", "Giảm stress"],
      en: ["Auto motion activation", "USB rechargeable", "Non-toxic safe", "Stress relief"],
    },
  },
  {
    id: "4",
    slug: "cooling-gel-mat",
    name: {
      vi: "Thảm Gel Làm Mát Cho Thú Cưng",
      en: "Pet Cooling Gel Mat",
    },
    description: {
      vi: "Thảm gel tự làm mát, không cần điện, giúp thú cưng thoải mái trong những ngày nóng. Có thể gấp gọn.",
      en: "Self-cooling gel mat, no electricity needed. Keeps pets comfortable on hot days. Foldable design.",
    },
    price: 379000,
    priceUSD: 14.99,
    originalPrice: 499000,
    images: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    ],
    category: "comfort",
    petType: ["both"],
    rating: 4.5,
    reviewCount: 431,
    tags: ["summer", "comfort"],
    inStock: true,
    features: {
      vi: ["Tự làm mát không điện", "Có thể giặt", "Gấp gọn dễ mang", "Nhiều kích cỡ"],
      en: ["No electricity needed", "Washable", "Foldable & portable", "Multiple sizes"],
    },
  },
  {
    id: "5",
    slug: "gps-pet-tracker-collar",
    name: {
      vi: "Vòng Cổ Định Vị GPS Thông Minh",
      en: "Smart GPS Pet Tracker Collar",
    },
    description: {
      vi: "Theo dõi vị trí thú cưng realtime qua app, cảnh báo khi ra khỏi vùng an toàn, chống nước IP67.",
      en: "Real-time GPS tracking via app, geofence alerts, waterproof IP67. Never lose your pet again.",
    },
    price: 1190000,
    priceUSD: 46.99,
    originalPrice: 1590000,
    images: [
      "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80",
    ],
    category: "tech",
    petType: ["dog", "cat"],
    rating: 4.9,
    reviewCount: 318,
    tags: ["premium", "gps", "safety"],
    inStock: true,
    features: {
      vi: ["Định vị realtime", "Cảnh báo geofence", "Chống nước IP67", "Pin 7-10 ngày", "App iOS/Android"],
      en: ["Real-time location", "Geofence alerts", "IP67 waterproof", "7-10 day battery", "iOS/Android app"],
    },
  },
  {
    id: "6",
    slug: "portable-pet-water-bottle",
    name: {
      vi: "Bình Nước Du Lịch Đa Năng",
      en: "Portable Multi-function Pet Water Bottle",
    },
    description: {
      vi: "Bình nước kiêm bát ăn, tiện lợi mang theo khi dạo chơi. Chống rò rỉ, dễ vệ sinh.",
      en: "Water bottle with built-in bowl. Perfect for walks and travel. Leak-proof and easy to clean.",
    },
    price: 189000,
    priceUSD: 7.49,
    images: [
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=80",
    ],
    category: "travel",
    petType: ["both"],
    rating: 4.4,
    reviewCount: 567,
    tags: ["travel", "portable"],
    inStock: true,
    features: {
      vi: ["2 trong 1 (nước + bát)", "Chống rò rỉ", "Dung tích 550ml", "Nhẹ dễ mang"],
      en: ["2-in-1 water + bowl", "Leak-proof", "550ml capacity", "Lightweight"],
    },
  },
  {
    id: "7",
    slug: "slow-feeder-bowl",
    name: {
      vi: "Bát Ăn Chậm Chống Sặc",
      en: "Anti-Choke Slow Feeder Bowl",
    },
    description: {
      vi: "Thiết kế mê cung giúp thú cưng ăn chậm hơn, giảm nguy cơ sặc và vấn đề tiêu hóa.",
      en: "Maze design slows down eating, reduces choking risk and improves digestion.",
    },
    price: 159000,
    priceUSD: 6.29,
    images: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    ],
    category: "feeder",
    petType: ["dog"],
    rating: 4.6,
    reviewCount: 723,
    tags: ["health", "feeding"],
    inStock: true,
    features: {
      vi: ["Thiết kế mê cung", "Chống trượt", "An toàn BPA-free", "Dễ vệ sinh"],
      en: ["Maze design", "Non-slip base", "BPA-free safe", "Easy to clean"],
    },
  },
  {
    id: "8",
    slug: "pet-nail-grinder",
    name: {
      vi: "Máy Mài Móng Thú Cưng",
      en: "Quiet Pet Nail Grinder",
    },
    description: {
      vi: "Máy mài móng êm ái, ít tiếng ồn, 3 tốc độ. An toàn hơn cắt móng truyền thống.",
      en: "Quiet nail grinder with 3 speeds. Safer and less stressful than traditional clippers.",
    },
    price: 299000,
    priceUSD: 11.99,
    images: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    ],
    category: "grooming",
    petType: ["both"],
    rating: 4.5,
    reviewCount: 412,
    tags: ["grooming", "quiet"],
    inStock: true,
    features: {
      vi: ["3 tốc độ", "Tiếng ồn thấp", "Sạc USB", "An toàn không cắt quá"],
      en: ["3 speed levels", "Low noise", "USB charging", "Safe no over-cutting"],
    },
  },
];

export const categories = [
  { id: "all", name: { vi: "Tất cả", en: "All" } },
  { id: "feeder", name: { vi: "Cho ăn & Uống", en: "Feeding" } },
  { id: "grooming", name: { vi: "Chăm sóc", en: "Grooming" } },
  { id: "toy", name: { vi: "Đồ chơi", en: "Toys" } },
  { id: "comfort", name: { vi: "Tiện nghi", en: "Comfort" } },
  { id: "tech", name: { vi: "Công nghệ", en: "Smart Tech" } },
  { id: "travel", name: { vi: "Du lịch", en: "Travel" } },
];
