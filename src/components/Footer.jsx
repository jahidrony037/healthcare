import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-primary-color py-[120px]">
      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-end gap-12">
          <div className="md:col-span-4 space-y-[33px] text-[#FFFFF5]">
            <img src="https://i.ibb.co/Vv5M393/Group-1.png" alt="logo" />
            <div className="text-[16px] ">
              <p>123 Main Street Anytown, USA</p>
              <p>Postal Code: 12345</p>
            </div>
            <div className="text-[16px] ">
              <p>Support: support@oyolloo.com </p>
              <p>(Available : 10:00am to 07:00pm)</p>
            </div>
          </div>

          <div className="md:col-span-3 text-[#FFFFF5] text-[14px] space-y-6">
            <p>Home</p>
            <p>About Us</p>
            <p>Success Page</p>
            <p>Terms and Condition</p>
          </div>

          <div className="md:col-span-3 text-[#FFFFF5] text-[14px] space-y-6">
            <p>Services</p>
            <p> Scheduling</p>
            <p>Contact Us</p>
            <p>Patient Portal</p>
          </div>

          <div className="md:col-span-2 mt-5">
            <p className="text-[#FFFFF5] text-[14px] ">Follow Us</p>
            <div className="flex gap-9 mt-4">
              <a href="#facebook">
                <FaFacebook fill="#FFFFF5" />
              </a>
              <a href="#instagram">
                <FaInstagram fill="#FFFFF5" />
              </a>
              <a href="#linkedin">
                <IoLogoLinkedin fill="#FFFFF5" />
              </a>
              <a href="#youtube">
                <CiYoutube fill="#FFFFF5" />
              </a>
            </div>

            <p className="text-[#FFFFF5] text-[14px] opacity-80 mt-7">
              @docplus 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
