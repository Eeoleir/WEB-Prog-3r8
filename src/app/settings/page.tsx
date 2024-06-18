import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTelegram,
  FaGlobe,
} from "react-icons/fa";

function Settings() {
  return (
    <section
      className="h-screen flex-col overflow-y-auto scrollbar-hide"
      style={{ background: "#141414" }}
    >
      {/* header */}
      <nav
        className="header flex items-center justify-between text-white h-24 px-4"
        style={{ background: "#09090B" }}
      >
        <div className="flex items-center space-x-12">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <img
            src="/logo.png"
            alt="Image Logo"
            className="mt-4  w-72 object-contain"
          />
        </div>

        <div className="flex items-center space-x-20">
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-500"
          >
            Events
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-500"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-500"
          >
            Schedule
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-500"
          >
            Contact Us
          </a>
        </div>

        <div className="relative flex items-center mr-8 ">
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
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 py-6 bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            style={{ color: "white" }}
          />
        </div>
      </nav>

      {/* body */}
      <div
        className="body bg-white flex flex-col "
        style={{
          background: "linear-gradient(to bottom, #2A2600, #000000)",
        }}
      >
        {/* top Part of body */}
        <div className="flex flex-col items-center mt-2 ">
          <h1
            className="text-yellow-300 text-4xl font-bold"
            style={{
              fontFamily: "Staatliches , sans-serif",
            }}
          >
            SETTINGS
          </h1>
          <div className="mt-4">
            <Avatar className="w-28 h-28 mt-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-white font-medium text-2xl mt-4">
            Organizer Name
          </h1>
          <div className="flex flex-row items-center mt-4 w-full">
            <div className="w-full h-0.5 bg-gradient-to-l from-white to-transparent right-0 "></div>
            <div className="w-full h-0.5 bg-gradient-to-r from-white to-transparent left-0"></div>
          </div>
        </div>
        {/* forms Part of body */}
        <div
          className="mt-4 w-2/5 mx-auto text-white flex flex-col"
          style={{
            fontFamily: "Inter , sans-serif",
          }}
        >
          <div>
            <h1 className="font-semibold">Account Details</h1>
            <div className="mt-2">
              <h2 className="font-light">Edit Email</h2>
              <Input
                type="text"
                placeholder="Enter your Email"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
            <div className="mt-2 ">
              <h2 className="font-light">Edit Username</h2>
              <Input
                type="text"
                placeholder="Enter your Username"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
            <div className="mt-2">
              <h2 className="font-light">Change Password</h2>
              <Input
                type="text"
                placeholder="Enter your new Password"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
            <div className="mt-2">
              <h2 className="font-light">Contact Number</h2>
              <Input
                type="text"
                placeholder="Enter your contact number"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Part of body */}
        <div className=" flex flex-col items-center mt-6 mb-8">
          <Button
            variant="outline"
            className="px-8"
            style={{
              background: "#27262B",
              color: "white",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Create New Event Portfolio
          </Button>

          <Button
            variant="outline"
            className="px-20 mt-4"
            style={{
              background: "#FEC52B",
              color: "black",
            }}
          >
            Submit
          </Button>
          <a href="/help" className="mt-2 flex items-center space-x-2">
            <h1 className="text-white font-normal hover:text-blue-300 transition duration-500">
              Help & FAQs
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-help"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </a>
        </div>
      </div>

      {/* footer */}
      <div
        className="footer bg-gray-200 text-white h-1/3 rounded-t-lg border-t-1 border-solid border-gray-900 pb-30 flex-row flex "
        style={{
          background: "#000508",
        }}
      >
        <div className="leftPart flex-col flex w-2/5">
          <div className="ml-32">
            <img
              src="/btm_logo.png"
              alt="Image Logo"
              className="mt-12 w-12 object-contain"
            />
            <h1 className="mt-6">Event Wise Accounts.</h1>
            <div className="flex items-center justify-start mt-8">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaDiscord size={32} />
              </a>
              <a
                href="https://www.reddit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaReddit size={32} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={32} />
              </a>
            </div>
            <h1 className="text-gray-500 text-sm mt-6">
              &copy; 2024 Your Company Name. All rights reserved.
            </h1>
          </div>
        </div>

        <div className="midPart flex-row flex w-1/3 space-x-20 ">
          <div className="flex-col flex mt-12 ml-36">
            <h1 className="font-normal  mb-2">EVENTWISE</h1>
            <div className="font-thin space-y-2">
              <h2>Grants</h2>
              <h2>EventWise cop</h2>
              <h2>Media Kit</h2>
              <h2>Careers</h2>
              <h2>Disclamer</h2>
            </div>
          </div>
          <div className="flex-col flex mt-12">
            <h1 className="font-normal  mb-2">GET CONNECTED</h1>
            <div className="font-thin space-y-2">
              <h2>Ecosystem</h2>
              <h2>Blog</h2>
              <h2>Newsletter</h2>
            </div>
          </div>
        </div>
        <div className="rightPart w-3/12 space-x-20  flex flex-col items-start">
          <div className="mt-12 ml-32 flex items-center">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGlobe size={24} className="mr-2" />
              <h1 className="ml-2">EN</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
