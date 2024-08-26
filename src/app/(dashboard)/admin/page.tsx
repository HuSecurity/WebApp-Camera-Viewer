import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <h2 className="text-slate-200 text-2xl">
        Camera Page - Welcome Back {session?.user.username}
      </h2>
    );
  }
  return <h2 className="text-2l">Please login to see this camera</h2>;
};

export default page;
