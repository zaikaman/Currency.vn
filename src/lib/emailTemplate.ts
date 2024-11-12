import { Order, Customer } from '@/types/order';

export const generateOrderConfirmationEmail = (order: Order, customer: Customer) => {
  const orderItems = order.items.map(item => `
    <div class="item">
      <span>${item.title} x ${item.quantity}: ${(item.price * item.quantity).toLocaleString('vi-VN')}đ</span>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: 'Helvetica', Arial, sans-serif;
          line-height: 1.6;
          color: #2A2A2A;
          margin: 0;
          padding: 0;
          background-color: #F5F5F5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #FFFFFF;
          border: 1px solid #E5E5E5;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 2px solid #E5E5E5;
          padding-bottom: 20px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #2A2A2A;
          letter-spacing: 2px;
        }
        .divider {
          border-top: 1px solid #E5E5E5;
          margin: 30px 0;
        }
        .section {
          margin-bottom: 30px;
          padding: 20px;
          background-color: #FAFAFA;
          border: 1px solid #E5E5E5;
        }
        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #2A2A2A;
          border-bottom: 1px solid #E5E5E5;
          padding-bottom: 10px;
          letter-spacing: 1px;
        }
        .item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 10px 0;
          border-bottom: 1px dashed #E5E5E5;
        }
        .total {
          font-size: 18px;
          font-weight: bold;
          text-align: right;
          margin-top: 20px;
          padding: 15px;
          background-color: #2A2A2A;
          color: #FFFFFF;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #E5E5E5;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #2A2A2A;
          color: #FFFFFF !important;
          text-decoration: none;
          margin-top: 20px;
          letter-spacing: 1px;
          font-weight: 500;
        }
        .shipping-info {
          margin: 5px 0;
          color: #666;
        }
        .note {
          font-style: italic;
          color: #666;
          margin-top: 15px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">CURRENCY.VN</div>
          <p style="color: #666; margin-top: 10px; font-style: italic;">Đồ Da Tối Giản</p>
        </div>

        <p>Xin chào ${customer.fullName},</p>
        <p>Cảm ơn bạn đã đặt hàng tại currency.vn. Dưới đây là chi tiết đơn hàng của bạn:</p>

        <div class="section">
          <div class="section-title">CHI TIẾT ĐƠN HÀNG</div>
          ${orderItems}
          
          <div class="item">
            <span>Phí vận chuyển: Miễn phí</span>
          </div>
          
          <div class="total">
            Tổng cộng: ${order.total.toLocaleString('vi-VN')}đ
          </div>
        </div>

        <div class="section">
          <div class="section-title">THÔNG TIN GIAO HÀNG</div>
          <div class="shipping-info">Địa chỉ: ${customer.address}</div>
          <div class="shipping-info">Thành phố: ${customer.city}</div>
          <div class="shipping-info">Số điện thoại: ${customer.phone}</div>
          ${customer.note ? `<div class="note">Ghi chú: ${customer.note}</div>` : ''}
        </div>

        <p style="text-align: center; font-style: italic; color: #666;">
          Chúng tôi sẽ sớm liên hệ với bạn để xác nhận đơn hàng.
        </p>
        
        <div style="text-align: center;">
          <a href="https://currency.vn/products" class="button">
            TIẾP TỤC MUA SẮM
          </a>
        </div>

        <div class="footer">
          <p><strong>currency.vn - Đồ Da Tối Giản</strong></p>
          <p>123 Đường ABC, Quận XYZ, TP.HCM</p>
          <p>Email: hello@currency.vn | Điện thoại: 0123 456 789</p>
        </div>
      </div>
    </body>
    </html>
  `;
}; 