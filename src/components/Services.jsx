import { GoArrowUpRight } from "react-icons/go";
import Service from "./Service";

const Services = () => {
  const items = [
    {
      image:
        "https://i.ibb.co/fCRSH7n/963daeeb01d36eac9fd953c6e229ceaf-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-e-Y.jpg",
      title: "Advanced Technology",
      description:
        "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision",
    },
    {
      image:
        "https://i.ibb.co/FHmpDHW/8295e9b546e96749d957d73cbe783236-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-S6.jpg",
      title: "Online Doctor Meet",
      description:
        "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision",
    },
    {
      image:
        "https://i.ibb.co/L63q23K/d9963f5d094614ecef6d4fb543f3b0e9-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-ZV.jpg",
      title: "Consultancy your health",
      description:
        "Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision",
    },
  ];
  return (
    <div className="bg-[#FFFFF5] p-[40px] rounded-[32px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px]">
        <div className="space-y-5">
          <button className="bg-[#FFFFF5] btn rounded-full border-[1px] border-primary-color text-[16px] font-normal">
            Service
          </button>
          <h2 className="text-primary-color font-semibold text-[36px] md:text-left text-center">
            Empowering Health, Enriching Lives
          </h2>
          <p className="text-[#4D4C7B] text-[16px] font-normal md:pr-20 md:text-left text-center">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>

          <div>
            <button className="btn md:mt-16  bg-[#FFC637] text-[#000000] text-[16px] font-medium rounded-[12px]">
              Appointment{" "}
              <GoArrowUpRight size={16} className="text-[#000000]" />{" "}
            </button>
          </div>
        </div>
        {items.map((service, idx) => (
          <Service key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
