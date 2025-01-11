import React from "react";

const AboutUs = () => {
  return (
    <div
      className="pt-20 md:px-32 px-4 grid grid-cols-1 md:grid-cols-2 gap-10"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div className="bg-gray-200 rounded-2xl shadow-sm py-14 h-[25.8rem] items-center content-center">
        <div className="">
          {/* <h1 className="text-center text-3xl font-bold ">About Us</h1> */}
          <p className="w-2/3 text-xl text-justify mx-auto  leading-7">
            Abaca Footwear is a leading manufacturer and distributor of
            high-quality, stylish, and durable footwear for men, women, and
            kids. Catering to diverse tastes and needs, Abaca offers a wide
            range of casual, formal, and trendy designs. Their exclusive
            collections bring unique charm and elegance, perfect for every
            celebration.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/about-2.jpg"
          alt=""
          className="rounded-2xl  md:h-[96%] "
        />
      </div>
    </div>
  );
};

export default AboutUs;
