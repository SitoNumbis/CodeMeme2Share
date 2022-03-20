import PropTypes from "prop-types";

import {
  BsArrowRight,
  BsFillRecordFill,
  BsFillShareFill,
  BsFillXCircleFill,
  BsFillXSquareFill,
  BsFillXOctagonFill,
  BsXCircle,
  BsXOctagon,
  BsXSquare,
  BsX,
} from "react-icons/bs";
import {
  SiJava,
  SiJavascript,
  SiSwift,
  SiPhp,
  SiKotlin,
  SiTypescript,
  SiCplusplus,
  SiDart,
  SiGo,
  SiPython,
} from "react-icons/si";

export const JavaIcon = ({ color, size }) => (
  <SiJava className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const JavascriptIcon = ({ color, size }) => (
  <SiJavascript
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SwiftIcon = ({ color, size }) => (
  <SiSwift className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const PhpIcon = ({ color, size }) => (
  <SiPhp className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const KotlinIcon = ({ color, size }) => (
  <SiKotlin className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const TypescriptIcon = ({ color, size }) => (
  <SiTypescript
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CPlusPlusIcon = ({ color, size }) => (
  <span className={`${color ? color : "red"} ${size ? size : "medium"}`}>
    <SiCplusplus />
  </span>
);

export const DartIcon = ({ color, size }) => (
  <SiDart className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const GoIcon = ({ color, size }) => (
  <SiGo className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const PythonIcon = ({ color, size }) => (
  <SiPython className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const RightArrowIcon = ({ color, size }) => (
  <BsArrowRight
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const DotIcon = ({ color, size }) => (
  <BsFillRecordFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const ShareIcon = ({ color, size }) => (
  <BsFillShareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledCircleXIcon = ({ color, size }) => (
  <BsFillXCircleFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledSquareXIcon = ({ color, size }) => (
  <BsFillXSquareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledOctoganXIcon = ({ color, size }) => (
  <BsFillXOctagonFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CircleXIcon = ({ color, size }) => (
  <BsXCircle className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const OctoganXIcon = ({ color, size }) => (
  <BsXOctagon
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SquareXIcon = ({ color, size }) => (
  <BsXSquare className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const XIcon = ({ color, size }) => (
  <BsX className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

const icons = {
  // java
  "java-icon": <JavaIcon />,
  javaicon: <JavaIcon />,
  java: <JavaIcon />,
  // java script
  "java-script-icon": <JavascriptIcon />,
  "javascript-icon": <JavascriptIcon />,
  javascripticon: <JavascriptIcon />,
  javascript: <JavascriptIcon />,
  // typescript
  "type-script-icon": <TypescriptIcon />,
  "typescript-icon": <TypescriptIcon />,
  typescripticon: <TypescriptIcon />,
  typescript: <TypescriptIcon />,
  // swift
  "swift-icon": <SwiftIcon />,
  swifticon: <SwiftIcon />,
  swift: <SwiftIcon />,
  // php
  "php-icon": <PhpIcon />,
  phpicon: <PhpIcon />,
  php: <PhpIcon />,
  // kotlin
  "kotlin-icon": <KotlinIcon />,
  kotlinicon: <KotlinIcon />,
  kotlin: <KotlinIcon />,
  // cpp
  "cpp-icon": <CPlusPlusIcon />,
  "cplusplus-icon": <CPlusPlusIcon />,
  "c++": <CPlusPlusIcon />,
  cplusplus: <CPlusPlusIcon />,
  cppicon: <CPlusPlusIcon />,
  cpp: <CPlusPlusIcon />,
  // dart
  "dart-icon": <DartIcon />,
  darticon: <DartIcon />,
  dart: <DartIcon />,
  // go
  "go-icon": <GoIcon />,
  goicon: <GoIcon />,
  go: <GoIcon />,
  // python
  "python-icon": <PythonIcon />,
  pythonicon: <PythonIcon />,
  python: <PythonIcon />,
  // others
  // dots
  "dot-icon": <DotIcon />,
  doticon: <DotIcon />,
  dot: <DotIcon />,
  // share
  "share-icon": <ShareIcon />,
  shareicon: <ShareIcon />,
  share: <ShareIcon />,
  // x
  // filled
  "filledcirclex-icon": <FilledCircleXIcon />,
  "filledoctoganx-icon": <FilledOctoganXIcon />,
  "filledsquarex-icon": <FilledSquareXIcon />,
  filledcirclexicon: <FilledCircleXIcon />,
  filledoctoganxicon: <FilledOctoganXIcon />,
  filledsquarexicon: <FilledSquareXIcon />,
  // empty
  "circlex-icon": <CircleXIcon />,
  "octoganx-icon": <OctoganXIcon />,
  "squarex-icon": <SquareXIcon />,
  circlexicon: <CircleXIcon />,
  octoganxicon: <OctoganXIcon />,
  squarexicon: <SquareXIcon />,
  // no border
  "x-icon": <XIcon />,
  xicon: <XIcon />,
  x: <XIcon />,
};

const sizes = [
  "xx-small",
  "x-small",
  "smaller",
  "small",
  "medium",
  "large",
  "larger",
  "x-large",
  "xx-larger",
];

const Icon = (props) => {
  const { color, size, icon, id, className, style } = props;
  return (
    <span
      id={id}
      style={{ ...style }}
      className={`${className} ${color} ${
        sizes.indexOf(size) > -1 ? size : ""
      }`}
    >
      {icons[icon]}
    </span>
  );
};

Icon.defaultProps = {
  color: "red",
  size: "medium",
  id: "",
  className: "",
  style: {},
};

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string.isRequired,
};

export default Icon;
