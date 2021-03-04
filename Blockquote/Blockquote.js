// dependencies
import React from "react";
import { combine, prepare } from "../functions/functions";

const Footer = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add required classes
  properties.className.push("blockquote-footer");

  // merge classes
  properties.className = combine(properties.className);

  return <footer {...properties}>{children}</footer>;
};

export default class Blockquote extends React.Component {
  // sub-components
  static Footer = Footer;

  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // add required classes
    properties.className.push("blockquote");

    // merge classes
    properties.className = combine(properties.className);

    return <blockquote {...properties}>{children}</blockquote>;
  }
}
