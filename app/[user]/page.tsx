"use client";

import TwitterLayout from "@/components/Layout/TwitterLayout";
import type { NextPage } from "next";
import { BsArrowLeftShort } from "react-icons/bs";

const UserProfilePage: NextPage = () => {
  return (
    <div>
      <TwitterLayout>
        <div>
          <nav>
            <BsArrowLeftShort />
          </nav>
        </div>
      </TwitterLayout>
    </div>
  );
};

export default UserProfilePage;
