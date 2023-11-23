import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import style from '../styles/base/base.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anime catalog',
  description:
    'This is an anime catalog app. Here you can find any anime to your taste, with detailed descriptions and ratings.',
  keywords:
    'anime, catalog-anime, anime-catalog, anime-detailed-descriptions, anime-ratings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${style['body']}`}>{children}</body>
    </html>
  );
}
