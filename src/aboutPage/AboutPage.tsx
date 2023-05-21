import { useEffect } from "react";
import useLoadingState from "../hooks/use-loading-state";
import text from "./aboutPg.txt";
import ContactActionButton from "../utilities/contactActionBanner/ContactActionBanner";
import ImageSlide, { ImageProps } from "../utilities/imageSlide/ImageSlide";
import { v4 as uuid } from "uuid";
const fetchTextFile = () =>
  fetch(text)
    .then((res) => res.text())
    .then((res) => res.split(/\n/));
const presentationImages: (ImageProps & { id: string })[] = [
  {
    id: uuid(),
    imgUrl: "hello",
  },
  {
    id: uuid(),
    imgUrl: "hello2",
  },
  {
    id: uuid(),
    imgUrl: "hello3",
  },
  {
    id: uuid(),
    imgUrl: "hello3",
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
  return (
    <div className={namespace}>
      <div className={`${namespace}-img-banner`}>
        <div className={`${namespace}-img-banner-img`}>
          <img src="" alt="about" />
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
            <ImageSlide imgUrl={img.imgUrl} />
          </div>
        ))}
      </div>
      <ContactActionButton />
    </div>
  );
};
export default AboutPage;
