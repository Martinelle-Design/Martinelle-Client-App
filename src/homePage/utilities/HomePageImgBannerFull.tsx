import { ImageProps } from "./HomePageCategoriesNav";
import { HomePageImageBannerContentProps } from "./HomePageImageBanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

const namespace = "home-pg-img-banner-full";
const HomePageImageBannerFull = ({
  customClass,
  imgUrl,
  imgDescription,
  imgPlaceholderUrl,
  children,
  btnData,
}: { customClass: string } & ImageProps &
  Omit<HomePageImageBannerContentProps, "title">) => {
  return (
    <div
      className={`${namespace}-img-container${
        customClass ? " " + customClass : ""
      }`}
    >
      <LazyLoadImage
        src={imgUrl}
        placeholderSrc={imgPlaceholderUrl}
        useIntersectionObserver
        effect="blur"
        alt={imgDescription}
      />
      <div className={`${namespace}-content-container`}>
        {children}
        {btnData.url ? (
          <Link
            className={`${namespace}-btn`}
            to={btnData.url}
            onClick={btnData.onClick}
          >
            {btnData.text}
          </Link>
        ) : (
          <button className={`${namespace}-content-btn`} onClick={btnData.onClick}>
            {btnData.text}
          </button>
        )}
      </div>
    </div>
  );
};
export default HomePageImageBannerFull;
