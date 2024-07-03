const Faq = () => {
  return (
    <div>
      <button className="bg-[#FFFFF5] btn rounded-full border-[1px] border-primary-color text-[16px] font-normal">
        Faq
      </button>
      <h2 className="text-[36px] font-semibold text-primary-color pt-[16px] pb-[30px]">
        Frequntly Asked Question
      </h2>
      <div className="collapse collapse-arrow gap-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] rounded-[8px]">
          What are your office hours?
        </div>
        <div className="collapse-content bg-[#FFFFFF] px-10">
          <p className="text-[#343268] text-[14px] font-normal">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow gap-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] rounded-[8px]">
          What are your office hours?
        </div>
        <div className="collapse-content bg-[#FFFFFF] px-10">
          <p className="text-[#343268] text-[14px] font-normal">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow gap-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] rounded-[8px]">
          How can I schedule an appointment?
        </div>
        <div className="collapse-content bg-[#FFFFFF] px-10">
          <p className="text-[#343268] text-[14px] font-normal">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow gap-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] rounded-[8px]">
          Do you accept insurance?
        </div>
        <div className="collapse-content bg-[#FFFFFF] px-10">
          <p className="text-[#343268] text-[14px] font-normal">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow gap-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] rounded-[8px]">
          What should I bring to my appointment?
        </div>
        <div className="collapse-content bg-[#FFFFFF] px-10">
          <p className="text-[#343268] text-[14px] font-normal">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow gap-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] rounded-[8px]">
          Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content bg-[#FFFFFF] px-10">
          <p className="text-[#343268] text-[14px] font-normal">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
