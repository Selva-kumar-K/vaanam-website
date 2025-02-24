import React from "react";

interface JobCardProps {
  title: string;
  type: string;
  mode: string;
}

export default function JobCard({ title, type, mode }: JobCardProps) {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className=" flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between items-center shadow-md p-5 border rounded-lg my-5">
        {/* Job Card Header */}
        <div className="">
          <div className="flex gap-2">
            <h1 className="font-semibold text-[22px]">{title}</h1>
            <div className="-mt-3">
              <div
                className="bg-blue-200 relative text-blue-800 px-3 py-[2px] text-[13px] rounded-md before:absolute before:-bottom-1 before:left-1
                  before:w-3 before:h-3 before:bg-blue-200
                  before:rounded-bl-full before:rotate-45"
              >
                <h1>Open</h1>
              </div>
            </div>
          </div>
          <h1 className="">
            Job Type: {type} <span className="font-extrabold">.</span> Work
            Mode: {mode}
          </h1>
          <div className="text-blue-700 mt-4 cursor-pointer hover:text-blue-100 duration-300 items-center gap-2  inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-eye"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <p>Viewmore</p>
          </div>
        </div>
        <div>
          <button className="bg-blue-400 hover:bg-blue-500 duration-300 text-white px-4 py-2 rounded-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
