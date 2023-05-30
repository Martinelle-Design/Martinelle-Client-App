import ProjectSubPage from "./ProjectSubPage";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
const imageArr: ImageProps[] = Array(1).fill({
  imgUrl: "https://martinelle-design-static-files.s3.amazonaws.com/ServicesPage+/Services/Index-placeholder.ClientVisualization.jpg",
  imgPlaceholderUrl: "",
});
const PrivateResidental = () => {
  return <ProjectSubPage title="Featured Residental" imgArr={imageArr} />;
};
export default PrivateResidental;
