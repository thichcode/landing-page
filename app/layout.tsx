import Script from 'next/script';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-000000000';

export const metadata = {
  title: 'Anta Scaffolding — solution landing',
  description: 'Engineering-grade scaffold systems with global logistics, safety monitoring, and field support. Available in English, Vietnamese, and Chinese.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { send_page_view: true });`}
        </Script>
      </head>
      <body className="bg-soft-gray text-dark-blue">
        <div className="min-h-screen bg-gradient-to-b from-white via-soft-gray to-white">
          {children}
        </div>
      </body>
    </html>
  );
}
