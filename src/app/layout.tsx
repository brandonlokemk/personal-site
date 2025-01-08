// File: app/layout.tsx (Root Layout)
import Link from 'next/link'
import './globals.css';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        <header className="p-4 bg-gray-800 text-white text-center">
          <h1 className="text-3xl font-bold">Brandon Loke</h1>
          <nav className="mt-2">
            <a href="/" className="mx-2 hover:underline">Home</a>
            <a href="/projects" className="mx-2 hover:underline">Projects</a>
            <a href="/about" className="mx-2 hover:underline">About Me</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          <p><a href="/Brandon_Resume.pdf " download="Resume.pdf" className="mx-2 hover:underline">Download resume</a></p>
        </footer>
      </body>
    </html>
  );
}