import ToasterProvider from '@/components/ToastProvider/ToasterProvider';
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/NavigationBar/Navbar';
import getCurrentUser from '@/lib/getCurrentUser';
import Providers from '@/lib/SessionProvider';
import Chatbot from '@/components/Chatbot';

export const metadata: Metadata = {
  title: 'Farm Smart',
  icons: {
    icon: '/logo.png'
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <Providers>
      <html lang="en">
        <body>
          <ToasterProvider />
          <Navbar currentUser={user} />
          {children}
          <div className='fixed bottom-4 right-4'>
            <Chatbot />
          </div>
        </body>
      </html>
    </Providers>
  )
}
