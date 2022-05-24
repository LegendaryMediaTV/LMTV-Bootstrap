// dependencies
import React from "react";
import { combine, prepare } from "../functions";

const Icon = (props) => {
  // enforce requirements
  if (!props.name) throw new Error('<Icon> "name" property is required');

  // prepare properties
  const [properties] = prepare(props);

  // ensure alt text
  if (properties["aria-label"] == null) {
    if (properties.alt != null) properties["aria-label"] = properties.alt;
    else {
      properties["aria-label"] = properties.name
        .replace("-alt", "")
        .replace(/^[a-z-]+ [a-z]{2}-/, "")
        .replace(/-fill$/, "")
        .replace(/-/g, " ");
    }
  }
  delete properties.alt;

  // add icon name to class
  properties.className.push(properties.name);
  delete properties.name;

  // add variant to class
  if (properties.variant)
    properties.className.push(`text-${properties.variant}`);
  delete properties.variant;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return <i {...properties} />;
};

export default Icon;
