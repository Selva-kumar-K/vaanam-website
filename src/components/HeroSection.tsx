import Image from "next/image";
import React from "react";
import Home from "./../../public/home-icon.svg";

export default function HeroSection() {
  return (
    <div className="h-[35vh] bg-hero-bg-img bg-cover bg-center text-white bg-opacity-90">
      <div className="flex flex-col justify-center gap-4 items-center h-full">
        <h1 className="text-4xl font-bold">Careers</h1>
        <div className="flex items-center gap-2 uppercase font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house cursor-pointer"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <h2 className="cursor-pointer">Home</h2>
          <p>-</p>
          <h2>Careers</h2>
        </div>
      </div>
    </div>
  );
}
