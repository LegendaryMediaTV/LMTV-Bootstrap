// dependencies
import React from "react";
import { combine, prepare, separate } from "../functions";

// styling
import "./BackgroundImage.css";

export default (props) => {
  // enforce requirements
  if (!props.src)
    throw new Error('<BackgroundImage> "src" property is required');

  // prepare properties
  const [properties] = prepare(props);

  // extract imageClassName
  const imageClassName = properties.imageClassName
    ? separate(properties.imageClassName)
    : ["h1 m-0"];
  delete properties.imageClassName;

  // extract imageStyle
  const imageStyle = properties.imageStyle;
  delete properties.imageStyle;

  // merge classes
  properties.className = combine(properties.className);

  // since it's presentational and not informational, the alternate text is blank
  return (
    <div id="BackgroundImage">
      <img
        src={props.src}
        alt=""
        className={imageClassName}
        style={imageStyle}
      />
    </div>
  );
};
