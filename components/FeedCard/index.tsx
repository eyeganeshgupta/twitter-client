import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src={"https://avatars.githubusercontent.com/u/121616032?v=4"}
            alt="user-image"
            height={50}
            width={50}
          />
        </div>

        <div className="col-span-11">
          <h5>Ganesh Gupta</h5>
          <p>
            Twitter, Inc. was an American social media company based in San
            Francisco, California. The company operated the social networking
            service Twitter and previously the Vine short video app and
            Periscope livestreaming service. In April 2023, Twitter merged with
            X Holdings[6] and ceased to be an independent company, becoming a
            part of X Corp.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
