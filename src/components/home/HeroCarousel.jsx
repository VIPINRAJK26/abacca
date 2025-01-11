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
      image: "/hero-1.jpg", // Replace with your image
    },
    {
      title: "Explore Our Latest Collection",
      subtitle: "Trendy styles for every occasion.",
      image: "/hero-4.jpg", // Replace with your image
    },
    {
      title: "Comfort Meets Style",
      subtitle: "Step into a world of unmatched comfort.",
      image: "/hero-3.jpg", // Replace with your image
    },
    {
      title: "Comfort Meets Style",
      subtitle: "Step into a world of unmatched comfort.",
      image: "/hero-4.jpg", // Replace with your image
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
