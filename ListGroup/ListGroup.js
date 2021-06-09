// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Link from "../Link";
import { default as BSListGroup } from "react-bootstrap/ListGroup";

const ListGroup = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // establish field names
  const displayField = properties.displayField
    ? properties.displayField
    : "title";
  delete properties.displayField;
  const urlField = properties.urlField ?? "url";
  delete properties.urlField;
  const keyField = properties.keyField ?? "id";
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
      <BSListGroup.Item
        as={properties.titleAs ?? "h3"}
        className={properties.titleClassName}
        style={properties.titleStyle}
      >
        {properties.title}
      </BSListGroup.Item>
    );
  }
  delete properties.title;
  delete properties.titleAs;
  delete properties.titleVariant;
  delete properties.titleClassName;
  delete properties.titleStyle;

  // merge deprecated click into onSelect
  if (properties.click && !properties.onSelect)
    properties.onSelect = properties.click;
  delete properties.click;

  // extract items and establish children
  let items = "items" in properties ? properties.items : [];
  items = items.map((item, index) => {
    // determine whether item is a link
    const isLink =
      (typeof item === "object" && urlField in item) ||
      typeof item === "string";

    return (
      <BSListGroup.Item
        action
        as={properties.itemsAs ?? (isLink ? Link : null)}
        to={isLink ? (typeof item === "object" ? item[urlField] : item) : null}
        onClick={
          properties.onSelect ? properties.onSelect.bind(this, item) : null
        }
        key={
          typeof item === "object" && keyField in item ? item[keyField] : index
        }
      >
        {typeof item === "object" ? item[displayField] : item}
      </BSListGroup.Item>
    );
  });
  delete properties.items;
  delete properties.itemsAs;
  delete properties.onSelect;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return (
    <BSListGroup {...properties}>
      {title}
      {items}
      {children}
    </BSListGroup>
  );
};

export default ListGroup;
