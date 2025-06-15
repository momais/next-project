import NextAuth, { type NextAuthOptions, type User, type Session, type Account } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { findUserByEmail } from '@/app/database';
import bcrypt from 'bcrypt';

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'email,public_profile'
        }
      },
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          usertype: 1, // Default usertype for social login
          emailVerified: profile.email_verified ? new Date() : null,
        };
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing credentials');
          return null;
        }

        try {
          console.log('Attempting to find user:', credentials.email);
          const user = await findUserByEmail(credentials.email as string);
          
          if (!user) {
            console.log('User not found:', credentials.email);
            return null;
          }

          console.log('User found, comparing passwords');
          const salt = user.password.substring(0, 29);
          const hashedInput = await bcrypt.hash(credentials.password as string, salt);
          
          const isValid = hashedInput === user.password;
          console.log('Password comparison result:', isValid);
          
          if (!isValid) {
            console.log('Invalid password for user:', credentials.email);
            return null;
          }

          return {
            id: user.user_id.toString(),
            name: user.username,
            email: user.email,
            usertype: user.usertype,
            emailVerified: null
          };
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, account }: { token: JWT, user?: User, account?: Account | null }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.usertype = (user as any).usertype;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }: { session: Session, token: JWT }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          usertype: token.usertype as number
        };
      }
      return session;
    }
  },
  events: {
    async signIn({ user, account }: { user: User, account?: Account | null }) {
      console.log('User signed in:', user.email, 'via', account?.provider);
    },
    async signOut() {
      console.log('User signed out');
    }
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authConfig); 