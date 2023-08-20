import NextAuth from "next-auth"
import {prisma} from '../../../db';
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
        name: "credentials",
        credentials: {
            email: { label: "Email", type: "text", placeholder: "joseph"},
            password: {label: "Password", type: "password"},
            username: {label: "Username", type: "text", placeholder: "Joseph Ashwin"}
        },
        async authorize(credentials) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
          return user;
        }
    }),
  ],
  debug: process.env.NODE_ENV === 'development'
}; 

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}