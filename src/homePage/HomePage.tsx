import HomePageNav from "./utilities/HomePageNav";
import HomePageCategoriesNav, {
  ImageProps,
  ImageSlide,
} from "./utilities/HomePageCategoriesNav";
import HomePageImageBanner from "./utilities/HomePageImageBanner";
import HomePageImageBannerFull from "./utilities/HomePageImgBannerFull";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
const namespace = "home-pg";
const interiorDesignCategories: (ImageProps & {
  name: string;
  id: string;
  url?: string;
  children?: JSX.Element | string | JSX.Element[];
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
})[] = [
  {
    id: uuid(),
    name: "ARMCHAIRS & SOFAS",
    url: "",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "ARMCHAIRS & SOFAS",
    url: "",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "ARMCHAIRS & SOFAS",
    url: "",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "ARMCHAIRS & SOFAS",
    url: "",
    imgUrl: "",
  },
];
const HomePageBottomBanner = () => {
  return (
    <>
      <div className={`${namespace}-bottom-banner-action`}>
        <h3>Browse Our Interior Designs</h3>
        <Link to="/catalog">Shop Now</Link>
      </div>

      <div className={`${namespace}-bottom-banner`}>
        {interiorDesignCategories.map((category) => {
          const el = category.url ? (
            <Link
              key={category.id}
              to={category.url}
              onClick={category.onClick}
              className={`${namespace}-bottom-banner-link`}
            >
              <ImageSlide
                name={category.name}
                imgUrl={category.imgUrl}
                imgDescription={category.imgDescription}
                imgPlaceholderUrl={category.imgPlaceholderUrl}
              />
            </Link>
          ) : (
            <button
              key={category.id}
              onClick={category.onClick}
              className={`${namespace}-bottom-banner-link`}
            >
              <ImageSlide
                name={category.name}
                imgUrl={category.imgUrl}
                imgDescription={category.imgDescription}
                imgPlaceholderUrl={category.imgPlaceholderUrl}
              />
            </button>
          );
          return el;
        })}
      </div>
    </>
  );
};
const HomePage = () => {
  return (
    <div className={`${namespace}-container`}>
      <div className={`${namespace}-inner-container`}>
        <HomePageNav />
        <HomePageImageBannerFull
          customClass={`${namespace}-intro-banner`}
          imgUrl=""
          btnData={{ text: "Show More".toUpperCase(), url: "" }}
        >
          High End Pieces for Home Decor Spaces
        </HomePageImageBannerFull>
        <HomePageImageBanner
          customClass={`${namespace}-img-banner-left`}
          contentDirection="left"
          imgUrl=""
          title="Elevated Design"
          btnData={{ text: "Show More".toUpperCase(), url: "" }}
        >
          Clean lines and subtle curves create a modern, minimalist foundation
          at the perfect height with lifestyle-enhancing details that upgrade
          any space.
        </HomePageImageBanner>
        <HomePageCategoriesNav />
        <HomePageImageBanner
          customClass={`${namespace}-img-banner-right`}
          contentDirection="right"
          imgUrl=""
          title="Elevated Design"
          btnData={{ text: "Show More".toUpperCase(), url: "" }}
        >
          Clean lines and subtle curves create a modern, minimalist foundation
          at the perfect height with lifestyle-enhancing details that upgrade
          any space.
        </HomePageImageBanner>
        <HomePageBottomBanner />
      </div>
    </div>
  );
};
export default HomePage;
