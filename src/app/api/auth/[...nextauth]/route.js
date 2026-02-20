import User_RealState from "@/models/User";
import { comparePassword } from "@/utils/authPassword";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سمت سرور رخ داد");
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await User_RealState.findOne({ email: email });

        if (!user) throw new Error("کاربری با این ایمیل یافت نشد");

        const isValidPassword = await comparePassword(password, user.password);

        if (!isValidPassword) throw new Error("رمز عبور یا ایمیل اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
