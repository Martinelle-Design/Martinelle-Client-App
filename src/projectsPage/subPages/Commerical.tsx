import ProjectSubPage from "./ProjectSubPage";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
const imageArr: ImageProps[] = Array(10).fill({
  imgUrl: "",
  imgPlaceholderUrl: "",
});
const Commercial = () => {
  return <ProjectSubPage title="Featured Commercial" imgArr={imageArr} />;
};
export default Commercial;
