# Single Product E-Commerce Site with Next.js & Stripe

This project is a single-page e-commerce application built with Next.js, TypeScript, and Stripe for handling payments and address collection. It's designed to showcase and sell a single real-world item.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Style:** [Tailwind](https://tailwindcss.com/)
- **Payment Processing:** [Stripe](https://stripe.com/)
- **Runtime/Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** [Vercel](https://vercel.com/)

## Features

- ✅ Display a single product for sale
- ✅ Integration with Stripe Checkout for secure payment processing
- ✅ Stripe collects shipping and billing address information
- ✅ Server-side logic for creating Stripe Checkout sessions
- ✅ Webhook endpoint for Stripe to send event notifications (e.g., payment success)
- ✅ Email notifications for order confirmation using Resend
- ✅ Success page with order confirmation
- ✅ Multi-currency support
- ✅ International shipping to 10+ countries
- ✅ Comprehensive error handling and logging

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Bun](https://bun.sh/docs/installation) (for local development)
- A [Stripe Account](https://dashboard.stripe.com/register)
- [Vercel Account](https://vercel.com/signup) (for deployment)
- An account with a transactional email service provider (e.g., SendGrid, Postmark, Resend)

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

### 2. Install Dependencies

Using Bun:
```bash
bun install
```

Or if you prefer npm/yarn:
```bash
# npm install
# yarn install
```

### 3. Set Up Environment Variables

Copy the example environment file and fill in your values:

```bash
cp env.example .env.local
```

Then edit `.env.local` with your actual API keys and configuration. See the `env.example` file for detailed comments on where to get each value.

### 4. Stripe Setup

#### Create a Product and Price
1. Go to your Stripe Dashboard
2. Navigate to "Products" → "Add product"
3. Fill in the product details (name, description, image)
4. Add a price for the product (ensure currency matches `.env.local`)
5. Copy the Price ID (starts with `price_`) to `NEXT_PUBLIC_PRODUCT_PRICE_ID`

#### Webhook Endpoint
1. Create an API route in Next.js (`/api/stripe/webhook`)
2. In Stripe Dashboard, go to "Developers" → "Webhooks"
3. Click "Add endpoint"
4. For local testing:
   - Use Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
   - This provides a webhook signing secret
5. For production:
   - Endpoint URL: `https://your-deployed-app-url.vercel.app/api/stripe/webhook`
   - Select events (e.g., `checkout.session.completed`, `payment_intent.succeeded`)
   - Copy the Signing secret to `STRIPE_WEBHOOK_SECRET`

### 5. Run the Development Server

```bash
bun dev
```

Open http://localhost:3000 to see the result.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── success/           # Success page after payment
│   ├── shipping-policy/   # Shipping policy page
│   ├── terms-of-service/  # Terms of service page
│   ├── privacy-policy/    # Privacy policy page
│   ├── api/               # API Routes
│   │   └── stripe/
│   │       ├── checkout/  # Checkout session creation
│   │       └── webhook/   # Stripe webhook handling
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Main product page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   └── BuyButton.tsx # Purchase button component
│   └── lib/              # Utilities
│       ├── stripe.ts     # Stripe client configuration
│       └── email.ts      # Email utilities (Resend)
├── public/               # Static assets
│   └── item1.jpg        # Product image
├── env.example          # Environment variables template
├── .env.local           # Environment variables (create from example)
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Building and Deployment

### Production Build

```bash
bun run build
```

This creates an optimized production build in the `.next` folder.

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your project into Vercel
3. Configure Environment Variables in Vercel project settings
4. Vercel will automatically build and deploy your application
5. Update your Stripe webhook endpoint URL in the Stripe Dashboard

## Testing and Debugging

### Local Development Testing

1. **Start the development server:**
   ```bash
   bun dev
   ```

2. **Set up Stripe webhook forwarding:**
   ```bash
   # Install Stripe CLI if you haven't already
   # https://stripe.com/docs/stripe-cli
   
   # Forward webhooks to your local server
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   
   Copy the webhook signing secret from the CLI output and add it to your `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_1234567890abcdef...
   ```

3. **Test the complete purchase flow:**
   - Visit `http://localhost:3000`
   - Click "Buy Now" button
   - Use Stripe test card numbers:
     - **Success:** `4242 4242 4242 4242`
     - **Decline:** `4000 0000 0000 0002`
     - **3D Secure:** `4000 0025 0000 3155`
   - Fill in test shipping information
   - Complete the purchase
   - Verify redirect to success page
   - Check console logs for webhook events
   - Verify email was sent (check Resend dashboard)

### Stripe Test Cards

| Card Number | Description | Expected Result |
|-------------|-------------|-----------------|
| `4242 4242 4242 4242` | Visa | Payment succeeds |
| `4000 0000 0000 0002` | Visa | Payment declined |
| `4000 0025 0000 3155` | Visa | Requires 3D Secure |
| `5555 5555 5555 4444` | Mastercard | Payment succeeds |
| `4000 0000 0000 9995` | Visa | Insufficient funds |

**For all test cards:**
- Use any future expiry date (e.g., `12/34`)
- Use any 3-digit CVC (e.g., `123`)
- Use any postal code

### Debugging Stripe Issues

#### 1. Check Stripe Dashboard
- **Payments:** View all payment attempts and their status
- **Webhooks:** See webhook delivery attempts and responses
- **Logs:** Review API request logs
- **Events:** Monitor all Stripe events in real-time

#### 2. Application Logs
Monitor your application logs for:
```bash
# Webhook events
Received Stripe webhook: checkout.session.completed
Processing completed checkout session: cs_1234567890

# Email notifications
Order confirmation email sent to: customer@example.com

# Errors
Error processing webhook: [error details]
```

#### 3. Common Issues and Solutions

**Issue: Webhook not receiving events**
```bash
# Check if webhook endpoint is accessible
curl -X POST http://localhost:3000/api/stripe/webhook

# Verify webhook secret matches
echo $STRIPE_WEBHOOK_SECRET
```

**Issue: Payment not completing**
- Check Stripe Dashboard for payment status
- Verify `NEXT_PUBLIC_PRODUCT_PRICE_ID` is correct
- Ensure product is active in Stripe

**Issue: Email not sending**
- Check Resend dashboard for delivery status
- Verify `RESEND_API_KEY` and `SENDER_EMAIL_ADDRESS`
- Check application logs for email errors

**Issue: Success page not loading**
- Verify `NEXT_PUBLIC_STORE_DOMAIN` is correct
- Check browser network tab for redirect issues

#### 4. Webhook Testing with Stripe CLI

```bash
# Test specific webhook events
stripe trigger checkout.session.completed

# Test with custom data
stripe trigger payment_intent.succeeded --add payment_intent:amount=2000

# Forward to different endpoint
stripe listen --forward-to localhost:3000/api/stripe/webhook --events checkout.session.completed
```

#### 5. Production Debugging

**Webhook Endpoint Setup:**
1. Deploy your app to Vercel/production
2. Add webhook endpoint in Stripe Dashboard:
   ```
   https://your-domain.vercel.app/api/stripe/webhook
   ```
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`
4. Copy webhook signing secret to production environment variables

**Environment Variables Checklist:**
- [ ] All `STRIPE_*` variables set
- [ ] `NEXT_PUBLIC_STORE_DOMAIN` points to production URL
- [ ] `RESEND_API_KEY` configured
- [ ] `SENDER_EMAIL_ADDRESS` verified in Resend

**Monitoring:**
- Check Vercel function logs
- Monitor Stripe webhook delivery status
- Set up error tracking (Sentry, LogRocket, etc.)

### Performance Testing

Test with different scenarios:
- Multiple rapid purchases
- International addresses
- Different currencies (if supported)
- Mobile devices
- Slow network connections

### Security Checklist

- [ ] Webhook signature verification enabled
- [ ] Sensitive keys not exposed to client
- [ ] HTTPS enabled in production
- [ ] Rate limiting implemented (if needed)
- [ ] Input validation on all forms

## Key Implementation Points

### Product Page (`app/page.tsx`)
- ✅ Displays product information with beautiful animations
- ✅ Includes "Buy Now" button with loading states
- ✅ Responsive design for all devices

### Buy Button (`src/components/BuyButton.tsx`)
- ✅ Makes POST request to `/api/stripe/checkout`
- ✅ Redirects to Stripe Checkout on success
- ✅ Handles loading states and errors

### Checkout API (`src/app/api/stripe/checkout/route.ts`)
- ✅ Creates Stripe Checkout session
- ✅ Configures success/cancel URLs
- ✅ Handles shipping address collection
- ✅ Supports multiple currencies
- ✅ International shipping options

### Webhook API (`src/app/api/stripe/webhook/route.ts`)
- ✅ Processes Stripe events securely
- ✅ Verifies webhook signatures
- ✅ Handles successful payments
- ✅ Triggers order confirmation emails
- ✅ Comprehensive logging for debugging

### Success Page (`src/app/success/page.tsx`)
- ✅ Beautiful confirmation page
- ✅ Order status indicators
- ✅ Return to store functionality

### Email Notifications (`src/lib/email.ts`)
- ✅ Uses Resend for reliable delivery
- ✅ Order confirmation emails
- ✅ Professional email templates
- ✅ Error handling and logging

## Future Development

- Integrate CMS/database for product management
- Implement order management system
- Complete email notification system
- Add analytics and tracking
- Implement inventory management