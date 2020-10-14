import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import styled from "styled-components";
import iconImage from "./../../assets/images/sample.png";

const I = styled.i`
  display: inline-block;
  background-image: url(${iconImage});
  background-size: 291px 189px;
  width: ${props => props.size === "xsm" ? "24px" :
                    props.size === "sm" ? "27px" :
                    props.size === "md" ? "36px" :
                    props.size === "lmd" ? "40px" :
                    props.size === "lg" ? "58px" : "24px" };  
  height: ${props => props.size === "xsm" ? "24px" :
                     props.size === "sm" ? "27px" :
                     props.size === "md" ? "36px" :
                     props.size === "lmd" ? "40px" :
                     props.size === "lg" ? "58px" : "24px" };  
  background-position: ${props => props.type === "test1" ? "0 0" :
                                  props.type === "test2" ? "-38px 0" : "-76px 0"};

`;
const cx = classNames.bind();

export default function Icon(props) {
  const { type, size, alt, style} = props;
  if (props.src) {
    const { src } = props;
    return (
      <img
        src={src}
        alt={alt}
        style={style}
      />
    );
  }
  return (
    <I
      style={style}
      type={type}
      size={size}
      title={alt}
    />
  );
}
Icon.propTypes = {
  type: PropTypes.oneOf([
    "test1",
    "test2"
  ]),
  size: PropTypes.oneOf(["xsm", "sm", "md", "lmd", "lg"]),
  alt: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string
};
Icon.defaultProp = {
  type: "test",
  size: "xms",
  alt: ""
};


