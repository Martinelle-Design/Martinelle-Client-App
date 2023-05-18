import  {
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
    name: "PRIVATE RESIDENTIAL",
    url: "/services/private-residential",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "COMMERCIAL",
    url: "/services/commercial",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "FURNITURE MANUFACTURING",
    url: "/services/furniture-manufacturing",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "HOSPITALITY",
    url: "/services/hospitality",
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
          title={"Services".toUpperCase()}
          btnData={{ text: "Show More".toUpperCase(), url: "" }}
        >
          <p>
            Our services offer a customized and comprehensive approach to
            design. We help you envision the potential of your workplace by
            ensuring your interior is delivered to the highest quality.
          </p>
          <p>
            Custom designed furniture is our specialty. We create pieces
            exclusively for your interior. Our team takes pride in assuring each
            piece not only fits the space perfectly, but that it also reflects
            our client’s personality.
          </p>
        </HomePageImageBanner>
        <HomePageImageBanner
          customClass={`${namespace}-img-banner-right`}
          contentDirection="right"
          imgUrl=""
          title={"projects".toUpperCase()}
          btnData={{ text: "Show More".toUpperCase(), url: "" }}
        >
          <p>
            Martinelle excels at building character in all our commercial and
            residential projects. Our priority is to make sure the identity of
            your brand is present in every corner, detail and accent.
          </p>
          <p>
            We are committed to a design concept that meets your vision from the
            functionality, aesthetic and ambiance perspective.
          </p>
        </HomePageImageBanner>
        <HomePageBottomBanner />
      </div>
    </div>
  );
};
export default HomePage;
