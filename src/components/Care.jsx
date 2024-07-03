import { BsStarFill } from "react-icons/bs";
import chart from "../../public/images/chart.png";
import coin from "../../public/images/coin.png";
import contract from "../../public/images/contract.png";
import person1 from "../../public/images/person1.png";
import person2 from "../../public/images/person2.png";
import person3 from "../../public/images/person3.png";
import person4 from "../../public/images/person4.png";
import videoLogo from "../../public/images/video-logo.png";
const Care = () => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1  gap-5">
      {/* left side */}
      <div className="md:col-span-3 bg-[#FBFBFB] rounded-[24px] py-5 pl-5  border-[0.5px] border-[#02004333]">
        <h2 className="text-[40px] font-semibold text-primary-color">90%</h2>
        <p className="pt-2 text-primary-color text-[14px] opacity-80 font-normal">
          Patient satisfaction <br /> rate, reflecting our <br /> commitment.
        </p>
        <img
          src={chart}
          alt="chart"
          className="w-[130px] h-[130px] mx-auto pt-2"
        />
      </div>

      {/* Middle part */}
      <div className="md:col-span-6">
        <div>
          <h2 className="text-primary-color text-[48px] font-semibold text-center">
            Comprehensive Care for Every Patient
          </h2>
        </div>
        <div className="flex md:justify-between items-end gap-5 flex-wrap md:flex-nowrap justify-center">
          <div className="p-5 bg-[#fffff5] rounded-[24px] md:w-[216px] md:h-[190px] border-[0.5px] border-[#02004333]">
            <h2 className="text-[40px] font-semibold text-primary-color">
              500+
            </h2>
            <p className="pt-2 text-primary-color text-[14px] opacity-80 font-normal">
              Board-certified <br /> doctors
            </p>
            <div className="flex md:items-end justify-center md:justify-end ">
              <img
                src={contract}
                alt="contract"
                className="w-[77px] h-[77px] object-contain object-center md:pb-6 pr-5"
              />
            </div>
          </div>

          <div className="p-5 bg-[#FBFBFB] rounded-[24px] border-[0.5px] border-[#02004333] md:w-[216px]  md:h-[162px]">
            <h2 className="text-[40px] font-semibold text-primary-color flex gap-3 items-center">
              <p>4.8</p> <BsStarFill fill="#FFE03D" size={32} />
            </h2>
            <p className="text-[14px] font-normal text-primary-color opacity-80">
              Over 20,000 Patient
            </p>
            <div className="flex pt-2 pb-2 pr-10">
              <img
                src={person1}
                alt="person1"
                className="w-full object-cover "
              />
              <img
                src={person2}
                alt="person2"
                className="w-full object-cover -ml-[15px]"
              />
              <img
                src={person3}
                alt="person3"
                className="w-full object-cover -ml-[15px]"
              />
              <img
                src={person4}
                alt="person4"
                className="w-full object-cover -ml-[15px]"
              />
            </div>
          </div>

          <div className="p-5 bg-[#fffff5] rounded-[24px] md:w-[216px] md:h-[190px] border-[0.5px] border-[#02004333]">
            <h2 className="text-[40px] font-semibold text-primary-color">
              $5000
            </h2>
            <p className="pt-2 text-primary-color text-[14px] opacity-80 font-normal">
              Money spend <br /> for poor patient
            </p>
            <div className="flex md:items-end justify-center md:justify-end">
              <img
                src={coin}
                alt="contract"
                className="w-[77px] h-[77px] object-contain object-center md:pb-6 pr-5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="md:col-span-3 bg-[#FBFBFB] rounded-[24px] py-5 pl-5 border-[0.5px] border-[#02004333]">
        <h2 className="text-[40px] font-semibold text-primary-color">50+</h2>
        <p className="pt-2 text-primary-color text-[14px] opacity-80 font-normal">
          Free lession video <br />
          for patient
        </p>
        <img
          src={videoLogo}
          alt="chart"
          className="w-[130px] h-[130px] mx-auto pt-5"
        />
      </div>
    </div>
  );
};

export default Care;
