import React from "react";
import { BsSearch } from "react-icons/bs";

const RightSection = () => (
  <section className="w-[30%] flex flex-col items-stretch h-screen px-4 sticky top-0 overflow-scroll">
    <div className="relative w-full flex items-center justify-center mt-4 group">
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="outline-none bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-12 pr-4 focus:border focus:border-primary peer"
      />
      <label
        htmlFor="search"
        className="absolute left-0 top-0 h-full p-4 peer-focus:text-primary"
      >
        <BsSearch className="w-5 h-5 text-grey-500" />
      </label>
    </div>
    <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
      <h3 className="font-bold text-xl my-4 px-4">What's happening</h3>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="p-4 hover:bg-white/10 last:rounded-b-xl cursor-pointer transition duration-200"
        >
          <div className="font-bold text-lg">Trending item: {i + 1}</div>
          <div className="text-xs text-neutral-400">35.4</div>
        </div>
      ))}
    </div>
    <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
      <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="p-4 hover:bg-white/10 last:rounded-b-xl cursor-pointer transition duration-200 flex flex-row items-center space-x-4 justify-between"
        >
          <div className="flex flex-row items-center space-x-2">
            <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
            <div className="flex flex-col space-y-2">
              <div className="font-bold text-white">Other user</div>
              <div className="text-xs text-grey-500">@otheruser</div>
            </div>
          </div>
          <button className="rounded-full px-6 py-2 bg-white text-black">
            Follow
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default RightSection;
