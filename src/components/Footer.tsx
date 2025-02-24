import Image from "next/image";
import React from "react";
import Logo from "./../../public/vaaname-light.png";
import Link from "next/link";
import { products, quickLinks, services } from "@/libs/nav-menus";
export default function Footer() {
  return (
    <div className="bg-footer-bg-img bg-cover bg-no-repeat ">
      <div className="bg-black/85 h-full">
        <div className="max-w-[86%] mx-auto py-10">
          {/* Grid Container */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Grid 1 */}
            <div className="flex flex-col space-y-10">
              {/* Image Div */}
              <div>
                <Image src={Logo} alt="logo" className="w-32" />
              </div>

              {/* Center */}

              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone fill-white"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p className="text-gray-400 text-[17px] cursor-pointer">
                    +91 422 256 7626
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone "
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <p className="text-gray-400 text-[17px] cursor-pointer">
                    SALES: +91 9043026014
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone "
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <p className="t text-gray-400 text-[17px] cursor-pointer">
                    HR: +91 9043026025
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail fill-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <p className="text-gray-400 text-[17px] cursor-pointer">
                    info@vaanamtech.com
                  </p>
                </div>
              </div>

              {/* Logo div */}
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook fill-white duration-300 hover:fill-blue-600 hover:stroke-blue-600"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin fill-white duration-300 hover:fill-blue-600 hover:stroke-blue-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </div>
            {/* Grid 2 */}
            <div className="flex flex-col space-y-7">
              <h1 className="text-white text-[24px] font-semibold">
                Quick Links
              </h1>
              <div className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <span
                    key={link.label}
                    className="text-gray-400 capitalize hover:text-white duration-300 text-[17px] flex items-center gap-2 cursor-pointer hover:px-2"
                  >
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
                    <Link href={link.href}>{link.label}</Link>
                  </span>
                ))}
              </div>
            </div>

            {/* Grid 3 */}
            <div className="flex flex-col space-y-7">
              <h1 className="text-white text-[24px] font-semibold">Services</h1>
              <div className="flex flex-col gap-2">
                {services.map((link) => (
                  <span
                    key={link.label}
                    className="text-gray-400 capitalize hover:text-white duration-300 text-[17px] flex items-center gap-2 cursor-pointer hover:px-2"
                  >
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
                    <Link href={link.href}>{link.label}</Link>
                  </span>
                ))}
              </div>
            </div>

            {/* Grid 4 */}
            <div className="flex flex-col space-y-7">
              <h1 className="text-white text-[24px] font-semibold">
                Our Products
              </h1>
              <div className="flex flex-col gap-2">
                {products.map((link) => (
                  <span
                    key={link.label}
                    className="text-gray-400 capitalize hover:text-white duration-300 text-[17px] flex items-center gap-2 cursor-pointer hover:px-2"
                  >
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
                    <Link href={link.href}>{link.label}</Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
