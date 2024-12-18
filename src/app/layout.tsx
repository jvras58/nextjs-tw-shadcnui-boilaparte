import type { Metadata } from 'next';

import NextAuthSessionProvider from 'providers/sessionProvider';
import 'styles/globals.css';
import { ThemeProvider } from 'components/theme-provider';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'A simple boilerplate for next.js',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
