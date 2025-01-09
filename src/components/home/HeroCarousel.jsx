import Slider from "react-slick";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const slides = [
    {
      title: "Welcome to Abaca Footwear",
      subtitle: "Your one-stop destination for premium footwear.",
      image:
        "https://img.freepik.com/free-photo/background-gradient-lights_23-2149304984.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid", // Replace with your image
    },
    {
      title: "Explore Our Latest Collection",
      subtitle: "Trendy styles for every occasion.",
      image:
        "https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2514.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid", // Replace with your image
    },
    {
      title: "Comfort Meets Style",
      subtitle: "Step into a world of unmatched comfort.",
      image:
        "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2430.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid", // Replace with your image
    },
  ];

  return (
    <div className="relative  2xl:mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-[700px] bg-cover bg-center flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-center bg-black bg-opacity-50 p-8 m-10 md:m-0 rounded-lg max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
