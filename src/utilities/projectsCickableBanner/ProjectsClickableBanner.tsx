import { v4 as uuid } from "uuid";
import { ImageProps, ImageSlide } from "../imageSlide/ImageSlide";
import { Link } from "react-router-dom";
const namespace = "projects-clickable-banner";
const interiorDesignCategories: (ImageProps & {
  name: string;
  id: string;
  url?: string;
  children?: JSX.Element | string | JSX.Element[];
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
})[] = [
  {
    id: uuid(),
    name: "PRIVATE RESIDENTIAL",
    url: "/projects/private-residential",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "COMMERCIAL",
    url: "/projects/commercial",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "FURNITURE MANUFACTURING",
    url: "/projects/furniture-manufacturing",
    imgUrl: "",
  },
  {
    id: uuid(),
    name: "HOSPITALITY",
    url: "/projects/hospitality",
    imgUrl: "",
  },
];
const ProjectsClickableBanner = () => {
    return (
      <div className={`${namespace}-bottom-banner`}>
        {interiorDesignCategories.map((category) => {
          const el = category.url ? (
            <Link
              key={category.id}
              to={category.url}
              onClick={category.onClick}
              className={`${namespace}-bottom-banner-link`}
            >
              <ImageSlide
                name={category.name}
                imgUrl={category.imgUrl}
                imgDescription={category.imgDescription}
                imgPlaceholderUrl={category.imgPlaceholderUrl}
              />
            </Link>
          ) : (
            <button
              key={category.id}
              onClick={category.onClick}
              className={`${namespace}-bottom-banner-link`}
            >
              <ImageSlide
                name={category.name}
                imgUrl={category.imgUrl}
                imgDescription={category.imgDescription}
                imgPlaceholderUrl={category.imgPlaceholderUrl}
              />
            </button>
          );
          return el;
        })}
      </div>
    );
}
export default ProjectsClickableBanner;