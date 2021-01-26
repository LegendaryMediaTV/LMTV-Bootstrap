// dependencies
import React from "react";
import { combine, prepare } from "../functions";

const Content = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add required classes
  properties.className.push("mb-auto w-100");

  // merge classes
  properties.className = combine(properties.className);

  return <div {...properties}>{children}</div>;
};

const Footer = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add required classes
  properties.className.push("w-100");

  // merge classes
  properties.className = combine(properties.className);

  return <footer {...properties}>{children}</footer>;
};

export default class extends React.Component {
  // sub-components
  static Content = Content;
  static Footer = Footer;

  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // add required classes
    properties.className.push(
      "d-flex align-items-start flex-column min-vh-100"
    );

    // merge classes
    properties.className = combine(properties.className);

    return <div {...properties}>{children}</div>;
  }
}
