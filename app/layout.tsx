import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SVU Developers Pvt Ltd | Arbitration & Legal Assistance',
  description: 'Arbitration services and free initial legal guidance for land, property and real estate matters.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
