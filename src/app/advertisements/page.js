import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Advertisement from "@/models/Advertisement";
import User_RealState from "@/models/User";
import UserAdvertisements from "@/templates/UserAdvertisements";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function Advertisements() {

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    toast.error("مشکلی در سمت سرور رخ داده است!");
  }

  const session = await getServerSession(authOptions);

  const [user] = await User_RealState.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "advertisements",
        localField: "_id",
        foreignField: "userId",
        as: "advertisements",
      },
    },
  ]);

  return (
    <div>
      <UserAdvertisements advertisements={user?.advertisements} />
    </div>
  );
}

export default Advertisements;

