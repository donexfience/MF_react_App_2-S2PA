import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@images/Website_logo 1.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#1D2C5E] text-white py-10 px-8 md:px-16 ">
      <div className=" flex flex-col   md:grid md:grid-cols-2 lg:md:grid-cols-3 md:justify-between md:items-center md:gap-8 gap-8 ">
        {/* Left Section: Logo and Map */}
        <div className="  md:grid md:flex-col flex-row  md:self-start   md:gap-2 lg:gap-8 space-y-5">
          {/* Logo */}
          <div className=" flex justify-center  gap-4  md:justify-start  items-center  md:gap-3">
            <img
              src={logo}
              alt="Logoo"
              className="w-8  cursor-pointer "
              onClick={() => {
                navigate("/");
              }}
            />
            <h2
              className="text-xl font-bold cursor-pointer "
              onClick={() => {
                navigate("/");
              }}
            >
              MicroFrontend
            </h2>
          </div>

          {/* Map Embed */}
          <div className="w-full ssm:w-[300px]  sm:w-[300px] mx-auto   md:w-[300px] md:h-[200px]  lg:w-[300px] lg:h-[200px] xl:h-[300px] xl:w-[400px] overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453054.894578769   76.8577215660896!3d11.388268819608731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ef5df6a4a4ed%3A0x54e628785e76eb8c!2sCARE%20SKIN%20%26%20ENT%20MULTISPECIALITY%20CLINIC!5e1!3m2!1sen!2sin!4v1727683027658!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-lg "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section: Links, Address, and Socials */}

        {/* Quick Links */}
        <div className="mx-auto flex flex-col  h-full ">
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-5 ">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Address and Contact */}

        {/* Social Links and Timing */}

        <div className=" border-t-2 md:border-none md:self-start">
          <h3 className="text-lg font-bold mb-4 mt-4 md:mt-0 text-center md:text-left">
            Address
          </h3>
          <p className="text-sm text-center md:text-left ">
            dsfasfsdfa
            <br />
            afadssssssssssssss
            <br />
            sadsad
          </p>
          <p className="mt-4 font-semibold text-center md:text-left">
            Contact us
          </p>
          <p className="text-sm pt-5 text-center md:text-left">999402549998,</p>

          <div className="mt-5 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 ">Follow us</h3>
            <div className="flex space-x-4 justify-center md:felx md:justify-start">
              <a href="#" className="text-white hover:text-gray-400">
                <img
                  src="../../public/assets/Group.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <img
                  src="../../public/assets/Group 30.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <img
                  src="../../public/assets/Group31.png"
                  alt="Telegram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <img
                  src="../../public/assets/Group32.png"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </a>
            </div>

            <h3 className="text-lg font-bold mt-6">Timing</h3>
            <p className="text-sm">Open now till 10:00 pm</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
        &copy; 2024 Care Plus. All Rights Are Reserved.
      </div>
    </footer>
  );
};

export default Footer;
