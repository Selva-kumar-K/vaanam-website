"use client";

import React, { useState } from "react";
import JobCard from "./JobCard";
import { jobs, usJobs } from "@/libs/jobs";

export default function JobSection() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  return (
    <div className="">
      <div className="max-w-[86%] mx-auto border  my-20 rounded-md">
        <div className="rounded-t-md flex justify-between text-center border-b border-gray-400 overflow-hidden pt-[1px] text-[20px] font-semibold ">
          <h1
            className={`${
              selectedCountry === "India"
                ? "bg-blue-400 text-white"
                : "bg-white text-black"
            }  w-1/2 py-2 cursor-pointer rounded-t-md`}
            onClick={() => setSelectedCountry("India")}
          >
            India
          </h1>
          <h1
            className={`${
              selectedCountry === "US"
                ? "bg-blue-400 text-white"
                : "bg-white text-black"
            } w-1/2 py-2 cursor-pointer rounded-t-md`}
            onClick={() => setSelectedCountry("US")}
          >
            US
          </h1>
        </div>

        {selectedCountry === "India" && (
          <div className="space-y-20 py-10">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        )}
        {selectedCountry === "US" && (
          <div className="space-y-20 py-10">
            {usJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
