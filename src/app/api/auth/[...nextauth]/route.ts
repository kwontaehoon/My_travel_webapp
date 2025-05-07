// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };