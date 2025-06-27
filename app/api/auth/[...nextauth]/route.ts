import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmail } from '@/app/database';
import bcrypt from 'bcrypt';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'email,public_profile',
        },
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await findUserByEmail(credentials.email);
        if (!user) {
          return null;
        }
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }
        return {
          id: user.user_id.toString(),
          email: user.email,
          name: user.username,
          usertype: user.usertype,
        };
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.usertype = user.usertype;
      }
      if (!token.id && token.email) {
        try {
          const dbUser = await findUserByEmail(token.email);
          if (dbUser) {
            token.id = dbUser.user_id.toString();
            token.name = dbUser.username;
            token.email = dbUser.email;
            token.usertype = dbUser.usertype;
          }
        } catch (e) {
          // Optionally log error
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.usertype = token.usertype;
      }
      return session;
    }
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 