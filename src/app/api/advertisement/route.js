import Advertisement from "@/models/Advertisement";
import User_RealState from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      description,
      location,
      phone,
      category,
      price,
      realState,
      constructionDate,
      rules,
      amenities,
    } = body;

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

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !category ||
      !price ||
      !realState ||
      !constructionDate
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر را وارد کنید و همه ی فیلد ها را پر کنید" },
        { status: 400 },
      );
    }

    await Advertisement.create({
      title,
      description,
      location,
      phone: +phone,
      category,
      price: +price,
      realState,
      constructionDate,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      {
        message:
          "آگهی با موفقیت در صف انتشار قرار گرفت و پس از بررسی منتشر میشود",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      _id,
      title,
      description,
      location,
      phone,
      category,
      price,
      realState,
      constructionDate,
      rules,
      amenities,
    } = body;

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

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !category ||
      !price ||
      !realState ||
      !constructionDate
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر را وارد کنید و همه ی فیلد ها را پر کنید" },
        { status: 400 },
      );
    }

    const advertisement = await Advertisement.findOne({ _id });

    if (!user._id.equals(advertisement.userId)) {
      return NextResponse.json(
        { error: "شما دسترسی لازم برای این عملیات را ندارید" },
        { status: 403 },
      );
    }

    advertisement.title = title;
    advertisement.description = description;
    advertisement.location = location;
    advertisement.price = price;
    advertisement.phone = phone;
    advertisement.category = category;
    advertisement.realState = realState;
    advertisement.constructionDate = constructionDate;
    advertisement.rules = rules;
    advertisement.amenities = amenities;

    advertisement.save();

    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 },
    );
  }
}

// export async function GET() {
//   try {
//     await connectDB();

//     const advertisements = await Advertisement.find().select("-userId");

//     return NextResponse.json({
//       data: advertisements,
//       message: "اطلاعات دریافت شدند",
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "خطایی در سرور رخ داده است" },
//       { status: 500 },
//     );
//   }
// }
