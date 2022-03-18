import React, { Children } from "react";
import PropTypes from "prop-types"; // own component

import { Container } from "../../../MemeShare"; // styles

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";

const Rotate = props => {
  const {
    children,
    direction,
    delay,
    loop,
    iteration,
    id,
    className,
    style,
    name
  } = props;
  console.log(`animation: ${direction} ${delay} ${loop} ${iteration}`);
  return /*#__PURE__*/_jsx(Container, {
    id: id,
    className: className,
    name: name,
    style: { ...style,
      animation: `${direction} ${delay} ${loop} ${iteration}`
    },
    children: children
  });
};

Rotate.defaultProps = {
  direction: "right",
  delay: "2.5s",
  loop: "infinite",
  iteration: "linear",
  id: "",
  className: "",
  style: "",
  name: ""
};
Rotate.propTypes = {
  direction: PropTypes.string,
  delay: PropTypes.string,
  loop: PropTypes.string,
  iteration: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  name: PropTypes.string,
  children: PropTypes.node.isRequired
};
export default Rotate;