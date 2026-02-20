import Advertisement from "@/models/Advertisement";
import User_RealState from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const {
      params: { advertisementId },
    } = context;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "شما باید وارد حساب کاربری خود شوید" },
        { status: 401 },
      );
    }

    const user = await User_RealState.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "کاربر مورد نظر یافت نشد" },
        { status: 404 },
      );
    }

    await Advertisement.deleteOne({ _id: advertisementId });

    return NextResponse.json(
      { message: "آگهی با موفقیت حذف شد" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}
