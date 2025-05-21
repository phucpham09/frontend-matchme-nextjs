'use client'
import Link from "next/link";
import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault(); 
    router.push("/dashboard");
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)]">
      {/*container */}
      <div className="flex flex-col gap-y-8 shadow-lg p-10 rounded-md w-2/3 sm:w-2/6">
        {/* header (title, logo login)*/}
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex justify-center items-center gap-x-2">
            <SiGnuprivacyguard size={"40px"} />
            <h1 className="text-4xl font-semibold">Login</h1>
          </div>
          <p className="text-center">
            Welcome to MatchMe App!{" "}
            <span>
              <Link href={"/register"} className="text-green-600 underline">
                Register now!
              </Link>
            </span>
          </p>
        </div>

        {/* body (form)*/}
        <div>
          <form className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <label className="sm:text-xl text-lg">Email</label>
              <input
                className="border-gray-400 rounded-sm border-2 text-md sm:text-lg py-1 px-2"
                placeholder="Enter your email..."
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="sm:text-xl text-lg">Password</label>
              <input
                className="border-gray-400 rounded-sm border-2 text-md sm:text-lg py-1 px-2"
                placeholder="Enter your password..."
              />
            </div>
            <button
              onClick={handleClick}
              className="mt-4 py-1 font-semibold rounded-md bg-blue-500 text-white text-lg sm:text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
