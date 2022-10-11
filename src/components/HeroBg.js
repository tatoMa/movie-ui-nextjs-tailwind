/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
export function HeroBg({}) {
  return (
    <>
      <Image
        className="w-full h-[65vh] object-cover "
        src="/img/bg.png"
        loading="lazy"
        alt="background image"
        layout="fill"
      />
      <div className=" absolute top-0 left-0 bg-gradient-to-r from-black to-transparent  w-[30%] h-full"></div>
      <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent  w-full h-[30%]"></div>
    </>
  );
}
