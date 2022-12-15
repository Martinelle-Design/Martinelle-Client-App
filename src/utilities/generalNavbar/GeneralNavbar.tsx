import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import useDebouncedTextInput from "../../hooks/use-debounced-text-input";
import useWindowWidth from "../../hooks/use-window-width";
import PopUpModal from "../popUpModal/PopUpModal";

const namespace = "general-navbar";
const searchFunc = (str: string) => {};
const SearchBar = ({ navbarRef }: { navbarRef: HTMLElement | null }) => {
  const { textValue, onChange } = useDebouncedTextInput({
    debouncedFunc: searchFunc,
    time: 400,
  });
  const smallWindowWidth = useWindowWidth(576);
  const [search, setSearch] = useState(false);
  const largeWidthBtn = (
    <button aria-label="search catalog" onClick={() => searchFunc(textValue)}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
  const smallWidthBtn = (
    <button
      aria-label="search catalog"
      onClick={() => setSearch((state) => !state)}
    >
      <FontAwesomeIcon icon={faSearch} />
    </button>
  );
  const inputEl = (
    <input
      type={"text"}
      value={textValue}
      onChange={onChange}
      placeholder={"Search for furniture and more"}
    />
  );
  return (
    <div className={`${namespace}-search-container`}>
      {!smallWindowWidth ? smallWidthBtn : largeWidthBtn}
      {smallWindowWidth && inputEl}
      {!smallWindowWidth &&
        navbarRef &&
        createPortal(
          <div className={`${namespace}-search-input${search ? " show" : ""}`}>
            {inputEl}
          </div>,
          navbarRef
        )}
    </div>
  );
};

const GeneralNavBar = () => {
  const [contactUs, setContactUs] = useState(false);
  const navbarRef = useRef<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  //here to set ref
  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);
  return (
    <nav ref={navbarRef} className={`${namespace}`}>
      {contactUs && (
        <PopUpModal onClose={() => setContactUs(false)}>
          <h3>Contact Us</h3>
        </PopUpModal>
      )}
      <Link to="/"> {"Martinelle".toUpperCase()}</Link>
      <div className={`${namespace}-inner`}>
        <SearchBar navbarRef={navbarRef.current} />
        <button onClick={() => setContactUs(true)}>Contact Us</button>
      </div>
    </nav>
  );
};
export default GeneralNavBar;
