import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../../utilities/pageTitle/PageTitle";
import { ImageProps } from "../../utilities/imageSlide/ImageSlide";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import useWindowResize from "../../hooks/use-window-resize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as ResetZoom } from "./ResetZoom.svg";
type RecentCoordinates = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  imgHeight: number;
  imgWidth: number;
};
const namespace = "project-subpage-pg";
const ProjectSubPageImagePopUpModal = ({
  img,
  recentCoordinates,
  setOpen,
}: {
  img: ImageProps;
  recentCoordinates: React.MutableRefObject<RecentCoordinates | null>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  //prevent scroll and restore when component unmounts
  const { windowHeight, windowWidth } = useWindowResize();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  if (!recentCoordinates.current) return <></>;
  const imgStyles: { [key: string]: string } = {};
  const { x1, x2, y1, y2, imgHeight, imgWidth } = recentCoordinates.current;
  const isVertical = imgHeight > imgWidth;
  if (isVertical) {
    imgStyles.height = `${windowHeight * 0.8}px`;
    imgStyles.width = "auto";
  } else {
    imgStyles.height = "auto";
    imgStyles.width = `${windowWidth * 0.8}px`;
  }
  return (
    <div className={`${namespace}-media-container-img-modal`}>
      <div className={`${namespace}-media-container-img-modal-content`}>
        <TransformWrapper
          onTransformed={(ref, scale) => {
            if (scale.scale <= 1) setIsZoomed(false);
            else setIsZoomed(true);
          }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className={`${namespace}-media-container-img-modal-buttons`}>
                <button
                  onClick={() => zoomOut()}
                  aria-label="zoom out"
                  disabled={!isZoomed}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <button
                  onClick={() => resetTransform()}
                  aria-label="reset zoom"
                  disabled={!isZoomed}
                >
                  <ResetZoom />
                </button>
                <button onClick={() => zoomIn()} aria-label="zoom in">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <>
                  <div
                    className={`${namespace}-media-container-img-modal-backdrop`}
                    aria-label="close modal"
                    onClick={() => {
                      setOpen(false);
                      recentCoordinates.current = null;
                    }}
                  />
                  <LazyLoadImage
                    style={imgStyles}
                    src={img.imgUrl}
                    alt={img.imgDescription ? img.imgDescription : ""}
                    placeholderSrc={
                      img.imgPlaceholderUrl ? img.imgPlaceholderUrl : ""
                    }
                    useIntersectionObserver
                    effect="blur"
                  />
                </>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};
const ProjectSubPageImage = ({ img }: { img: ImageProps }) => {
  //const [open, setOpen] = useState(false);
  // const recentCoordinates = useRef<RecentCoordinates | null>(null);
  const [open, setOpen] = useState(true);
  const recentCoordinates = useRef<RecentCoordinates | null>({
    x1: 52.870323181152344,
    y1: 164.9082489013672,
    x2: 405.2546920776367,
    y2: 517.2926177978516,
    imgHeight: 123,
    imgWidth: 100,
  });
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const { x: x1, y: y1, width, height } = target.getBoundingClientRect();
    const x2 = x1 + width;
    const y2 = y1 + height;
    const img = target.querySelector("img");

    if (!img) return;
    const { naturalHeight: imgHeight, naturalWidth: imgWidth } = img;
    recentCoordinates.current = {
      x1,
      y1,
      x2,
      y2,
      imgHeight,
      imgWidth,
    };
    console.log(recentCoordinates.current);

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
            setOpen={setOpen}
            img={img}
            recentCoordinates={recentCoordinates}
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
