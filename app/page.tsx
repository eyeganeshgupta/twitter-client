import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-14">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>

          <div className="mt-1 text-xl font-semibold pr-4">
            <ul></ul>

            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] text-lg font-semibold py-2 px-4 w-full rounded-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
