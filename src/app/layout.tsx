import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pegrio App',
  description: 'A custom application built for business needs.',
  openGraph: {
    title: 'Pegrio App',
    description: 'A custom application built for business needs.',
    url: 'https://yourdomain.com',
    siteName: 'Pegrio App',
    images: [
      {
        url: 'https://yourdomain.com/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}