// lib/email.ts
import { Resend } from "resend";

// 「本番値で上書きされるまで」のフォールバック
const DUMMY_RESEND_KEY   = "re_dummy_key";
const DUMMY_SENDER_EMAIL = "noreply@example.com";

/**
 * 実際にメール送信を行う関数。
 * ダミー設定のまま呼ばれた場合は 501 を投げて終了します。
 */
export async function sendOrderConfirmationEmail(
  customerEmail: string,
  orderDetails: {
    productName: string;
    orderId: string;
    amount: number;
    currency: string;
  }
) {
  const resendKey = process.env.RESEND_API_KEY ?? DUMMY_RESEND_KEY;
  const sender    = process.env.SENDER_EMAIL_ADDRESS ?? DUMMY_SENDER_EMAIL;

  // ① 本番キーが未設定なら 501 Not Implemented を返すだけ
  if (
    resendKey === DUMMY_RESEND_KEY ||
    sender    === DUMMY_SENDER_EMAIL
  ) {
    throw new Response(
      JSON.stringify({ message: "Email service not configured." }),
      { status: 501, headers: { "Content-Type": "application/json" } }
    );
  }

  // ② ここから本来の処理
  const resend = new Resend(resendKey);

  const { data, error } = await resend.emails.send({
    from: sender,
    to: customerEmail,
    subject: `Order Confirmation - ${orderDetails.productName}`,
    html: `
      <h1>Thank you for your order!</h1>
      <p>Your order details:</p>
      <ul>
        <li>Product: ${orderDetails.productName}</li>
        <li>Order ID: ${orderDetails.orderId}</li>
        <li>Amount: ${orderDetails.amount} ${orderDetails.currency}</li>
      </ul>
      <p>We'll notify you when your order ships.</p>
    `,
  });

  if (error) {
    console.error("Error sending email:", error);
    throw error;
  }

  return data;
}
