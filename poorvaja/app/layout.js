import './globals.css'
import Nav from './components/nav'
import InfiniteGalaxy from './components/infinite-galaxy'

export const metadata = {
  title: 'Poorvaja Sathasivam',
  description: 'Software Developer',
}

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon_io/favicon.ico" sizes="any" />
      </head>
      <body className="text-white min-h-screen bg-black">
        <InfiniteGalaxy />
        <Nav />
        {children}
      </body>
    </html>
  )
}


