// dependencies
import React from "react";
import { combine, prepare } from "../functions";

const Heading = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // set defaults
  const size = properties.size ?? "1";
  delete properties.size;
  let htmlElement = properties.as ?? `h${size}`;
  delete properties.as;

  // add Bootstrap class
  properties.className.push(`display-${size}`);

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return React.createElement(htmlElement, properties, children);
};

const Heading1 = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);
  properties.className = combine(properties.className);

  return (
    <Heading {...properties} size="1">
      {children}
    </Heading>
  );
};

const Heading2 = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);
  properties.className = combine(properties.className);

  return (
    <Heading {...properties} size="2">
      {children}
    </Heading>
  );
};

const Heading3 = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);
  properties.className = combine(properties.className);

  return (
    <Heading {...properties} size="3">
      {children}
    </Heading>
  );
};

const Heading4 = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);
  properties.className = combine(properties.className);

  return (
    <Heading {...properties} size="4">
      {children}
    </Heading>
  );
};

const Display = {
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
};

export default Display;
