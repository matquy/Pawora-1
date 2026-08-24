# Pawora – Smart Pet Care Dropshipping Store

Cửa hàng dropshipping phụ kiện thú cưng thông minh hoàn chỉnh, sẵn sàng kết nối CJ Dropshipping API.

**Ngách:** Smart Pet Care & Lifestyle  
**Thương hiệu:** Pawora  
**Thị trường:** Việt Nam + Quốc tế  

---

## 1. Tính năng đã có

- Trang chủ đẹp, hiện đại (Hero, Bestsellers, Trust badges)
- Danh sách sản phẩm + lọc theo danh mục + sắp xếp
- Trang chi tiết sản phẩm
- Giỏ hàng (Zustand + localStorage)
- Checkout form (COD / chuyển khoản / ví điện tử)
- Responsive mobile-first
- Hỗ trợ sẵn cấu trúc tiếng Việt + tiếng Anh
- File `src/lib/cj-api.ts` sẵn sàng tích hợp CJ API

---

## 2. Cài đặt & Chạy local

```bash
# 1. Vào thư mục project
cd pawora

# 2. Cài dependencies
npm install

# 3. Chạy development server
npm run dev
```

Mở trình duyệt: [http://localhost:3000](http://localhost:3000)

---

## 3. Deploy lên Vercel (miễn phí & cực nhanh)

1. Đẩy code lên GitHub (tạo repo mới → push)
2. Vào [vercel.com](https://vercel.com) → Import project từ GitHub
3. Bấm Deploy → xong trong 1-2 phút
4. Gắn domain riêng (tùy chọn)

---

## 4. Hướng dẫn tạo tài khoản CJ Dropshipping + lấy API Key

### Bước 1: Đăng ký
1. Vào https://cjdropshipping.com
2. Bấm **Register**
3. Đăng ký bằng email (hoặc Google)
4. Điền thông tin cơ bản → Confirm

### Bước 2: Cài App API
1. Đăng nhập → **My CJ**
2. Bên trái: **Apps** → **Install App**
3. Tìm **API** → Install

### Bước 3: Tạo API Key
1. Vào **Authorization** → **API**
2. Bấm **Add API**
3. Điền tên (ví dụ: `Pawora-Store`)
4. Type chọn **API Key**
5. Confirm → **Copy API Key** (lưu ngay, chỉ hiện 1 lần)

### Bước 4: Thêm vào project
Tạo file `.env.local` ở root:

```env
CJ_API_KEY=your_api_key_here
CJ_EMAIL=your_cj_registered_email@example.com
```

---

## 5. Cách kết nối API (sau khi có Key)

File hỗ trợ đã có sẵn: `src/lib/cj-api.ts`

**Flow khuyến nghị khi có đơn hàng thật:**

1. Khách đặt hàng trên website
2. Backend lấy Access Token từ CJ (`getCJAccessToken`)
3. Map product của bạn → CJ Variant ID (vid)
4. Gọi `createCJOrder()` với thông tin giao hàng của khách
5. CJ xử lý fulfillment & gửi tracking
6. Bạn cập nhật trạng thái đơn trên website

**Tài liệu chính thức CJ API v2.0:**  
https://developers.cjdropshipping.com/en/api/api2/

Các endpoint quan trọng:
- Authentication → lấy token
- Product → list / query / stock
- Order → createOrderV2
- Logistic → freightCalculate + trackInfo

---

## 6. Các bước tiếp theo khuyến nghị

| Ưu tiên | Việc cần làm | Ghi chú |
|---------|--------------|--------|
| 1 | Deploy lên Vercel | Miễn phí |
| 2 | Tạo tài khoản CJ + lấy API Key | Làm ngay |
| 3 | Thay mock products bằng sản phẩm thật từ CJ | Dùng API search |
| 4 | Thêm thanh toán Stripe / VNPay / MoMo | Quan trọng để nhận tiền |
| 5 | Thêm trang Admin (Next.js + Supabase) | Quản lý đơn |
| 6 | SEO + Google Analytics | Tăng traffic |
| 7 | Chạy quảng cáo TikTok / Facebook | Bắt đầu bán |

---

## 7. Cấu trúc thư mục

```
pawora/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── page.tsx         # Trang chủ
│   │   ├── products/        # Danh sách + chi tiết
│   │   ├── cart/
│   │   └── checkout/
│   ├── components/          # Header, Footer, ProductCard...
│   ├── data/products.ts     # Mock data (thay bằng CJ sau)
│   ├── lib/
│   │   ├── utils.ts
│   │   └── cj-api.ts        # CJ integration helpers
│   └── store/cart.ts        # Zustand cart
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 8. Lưu ý quan trọng

- Website hiện dùng **mock data**. Khi có API Key, bạn thay `src/data/products.ts` bằng dữ liệu thật từ CJ.
- Phần tạo đơn trên CJ chưa gọi API thật (để tránh lỗi khi chưa có key). Khi sẵn sàng, mở file `checkout/page.tsx` và gọi hàm trong `cj-api.ts`.
- Thanh toán online (Stripe/VNPay) cần thêm ở giai đoạn sau.
- Luật Việt Nam: khi doanh thu đạt mức quy định cần đăng ký hộ kinh doanh / công ty và xuất hóa đơn.

---

**Chúc bạn bán hàng thành công với Pawora!**  

Nếu cần mình hỗ trợ tiếp (thêm thanh toán, admin panel, tích hợp API thật, thiết kế logo…), cứ nhắn tiếp.
