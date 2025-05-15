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

- Display a single product for sale
- Integration with Stripe Checkout for secure payment processing
- Stripe collects shipping and billing address information
- Server-side logic for creating Stripe Checkout sessions
- Webhook endpoint for Stripe to send event notifications (e.g., payment success)
- (Planned) Email notifications for order confirmation and shipping status

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

Create a `.env.local` file in the root of your project with the following variables:

```env
# Stripe API Keys
STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_STRIPE_WEBHOOK_SECRET

# Store Domain
NEXT_PUBLIC_STORE_DOMAIN="http://localhost:3000"  # Use your Vercel domain in production

# Product Details
NEXT_PUBLIC_PRODUCT_NAME="Awesome Gadget"
NEXT_PUBLIC_PRODUCT_PRICE_ID="price_YOUR_STRIPE_PRICE_ID"
NEXT_PUBLIC_PRODUCT_IMAGE_URL="/path/to/your/product-image.jpg"
NEXT_PUBLIC_PRODUCT_DESCRIPTION="This is the most awesome gadget you will ever own!"
NEXT_PUBLIC_CURRENCY="USD"

# Email Service
EMAIL_SERVICE_API_KEY="YOUR_EMAIL_SERVICE_API_KEY"
SENDER_EMAIL_ADDRESS="your-store-email@example.com"
```

**Important Notes:**
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Keep sensitive keys (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `EMAIL_SERVICE_API_KEY`) server-side only
- Obtain your API keys from the Stripe Dashboard and your chosen email service provider
- Create a product and price in your Stripe Dashboard to get the `STRIPE_PRICE_ID`

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
│   ├── (pages)/           # Page routes
│   │   └── page.tsx       # Main product page
│   ├── api/               # API Routes
│   │   ├── stripe/
│   │   │   ├── checkout/  # Checkout session creation
│   │   │   └── webhook/   # Stripe webhook handling
│   │   └── notify-shipped/# Shipping notification endpoint
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── public/                # Static assets
├── components/            # React components
├── lib/                   # Utilities
│   ├── stripe.ts         # Stripe client
│   └── email.ts          # Email utilities
├── .env.local            # Environment variables
├── next.config.mjs       # Next.js configuration
└── package.json
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

## Key Implementation Points

### Product Page (`app/page.tsx`)
- Displays product information
- Includes "Buy Now" button

### Buy Button (`components/BuyButton.tsx`)
- Makes POST request to `/api/stripe/checkout`
- Redirects to Stripe Checkout on success

### Checkout API (`app/api/stripe/checkout/route.ts`)
- Creates Stripe Checkout session
- Configures success/cancel URLs
- Handles shipping address collection

### Webhook API (`app/api/stripe/webhook/route.ts`)
- Processes Stripe events
- Verifies webhook signatures
- Handles successful payments
- Triggers order confirmation emails

### Email Notifications
- Uses transactional email service
- Sends order confirmations
- Handles shipping notifications

## Future Development

- Integrate CMS/database for product management
- Implement order management system
- Complete email notification system
- Add analytics and tracking
- Implement inventory management