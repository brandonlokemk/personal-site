// File: app/layout.tsx (Root Layout)
import './globals.css';
import { ReactNode } from 'react';
// Font
import { Raleway } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
const raleway = Raleway({ weight: ['300'], subsets: ['latin'] });
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className='scroll-smooth' suppressHydrationWarning>
        <body className={raleway.className}>
            <ThemeProvider attribute="class" defaultTheme='dark' enableSystem disableTransitionOnChange>
                <main>{children}</main>
            </ThemeProvider>
        </body>
    </html>
  );
}