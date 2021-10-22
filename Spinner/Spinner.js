// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Alert from "react-bootstrap/Alert";
import { default as RBSSpinner } from "react-bootstrap/Spinner";
import VisuallyHidden from "../VisuallyHidden";

const Spinner = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // set defaults
  if (!properties.animation) properties.animation = "border";
  if (!properties.role) properties.role = "status";

  // render component
  if (properties.alert || properties.title) {
    let spinnerProperties = {};

    // extract title
    const title = properties.title;
    delete properties.alert;
    delete properties.title;

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
    properties.className.push(`text-center ${title ? "py-4" : "py-5"}`);

    // merge classes
    properties.className = combine(properties.className);

    return (
      <Alert {...properties}>
        {title ? <Alert.Heading className="pb-2">{title}</Alert.Heading> : null}

        <RBSSpinner {...spinnerProperties}>
          <VisuallyHidden>{children ?? "loading…"}</VisuallyHidden>
        </RBSSpinner>
      </Alert>
    );
  } else {
    // merge classes
    properties.className = combine(properties.className);

    return (
      <RBSSpinner {...properties}>
        <VisuallyHidden>{children ?? "loading…"}</VisuallyHidden>
      </RBSSpinner>
    );
  }
};

export default Spinner;
