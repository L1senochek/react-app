import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import style from '@/styles/base/base.module.scss';
import FooterComponent from '@/components/Footer/FooterComponent';
import HeaderComponent from '@/components/Header/HeaderComponent';
import { ReduxProvider } from '@/store/ReduxProvider';
import TopSection from '@/components/TopSection/TopSection';

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
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${style['body']}`}>
        <ReduxProvider>
          <HeaderComponent />
          <TopSection />
          {children}
          {modal}
          <FooterComponent />
        </ReduxProvider>
      </body>
    </html>
  );
}
