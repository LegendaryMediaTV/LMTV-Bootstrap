// dependencies
import React from "react";

// styling
import "./BackgroundImage.css";

export default (props) => {
  // enforce requirements
  if (!props.src)
    throw new Error('<BackgroundImage> "src" property is required');

  // since it's presentational and not informational, the alternate text is blank
  return (
    <div id="BackgroundImage">
      <img src={props.src} alt="" />
    </div>
  );
};
