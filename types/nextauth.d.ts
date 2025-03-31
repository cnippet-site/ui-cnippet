import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            password?: string | null;
            image?: string | null;
        };
    }

    interface User {
        id: string;
    }
}
