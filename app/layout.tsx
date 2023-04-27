import type {Metadata} from 'next';
import {IBM_Plex_Mono} from 'next/font/google';

import './globals.css';
import Providers from './providers';
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Dumbcars',
  description: 'These cars are dumb af!',
};

const mono = IBM_Plex_Mono({
  weight: ['200', '300', '400', '700'],
  subsets: ['latin'],
});

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html>
      <body className={`${mono.className} bg-blue-400 text-gray-100`}>
        <Providers>
          <Header />
          <main className='mt-16 min-h-screen'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
