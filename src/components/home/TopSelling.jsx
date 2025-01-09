import React from "react";

const TopSelling = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center text-3xl font-bold pb-6 text-[#202124]">
        Top Selling
      </h1>
      <div className="container md:px-32 mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 justify-center">
        <div className="border-2 m-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 m-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="https://img.freepik.com/free-photo/shot-elegant-beautiful-leather-heels-isolated-white_181624-32574.jpg?t=st=1736323953~exp=1736327553~hmac=d1bb35818688a1ed01eed85e2c494dbf203f596de9a29e551111a9783b33918a&w=740"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 m-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="https://img.freepik.com/premium-photo/original-black-mens-sports-shoes-isolated_94064-692.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 m-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 m-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="https://img.freepik.com/premium-photo/pair-new-blue-sneakers-isolated-white-background_461160-3046.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
