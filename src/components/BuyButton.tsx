'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

// Check if the Stripe publishable key is configured
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
if (!stripePublishableKey) {
  console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured in environment variables')
}

const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null

export default function BuyButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      // Check if Stripe is properly configured
      if (!stripePublishableKey) {
        throw new Error(
          'Stripe is not properly configured. Please check your environment variables.'
        )
      }

      setIsLoading(true)
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (!stripe) {
        throw new Error('Stripe failed to initialize')
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Show a different button if Stripe is not configured
  if (!stripePublishableKey) {
    return (
      <button
        disabled
        className="flex justify-center items-center bg-gray-400 px-8 py-3 border border-transparent rounded-md w-full font-sans font-bold text-white cursor-not-allowed"
      >
        Stripe Not Configured
      </button>
    )
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 px-8 py-3 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full font-sans font-bold text-white cursor-pointer disabled:cursor-not-allowed"
    >
      {isLoading ? 'Loading...' : '購入 / Buy Now'}
    </button>
  )
}
