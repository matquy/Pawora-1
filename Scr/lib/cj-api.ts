/**
 * CJ Dropshipping API Integration Helper
 * ======================================
 * 
 * Hướng dẫn sử dụng:
 * 1. Lấy API Key từ CJ (xem README.md)
 * 2. Thêm vào file .env.local:
 *    CJ_API_KEY=your_api_key_here
 *    CJ_EMAIL=your_cj_email@example.com
 * 
 * 3. Uncomment và implement các function bên dưới khi có key thật.
 */

const CJ_API_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

export type CJAuthResponse = {
  code: number;
  result: boolean;
  message: string;
  data: {
    accessToken: string;
    accessTokenExpiryDate: string;
    refreshToken: string;
    refreshTokenExpiryDate: string;
  };
};

/**
 * Lấy Access Token từ CJ
 * Docs: https://developers.cjdropshipping.com/en/api/api2/api/auth.html
 */
export async function getCJAccessToken(apiKey: string, email: string): Promise<string | null> {
  try {
    const res = await fetch(`${CJ_API_BASE}/authentication/getAccessToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password: apiKey, // CJ uses API Key as password in some flows
      }),
    });

    const data: CJAuthResponse = await res.json();
    if (data.code === 200 && data.data?.accessToken) {
      return data.data.accessToken;
    }
    console.error("CJ Auth failed:", data.message);
    return null;
  } catch (error) {
    console.error("CJ Auth error:", error);
    return null;
  }
}

/**
 * Tìm sản phẩm trên CJ theo keyword
 */
export async function searchCJProducts(accessToken: string, keyword: string, page = 1) {
  try {
    const res = await fetch(`${CJ_API_BASE}/product/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CJ-Access-Token": accessToken,
      },
      body: JSON.stringify({
        keyWord: keyword,
        pageNum: page,
        pageSize: 20,
      }),
    });
    return await res.json();
  } catch (error) {
    console.error("CJ Product search error:", error);
    return null;
  }
}

/**
 * Tạo đơn hàng trên CJ
 * Khi khách đặt hàng trên website → tự động tạo order trên CJ
 */
export async function createCJOrder(
  accessToken: string,
  orderData: {
    orderNumber: string; // Mã đơn của bạn
    shippingCustomerName: string;
    shippingAddress: string;
    shippingCity: string;
    shippingCountry: string;
    shippingPhone: string;
    products: Array<{
      vid: string; // CJ variant ID
      quantity: number;
    }>;
  }
) {
  try {
    const res = await fetch(`${CJ_API_BASE}/shopping/order/createOrderV2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CJ-Access-Token": accessToken,
      },
      body: JSON.stringify(orderData),
    });
    return await res.json();
  } catch (error) {
    console.error("CJ Create Order error:", error);
    return null;
  }
}

/**
 * Tính phí vận chuyển
 */
export async function calculateCJFreight(
  accessToken: string,
  params: {
    startCountryCode: string;
    endCountryCode: string;
    products: Array<{ vid: string; quantity: number }>;
  }
) {
  try {
    const res = await fetch(`${CJ_API_BASE}/logistic/freightCalculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "CJ-Access-Token": accessToken,
      },
      body: JSON.stringify(params),
    });
    return await res.json();
  } catch (error) {
    console.error("CJ Freight calculate error:", error);
    return null;
  }
}

/**
 * Ví dụ flow hoàn chỉnh khi có đơn hàng:
 * 
 * 1. Khách checkout trên website
 * 2. Backend gọi getCJAccessToken()
 * 3. Map product.id của bạn → CJ vid (lưu trong database)
 * 4. Gọi createCJOrder() với thông tin giao hàng
 * 5. Lưu CJ orderId vào database của bạn
 * 6. Theo dõi tracking bằng API logistic/trackInfo
 */
