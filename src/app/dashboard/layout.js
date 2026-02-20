import User_RealState from "@/models/User";
import DashboardSidebar from "@/modules/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    toast.error("مشکلی در سمت سرور رخ داده است!");
  }
  const user = await User_RealState.findOne({ email: session.user.email });

  return (
    <DashboardSidebar
      createdAt={user.createdAt}
      email={user.email}
      role={user.role}
    >
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
