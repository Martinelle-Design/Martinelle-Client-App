import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomePageNav from "./utilities/HomePageNav";
import HomePageCategoriesNav from "./utilities/HomePageCategoriesNav";
import { Link } from "react-router-dom";

const namespace = "home-pg";
const IntroBanner = () => {
  return (
    <div className={`${namespace}-intro-banner`}>
      <LazyLoadImage
        src={""}
        placeholderSrc={""}
        useIntersectionObserver
        effect="blur"
        alt={""}
      />
      <div className={`${namespace}-banner-summary`}>
        <span> High End Pieces For Home Decor Spaces</span>
        <Link to="/new-arrivals">{"Shop New Arrivals".toUpperCase()}</Link>
      </div>
    </div>
  );
};
const SecondaryBanner = () => {
  return <div className={`${namespace}-secondary-banner`}></div>;
};
const HomePage = () => {
  return (
    <div className={`${namespace}-container`}>
      <div className={`${namespace}-inner-container`}>
        <HomePageNav />
        <IntroBanner />
        <HomePageCategoriesNav />
        <SecondaryBanner />
      </div>
    </div>
  );
};
export default HomePage;
