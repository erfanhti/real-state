import SignupPage from "@/templates/SignupPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <SignupPage />;
}

export default SignUp;
