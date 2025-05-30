import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Takashi Yamamura Official Store',
  description: 'Official merchandise store for Takashi Yamamura',
}

// This layout only renders when no locale is matched
// The middleware will handle redirecting to the default locale
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
