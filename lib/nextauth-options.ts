import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import {
    getUserByEmail,
    signInWithCredentials,
    signInWithOauth,
} from "./actions/auth.actions";

export const nextauthOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: "/signin",
        // error: "/error",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", required: true },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                const result = await signInWithCredentials({
                    email: credentials.email,
                    password: credentials.password,
                });

                if (!result.success || !result.data?.id) {
                    throw new Error(result.error || "Invalid credentials");
                }

                return {
                    id: result.data.id,
                    name: result.data.name || null,
                    email: result.data.email || null,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.type === "oauth" && profile) {
                const result = await signInWithOauth({ account, profile });
                if (!result.success) {
                    // Redirect to sign-in page with error message
                    return `/signin?error=${encodeURIComponent(result.error || "OAuth authentication failed")}`;
                }
            }
            return true;
        },
        async jwt({ token, trigger, session }) {
            if (trigger === "update" && session) {
                // Handle updates from the session
                return { ...token, ...session };
            }

            if (token.email) {
                const user = await getUserByEmail(token.email);
                if (user) {
                    token.id = user._id;
                    token.name = user.name;
                    token.email = user.email;
                    token.provider = user.provider;
                    token.image = user.image;
                }
            }
            
            return token;
        },
        async session({ token, session }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.provider = token.provider as string;
                session.user.image = token.image as string;
            }
            return session;
        },
    },
};
