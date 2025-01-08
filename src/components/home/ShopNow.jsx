const ShopNow = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold py-5 text-[#202124]">
        Shop Now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  p-3 md:p-0 justify-center items-center">
        <div className="flex justify-end">
          <img
            src="https://img.freepik.com/free-vector/flat-design-summer-sale-banner-template-with-3d-illustration_1361-1877.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
          />
        </div>
        <div className="flex justify-start">
          <img
            src="https://img.freepik.com/free-vector/flat-design-summer-sale-banner-template-with-3d-illustration_1361-1877.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
