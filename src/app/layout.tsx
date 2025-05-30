import type { Metadata } from 'next'
import './[locale]/globals.css'

export const metadata: Metadata = {
  title: 'TH オフィシャルストア',
  description: 'Official merchandise store for Taichi Hayashi',
}

// This layout only renders when no locale is matched
// The middleware will handle redirecting to the default locale
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
