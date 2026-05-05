import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sleep Quality Habit Correlator',
  description: 'Correlate daily habits with sleep quality patterns to unlock better rest.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="041bcc1c-5505-42a8-a0b9-022eef5ee71b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
