import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Libre_Baskerville as LibreBaskerville } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import GalleriaContextProvider from '@/context/GalleriaContextProvider';

const libreBaskerbville = LibreBaskerville({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Galleria Slideshow Site',
  description:
    'Explore a curated collection of timeless art from renowned and emerging artists. Our gallery offers a captivating visual journey through diverse styles and eras, with detailed insights into each piece. Experience art in a whole new way.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerbville.className}`}>
        <GalleriaContextProvider>
          <Navbar />
          {children}
        </GalleriaContextProvider>
      </body>
    </html>
  );
}
