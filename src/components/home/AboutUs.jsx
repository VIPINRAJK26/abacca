import React from "react";

const AboutUs = () => {
  return (
    <div
      className="pt-20 md:px-32 px-4 grid grid-cols-1 md:grid-cols-2 gap-10"
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div className="bg-gray-200 rounded-2xl shadow-sm py-14 items-center content-center">
        <div className="">
          <h1 className="text-center text-3xl font-bold ">About Us</h1>
          <p className="w-2/3 text-lg text-justify mx-auto pt-5 leading-7">
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
          src="https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-3730.jpg?t=st=1736403974~exp=1736407574~hmac=8c79d4424ee190db897f07e1a1ed4b9b87ea694b9f23602b7e51a741f1dd56cc&w=740"
          alt=""
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;
