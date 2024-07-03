import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import "./AppointmentBanner.css";
const AppointmentBanner = () => {
  return (
    <div>
      <div className=" relative my-[140px]">
        <img
          src="https://i.ibb.co/wNQfGQh/banner-doctor.png"
          alt="banner"
          className="object-cover object-right w-full h-[477px] rounded-[32px]"
        />

        <div className="h-[477px] banner   absolute w-full top-0 rounded-[32px]">
          <div className="flex justify-between ">
            <div className="pl-[30px] md:pl-[60px]">
              <h2 className="text-[#FFFFF5] text-[40px] font-semibold mt-16">
                Get Your <br /> First Appointment <br /> at 50% Off!
              </h2>
              <div className="flex gap-5 items-center mt-8">
                <button className="btn  bg-[#FFC637] text-[#000000] text-[16px] font-medium rounded-[12px]">
                  Appointment{" "}
                  <GoArrowUpRight size={16} className="text-[#000000]" />{" "}
                </button>
                <button className="btn btn-outline border-[#FFFFF5] text-[#FFFFF5] text-[16px] font-medium rounded-[12px]">
                  Learn More <GoArrowUpRight size={16} fill="#ffffff" />{" "}
                </button>
              </div>
            </div>
            <div className="pr-12 mt-6">
              <img src="https://i.ibb.co/Vv5M393/Group-1.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
