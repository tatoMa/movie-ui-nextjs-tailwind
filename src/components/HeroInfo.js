import React from "react";
export function HeroInfo({}) {
  return (
    <section className=" absolute left-0 bottom-0 ml-8 mb-8 text-white w-[28vw]">
      <h1 className=" text-4xl">Peaky Blinders</h1>
      <p className=" mt-6 text-sm text-gray-200 font-light">
        Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in
        Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and
        put an end to the criminal activities.
      </p>
      <section className="mt-4 text-sm text-gray-200 font-semibold flex flex-col gap-2">
        <div>
          <img className=" inline-block mr-2 " src="img/imdb.png" alt="" />
          <span>8.8/10 </span>
        </div>
        <div>
          <span className="text-red-500 inline-block mr-2">2B+</span>
          <span>steams</span>
        </div>
      </section>
      <section className="flex gap-4 mt-6">
        <button className=" bg-red-600 pt-1 pb-2 px-12 "> play </button>
        <button className=" bg-gray-200 pt-1 pb-1 px-3 text-black">
          watch trailer
        </button>
      </section>
    </section>
  );
}
