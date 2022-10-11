/* eslint-disable @next/next/no-img-element */
import { Items } from "./Items";
import React from "react";
export function Nav({}) {
  return (
    <nav className=" bg-[#101010] text-white fixed w-[60px] h-[100vh] flex flex-col items-center justify-between">
      <div className=" flex flex-col items-center">
        <img className="w-8 mt-2" src="img/menu.png" alt="" />
        <Items />
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <div className=" rounded-full bg-gray-300 w-6 h-6"> </div>
        <img className="w-6" src="img/icons/gear.png" alt="" />
      </div>
    </nav>
  );
}
