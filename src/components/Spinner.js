// dependencies
import React from "react";
import * as f from "../functions";

// components
import Spinner from "react-bootstrap/Spinner";
import VisuallyHidden from "./VisuallyHidden";

const Component = (props) => {
  // prepare properties
  const [properties, children] = f.prepare(props);

  // set defaults
  if (!properties.animation) properties.animation = "border";
  if (!properties.role) properties.role = "status";

  // merge classes
  properties.className = f.combine(properties.className);

  // render component
  return (
    <Spinner {...properties}>
      <VisuallyHidden>{children ? children : "loading…"}</VisuallyHidden>
    </Spinner>
  );
};

export default Component;
