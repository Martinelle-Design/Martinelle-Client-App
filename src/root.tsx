// import UserNavBar from "./utilities/userNavbar/UserNavbar";
import SecondaryNavbar from "./utilities/secondaryNavbar/SecondaryNavbar";
import GeneralNavBar from "./utilities/generalNavbar/GeneralNavbar";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./utilities/footer/Footer";
const Navbar = () => {
  const location = useLocation();
  const secondaryNavbarPageObj = {
    "/": true,
    "/home": true,
  };
  const isSecondaryNavbarVisible = location.pathname in secondaryNavbarPageObj;
  return (
    <>
      <GeneralNavBar
      toggleBtn={!isSecondaryNavbarVisible}
      />
      {isSecondaryNavbarVisible && <SecondaryNavbar />}
    </>
  );
};
const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div id={"general-app-container"}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
