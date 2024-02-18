"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type handleClick = {
  icon: React.ReactNode;
  text: string;
};

const HandleClick: React.FC<handleClick> = ({ icon, text }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex ${
        pathname.split("/")[1] === text ? "border-b-2 border-orange-400" : ""
      }`}
    >
      <Link
        href={`/${text}`}
        className={`flex cursor-pointer w-auto mx-3 p-1 h-[2rem] justify-center items-center my-2 rounded-md hover:bg-gray-800 `}
      >
        <h2 className="flex items-center">
          <span className="text-gray-400">{icon}</span>{" "}
          <span className="text-white ml-2 text-sm">{text}</span>
        </h2>
      </Link>
    </div>
  );
};

export default HandleClick;
