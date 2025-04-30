import React from "react";
import { FaFileContract, FaHome, FaPhoneAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-evenly items-center">
      <div className="flex items-center gap-2 ">
        <h1 className="text-2xl flex items-center">
          {" "}
         
           Acharya.
        </h1>
      </div>
      <ul className="flex gap-3 cursor-pointer items-center">
        <li className=" border border-white px-4 py-2 rounded-md flex items-center gap-2">
          <span>
            <FaHome />
          </span>
          <span>Home</span>
        </li>
        <li className=" flex items-center border border-red-400 px-4 py-2 rounded-md">
          About
          <span>
            {" "}
            <FaPerson />
          </span>{" "}
        </li>
        <li className="flex items-center border border-red-400 px-4 py-2 rounded-md">
          {" "}
          <span>
            <FaPhoneAlt />
          </span>
          Contact
        </li>
        <li className="flex items-center border border-red-400 px-4 py-2 rounded-md">
          {" "}
          <MdOutlineDesignServices /> Services
        </li>
        <li className="flex items-center border border-red-400 px-4 py-2 rounded-md hover:bg-red-400">
          Blog <FaRegFileAlt />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
