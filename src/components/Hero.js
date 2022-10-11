import { HeroBg } from "./HeroBg";
import { HeroInfo } from "./HeroInfo";
import React from "react";
export function Hero({}) {
  return (
    <section className=" h-[65vh] w-full relative">
      <HeroBg />
      <HeroInfo />
    </section>
  );
}
