import React from "react";
export function HeroBg({}) {
  return (
    <>
      <img
        className="w-full h-[65vh] object-cover "
        src="/img/bg.png"
        loading="lazy"
        alt="background image"
      />
      <div className=" absolute top-0 left-0 bg-gradient-to-r from-black to-transparent  w-[30%] h-full"></div>
      <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent  w-full h-[30%]"></div>
    </>
  );
}
