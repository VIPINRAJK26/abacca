const ShopNow = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold py-5 text-[#202124]">
        Our Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  p-3 md:p-0 justify-center items-center md:mx-32">
        <div
          className="flex justify-end "
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <img
            src="/shop_now-1.jpg"
            alt=""
            className="hover:scale-[105%] ease-in-out duration-300 all"
          />
        </div>
        <div
          className="flex justify-start"
          data-aos="fade-top"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <img
            src="/shop_now_2.jpg"
            alt=""
            className="hover:scale-[105%] ease-in-out duration-300 all"
          />
        </div>
        <div
          className="flex justify-start"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <img
            src="/shop_now_3.jpg"
            alt=""
            className="hover:scale-[105%] ease-in-out duration-300 all"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
