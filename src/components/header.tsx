import React from "react";
import githubPhoto from "../../public/Img_Github.png";
import Watphoto from "../../public/Watphoto.jpeg";
import Image from "next/image";
import { TbCircleDot } from "react-icons/tb";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdOutlineMarkunread } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import HandleClick from "./hadleclick";
import { RiGitRepositoryFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="flex flex-col bg-black">
      <div className="bg-black flex items-center justify-between mt-5 mb-3 mx-4">
        <div className="flex border-[0.1rem] border-slate-700 w-[1.9rem] h-[1.85rem] rounded-md justify-center items-center mr-4">
          <HiOutlineBars3 className="w-5 h-6 text-gray-400"></HiOutlineBars3>
        </div>
        <Image
          className="mr-3"
          src={githubPhoto}
          width={30}
          height={30}
          alt="Picture Github"
        ></Image>
        <h1 className="text-white text-sm font-medium cursor-pointer">
          WatWittawat
        </h1>
        <input
          className="bg-black rounded-md border-[0.1rem] border-slate-700 w-[24rem] h-[1.85rem] text-white placeholder-gray-500 ml-auto p-2 placeholder:text-sm"
          type="text"
          placeholder="Type / to search"
        ></input>
        <div className="bg-gray-700 w-[0.1rem] h-[1.25rem] mx-2"></div>
        <select
          id="myDropdown"
          className="flex bg-black rounded-md border-[0.1rem] border-slate-700 text-gray-400 w-[3rem] h-[1.85rem] text-sm items-center mr-2 pl-2 justify-center"
        >
          <option value="option1">+</option>
          <option value="option2">New repository</option>
          <option value="option3">Import repository</option>
        </select>
        <div className="flex border-[0.1rem] border-slate-700 w-[1.9rem] h-[1.85rem] rounded-md justify-center items-center">
          <TbCircleDot className="w-5 h-5 text-gray-400"></TbCircleDot>
        </div>
        <div className="flex border-[0.1rem] border-slate-700 w-[1.9rem] h-[1.85rem] rounded-md justify-center items-center">
          <FaCodePullRequest className="w-4 h-4 text-gray-400"></FaCodePullRequest>
        </div>
        <div className="flex border-[0.1rem] border-slate-700 w-[1.9rem] h-[1.85rem] rounded-md justify-center items-center">
          <MdOutlineMarkunread className="w-4 h-4 text-gray-400"></MdOutlineMarkunread>
        </div>
        <div className="overflow-hidden ml-2">
          <Image
            className="rounded-full w-7 h-7"
            src={Watphoto}
            width={30}
            height={30}
            alt="Wat's Photo"
          ></Image>
        </div>
      </div>
      <nav className="flex mx-2">
        <HandleClick
          icon={<IoBookOutline></IoBookOutline>}
          text="Overview"
        ></HandleClick>
        <HandleClick
          icon={<RiGitRepositoryFill></RiGitRepositoryFill>}
          text="Repositories"
        ></HandleClick>
        <HandleClick
          icon={<GoProjectSymlink></GoProjectSymlink>}
          text="Project"
        ></HandleClick>
        <HandleClick
          icon={<GoPackage></GoPackage>}
          text="Packages"
        ></HandleClick>
        <HandleClick icon={<CiStar></CiStar>} text="Stars"></HandleClick>
      </nav>
    </header>
  );
}
