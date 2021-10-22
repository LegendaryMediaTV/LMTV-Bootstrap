// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Link from "../Link";
import { default as RBSListGroup } from "react-bootstrap/ListGroup";

class Item extends React.Component {
  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // convert to an action when actionable settings are enabled
    if (properties.action !== false) {
      // link
      if (properties.href || properties.to) {
        // convert to a Gatsby-friendly link
        if (!properties.as) properties.as = Link;

        properties.action = true;
      } else if (properties.onClick) properties.action = true;
    }

    // extract sub-item content
    const subitem = properties.subitem;
    const subitemClassName =
      properties.subitemClassName ?? "fst-italic small text-muted";
    delete properties.subitem;
    delete properties.subitemClassName;

    // add flex support for sub-actions
    let subactions = properties.subactions;
    if (subactions) {
      // ensure subactions property is an array
      if (!Array.isArray(subactions)) subactions = [subactions];

      // remove some Bootstrap styling
      properties.className.push("border-0");
      properties.className.push("flex-grow-1");
    }
    if (properties.subaction) {
      properties.className.push("w-auto");
      properties.className.push("border-top-0");
      properties.className.push("border-end-0");
      properties.className.push("border-bottom-0");
      if (properties.subactionLast) properties.className.push("rounded-0");
    }
    delete properties.subactions;
    delete properties.subaction;
    delete properties.subactionLast;

    // merge classes
    properties.className = combine(properties.className);

    if (subactions) {
      return (
        <RBSListGroup.Item className="d-flex p-0">
          <RBSListGroup.Item {...properties}>{children}</RBSListGroup.Item>

          {subactions.map((subaction, subactionIndex) => (
            <Item
              {...subaction}
              subaction
              subactionLast={subactionIndex === subactions.length - 1}
              key={subactionIndex}
            />
          ))}
        </RBSListGroup.Item>
      );
    } else
      return (
        <RBSListGroup.Item {...properties}>
          {children}

          {subitem ? <div className={subitemClassName}>{subitem}</div> : null}
        </RBSListGroup.Item>
      );
  }
}

export default class ListGroup extends React.Component {
  // sub-components
  static Item = Item;

  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // establish field names
    const displayField = properties.displayField || "title";
    delete properties.displayField;
    const displaySubField = properties.displaySubField ?? "subtitle";
    delete properties.displaySubField;
    const displaySubClassName = properties.displaySubClassName;
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
        <Item
          as={properties.titleAs ?? "h3"}
          className={properties.titleClassName}
          style={properties.titleStyle}
        >
          {properties.title}
        </Item>
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
        <Item
          as={properties.itemsAs ?? (isLink ? Link : null)}
          to={
            isLink ? (typeof item === "object" ? item[urlField] : item) : null
          }
          onClick={
            properties.onSelect ? properties.onSelect.bind(this, item) : null
          }
          subitem={
            typeof item === "object" &&
            displaySubField &&
            displaySubField in item
              ? item[displaySubField]
              : null
          }
          subitemClassName={displaySubClassName}
          key={
            typeof item === "object" && keyField in item
              ? item[keyField]
              : index
          }
        >
          {typeof item === "object" ? item[displayField] : item}
        </Item>
      );
    });
    delete properties.items;
    delete properties.itemsAs;
    delete properties.onSelect;

    // merge classes
    properties.className = combine(properties.className);

    // render component
    return (
      <RBSListGroup {...properties}>
        {title}
        {items}
        {children}
      </RBSListGroup>
    );
  }
}
