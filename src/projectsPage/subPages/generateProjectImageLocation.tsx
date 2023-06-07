import { generateImgLocation } from "../../utilities/helpers/generateImgLocation";
export const generateProjectImagesLocation = ({
  folderName,
  number,
}: {
  folderName: string;
  number: number;
}) => {
  const arr = Array(number).fill({
    imgUrl: "",
    imgPlaceholderUrl: "",
    imgDescription: "",
  });
  return arr.map((img, idx) => {
    return {
      ...img,
      ...generateImgLocation(`${folderName}/${idx + 1}/index`),
    };
  });
};
