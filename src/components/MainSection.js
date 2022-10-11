import { NewMovies } from "./NewMovies";
import { Hero } from "./Hero";
import React from "react";
export function MainSection() {
  return (
    <section className=" ml-[60px] bg-black">
      <Hero />
      <NewMovies />
      <section className="mt-12 ml-8 overflow-hidden">
        <h2 className="text-white font-semibold">New This Week</h2>
        <section className="flex gap-6 text-white w-[105vw]">
          <section className="relative">
            <img src="img/movie1.png" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-3xl font-light text-center m-auto pt-12">
              Action
            </div>
          </section>
          <section className="relative">
            <img src="img/movie2.png" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-3xl font-light text-center m-auto pt-12">
              Action
            </div>
          </section>
          <section className="relative">
            <img src="img/movie3.png" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-3xl font-light text-center m-auto pt-12">
              Action
            </div>
          </section>
          <section className="relative">
            <img src="img/movie4.png" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-3xl font-light text-center m-auto pt-12">
              Action
            </div>
          </section>
          <section className="relative">
            <img src="img/movie5.png" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-3xl font-light text-center m-auto pt-12">
              Action
            </div>
          </section>
          <section className="relative">
            <img src="img/movie6.png" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-black/50 text-3xl font-light text-center m-auto pt-12">
              Action
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
