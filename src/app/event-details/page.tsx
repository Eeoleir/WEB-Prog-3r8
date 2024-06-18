import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FaClock,
  FaCalendar,
  FaInfoCircle,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTelegram,
  FaGlobe,
  FaMapPin,
} from "react-icons/fa";

function eventDetails() {
  return (
    <section
      className="h-screen flex-col scrollbar-hide overflow-y-auto"
      style={{ background: "#09080A" }}
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
      {/* details cover */}
      <div className="details_cover bg-white flex justify-center bg-event-details h-screen w-screen bg-cover">
        <div className="title" style={{ marginTop: "18%" }}>
          <h1 className="text-white font-bold text-7xl ">Event Detail</h1>
          <p className="text-white font-medium text-lg">
            <span className="text-yellow-500 font-bold">|</span> A comprehensive
            overview of all the upcoming events
          </p>
        </div>
      </div>

      <div className="body min-h-screen min-w-screen">
        <div className="container mx-auto max-w-[87%]">
          {/* Date and Title */}
          <div className="title font-normal text-xl">
            <p className="text-yellow-500 font-normal text-2xl mt-20">
              September 2023
            </p>
            <h1 className="text-white font-medium text-7xl mt-4">
              Booked Event
            </h1>
          </div>

          {/* Content */}
          <div className="all flex flex-row text-white">
            {/* Left content */}
            <div className="leftpart " style={{ width: "70%" }}>
              <div className="Content-inside ml-10 ">
                {/* first Content */}
                <div className="1stContent mt-24 ">
                  <h1 className="courtesy text-5xl font-normal ">
                    Mr./Mrs./Ms./Sir/Ma'am
                  </h1>
                  {/* Boxes */}
                  <div className="boxes flex flex-row space-x-2 mt-12">
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaCalendar className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Date
                          </h3>
                          <p className="text-white font-bold">
                            18 September 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaClock className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Time
                          </h3>
                          <p className="text-white font-bold">
                            15:00PM - 22:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "35%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaInfoCircle className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Type
                          </h3>
                          <p className="text-white font-bold">WEDDING</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="msgContainer mt-8">
                    <p
                      className="titlemsg font-normal text-xl"
                      style={{ color: "#FFC52A" }}
                    >
                      EVENT INVITATION MESSAGE
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      We are pleased to invite you to our Annual Corporate Gala.
                      This prestigious event will be held on November 15th at
                      7:00 PM, at the Grand Ballroom, Downtown Hotel.
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      Join us for an evening of networking, fine dining, and
                      special guest speakers. It's an excellent opportunity to
                      connect with industry leaders and celebrate our collective
                      achievements.
                    </p>
                  </div>
                  <div className="invContainer mt-16">
                    <h1 className="text-3xl" style={{ color: "#FFC52A" }}>
                      PEOPLE TO INVITE
                    </h1>
                    <div className="invList mt-4">
                      <ul className="list-disc list-inside ml-6 space-y-5 text-lg">
                        <li>Michael Brown</li>
                        <li>Jessica and Daniel Smith</li>
                        <li>Amanda Lee</li>
                        <li>Robert and Laura Wilson</li>
                        <li>Chris Green</li>
                        <li>Emma Thompson</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Second Content */}
                <div className="2ndContent mt-24 ">
                  <h1 className="courtesy text-5xl font-normal ">
                    Mr./Mrs./Ms./Sir/Ma'am
                  </h1>
                  {/* Boxes */}
                  <div className="boxes flex flex-row space-x-2 mt-12">
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaCalendar className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Date
                          </h3>
                          <p className="text-white font-bold">
                            18 September 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaClock className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Time
                          </h3>
                          <p className="text-white font-bold">
                            15:00PM - 22:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "35%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaInfoCircle className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Type
                          </h3>
                          <p className="text-white font-bold">WEDDING</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="msgContainer mt-8">
                    <p
                      className="titlemsg font-normal text-xl"
                      style={{ color: "#FFC52A" }}
                    >
                      EVENT INVITATION MESSAGE
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      We are thrilled to invite you to celebrate our wedding on
                      August 25th at 4:00 PM, at the Rose Garden Chapel.
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      Join us as we exchange vows and begin our new journey
                      together. There will be a reception to follow with dinner,
                      dancing, and lots of love.
                    </p>
                  </div>
                  <div className="invContainer mt-16">
                    <h1 className="text-3xl" style={{ color: "#FFC52A" }}>
                      PEOPLE TO INVITE
                    </h1>
                    <div className="invList mt-4">
                      <ul className="list-disc list-inside ml-6 space-y-5 text-lg">
                        <li>Michael Brown</li>
                        <li>Jessica and Daniel Smith</li>
                        <li>Amanda Lee</li>
                        <li>Robert and Laura Wilson</li>
                        <li>Chris Green</li>
                        <li>Emma Thompson</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right content */}
            <div
              className="rightpart  h-screen space-y-44"
              style={{
                width: "30.00%",
              }}
            >
              <div className="firstmap">
                <div
                  className="mapContainer rounded-xl mt-20 "
                  style={{ marginLeft: 0, padding: 0, height: "400px" }}
                >
                  {" "}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.5412188133272!2d124.65698204210297!3d8.483344512064226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c3ea4d24c7%3A0x549b347552a4b75d!2sLimketkai%20Luxe%20Hotel!5e0!3m2!1sen!2sph!4v1718695948464!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{
                      borderBottom: "1px black solid",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mapInfo flex flex-col bg-white text-black h-full rounded-b-lg">
                  <div className="mapInfoCOntainer mt-12  ml-12">
                    <div className="mapAddress flex flex-row  items-center">
                      <div
                        className="circle rounded-full h-14 w-14 flex items-center justify-center"
                        style={{ background: "#EAB308" }}
                      >
                        <FaMapPin className="w-8 h-8" />
                      </div>
                      <div className="ml-6">
                        <h3 className="eventLocTitle text-gray-500">
                          EVENT LOCATION
                        </h3>
                        <h2 className="eventLoc  font-bold text-2xl">
                          Lux Hotel
                        </h2>
                      </div>
                    </div>
                    <div
                      className="underline  mt-5"
                      style={{
                        width: "80%",
                        borderBottom: "2px solid black",
                      }}
                    ></div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT NAME
                    </div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT DESCRIPTION
                    </div>
                  </div>
                </div>
              </div>
              <div className="secondmap">
                <div
                  className="mapContainer rounded-xl "
                  style={{ marginLeft: 0, padding: 0, height: "400px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.5412188133272!2d124.65698204210297!3d8.483344512064226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c3ea4d24c7%3A0x549b347552a4b75d!2sLimketkai%20Luxe%20Hotel!5e0!3m2!1sen!2sph!4v1718695948464!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{
                      borderBottom: "1px black solid",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mapInfo flex flex-col bg-white text-black h-full rounded-b-lg">
                  <div className="mapInfoCOntainer mt-12  ml-12">
                    <div className="mapAddress flex flex-row  items-center">
                      <div
                        className="circle rounded-full h-14 w-14 flex items-center justify-center"
                        style={{ background: "#EAB308" }}
                      >
                        <FaMapPin className="w-8 h-8" />
                      </div>
                      <div className="ml-6">
                        <h3 className="eventLocTitle text-gray-500">
                          EVENT LOCATION
                        </h3>
                        <h2 className="eventLoc  font-bold text-2xl">
                          Lux Hotel
                        </h2>
                      </div>
                    </div>
                    <div
                      className="underline  mt-5"
                      style={{
                        width: "80%",
                        borderBottom: "2px solid black",
                      }}
                    ></div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT NAME
                    </div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT DESCRIPTION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        className="footer bg-gray-200 text-white h-1/3 rounded-t-lg border-t-1 border-solid border-gray-900 pb-30 flex-row flex mt-20"
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

export default eventDetails;
