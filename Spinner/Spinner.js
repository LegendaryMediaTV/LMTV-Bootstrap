// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import VisuallyHidden from "../VisuallyHidden";

export default (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // set defaults
  if (!properties.animation) properties.animation = "border";
  if (!properties.role) properties.role = "status";

  // render component
  if (properties.alert) {
    delete properties.alert;
    let spinnerProperties = {};

    // default variant to info
    if (!properties.variant) properties.variant = "info";

    // extract animation
    spinnerProperties.animation = properties.animation;
    delete properties.animation;

    // extract role
    spinnerProperties.role = properties.role;
    delete properties.role;

    // extract size
    spinnerProperties.size = properties.size;
    delete properties.size;

    // append alert classes
    properties.className.push("py-5 text-center");

    // merge classes
    properties.className = combine(properties.className);

    return (
      <Alert {...properties}>
        <Spinner {...spinnerProperties}>
          <VisuallyHidden>{children ? children : "loading…"}</VisuallyHidden>
        </Spinner>
      </Alert>
    );
  } else {
    // merge classes
    properties.className = combine(properties.className);

    return (
      <Spinner {...properties}>
        <VisuallyHidden>{children ? children : "loading…"}</VisuallyHidden>
      </Spinner>
    );
  }
};
