import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Advertisement from "@/models/Advertisement";
import User_RealState from "@/models/User";
import AdminPage from "@/templates/AdminPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Admin() {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return toast.error("مشکلی در سمت سرور رخ داده است!");
  }

  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");

  const user = await User_RealState.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") return redirect("/dashboard");

  const notPublished = await Advertisement.find({ published: false });

  return (
    <div>
      <AdminPage data={notPublished} />
    </div>
  );
}

export default Admin;
