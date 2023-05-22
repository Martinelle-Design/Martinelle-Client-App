import { Button } from "@mui/material";
import { faSearch, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, RefObject } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../utilities/logo.svg";
import useDebouncedTextInput from "../../hooks/use-debounced-text-input";
import useWindowWidth from "../../hooks/use-window-width";
import useClickOutside from "../../hooks/use-click-outside";
import Drawer from "../drawer/Drawer";
import { pages } from "../secondaryNavbar/SecondaryNavbar";
const namespace = "general-navbar";

const searchFunc = (str: string) => {};
const SearchBar = ({ navbarRef }: { navbarRef: HTMLElement | null }) => {
  const { textValue, onChange } = useDebouncedTextInput({
    debouncedFunc: searchFunc,
    time: 400,
  });
  const smallWindowWidth = useWindowWidth(576);
  const [search, setSearch] = useState(false);
  const searchUpdatingRef = useRef(false);
  const {
    ref: searchContainerRef,
    isClickOutside,
    setisClickOutside,
  } = useClickOutside(false);
  useEffect(() => {
    if (!isClickOutside && !searchUpdatingRef.current)
      setSearch((state) => {
        if (state) return !state;
        else return state;
      });
  }, [isClickOutside, search]);
  const largeWidthBtn = (
    <button aria-label="search catalog" onClick={() => searchFunc(textValue)}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
  const smallWidthBtn = (
    <button
      aria-label="search catalog"
      onClick={() =>
        setSearch((state) => {
          searchUpdatingRef.current = true;
          setTimeout(() => {
            searchUpdatingRef.current = false;
            if (!state) setisClickOutside(true);
          }, 0);
          return !state;
        })
      }
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
  const inputEl = (
    <input
      type={"text"}
      value={textValue}
      onChange={onChange}
      placeholder={"Search furniture catalog"}
    />
  );

  return (
    <div className={`${namespace}-search-container`}>
      {!smallWindowWidth ? smallWidthBtn : largeWidthBtn}
      {smallWindowWidth && inputEl}
      {!smallWindowWidth &&
        navbarRef &&
        createPortal(
          <div
            ref={searchContainerRef as RefObject<HTMLDivElement>}
            className={`${namespace}-search-input${search ? " show" : ""}`}
          >
            {inputEl}
          </div>,
          navbarRef
        )}
    </div>
  );
};
const NavLinks = ({
  toggleDrawer,
}: {
  toggleDrawer?: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}) => {
  return (
    <div id={`${namespace}-links`}>
      {pages.map((l) => (
        <Link
          key={l.name}
          to={l.url}
          onClick={(e) => {
            //improve stability of link out
            if (toggleDrawer) toggleDrawer(false)(e);
          }}
        >
          {l.name}
        </Link>
      ))}
    </div>
  );
};
const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };
  return (
    <>
      <Button
        variant="text"
        id={`${namespace}-open-drawer-button`}
        aria-label="open-drawer"
        onClick={toggleDrawer(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer
        id={`${namespace}-drawer`}
        anchor="right"
        open={open}
        onClose={(e) => toggleDrawer(false)(e)}
      >
        <Button
          variant="text"
          id={`${namespace}-close-drawer-button`}
          aria-label="close-drawer"
          onClick={toggleDrawer(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </Button>
        <NavLinks toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
const GeneralNavBar = ({ toggleBtn }: { toggleBtn?: boolean }) => {
  const [navbarRef, setNavbarRef] = useState<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  //here to set ref
  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);
  return (
    <nav ref={(e) => setNavbarRef(e)} className={`${namespace}`}>
      <Link to="/" aria-label="home">
        {<Logo height={"100%"} />}
      </Link>
      <div className={`${namespace}-inner`}>
        <SearchBar navbarRef={navbarRef} />
        <Link to="/contact" aria-label="contact">
          {"Contact".toUpperCase()}
        </Link>
        {toggleBtn && <NavDrawer />}
      </div>
    </nav>
  );
};
export default GeneralNavBar;
