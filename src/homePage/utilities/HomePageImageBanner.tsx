import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";
import "react-lazy-load-image-component/src/effects/blur.css";
import useWindowWidth from "../../hooks/use-window-width";
const namespace = "home-page-img-banner";
export type HomePageImageBannerContentProps = {
  title?: string;
  children: string | JSX.Element | JSX.Element[];
  btnData: {
    text: string;
    url?: string;
    onClick?: (
      e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => void;
  };
};
const HomePageHeader = ({ title }: { title?: string }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleEntry = useIntersectionObserver(titleRef, {});
  const isTitleVisible = !!titleEntry?.isIntersecting;
  return (
    <h3
      ref={titleRef}
      className={`${namespace}-content-title${isTitleVisible ? " show" : ""}`}
    >
      {title}
    </h3>
  );
};
const HomePageImageBannerContent = ({
  title,
  children,
  btnData,
}: HomePageImageBannerContentProps) => {
  return (
    <div className={`${namespace}-content-container`}>
      <div className={`${namespace}-content`}>
        {title ? <HomePageHeader title={title} /> : null}
        <div className={`${namespace}-content-inner-container`}>{children}</div>
        {btnData.url ? (
          <Link
            className={`${namespace}-content-btn`}
            to={btnData.url}
            onClick={btnData.onClick}
          >
            {btnData.text}
          </Link>
        ) : (
          <button
            className={`${namespace}-content-btn`}
            onClick={btnData.onClick}
          >
            {btnData.text}
          </button>
        )}
      </div>
    </div>
  );
};
const HomePageImageBannerImage = ({
  imgUrl,
  imgDescription,
  imgPlaceholderUrl,
}: ImageProps) => (
  <div className={`${namespace}-img-container`}>
    <LazyLoadImage
      src={imgUrl}
      alt={imgDescription ? imgDescription : ""}
      placeholderSrc={imgPlaceholderUrl ? imgPlaceholderUrl : ""}
      useIntersectionObserver
      effect="blur"
    />
  </div>
);
const HomePageImageBanner = ({
  customClass,
  contentDirection = "left",
  imgUrl,
  imgDescription,
  imgPlaceholderUrl,
  title,
  children,
  btnData,
}: {
  customClass?: string;
  contentDirection?: "left" | "right";
} & ImageProps &
  HomePageImageBannerContentProps) => {
  const mediumWindowWidth = useWindowWidth(768);
  return (
    <div
      className={`${namespace}-container${
        customClass ? " " + customClass : ""
      }`}
    >
      {!mediumWindowWidth && <HomePageHeader title={title} />}
      {(!mediumWindowWidth || contentDirection === "left") && (
        <HomePageImageBannerImage
          imgUrl={imgUrl}
          imgDescription={imgDescription}
          imgPlaceholderUrl={imgPlaceholderUrl}
        />
      )}
      <HomePageImageBannerContent
        title={mediumWindowWidth ? title : ""}
        btnData={btnData}
      >
        {children}
      </HomePageImageBannerContent>
      {mediumWindowWidth && contentDirection === "right" && (
        <HomePageImageBannerImage
          imgUrl={imgUrl}
          imgDescription={imgDescription}
          imgPlaceholderUrl={imgPlaceholderUrl}
        />
      )}
    </div>
  );
};
export default HomePageImageBanner;
