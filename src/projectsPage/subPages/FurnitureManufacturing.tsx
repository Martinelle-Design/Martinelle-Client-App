import ProjectSubPage from "./ProjectSubPage";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
const imageArr: ImageProps[] = Array(10).fill({
  imgUrl: "",
  imgPlaceholderUrl: "",
});
const FurnitureManufacturing = () => {
  return (
    <ProjectSubPage
      title="Featured Furniture Manufacturing"
      imgArr={imageArr}
    />
  );
};
export default FurnitureManufacturing;
