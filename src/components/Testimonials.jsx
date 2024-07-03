import Testimonial from "./Testimonial";

const Testimonials = () => {
  const items = [
    {
      title: "Expertise and Compassion Combined",
      description:
        "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
      name: "Sarah D",
      designation: "IT Professional",
      userImage:
        "https://i.ibb.co/dmDBQ1x/724f72eb2c73d3e7560e01a5f0093700-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-dsh.jpg",
      rating: 4,
    },
    {
      title: "Life-Saving Care, Life-Changing Experience",
      description:
        "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
      name: "Michael R",
      designation: "Business Executive",
      userImage:
        "https://i.ibb.co/xhgKFpT/f2cf44bfa3af771f6396363d4ae67aab-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-mj.jpg",
      rating: 3,
    },
    {
      title: "A Partner in Health and Wellness",
      description:
        "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
      name: "David S",
      designation: "Lawyer",
      userImage:
        "https://i.ibb.co/tHMKgcL/d08cbe61699dcdccad10d7e4dd0904b0-Expires-1721001600-Key-Pair-Id-APKAQ4-GOSFWCVNEHN3-O4-Signature-h-Z.jpg",
      rating: 4,
    },
  ];
  return (
    <div>
      <div className="my-[120px]">
        <button className="bg-[#FFFFF5] btn rounded-full border-[1px] border-primary-color text-[16px] font-normal">
          Testimonial
        </button>
        <h2 className="text-[36px] font-semibold text-primary-color pt-[16px] pb-[30px]">
          What they say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[30px] items-center md:items-start">
          {items.map((testimonial, idx) => (
            <Testimonial key={idx} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-6 gap-2">
          <div className="w-[12px] h-[12px] rounded-full bg-[#e2e2e9] cursor-pointer"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#FFE03D] cursor-pointer"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-[#e2e2e9] cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
