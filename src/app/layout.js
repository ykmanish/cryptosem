import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EduERP - School & College Management Platform',
  description: 'Complete ERP solution for educational institutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="newq">
       
          {children}
      
        
      </body>
    </html>
  )
}