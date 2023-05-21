import HomePageImageBanner from "./utilities/HomePageImageBanner";
import HomePageImageBannerFull from "./utilities/HomePageImgBannerFull";
import ProjectsClickableBanner from "../utilities/projectsCickableBanner/ProjectsClickableBanner";
import { Link } from "react-router-dom";
import ContactActionButton from "../utilities/contactActionBanner/ContactActionBanner";
const namespace = "home-pg";
const HomePageBottomBanner = () => {
  return (
    <>
      <div className={`${namespace}-bottom-banner-action`}>
        <h3>Browse Interior Projects</h3>
        <Link to="/projects">EXPLORE</Link>
      </div>
      <ProjectsClickableBanner />
      <ContactActionButton />
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
          btnData={{ text: "Learn More".toUpperCase(), url: "/about" }}
        >
          Creating Unique Functional Interiors & Crafting Custom Furniture
        </HomePageImageBannerFull>
        <div className={`${namespace}-banner-containers`}>
          <HomePageImageBanner
            customClass={`${namespace}-img-banner-left`}
            contentDirection="left"
            imgUrl=""
            title={"Services".toUpperCase()}
            btnData={{ text: "Show More".toUpperCase(), url: "/services" }}
          >
            <p>
              Our services offer a customized and comprehensive approach to
              design. We help you envision the potential of your workplace by
              ensuring your interior is delivered to the highest quality.
            </p>
            <p>
              Custom designed furniture is our specialty. We create pieces
              exclusively for your interior. Our team takes pride in assuring
              each piece not only fits the space perfectly, but that it also
              reflects our client’s personality.
            </p>
          </HomePageImageBanner>
          <HomePageImageBanner
            customClass={`${namespace}-img-banner-right`}
            contentDirection="right"
            imgUrl=""
            title={"projects".toUpperCase()}
            btnData={{ text: "Show More".toUpperCase(), url: "/projects" }}
          >
            <p>
              Martinelle excels at building character in all our commercial and
              residential projects. Our priority is to make sure the identity of
              your brand is present in every corner, detail and accent.
            </p>
            <p>
              We are committed to a design concept that meets your vision from
              the functionality, aesthetic and ambiance perspective.
            </p>
          </HomePageImageBanner>
        </div>

        <HomePageBottomBanner />
      </div>
    </div>
  );
};
export default HomePage;
