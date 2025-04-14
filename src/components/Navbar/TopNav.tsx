"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiThreeFriends } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMessage } from "react-icons/md";

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
        <h1 className="text-white text-2xl font-semibold place-self-end cursor-pointer">
          <Link href={"/dashboard"}>MatchMe</Link>
        </h1>
      </div>
      <div className="sm:flex gap-x-10 justify-center items-center hidden">
        <Link
          href={"/dashboard"}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Trang chủ
        </Link>
        <Link
          href={"/newsfeed"}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Bảng tin
        </Link>
        <Link
          href={"/roomlist"}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Sự kiện
        </Link>
        <Link
          href={"/event"}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Ghép đôi
        </Link>
        <Link
          href={"/chats"}
          className="text-3xl font-semibold text-white cursor-pointer"
        >
          Phòng chat
        </Link>
      </div>
      <div className="sm:flex justify-center items-center gap-x-4 hidden">
        <Link
          href={"/login"}
          className="border-white border-2 text-white rounded-full px-4 py-1 text-2xl"
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="border-white border-2 text-white rounded-full px-4 py-1 text-2xl"
        >
          Register
        </Link>
      </div>

      {/* <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <IoClose
          className="absolute top-4 right-4"
          size={"40px"}
          onClick={() => setIsMenu(!isMenu)}
        />
        <div className="mt-18 flex flex-col items-center gap-y-4">
          <div className="flex justify-center items-center gap-x-1">
            <LuHandshake size={"25px"} />
            <Link href={"/match"} className="text-2xl ">
              Match
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            <CgProfile size={"25px"} />
            <Link href={"/profile"} className="text-2xl ">
              Profile
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            <MdOutlineMessage size={"25px"} />
            <Link href={"/chat"} className="text-2xl ">
              Chat
            </Link>
          </div>
          <div className="flex justify-center items-center border-2 py-2 px-12 rounded-full">
            <Link href={"/login"} className="text-2xl ">
              Login
            </Link>
          </div>
          <div className="flex justify-center items-center border-2 py-2 px-8 rounded-full">
            <Link href={"/register"} className="text-2xl ">
              Register
            </Link>
          </div>
        </div>
      </div> */}
      <div
        className={`fixed top-0 z-50 left-0 h-full w-2/3 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenu ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <IoClose
          className="absolute top-4 right-4"
          size={"40px"}
          onClick={() => setIsMenu(!isMenu)}
        />
        <div className="mt-18 flex flex-col items-center gap-y-4">
          <div className="flex justify-center items-center gap-x-1">
            {/* <LuHandshake size={"25px"} /> */}
            <Link href={"/dashboard"} className="text-2xl ">
              Trang chủ
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            {/* <CgProfile size={"25px"} /> */}
            <Link href={"/newsfeed"} className="text-2xl ">
              Bảng tin
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            {/* <MdOutlineMessage size={"25px"} /> */}
            <Link href={"/roomlist"} className="text-2xl ">
              Sự kiện
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            {/* <MdOutlineMessage size={"25px"} /> */}
            <Link href={"/event"} className="text-2xl ">
              Ghép đôi
            </Link>
          </div>
          <div className="flex justify-center items-center gap-x-1">
            {/* <MdOutlineMessage size={"25px"} /> */}
            <Link href={"/chatss"} className="text-2xl ">
              Phòng chat
            </Link>
          </div>
          <div className="flex justify-center items-center border-2 py-2 px-12 rounded-full">
            <Link href={"/login"} className="text-2xl ">
              Login
            </Link>
          </div>
          <div className="flex justify-center items-center border-2 py-2 px-8 rounded-full">
            <Link href={"/register"} className="text-2xl ">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
