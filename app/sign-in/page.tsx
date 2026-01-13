import { SignIn } from "@stackframe/stack";
import Link from "next/link";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-700">
        <SignIn />
        <Link
          href="/"
          className="block text-center mt-4 text-gray-300 hover:text-white transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
