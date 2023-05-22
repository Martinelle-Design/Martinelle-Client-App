import ProjectSubPage from "./ProjectSubPage";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
const imageArr: ImageProps[] = Array(10).fill({
  imgUrl: "",
  imgPlaceholderUrl: "",
});
const PrivateResidental = () => {
  return <ProjectSubPage title="Featured Residental" imgArr={imageArr} />;
};
export default PrivateResidental;
