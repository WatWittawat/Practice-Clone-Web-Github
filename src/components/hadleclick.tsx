"use client";
import React from "react";

type handleClick = {
  icon: React.ReactNode;
  text: string;
};

const HandleClick: React.FC<handleClick> = ({ icon, text }) => {
  const handleClick = () => {
    console.log(`Element clicked! ${text}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer border-none border-[0.1rem] w-auto mx-3 p-1 h-[2rem] justify-center items-center my-2 rounded-md"
    >
      <h2 className="flex items-center">
        <span className="text-gray-400">{icon}</span>{" "}
        <span className="text-white ml-2 text-sm">{text}</span>
      </h2>
    </div>
  );
};

export default HandleClick;
