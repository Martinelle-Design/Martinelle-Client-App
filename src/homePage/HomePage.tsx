import HomePageNav from "./utilities/HomePageNav";
import HomePageCategoriesNav from "./utilities/HomePageCategoriesNav";
import HomePageImageBanner from "./utilities/HomePageImageBanner";
import HomePageImageBannerFull from "./utilities/HomePageImgBannerFull";
const namespace = "home-pg";
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
      </div>
    </div>
  );
};
export default HomePage;
