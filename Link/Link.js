// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Icon from "../Icon";
import { Link } from "gatsby";

export default (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // extract URL
  const url = properties.href ? properties.href : properties.to;
  delete properties.href;
  delete properties.to;

  // enforce requirements
  if (!url) throw new Error('<Link> "href" or "to" property is required');

  // determine external status
  if (properties.external === "false") properties.external = false;
  else if (
    properties.external ||
    properties.externalIcon ||
    url.match(/^https?:/i)
  )
    properties.external = true;

  // native: starts with anchor hash tag, flagged as external, starts with a protocol, or ends with a file extension
  let elementType;
  if (
    url[0] === "#" ||
    properties.external ||
    url.match(/(^[a-z]+:|\.[a-z0-9]+$)/i)
  ) {
    elementType = "a";
    properties.href = url;
  }
  // Gatsby: anchor or non-file internal
  else {
    elementType = Link;
    properties.to = url;
  }

  // external icon
  let external;
  if (properties.external) {
    external = (
      <small>
        <Icon
          name={
            properties.externalIcon
              ? properties.externalIcon
              : "fas fa-external-link-alt"
          }
          variant={
            properties.externalVariant ? properties.externalVariant : "muted"
          }
          className={
            properties.externalClassName
              ? properties.externalClassName
              : "small pl-1 align-text-top"
          }
          style={properties.externalStyle}
        />
      </small>
    );
  } else external = null;
  delete properties.external;
  delete properties.externalIcon;
  delete properties.externalVariant;
  delete properties.externalClassName;
  delete properties.externalStyle;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return React.createElement(elementType, properties, children, external);
};
