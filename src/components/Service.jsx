const Service = ({ service, idx }) => {
  const { image, title, description } = service;
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="rounded-[30px] h-[400px] object-fill object-center"
      />
      <div className="bg-primary-color bg-opacity-60 rounded-[20px] px-[18px] pt-[18px] h-[150px] md:w-[350px] w-[270px]  absolute md:bottom-5 bottom-3 left-5 ">
        <h3 className="text-[#FFFFF5] text-[20px] font-semibold">{title}</h3>
        <div className="flex justify-between gap-5 items-end">
          <p className="text-[#FFFFF5] opacity-90 pt-[8px] text-[12px] font-normal">
            {description}{" "}
          </p>
          <img
            src="https://i.ibb.co/HTL65VN/Group-28.png"
            alt="arrow"
            className="object-contain w-[48px] h-[48px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
