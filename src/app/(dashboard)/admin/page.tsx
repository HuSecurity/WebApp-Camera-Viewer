import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
  return <h2 className="text-2xl text-slate-200">Camera Page - Welcome Back</h2>
  }

  return <h2 className="text-2xl text-slate-200">Please login to see this camera</h2>;
};

export default page;
