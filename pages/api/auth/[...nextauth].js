import NextAuth from "next-auth";
//import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
//import EmailProvider from "next-auth/providers/email";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLEID,
      clientSecret: process.env.GOOGLESECRET,
      // authorizationUrl: process.env.CUSTOM_URL,
      // callbacks: {
      //   async redirect(url, baseUrl) {
      //     return "https://next-auth.js.org/";
      //   },
      // },
    }),
    {
      callbacks: {
        async redirect(url, baseUrl) {
          return "https://next-auth.js.org/";
        },
      },
    },
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
