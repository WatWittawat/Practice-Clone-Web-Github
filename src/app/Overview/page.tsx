import Image from "next/image";
import React from "react";
import Watphoto from "../../../public/Watphoto.jpeg";

type Props = {};

export default function Overview({}: Props) {
  return (
    <>
      <div className="">
        <div className="overflow-hidden w-[18rem] h-[18rem] rounded-full">
          <Image
            className="w-full h-full object-cover"
            src={Watphoto}
            alt="Picture Github"
          />
        </div>
      </div>
    </>
  );
}
