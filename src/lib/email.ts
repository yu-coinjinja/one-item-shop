import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment variables");
}

if (!process.env.SENDER_EMAIL_ADDRESS) {
  throw new Error("SENDER_EMAIL_ADDRESS is not set in environment variables");
}

export const resend = new Resend(process.env.RESEND_API_KEY);
const senderEmail = process.env.SENDER_EMAIL_ADDRESS as string;

export async function sendOrderConfirmationEmail(
  customerEmail: string,
  orderDetails: {
    productName: string;
    orderId: string;
    amount: number;
    currency: string;
  }
) {
  try {
    const { data, error } = await resend.emails.send({
      from: senderEmail,
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
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
    throw error;
  }
}
