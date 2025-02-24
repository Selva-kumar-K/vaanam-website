import React from "react";

export default function Copyrights() {
  return (
    <div className="bg-black">
      <div className="max-w-[86%] mx-auto py-10 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
        <div className="">
          <h1 className="text-gray-400">
            &copy;Copyright 2012 - 2025. All Rights Reserved by{" "}
            <span className="text-white font-semibold duration-300 hover:text-blue-700 cursor-pointer">
              Vaanam Technologies Pvt Ltd.
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-4 text-white">
          <h1 className="hover:text-blue-700 duration-300 cursor-pointer font-semibold">
            Terms
          </h1>
          <h1 className="hover:text-blue-700 duration-300 cursor-pointer font-semibold">
            Privacy
          </h1>
          <h1 className="hover:text-blue-700 duration-300 cursor-pointer font-semibold">
            Faq
          </h1>
        </div>
      </div>
    </div>
  );
}
