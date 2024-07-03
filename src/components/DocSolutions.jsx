import { GoArrowUpRight } from "react-icons/go";

const DocSolutions = () => {
  return (
    <div className="md:py-[120px] py-[80px]">
      <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:items-start gap-7">
        <div className="space-y-10 md:w-[49%]">
          <button className="bg-[#FFFFF5] btn rounded-full border-[1px] border-primary-color text-[16px] font-normal">
            Who we are
          </button>
          <h2 className="text-primary-color font-semibold text-[36px] md:text-left text-center">
            We Help To Get Soultions
          </h2>
          <p className="text-[#4D4C7B] text-[16px] font-normal md:pr-20 md:text-left text-center">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>

          <div>
            <button className="btn md:mt-16  bg-[#FFC637] text-[#000000] text-[16px] font-medium rounded-[12px]">
              Learn More <GoArrowUpRight size={16} className="text-[#000000]" />{" "}
            </button>
          </div>
        </div>
        <div className="md:w-[48%]">
          <img
            src="https://i.ibb.co/g3nkgFw/3601dc7636262c1f67ce6f7371ba82cb-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-S2.jpg"
            //   src="https://i.ibb.co/Hz2v4yn/Rectangle-24.png"
            alt="doctors"
            className=" w-full h-auto rounded-[24px]"
          />
          <div className="-mt-[25%] md:-ml-[15%] mx-auto w-[410px] h-[220px] rounded-[32px] bg-[#343268] z-10 relative py-[47px] pl-[30px] pr-[18px]">
            <h2 className="text-[#FFF] text-[26px] font-medium">
              Our mission is simple
            </h2>
            <p className="pt-5 text-[#FFF] opacity-80 font-normal text-[16px] text-center md:text-left">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSolutions;
