import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { findUserByEmail } from '@/app/database';
import bcrypt from 'bcrypt';

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET is not set in environment variables');
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('Google OAuth credentials are not set in environment variables');
}

if (!process.env.FACEBOOK_CLIENT_ID || !process.env.FACEBOOK_CLIENT_SECRET) {
  throw new Error('Facebook OAuth credentials are not set in environment variables');
}

export const authOptions: AuthOptions = {
  providers: [
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
          // Find user by email
          const user = await findUserByEmail(credentials.email);
          
          if (!user) {
            console.log('User not found:', credentials.email);
            return null;
          }

          console.log('User found, comparing passwords');
          console.log('Stored hash:', user.password);
          
          // Hash the input password with the same salt
          const salt = user.password.substring(0, 29); // Get the salt from stored hash
          const hashedInput = await bcrypt.hash(credentials.password, salt);
          console.log('Generated hash for input:', hashedInput);
          
          // Compare the hashes
          const isValid = hashedInput === user.password;
          console.log('Password comparison result:', isValid);
          
          if (!isValid) {
            console.log('Invalid password for user:', credentials.email);
            return null;
          }

          console.log('Password verified successfully');
          // Return user object without password
          return {
            id: user.user_id.toString(),
            name: user.username,
            email: user.email,
            usertype: user.usertype
          };
        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.usertype = user.usertype;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          usertype: token.usertype
        };
      }
      return session;
    }
  },
  events: {
    async signIn({ user }) {
      console.log('User signed in:', user.email);
    },
    async signOut({ token }) {
      console.log('User signed out:', token.email);
    }
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 