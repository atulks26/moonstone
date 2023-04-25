import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="img">
          <img loading="lazy" src="https://mediaim.expedia.com/destination/1/aecefcf11ece3551db6ab52227051f19.jpg" alt="" />
        </div>
        <div className="img">
          <img loading="lazy" src="https://www.livelaw.in/h-upload/2022/05/10/417056-taj-mahal.jpg" alt="" />
        </div>
        <div className="img">
          <img loading="lazy" src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;