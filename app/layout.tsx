import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar/AppSidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VerdeForma',
  description: 'Venda de vasos e decoração com suculentas',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className='h-full'>
      <body
        className={`h-full antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className='flex min-h-screen'>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <SidebarProvider>
              <div className='flex-1 flex flex-col'>
                <AppSidebar />

                <Navbar />
                <main className='flex-1'>{children}</main>
                <Footer />
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
