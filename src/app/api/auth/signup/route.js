import User_RealState from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/authPassword";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 },
      );
    }
    const existingUser = await User_RealState.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "کاربری با این ایمیل از قبل وجود دارد" },
        { status: 422 },
      );
    }

    const hashedPassword = await hashPassword(password);

    await User_RealState.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "کاربر با موفقیت ایجاد شد" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}
