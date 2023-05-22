import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../../utilities/pageTitle/PageTitle";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
import { useState } from "react";
const namespace = "project-subpage-pg";

const ProjectSubPageImage = ({ img }: { img: ImageProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <button className={`${namespace}-media-container-img`}>
      <LazyLoadImage
        src={img.imgUrl}
        alt={img.imgDescription ? img.imgDescription : ""}
        placeholderSrc={img.imgPlaceholderUrl ? img.imgPlaceholderUrl : ""}
        useIntersectionObserver
        effect="blur"
      />
    </button>
  );
};
const ProjectSubPage = ({
  className,
  title,
  imgArr,
}: {
  className?: string;
  title: string;
  imgArr: ImageProps[];
}) => {
  return (
    <div className={`${namespace} ${className ? className : ""}`}>
      <PageTitle text={title.toUpperCase()} />
      <div className={`${namespace}-media-container`}>
        {imgArr.map((img, i) => (
          <ProjectSubPageImage img={img} key={i} />
        ))}
      </div>
    </div>
  );
};
export default ProjectSubPage;
