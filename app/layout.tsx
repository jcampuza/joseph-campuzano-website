import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="min-h-screen bg-white dark:bg-slate-900 dark:text-neutral-100 transition-colors duration-200 ease-out">
        {children}
      </body>
    </html>
  );
}
