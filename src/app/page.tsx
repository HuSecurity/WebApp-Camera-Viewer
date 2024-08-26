import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-slate-200">Home</h1>
      <Link href='/admin' className={buttonVariants()}> Open My Admin </Link>
    </div>
  );
}
