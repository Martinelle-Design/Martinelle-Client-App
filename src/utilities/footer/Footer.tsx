import { Link } from "react-router-dom";
import { getYear } from "date-fns";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as LinkedInIcon } from "../linkedinIcon.svg";
import { ReactComponent as EmailIcon } from "../emailIcon.svg";
import useWindowWidth from "../../hooks/use-window-width";
//import { v4 as uuid } from "uuid";
const currDate = new Date();
const currYear = getYear(currDate);
const namespace = "footer";
const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <a
        href="https://www.linkedin.com/company/martinelle-design/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href={`mailto:${process.env.REACT_APP_SUPPORT_EMAIL}`}
        target="_blank"
        rel="noreferrer"
      >
        <EmailIcon />
      </a>
    </div>
  );
};
const TopFooterBanner = () => {
  const windowWidth = useWindowWidth(576);
  return (
    <div className={`${namespace}-top`}>
      <div className={`${namespace}-top-text-container`}>
        <div className={`${namespace}-top-text`}>
          <span>
            © Martinelle Design {currYear}. {!windowWidth && <br />} All rights
            reserved.
          </span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
        {/* <div className={`${namespace}-top-text-support`}>
          For additional assistance, please call{" "}
          {process.env.REACT_APP_SUPPORT_NUMBER}
        </div> */}
      </div>
      <SocialMedia />
    </div>
  );
};
const BottomFooterBanner = () => {
  return (
    <div className={`${namespace}-bottom`}>
      <Logo />
    </div>
  );
};
const Footer = () => {
  return (
    <footer className={namespace}>
      <TopFooterBanner />
      <BottomFooterBanner />
    </footer>
  );
};
export default Footer;
