import { useEffect } from "react";
import useLoadingState from "../hooks/use-loading-state";
import text from "./aboutPg.txt";
const fetchTextFile = () =>
  fetch(text)
    .then((res) => res.text())
    .then((res) => res.split(/\n/));

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
    </div>
  );
};
export default AboutPage;
