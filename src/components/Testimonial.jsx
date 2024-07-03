import { FaStar } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  const { userImage, title, description, name, designation, rating } =
    testimonial;
  //   console.log(rating);
  const stars = Array(rating).fill(<FaStar fill="#FFE03D" size={14} />);

  return (
    <div className="bg-[#FFFFF5] p-5 rounded-[16px] md:w-[371px] md:h-[241px] flex flex-col justify-between">
      <h2 className="text-primary-color text-[19px] font-semibold">{title}</h2>
      <p className="text-[#4D4C7B] text-[12px] font-normal py-[12px]">
        {description}
      </p>
      <div className="flex items-center gap-2">
        <div>
          <img
            src={userImage}
            alt="imageURL"
            className="w-[44px] h-[44px] rounded-full object-cover"
          />
        </div>
        <div>
          <p>
            <b>{name}</b>, {designation}
          </p>
          <div className="flex gap-2 items-center">
            {stars?.map((star, idx) => (
              <span key={idx}>{star}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
