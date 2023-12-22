import React from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black to-white sm:p-5 pt-10 lg:p-10 sm:pb-14 lg:pb-14">
      <div className="flex items-center justify-between">
        <div
          style={{ fontFamily: "Bungee, sans-serif" }}
          className="text-white font-bold lg:text-4xl sm:text-2xl"
        >
          TICKETWAVE
        </div>

        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder=" Search..."
            className="border rounded-l-lg p-1 lg:w-96"
          />
          <button className="bg-white text-black p-1 rounded-r-lg">
            <SearchIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <Link to="/Payment">
              <button className="text-white">
                <ShoppingCartIcon className="w-7 h-7 lg:ml-5 sm:ml-2" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <button className="text-white font-semibold">Log In</button>
            <span className="text-white font-semibold">|</span>
            <button className="text-white font-semibold">Sign Up</button>
          </div>

          <button className="text-white">
            <UserCircleIcon className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="bg-gray-200 rounded-full py-1 px-5 sm:space-x-5 lg:space-x-8">
          <a
            href="#"
            className="text-black text-sm font-extrabold no-underline"
          >
            HOME
          </a>
          <span className="text-black text-sm font-extrabold">|</span>
          <a
            href="#"
            className="text-black text-sm font-extrabold no-underline"
          >
            EVENT
          </a>
          <span className="text-black text-sm font-extrabold">|</span>
          <a href="#" className="text-black  font-extrabold no-underline">
            FAQ
          </a>
          <span className="text-black text-sm font-extrabold">|</span>
          <a
            href="#"
            className="text-black text-sm font-extrabold no-underline"
          >
            CONTACT US
          </a>
          <span className="text-black text-sm font-extrabold">|</span>
          <a
            href="#"
            className="text-black text-sm font-extrabold no-underline"
          >
            ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
