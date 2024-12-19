import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from 'lib/prisma';
import { compare } from 'bcryptjs';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        console.log('Credenciais recebidas:', credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log('Credenciais inválidas');
          return null;
        }

        // Verifica se o usuário existe no banco de dados
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        console.info('Usuário encontrado:', user);

        if (!user) {
          console.info('Usuário não encontrado');
          return null;
        }

        // Verifica se a senha está correta
        const isValidPassword = await compare(credentials.password, user.password);

        if (!isValidPassword) {
          console.info('Senha inválida');
          return null;
        }

        return {
          id: String(user.id),
          name: user.nome,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
};