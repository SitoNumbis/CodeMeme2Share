import React from "react";

import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// style
import "./style.scss";

const Title = (props) => {
  const {
    id,
    className,
    style,
    name,
    variant,
    children,
    options,
    ignoreDefault,
  } = props;

  const emotionCss = css({
    options,
  });

  return (
    <div
      className={`${variant} ${className} ${!ignoreDefault ? emotionCss : ""}`}
      style={style}
      id={id}
      name={name}
    >
      {children}
    </div>
  );
};

Title.defaultProps = {
  id: "",
  className: "ms-title",
  style: {},
  name: "",
  variant: "h1",
  options: {
    color: "aliceblue",
    fontWeight: "bold",
  },
  ignoreDefault: false,
};

Title.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
};

export default Title;
