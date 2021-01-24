// dependencies
import React from "react";
import * as f from "../functions";

const Content = (props) => {
  // prepare properties
  const [properties, children] = f.prepare(props);

  // add required classes
  properties.className.push("mb-auto w-100");

  // merge classes
  properties.className = f.combine(properties.className);

  return <div {...properties}>{children}</div>;
};

const Footer = (props) => {
  // prepare properties
  const [properties, children] = f.prepare(props);

  // add required classes
  properties.className.push("w-100");

  // merge classes
  properties.className = f.combine(properties.className);

  return <footer {...properties}>{children}</footer>;
};

export default class Component extends React.Component {
  // sub-components
  static Content = Content;
  static Footer = Footer;

  render() {
    // prepare properties
    const [properties, children] = f.prepare(this.props);

    // add required classes
    properties.className.push(
      "d-flex align-items-start flex-column min-vh-100"
    );

    // merge classes
    properties.className = f.combine(properties.className);

    return <div {...properties}>{children}</div>;
  }
}
