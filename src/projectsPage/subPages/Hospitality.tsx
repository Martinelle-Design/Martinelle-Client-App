import ProjectSubPage from "./ProjectSubPage";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
const imageArr: ImageProps[] = Array(10).fill({
  imgUrl: "",
  imgPlaceholderUrl: "",
});
const Hospitality = () => {
  return (
    <ProjectSubPage
      title="Featured Hospitality"
      imgArr={imageArr}
      className="hospitality-pg"
    />
  );
};
export default Hospitality;
