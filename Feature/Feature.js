// dependencies
import React from "react";
import { combine, prepare, separate } from "../functions/functions";

// components
import Link from "../Link";

// styling
import "./Feature.css";

const Container = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add Bootstrap classes
  properties.className.push("FeatureContainer");

  // merge classes
  properties.className = combine(properties.className);

  return <div {...properties}>{children}</div>;
};

export default class Feature extends React.Component {
  // sub-components
  static Container = Container;

  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // extract wrapperClassName
    const wrapperClassName = separate(properties.wrapperClassName);
    delete properties.wrapperClassName;

    // extract wrapperStyle
    const wrapperStyle = properties.wrapperStyle;
    delete properties.wrapperStyle;

    // determine component class
    const Component = properties.to || properties.href ? Link : "button";

    // add main component classes
    wrapperClassName.push("Feature");
    wrapperClassName.push("text-center");
    properties.className.push("FeatureItem");

    // extract ID
    const id = properties.id;
    delete properties.id;

    // extract title
    const title = properties.title;
    delete properties.title;

    // extract subtitle
    const subtitle = properties.subtitle;
    delete properties.subtitle;

    // extract text shadow
    if (properties.textShadow) wrapperClassName.push("FeatureTextShadow");
    delete properties.textShadow;

    // extract variant
    if (properties.variant) wrapperClassName.push(`bg-${properties.variant}`);
    delete properties.variant;

    // merge classes
    properties.className = combine(properties.className);

    // render component
    return (
      <div id={id} className={combine(wrapperClassName)} style={wrapperStyle}>
        <Component {...properties}>
          {title ? <h2 className="display-4 mb-0">{title}</h2> : null}
          {subtitle ? <div className="lead fst-italic">{subtitle}</div> : null}
          {children}
        </Component>
      </div>
    );
  }
}
