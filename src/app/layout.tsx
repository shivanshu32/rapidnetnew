import './globals.css'
import "../style/index.scss"
import AppProvider from '@/contextApi/AppProvider'
import ReduxProvider from '@/redux/provider'
import { ToastContainer } from 'react-toastify'

export const metadata = {
  title: 'Rapidnet - The Next-Gen Broadband ',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </head>

        <body>
          <ReduxProvider>

            <AppProvider>
              {children}
            </AppProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  )
}