import DashboardPage from "@/templates/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  return <DashboardPage />;
}

export default Dashboard;
