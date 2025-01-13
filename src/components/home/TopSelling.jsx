import React from "react";

const TopSelling = () => {
  return (
    <div className="pt-20">
      <h1 className="text-center text-3xl font-bold pb-6 text-[#202124]">
        Top Selling
      </h1>
      <div className="container md:px-32 mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 justify-center">
        <div className="border-2 mx-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="/top_selling_1.jpg"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 mx-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="/top_selling_5.jpg"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 mx-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="/top_selling_2.jpg"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 mx-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="/top_selling_3.jpg"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
        <div className="border-2 mx-8 md:m-0 rounded-full bg-white shadow-md hover:scale-[110%] transition-all ease-in-out">
          <img
            src="/top_selling_4.jpg"
            alt=""
            className="p-5 rounded-full hover:scale-[115%] transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
