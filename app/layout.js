import './globals.css'
import {Inter} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}




export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body style={{ background: 'linear-gradient(180deg, #232121 0%, rgba(104, 104, 104, 0.59375) 99.99%, rgba(255, 255, 255, 0) 100%)'}}>
        {children}
        </body>
        </html>
    );
}


