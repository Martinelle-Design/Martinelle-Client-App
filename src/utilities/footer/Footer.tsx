import { Link } from "react-router-dom";
import { getYear } from "date-fns";
//import { v4 as uuid } from "uuid";
const currDate = new Date();
const currYear = getYear(currDate);
const namespace = "footer";
// type LinkProps = {
//   id: string;
//   url: string;
//   name: string;
// };
// const links: LinkProps[] = [{ url: "/about-us", name: "About Us", id: uuid() }];

// const FooterColumn = ({
//   children,
//   title,
// }: {
//   children: JSX.Element | JSX.Element[] | string;
//   title: string;
// }) => {
//   return (
//     <div className={`${namespace}-column`}>
//       <h3>{title}</h3>
//       {children}
//     </div>
//   );
// };
const TopFooterBanner = () => {
  return (
    <div className={`${namespace}-top`} 
    //remove this. only for layout testing
    style={{ minHeight: "20em" }}>
      {/* <FooterColumn title="Our Company">
        <>
          {links.map((link) => (
            <Link
              className={`${namespace}-column-link`}
              key={link.id}
              to={link.url}
            >
              {link.name}
            </Link>
          ))}
        </>
      </FooterColumn> */}
    </div>
  );
};
const BottomFooterBanner = () => {
  return (
    <div className={`${namespace}-bottom`}>
      <h3>{"Martinelle".toUpperCase()}</h3>
      <div className={`${namespace}-bottom-text-container`}>
        <div className={`${namespace}-bottom-text`}>
          <span>©{currYear} Martinelle Design. All rights reserved.</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
        <div className={`${namespace}-bottom-text-support`}>
          For additional assistance, please call{" "}
          {process.env.REACT_APP_SUPPORT_NUMBER}
        </div>
      </div>
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
