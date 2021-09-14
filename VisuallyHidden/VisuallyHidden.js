// dependencies
import React from "react";
import { combine, prepare } from "../functions";

const VisuallyHidden = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add Bootstrap classes
  properties.className.push("visually-hidden");
  if (properties.focusable)
    properties.className.push("visually-hidden-focusable");
  delete properties.focusable;

  // merge classes
  properties.className = combine(properties.className);

  return <span {...properties}>{children}</span>;
};

export default VisuallyHidden;
