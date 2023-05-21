// import UserNavBar from "./utilities/userNavbar/UserNavbar";
import SecondaryNavbar from "./utilities/secondaryNavbar/SecondaryNavbar";
import GeneralNavBar from "./utilities/generalNavbar/GeneralNavbar";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./utilities/footer/Footer";
const Root = () => {
  const location = useLocation();
  const secondaryNavbarPageObj = {
    "/": true,
    "/home": true,
  };
  const isSecondaryNavbarVisible = location.pathname in secondaryNavbarPageObj;
  return (
    <>
      <ScrollRestoration />
      <GeneralNavBar toggleBtn={!isSecondaryNavbarVisible} />
      <div id={"general-app-container"}>
        {isSecondaryNavbarVisible && <SecondaryNavbar />}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
