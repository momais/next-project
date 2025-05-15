import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "@/app/database/config";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        isRegister: { label: "Register", type: "hidden" }, // custom flag
      },
      async authorize(credentials) {
        const { email, username, password, isRegister } = credentials;

        if (isRegister === "true") {
          // Registration flow
          const [existing] = await pool.query(
            "SELECT * FROM cashbackengine_users WHERE email = ? OR username = ?",
            [email, username]
          );
          if (existing.length > 0) {
            throw new Error("Username or email already exists");
          }

          const hashedPassword = await bcrypt.hash(password, 10);
          await pool.query(
            "INSERT INTO cashbackengine_users (username, email, password, usertype) VALUES (?, ?, ?, 3)",
            [username, email, hashedPassword]
          );

          const [newUser] = await pool.query("SELECT * FROM cashbackengine_users WHERE email = ?", [email]);
          return newUser[0];
        } else {
          // Login flow
          const [users] = await pool.query("SELECT * FROM cashbackengine_users WHERE email = ? AND usertype = 3", [email]);
          const user = users[0];

          if (!user) throw new Error("User not found");

          const match = await bcrypt.compare(password, user.password);
          if (!match) throw new Error("Invalid password");

          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
});
export { handler as GET, handler as POST };
