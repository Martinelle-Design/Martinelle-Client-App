// import UserNavBar from "./utilities/userNavbar/UserNavbar";
import SecondaryNavbar from "./utilities/secondaryNavbar/SecondaryNavbar";
import GeneralNavBar from "./utilities/generalNavbar/GeneralNavbar";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./utilities/footer/Footer";
const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <GeneralNavBar />
      <div id={"general-app-container"}>
        <SecondaryNavbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
