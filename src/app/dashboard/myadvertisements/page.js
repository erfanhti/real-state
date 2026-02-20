import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User_RealState from "@/models/User";
import UserAdvertisements from "@/templates/UserAdvertisements";
import { getServerSession } from "next-auth";

async function Advertisements() {
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
