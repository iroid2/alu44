import { withAuth } from "next-auth/middleware";
 
export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: "/login",
    // error: '/error',
  },
});
export const config = {
  matcher: ["/dashboard/:path*"],
};


// # Environment variables declared in this file are automatically made available to Prisma.
// # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

// # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
// # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

// # DATABASE_URL="mongodb+srv://iradtu2:oWf5M9LV88EbxaKI@cluster0.vkjtqtf.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0"
// DATABASE_URL="mongodb+srv://iradtu2:oWf5M9LV88EbxaKI@cluster0.vkjtqtf.mongodb.net/alumnidb?retryWrites=true&w=majority&appName=Cluster0"

// RESEND_API_KEY="re_a6tdJJrS_AapVLn782fZy7WxuUbjfhCCa"

// NEXTAUTH_URL="http://localhost:3000"
// NEXTAUTH_SECRET="3cc9d3166430d0605de2ede088934d4e72085ed6"
// NEXT_PUBLIC_BASE_URL="http://localhost:3000"

// # UPLOADTHING_SECRET='sk_live_32c0ac579b2f08c9771e05a96d2311b606ca95bd2d1a02ba3b6104285a421d5b'
// # UPLOADTHING_APP_ID='5o4tgs8pnq'