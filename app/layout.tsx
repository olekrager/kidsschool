import './globals.css'

export const metadata = {
  title: 'Мультяшная школа русского языка',
  description: 'Современная cartoon-школа для детей и подростков.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}