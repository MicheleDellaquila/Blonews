import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUser } from '../../../utility/httpRequests';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const response = await loginUser(credentials);
          return { user: response.data.user, token: response.data.token };
        } catch (e) {
          return e;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session = { ...token.user, token: token.token };
      return session;
    },
  },
  pages: {
    accedi: '/accedi',
  },
});
