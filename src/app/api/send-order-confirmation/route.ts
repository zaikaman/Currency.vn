import { transporter, mailOptions } from '@/lib/mail';
import { generateOrderConfirmationEmail } from '@/lib/emailTemplate';
import { NextResponse } from 'next/server';
import { Order, Customer } from '@/types/order';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { order, customer }: { order: Order; customer: Customer } = body;

    await transporter.sendMail({
      ...mailOptions,
      to: customer.email,
      subject: 'Xác nhận đơn hàng - currency.vn',
      html: generateOrderConfirmationEmail(order, customer),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 