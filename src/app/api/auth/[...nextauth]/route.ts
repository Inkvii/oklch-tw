import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Custom provider",
      credentials: {
        username: { type: "text", label: "Username", placeholder: "User" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials): Promise<User | null> {
        // TODO LVE: Fill in authorization
        return { name: credentials?.username ?? "ASD", email: "some@user.com", id: "1233" }
      },
    }),
  ],
}
export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
