import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AdaptiveCarousel from "../../utilities/adaptiveCarousel/AdaptiveCarousel";
import { v4 as uuid } from "uuid";
export type ImageProps = {
  imgPlaceholderUrl?: string;
  imgUrl: string;
  imgDescription?: string;
};
const namespace = "home-pg";
const categories = [
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
  { name: "Nightstands", imgUrl: "", url: "/" },
];
export const ImageSlide = ({
  imgUrl,
  name,
  imgDescription,
  imgPlaceholderUrl,
}: {
  name: string;
} & ImageProps) => (
  <div className={`${namespace}-img-slide`}>
    <div className={`${namespace}-img-container`}>
      <LazyLoadImage
        src={imgUrl}
        alt={imgDescription ? imgDescription : ""}
        placeholderSrc={imgPlaceholderUrl ? imgPlaceholderUrl : ""}
        useIntersectionObserver
        effect="blur"
      />
    </div>

    <span className={`${namespace}-img-title`}>{name}</span>
  </div>
);
const categoriesArr = categories.map((e) => ({
  id: uuid(),
  url: e.url,
  children: <ImageSlide imgUrl={e.url} name={e.name} />,
}));
const HomePageCategoriesNav = () => {
  return (
    <>
      <h3 className={`${namespace}-category-nav-title`}>
        {"Shop our favorite".toUpperCase()}
      </h3>
      <AdaptiveCarousel
        arr={categoriesArr}
        classPrefix={`${namespace}-category`}
      />
    </>
  );
};
export default HomePageCategoriesNav;
