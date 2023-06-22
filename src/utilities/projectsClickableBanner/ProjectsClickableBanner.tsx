import { ImageSlide } from "../imageSlide/ImageSlide";
import { Link } from "react-router-dom";
import { ProjectButtonItem } from "../types/types";
import useClientAppItems from "../../hooks/use-client-app-items";
const namespace = "projects-clickable-banner";
const ProjectsClickableBanner = () => {
  const { status, items } = useClientAppItems<ProjectButtonItem>({
    itemType: "projectButtons",
  });
  return (
    <div className={`${namespace}-bottom-banner`}>
      {items.map((category) => {
        const { title, images, url, id } = category;
        const imageArr = images ? Object.entries(images) : undefined;
        const image =
          imageArr && imageArr.length > 0 ? imageArr[0][1] : undefined;
        const el = url ? (
          <Link key={id} to={url} className={`${namespace}-bottom-banner-link`}>
            {
              <ImageSlide
                name={title}
                imgUrl={image?.imgUrl}
                imgDescription={image?.description}
                imgPlaceholderUrl={image?.placeholderUrl}
              />
            }
          </Link>
        ) : (
          <button
            key={id}
            // onClick={category.onClick}
            className={`${namespace}-bottom-banner-link`}
          >
            {
              <ImageSlide
                name={title}
                imgUrl={image?.imgUrl}
                imgDescription={image?.description}
                imgPlaceholderUrl={image?.placeholderUrl}
              />
            }
          </button>
        );
        return el;
      })}
    </div>
  );
};
export default ProjectsClickableBanner;
