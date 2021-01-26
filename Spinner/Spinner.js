// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// vendor components
import Spinner from "react-bootstrap/Spinner";

// custom components
import VisuallyHidden from "../VisuallyHidden";

export default (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // set defaults
  if (!properties.animation) properties.animation = "border";
  if (!properties.role) properties.role = "status";

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return (
    <Spinner {...properties}>
      <VisuallyHidden>{children ? children : "loading…"}</VisuallyHidden>
    </Spinner>
  );
};
