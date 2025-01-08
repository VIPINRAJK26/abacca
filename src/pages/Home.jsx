import AboutUs from "../components/home/AboutUs";
import HeroCarousel from "../components/home/HeroCarousel";
import ShopNow from "../components/home/ShopNow";
import TopSelling from "../components/home/TopSelling";
const Home = () => {
  return (
    <div>
      <div>
        <HeroCarousel />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <TopSelling />
      </div>
      <div>
        <ShopNow />
      </div>
    </div>
  );
};

export default Home;
