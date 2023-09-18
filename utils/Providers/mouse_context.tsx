import React, { createContext, useState } from "react";
const base =
  "data:image/png;base64,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";
export const MouseContext = createContext({
  cursorWidth: 35,
  cursorBorderColor: "",
  cursorBgColor: "",
  cursorBorderSize: 0.5,
  cursorChangeHandler: (
    val: number
    // target?: React.MouseEvent<HTMLHeadingElement>
  ) => {},
  cursorBorderColorHandler: (valBorder: string, valBg: string) => {},
  hoveredImage: {
    image:
      "https://res.cloudinary.com/dttrs30gt/image/upload/v1677161065/portfolio/4_symnz4.png",
    placeholder: base,
  },
  CursorMovingHandler: (
    target: React.MouseEvent<HTMLElement>,
    image: imageType
  ) => {},
  CursorChangeImageHandler: (image: imageType) => {},
});
type imageType = {
  image: string;
  placeholder: string;
};

const MouseContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorWidth, setCursorWidth] = useState<number>(35); //Secondary cursor diam
  const [cursorBorderSize, setCursorBorderSize] = useState<number>(0.5); //Secondary cursor borderSize
  const [cursorBorderColor, setCursorBorderColor] = useState<string>(""); //Secondary cursor borderSize
  const [cursorBgColor, setCursorBgColor] = useState<string>(""); //Secondary cursor borderSize
  const [hoveredImage, setHoveredImage] = useState<imageType>({
    image:
      "https://res.cloudinary.com/dttrs30gt/image/upload/v1677161065/portfolio/4_symnz4.png",
    placeholder: base,
  }); //Secondary cursor borderSize

  const cursorChangeHandler = (
    val: number
    // target?: React.MouseEvent<HTMLHeadingElement>
  ) => {
    if (val >= 55) {
      setCursorBorderSize(2);
    } else {
      setCursorBorderSize(1);
    }
    setCursorWidth(val);
  };

  const cursorBorderColorHandler = (valBorder: string, valBg: string) => {
    setCursorBorderColor(valBorder);
    setCursorBgColor(valBg);
  };

  const CursorMovingHandler = (
    target: React.MouseEvent<HTMLElement>,
    image: imageType
  ) => {
    if (image.image != hoveredImage.image) {
      setHoveredImage(image);
    }
    const clientX = target?.clientX ?? 0;
    const clientY = target?.clientY ?? 0;
    const { centerX, centerY } = calcCenter(
      target?.currentTarget as HTMLElement
    );

    const val = remap(
      calcDistance(clientX, clientY, centerX, centerY),
      0,
      500,
      35,
      500
    );
    if (val >= 35 && val <= 500) {
      setCursorBorderSize(3);
      setCursorWidth(val);
    } else {
      // setCursorBorderSize(1);
      setCursorWidth(35);
    }
  };

  const CursorChangeImageHandler = (image: imageType) => {
    if (image.image != hoveredImage.image) {
      setHoveredImage(image);
    }
  };
  return (
    <MouseContext.Provider
      value={{
        hoveredImage: hoveredImage,
        cursorBgColor: cursorBgColor,
        cursorWidth: cursorWidth,
        cursorBorderColor: cursorBorderColor,
        cursorBorderSize: cursorBorderSize,
        cursorChangeHandler: cursorChangeHandler,
        cursorBorderColorHandler: cursorBorderColorHandler,
        CursorMovingHandler: CursorMovingHandler,
        CursorChangeImageHandler: CursorChangeImageHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;

const calcCenter = (element: HTMLElement) => {
  var rect = element.getBoundingClientRect();
  const y = rect.top;
  const x = rect.left;
  const width = element.clientWidth;
  const height = element.clientHeight;
  return { centerX: x + width / 2, centerY: y + height / 2 };
};
const calcDistance = (cx: number, cy: number, ex: number, ey: number) => {
  return Math.sqrt(Math.pow(ex - cx, 2) + Math.pow(ey - cy, 2));
};

const remap = (
  x: number,
  oMin: number,
  oMax: number,
  nMin: number,
  nMax: number
) => {
  // #check reversed input range
  let reverseInput = false;
  let oldMin = Math.min(oMin, oMax);
  let oldMax = Math.max(oMin, oMax);
  if (oldMin != oMin) {
    reverseInput = true;
  }

  // #check reversed output range
  let reverseOutput = false;
  let newMin = Math.min(nMin, nMax);
  let newMax = Math.max(nMin, nMax);
  if (newMin == nMin) {
    reverseOutput = true;
  }

  let portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);
  if (reverseInput) {
    portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
  }

  let result = portion + newMin;
  if (reverseOutput) result = newMax - portion;

  return result;
};
