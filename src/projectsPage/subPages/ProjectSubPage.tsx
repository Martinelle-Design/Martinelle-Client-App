import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../../utilities/pageTitle/PageTitle";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
type RecentCoordinates = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  windowHeight: number;
  windowWidth: number;
};
const namespace = "project-subpage-pg";
const ProjectSubPageImagePopUpModal = ({
  img,
}: {
  img: ImageProps;
  recentCoordinates: RecentCoordinates;
}) => {
  return <div className={`${namespace}-media-container-img-modal`}></div>;
};
const ProjectSubPageImage = ({ img }: { img: ImageProps }) => {
  const [open, setOpen] = useState(false);
  const recentCoordinates = useRef<RecentCoordinates | null>(null);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      x: x1,
      y: y1,
      width,
      height,
    } = e.currentTarget.getBoundingClientRect();
    const x2 = x1 + width;
    const y2 = y1 + height;
    recentCoordinates.current = {
      x1,
      y1,
      x2,
      y2,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
    //triggers a re-render after grabbing button coorindates
    setOpen(true);
  };
  return (
    <>
      <button className={`${namespace}-media-container-img`} onClick={onClick}>
        <LazyLoadImage
          src={img.imgUrl}
          alt={img.imgDescription ? img.imgDescription : ""}
          placeholderSrc={img.imgPlaceholderUrl ? img.imgPlaceholderUrl : ""}
          useIntersectionObserver
          effect="blur"
        />
      </button>
      {open &&
        recentCoordinates.current &&
        createPortal(
          <ProjectSubPageImagePopUpModal
            img={img}
            recentCoordinates={recentCoordinates.current}
          />,
          document.body
        )}
    </>
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
