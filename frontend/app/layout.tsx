import './globals.css'

export const metadata = {
  title: 'Stripe Payment',
  description: 'Stripe payment integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}