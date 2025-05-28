import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { sendOrderConfirmationEmail } from '@/lib/email'
import Stripe from 'stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    console.error('Missing stripe-signature header')
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('Missing STRIPE_WEBHOOK_SECRET environment variable')
    return NextResponse.json({ error: 'Missing STRIPE_WEBHOOK_SECRET' }, { status: 500 })
  }

  try {
    const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET)

    console.log(`Received Stripe webhook: ${event.type}`)

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        console.log(`Processing completed checkout session: ${session.id}`)

        if (!session.customer_details?.email) {
          console.error('Customer email not found in session:', session.id)
          throw new Error('Customer email not found in session')
        }

        // Send order confirmation email
        try {
          await sendOrderConfirmationEmail(session.customer_details.email, {
            productName: process.env.NEXT_PUBLIC_PRODUCT_NAME || 'Your Product',
            orderId: session.id,
            amount: (session.amount_total || 0) / 100, // Convert from cents to dollars
            currency: (session.currency || 'USD').toUpperCase(),
          })
          console.log(`Order confirmation email sent to: ${session.customer_details.email}`)
        } catch (emailError) {
          console.error('Failed to send order confirmation email:', emailError)
          // Don't fail the webhook if email fails - log and continue
        }
        break

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log(`Payment succeeded: ${paymentIntent.id}`)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log(`Payment failed: ${failedPayment.id}`)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
}
