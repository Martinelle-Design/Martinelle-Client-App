import { useEffect } from "react";
import useLoadingState from "../hooks/use-loading-state";
import text from "./aboutPg.txt";
import ContactActionButton from "../utilities/contactActionBanner/ContactActionBanner";
import ImageSlide, { ImageProps } from "../utilities/imageSlide/ImageSlide";
import { v4 as uuid } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { generateImgLocation } from "../utilities/helpers/generateImgLocation";
const fetchTextFile = () =>
  fetch(text)
    .then((res) => res.text())
    .then((res) => res.split(/\n/));
const presentationImages: (ImageProps & { id: string })[] = [
  {
    id: uuid(),
    ...generateImgLocation("AboutUS /AboutPage/BottomPictures/1/index"),
  },
  {
    id: uuid(),
    ...generateImgLocation("AboutUS /AboutPage/BottomPictures/2/index"),
  },
  {
    id: uuid(),
    ...generateImgLocation("AboutUS /AboutPage/BottomPictures/3/index"),
  },
  {
    id: uuid(),
    ...generateImgLocation("AboutUS /AboutPage/BottomPictures/4/index"),
  },
];
const namespace = "about-pg";
const AboutPage = () => {
  const {
    status: textStatus,
    result: textResult,
    callFunction: textCallFunction,
  } = useLoadingState({
    asyncFunc: fetchTextFile,
  });
  useEffect(() => {
    textCallFunction();
  }, [textCallFunction]);
  const { imgUrl, imgPlaceholderUrl } = generateImgLocation(
    "AboutUS /AboutPage/MainImage/index"
  );
  return (
    <div className={namespace}>
      <div className={`${namespace}-img-banner`}>
        <div className={`${namespace}-img-banner-img`}>
          <LazyLoadImage
            src={`${imgUrl}`}
            placeholderSrc={`${imgPlaceholderUrl}`}
            alt={"about-banner"}
            effect="blur"
          />
        </div>
        <div className={`${namespace}-img-banner-text`}>
          {"About Martinelle Design".toUpperCase()}
        </div>
      </div>
      <div className={`${namespace}-text-content`}>
        {textStatus === "success" &&
          Array.isArray(textResult) &&
          textResult.map((text, idx) => <p key={idx}>{text}</p>)}
      </div>
      <div className={`${namespace}-img-presentation-banner`}>
        {presentationImages.map((img) => (
          <div
            key={img.id}
            className={`${namespace}-img-presentation-container`}
          >
            <ImageSlide
              imgUrl={img.imgUrl}
              imgPlaceholderUrl={img.imgPlaceholderUrl}
            />
          </div>
        ))}
      </div>
      <ContactActionButton />
    </div>
  );
};
export default AboutPage;
