import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, RefObject } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../utilities/logo.svg";
import useDebouncedTextInput from "../../hooks/use-debounced-text-input";
import useWindowWidth from "../../hooks/use-window-width";
// import PopUpModal from "../popUpModal/PopUpModal";
import useClickOutside from "../../hooks/use-click-outside";
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

const GeneralNavBar = () => {
  // const [contactUs, setContactUs] = useState(false);
  const navbarRef = useRef<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  //here to set ref
  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);
  return (
    <nav ref={navbarRef} className={`${namespace}`}>
      {/* {contactUs && (
        <PopUpModal onClose={() => setContactUs(false)}>
          <h3>Contact Us</h3>
        </PopUpModal>
      )} */}
      <Link to="/" aria-label="home">
        {<Logo height={"100%"} />}
      </Link>
      <div className={`${namespace}-inner`}>
        <SearchBar navbarRef={navbarRef.current} />
        <Link to="/contact" aria-label="contact">
          {"Contact".toUpperCase()}
        </Link>
        {/* <button
          //onClick={() => setContactUs(true)}
        >
          {"Contact".toUpperCase()}
        </button> */}
      </div>
    </nav>
  );
};
export default GeneralNavBar;
