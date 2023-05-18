import AdaptiveCarousel from "../adaptiveCarousel/AdaptiveCarousel";
const namespace = "secondary-navbar";
const categories = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Projects", url: "/projects" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];
const categoriesArr = categories.map((e) => ({
  url: e.url,
  id: e.url,
  children: e.name.toUpperCase(),
}));
const SecondaryNavbar = () => {
  return (
    <div className={`${namespace}-container`}>
      <AdaptiveCarousel
        arr={categoriesArr}
        classPrefix={namespace}
        spaceBetween={0}
      />
    </div>
  );
};
export default SecondaryNavbar;
