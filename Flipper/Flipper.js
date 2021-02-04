// dependencies
import React from "react";
import { combine, prepare, separate } from "../functions/functions";

// styling
import "./Flipper.css";

export default (props) => {
  // prepare properties
  const [properties] = prepare(props);

  if (!properties.style) properties.style = {};

  // extract back
  const back = properties.back;
  let backClassName = separate(properties.backClassName);
  const backStyle = properties.backStyle ?? {};
  delete properties.back;
  delete properties.backClassName;
  delete properties.backStyle;

  // extract front
  const front = properties.front;
  let frontClassName = separate(properties.frontClassName);
  const frontStyle = properties.frontStyle ?? {};
  delete properties.front;
  delete properties.frontClassName;
  delete properties.frontStyle;

  // extract horizontal
  if (properties.horizontal) {
    backClassName.push("FlipperHorizontal");
    frontClassName.push("FlipperHorizontal");
  }
  delete properties.horizontal;

  // add required classes
  properties.className.push(
    properties.flipped == null ? "FlipperHover" : "Flipper"
  );
  backClassName.push("FlipperBack");
  frontClassName.push("FlipperFront");

  // extract height
  if (properties.height)
    properties.style.height = backStyle.height = frontStyle.height =
      properties.height;
  delete properties.height;

  // extract flipped
  const flipped = properties.flipped;
  if (flipped) properties.className.push("FlipperFlipped");
  delete properties.flipped;

  // merge classes
  properties.className = combine(properties.className);
  backClassName = combine(backClassName);
  frontClassName = combine(frontClassName);

  // since it's presentational and not informational, the alternate text is blank
  return (
    <div {...properties}>
      <div className={backClassName} style={backStyle} aria-hidden={flipped}>
        {back}
      </div>
      <div
        className={frontClassName}
        style={frontStyle}
        aria-hidden={flipped != null ? !flipped : null}
      >
        {front}
      </div>
    </div>
  );
};
