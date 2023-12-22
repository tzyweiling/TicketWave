import React from "react";
import { QuestionMarkCircleIcon, MailIcon } from "@heroicons/react/solid";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-top border-black text-black pt-5 pb-3">
      <div className="container flex justify-between ">
        <div>
          <ul className="list-none">
            <li className="mb-4">About Us</li>
            <li className="mb-4">Contact Support</li>
            <li className="mb-4">Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div>
          <ul className="list-none">
            <li className="text-lg font-semibold mb-4">Need Help?</li>
            <li className="mb-4 flex items-center">
              <MailIcon className="sm:w-6 sm:h-6 w-7 h-7 mr-2" />
              Resend Booking Information
            </li>
            <li className="flex items-center">
              <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />
              Frequently Asked Question
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h2 className="text-lg font-semibold mb-5">Follow us on:</h2>
            <div className="flex items-center">
              <FaFacebook className="w-7 h-7 sm:mx-1 lg:mx-3" />
              <FaInstagram className="w-7 h-7 sm:mx-1 lg:mx-3" />
              <FaXTwitter className="w-7 h-7 sm:mx-1 lg:mx-3" />
              <FaYoutube className="w-7 h-7 sm:mx-1 lg:mx-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
