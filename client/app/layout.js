import './globals.css'
import Header from './_components/header'
import Footer from './_components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Header />
        <div className='bg-gray-200'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
