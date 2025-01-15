// File: app/layout.tsx (Root Layout)
import Link from 'next/link'
import './globals.css';
import { ReactNode } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
// Font
import { Raleway } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
const raleway = Raleway({ weight: ['300'], subsets: ['latin'] })


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <div className={raleway.className}>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem disableTransitionOnChange>
          <body className="min-h-screen bg-gray-100 text-gray-800">
              <header className="flex flex-row items-center p-4 bg-gray-700 text-white">
                <div className='flex items-center justify-between'>
                  <h1 className="text-3xl font-bold text-center">Brandon Loke</h1>
                  
                </div>
                <div className='flex ml-auto'>
                  <nav className="ml-auto align-middle">
                      <Link href="/" className="mx-2 hover:underline align-text-top">Home</Link>
                      <Link href="/projects" className="mx-2 hover:underline align-text-top">Projects</Link>
                      <Link href="/about" className="mx-2 hover:underline align-text-top">About Me</Link>
                  </nav>
                  <div className='pl-4 '>
                    <ThemeToggle/>
                  </div>
                </div>                
              </header>
              {/* <main className={open_sans.className}>{children}</main> */}
              <main>{children}</main>

              <footer className="p-4 bg-gray-700 text-white text-center flex flex-row justify-center ">
                <p><a href="Brandon_Resume.pdf " download="Resume.pdf" className="mx-2 hover:underline">Download resume</a></p>
              </footer>
            
          </body>
        </ThemeProvider>
      </div>
    </html>
  );
}