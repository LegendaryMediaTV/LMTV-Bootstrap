// dependencies
import React from "react";
import { combine, prepare } from "../functions";

export default (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add Bootstrap classes
  properties.className.push("sr-only");
  if (properties.focusable) properties.className.push("sr-only-focusable");
  delete properties.focusable;

  // merge classes
  properties.className = combine(properties.className);

  return <span {...properties}>{children}</span>;
};
