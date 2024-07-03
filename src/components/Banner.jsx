import React from "react";
import bannerImage from "../../public/images/doctor_banner.png";
const Banner = () => {
  return (
    <>
      <div className="relative w-full rounded-[48px]">
        <img
          src={bannerImage}
          alt="doctors"
          className="object-cover object-center w-full h-[470px] rounded-[48px]"
        />
        <div className="absolute top-0 w-[100%] h-[470px]  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[48px]   bg-primary-color bg-opacity-10"></div>
      </div>
    </>
  );
};

export default Banner;
