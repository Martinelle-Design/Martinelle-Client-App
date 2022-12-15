import AdaptiveCarousel from "../../utilities/adaptiveCarousel/AdaptiveCarousel";
const namespace = "home-pg";
const productCategories = [
  { name: "New", url: "new" },
  { name: "Best Seller", url: "best-seller-1" },
  { name: "Best Seller", url: "best-seller-2" },
  { name: "Best Seller", url: "best-seller-3" },
  { name: "Best Seller", url: "best-seller-4" },
  { name: "Best Seller", url: "best-seller-5" },
  { name: "Best Seller", url: "best-seller-6" },
  { name: "Best Seller-7", url: "best-seller-7" },
];
const productArr = productCategories.map((e) => ({
  url: e.url,
  id: e.url,
  children: e.name.toUpperCase(),
}));
const HomePageNav = () => {
  return (
    <AdaptiveCarousel arr={productArr} classPrefix={namespace} />
  );
};
export default HomePageNav;
