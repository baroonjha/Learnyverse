import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
    providers : [
        GithubProvider({
            clientId: '3b5595229303c7a61286',
            clientSecret: 'fa79e56a54974545cf493744e3e35ea5c287ac64',
        }),
    ]
  })
  
  export { handler as GET, handler as POST }
