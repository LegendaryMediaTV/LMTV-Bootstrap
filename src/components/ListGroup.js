// dependencies
import React from "react";
import * as f from "../functions";

// components
import Link from "./Link";
import ListGroup from "react-bootstrap/ListGroup";

const Component = (props) => {
  // prepare properties
  const [properties, children] = f.prepare(props);

  // establish field names
  const displayField = properties.displayField
    ? properties.displayField
    : "title";
  delete properties.displayField;
  const urlField = properties.urlField ? properties.urlField : "url";
  delete properties.urlField;
  const keyField = properties.keyField ? properties.keyField : "id";
  delete properties.keyField;

  // establish title
  let title;
  if (properties.title) {
    properties.titleClassName =
      properties.titleClassName != null ? properties.titleClassName : "mb-0";

    if (properties.titleVariant == null) properties.titleVariant = "primary";
    if (properties.titleVariant)
      properties.titleClassName += ` bg-${properties.titleVariant}`;
    properties.titleClassName = properties.titleClassName
      .trim()
      .replace(/\s+/, " ");

    title = (
      <ListGroup.Item
        as={properties.titleAs ? properties.titleAs : "h3"}
        className={properties.titleClassName}
        style={properties.titleStyle}
      >
        {properties.title}
      </ListGroup.Item>
    );
  }
  delete properties.title;
  delete properties.titleAs;
  delete properties.titleVariant;
  delete properties.titleClassName;
  delete properties.titleStyle;

  // extract items and establish children
  let items = "items" in properties ? properties.items : [];
  items = items.map((item, index) => {
    // determine whether item is a link
    const isLink =
      (typeof item === "object" && urlField in item) ||
      typeof item === "string";

    return (
      <ListGroup.Item
        action
        as={isLink ? Link : null}
        to={isLink ? (typeof item === "object" ? item[urlField] : item) : null}
        onClick={properties.click ? properties.click.bind(this, item) : null}
        key={
          typeof item === "object" && keyField in item ? item[keyField] : index
        }
      >
        {typeof item === "object" ? item[displayField] : item}
      </ListGroup.Item>
    );
  });
  delete properties.items;
  delete properties.click;

  // merge classes
  properties.className = f.combine(properties.className);

  // render component
  return (
    <ListGroup {...properties}>
      {title}
      {items}
      {children}
    </ListGroup>
  );
};

export default Component;
