import './globals.css';

export const metadata = {
  title: 'Anta Scaffolding — solution landing',
  description: 'Engineering-grade scaffold systems with global logistics, safety monitoring, and field support. Available in English, Vietnamese, and Chinese.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-soft-gray text-dark-blue">
        <div className="min-h-screen bg-gradient-to-b from-white via-soft-gray to-white">
          {children}
        </div>
      </body>
    </html>
  );
}
