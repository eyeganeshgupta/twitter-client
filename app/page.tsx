"use client";

import React, { useCallback, useState } from "react";
import { BiImageAlt } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";
import TwitterLayout from "@/components/Layout/TwitterLayout";

export default function Home() {
  const { user } = useCurrentUser();
  const { tweets = [] } = useGetAllTweets();
  const { mutate } = useCreateTweet();

  const [content, setContent] = useState("");

  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "images/*");
    input.click();
  }, []);

  const handleCreateTweet = useCallback(async () => {
    console.log(content);
    mutate({ content });
  }, [content]);

  return (
    <div>
      <TwitterLayout>
        <div>
          <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1">
                {user?.profileImageURL && (
                  <Image
                    className="rounded-full"
                    src={user?.profileImageURL}
                    alt="user-image"
                    height={50}
                    width={50}
                  />
                )}
              </div>
              <div className="col-span-11">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-transparent text-xl px-3 border-b border-slate-700"
                  rows={3}
                  placeholder="What's happening?"
                ></textarea>
                <div className="mt-2 flex justify-between items-center">
                  <BiImageAlt className="text-xl" onClick={handleSelectImage} />
                  <button
                    className="bg-[#1d9bf0] font-semibold text-sm py-2 px-4 rounded-full"
                    onClick={handleCreateTweet}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {tweets?.map((tweet) =>
          tweet ? <FeedCard key={tweet.id} data={tweet as Tweet} /> : null
        )}
      </TwitterLayout>
    </div>
  );
}
