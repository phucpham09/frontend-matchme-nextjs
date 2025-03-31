"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiThreeFriends } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
const TopNav = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="flex sm:justify-between p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <IoMenu
        className="sm:hidden text-white w-1/12 place-self-start cursor-pointer"
        size={"40px"}
        onClick={() => setIsMenu(!isMenu)}
      />
      <div className="flex justify-center items-center max-sm:w-11/12">
        <GiThreeFriends size={"40px"} className="text-white" />
        <h1 className="text-white text-2xl font-semibold place-self-end">
          MatchMe
        </h1>
      </div>
      <div className="sm:flex gap-x-10 justify-center items-center hidden">
        <Link
          href={""}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Match
        </Link>
        <Link
          href={""}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Profile
        </Link>
        <Link
          href={""}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Chat
        </Link>
      </div>
      <div className="sm:flex justify-center items-center gap-x-4 hidden">
        <Link
          href={""}
          className="border-white border-2 text-white rounded-full px-4 py-1 text-2xl"
        >
          Login
        </Link>
        <Link
          href={""}
          className="border-white border-2 text-white rounded-full px-4 py-1 text-2xl"
        >
          Register
        </Link>
      </div>
      
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black text-3xl"
          onClick={() => setIsMenu(!isMenu)}
        >
          ✖
        </button>
        <nav className="flex flex-col mt-16 space-y-6 text-center text-black text-2xl font-semibold">
          <Link href="" className="block">
            Match
          </Link>
          <Link href="" className="block">
            Profile
          </Link>
          <Link href="" className="block">
            Chat
          </Link>
          <Link
            href=""
            className="border-black border-2 rounded-full px-4 py-2 mt-4"
          >
            Login
          </Link>
          <Link
            href=""
            className="border-black border-2 rounded-full px-4 py-2"
          >
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
