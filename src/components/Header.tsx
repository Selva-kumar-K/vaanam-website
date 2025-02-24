"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "./../../public/logo-vaanam.png";
import { navMenus } from "@/libs/nav-menus";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(isDropdownOpen);

  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="max-w-[86%] mx-auto py-5">
        <nav className="flex space-x-36 lg:space-x-0 lg:justify-between items-center">
          <div className="lg:hidden">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                className="lucide lucide-menu cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </div>

          <Image src={Logo} alt="logo" className="w-auto h-16" />
          <ul className=" relative hidden lg:flex gap-8">
            {navMenus.map((menu, index) => (
              <div key={index} className="group">
                <li
                  key={index}
                  className="uppercase text-[13.8px] text-gray-600 font-medium flex items-center gap-2 hover:text-blue-700 duration-300 tracking-wide"
                >
                  <a href={menu.href}>{menu.label}</a>{" "}
                  <span className="group-hover:rotate-180 transition-all duration-300 -mx-1">
                    {menu.dropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </span>
                </li>

                {menu.dropdown && (
                  <ul
                    className={`absolute left-16 hidden w-[250px] bg-white shadow-lg px-4 pt-12 pb-3 text-[13.8px] text-gray-800 flex-col space-y-5
              opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 delay-200 pointer-events-auto`}
                  >
                    {menu.dropdown.map((dropdown, index) => (
                      <li
                        key={index}
                        className="font-medium gap-2 hover:text-blue-700 tracking-wide cursor-pointer"
                      >
                        {dropdown.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </nav>

        {isOpen && (
          <ul className="lg:hidden mt-5 uppercase relative flex flex-col gap-4 transition-opacity duration-300 opacity-100 delay-200 pointer-events-auto">
            {navMenus.map((menu, index) => {
              return (
                <nav key={index} className="duration-300 mt-2">
                  <li
                    className="border-b border-gray-300 pb-2 hover:text-blue-700 cursor-pointer text-[13.8px] flex justify-between"
                    key={index}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    <span>{menu.label}</span>{" "}
                    <span>
                      {menu.dropdown &&
                        (isDropdownOpen ? (
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
                            className="lucide lucide-chevron-down"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        ) : (
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
                            className="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        ))}
                    </span>
                  </li>
                  {isDropdownOpen &&
                    menu.dropdown?.map((dropdown, index) => (
                      <li
                        key={index}
                        className="capitalize hover:text-blue-700 my-2 cursor-pointer duration-300"
                      >
                        {dropdown.label}
                      </li>
                    ))}
                </nav>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
