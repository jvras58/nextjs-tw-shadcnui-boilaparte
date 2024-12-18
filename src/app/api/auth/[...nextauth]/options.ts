import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials, req) {
        // usuario Mockado exemplo
        const mockUser = {
          id: '1',
          name: 'mockuser',
          email: 'mockuser@example.com',
          username: credentials?.username
        };

        if (credentials?.username === 'mockuser' && credentials?.password === 'mockpassword') {
          return mockUser;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    }
  }
};