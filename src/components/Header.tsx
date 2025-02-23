import Image from "next/image";
import React from "react";
import Logo from "./../../public/logo-vaanam.png";
import { navMenus } from "@/libs/nav-menus";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-[86%] mx-auto py-5">
        <nav className="flex space-x-36 lg:space-x-0 lg:justify-between items-center">
          <div className="lg:hidden">
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
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
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
                  <span className="group-hover:rotate-180 transition-all duration-300 -mt-1 -mx-1">
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
                    className={`absolute left-16 bg-white shadow-lg px-4 pt-12 pb-3 text-[13.8px] text-gray-800 flex-col space-y-5
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
      </div>
    </div>
  );
}
