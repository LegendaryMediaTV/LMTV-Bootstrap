// dependencies
import React from "react";
import { combine, prepare } from "../functions";

export default (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // set defaults
  if (!properties.className.length)
    properties.className.push("p-2 text-center");
  if (!properties.variant) properties.variant = "info";

  // add required classes
  properties.className.push(`bg-${properties.variant}`);
  delete properties.variant;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return (
    <div {...properties}>
      <div className="d-sm-none">
        <b>XS</b>
      </div>
      <div className="d-none d-sm-block d-md-none">
        <b>SM</b>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <b>MD</b>
      </div>
      <div className="d-none d-lg-block d-xl-none">
        <b>LG</b>
      </div>
      <div className="d-none d-xl-block">
        <b>XL</b>
      </div>
    </div>
  );
};
