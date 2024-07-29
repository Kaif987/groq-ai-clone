import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import EmailProvider, { SendVerificationRequestParams } from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from "@repo/db/client"
import Email from "next-auth/providers/email"

// import { Client } from "postmark"
// import { env } from "@/env.mjs"
// import { siteConfig } from "@/config/site"
// import { db } from "@/lib/db"

// const postmarkClient = new Client(env.POSTMARK_API_TOKEN)

// export const authOptions: NextAuthOptions = {
//   // huh any! I know.
//   // This is a temporary fix for prisma client.
//   // @see https://github.com/prisma/prisma/issues/16117
//   adapter: PrismaAdapter(db as any),
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     GitHubProvider({
//       clientId: env.GITHUB_CLIENT_ID,
//       clientSecret: env.GITHUB_CLIENT_SECRET,
//     }),
//     EmailProvider({
//       from: env.SMTP_FROM,
//       sendVerificationRequest: async ({ identifier, url, provider }) => {
//         const user = await db.user.findUnique({
//           where: {
//             email: identifier,
//           },
//           select: {
//             emailVerified: true,
//           },
//         })

//         const templateId = user?.emailVerified
//           ? env.POSTMARK_SIGN_IN_TEMPLATE
//           : env.POSTMARK_ACTIVATION_TEMPLATE
//         if (!templateId) {
//           throw new Error("Missing template id")
//         }

//         const result = await postmarkClient.sendEmailWithTemplate({
//           TemplateId: parseInt(templateId),
//           To: identifier,
//           From: provider.from as string,
//           TemplateModel: {
//             action_url: url,
//             product_name: siteConfig.name,
//           },
//           Headers: [
//             {
//               // Set this to prevent Gmail from threading emails.
//               // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
//               Name: "X-Entity-Ref-ID",
//               Value: new Date().getTime() + "",
//             },
//           ],
//         })

//         if (result.ErrorCode) {
//           throw new Error(result.Message)
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       if (token) {
//         session.user.id = token.id
//         session.user.name = token.name
//         session.user.email = token.email
//         session.user.image = token.picture
//       }

//       return session
//     },
//     async jwt({ token, user }) {
//       const dbUser = await db.user.findFirst({
//         where: {
//           email: token.email,
//         },
//       })

//       if (!dbUser) {
//         if (user) {
//           token.id = user?.id
//         }
//         return token
//       }

//       return {
//         id: dbUser.id,
//         name: dbUser.name,
//         email: dbUser.email,
//         picture: dbUser.image,
//       }
//     },
//   },
// }
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
        //     EmailProvider({
        //         server: '',
        //         from: 'noreply@kaif-siddiqui.tech',
        //         sendVerificationRequest: async (params: SendVerificationRequestParams) => {
        //             let { identifier, url, provider } = params;
        //             try {
        //                 let resend = new Resend(process.env.RESEND_API_KEY!)
        //                 await resend.emails.send({
        //                     from: provider.from,
        //                     to: identifier,
        //                     subject: 'Your StreakUp Login Link',
        //                     html: '<html><body>\
        //                 <h2>Your Login Link</h2>\
        //                 <p>Welcome to StreakUp!</p>\
        //                 <p>Please click the magic link below to sign in to your account.</p>\
        //                 <p><a href="' + url + '"><b>Sign in</b></a></p>\
        //                 <p>or copy and paste this URL into your browser:</p>\
        //                 <p><a href="' + url + '">' + url + '</a></p>\
        //                 <br /><br /><hr />\
        //                 <p><i>This email was intended for ' + identifier + '. If you were not expecting this email, you can ignore this email.</i></p>\
        //                 </body></html>',
        //                 });
        //             } catch (error) {
        //                 console.log({ error });
        //             }
        //         },
        //     })
    ],
}