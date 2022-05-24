// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Icon from "../Icon";
import { Link as GatsbyLink } from "gatsby";

const Link = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // extract URL
  const url = properties.href ?? properties.to;
  delete properties.href;
  delete properties.to;

  // enforce requirements
  if (!url) throw new Error('<Link> "href" or "to" property is required');

  // determine external status
  if (properties.external === "false" || properties.external === false)
    properties.external = false;
  else if (
    properties.external ||
    properties.externalIcon ||
    url.match(/^https?:/i)
  )
    properties.external = true;

  // extract external new tab
  if (properties.externalNewTab && properties.external)
    properties.newTab = true;
  delete properties.externalNewTab;

  // extract new tab
  if (properties.newTab) {
    properties.target = "_blank";
    properties.rel = "noopener";
  }

  // native: starts with anchor hash tag, flagged as external, starts with a protocol, or ends with a file extension
  let elementType;
  if (
    url[0] === "#" ||
    properties.newTab ||
    properties.external ||
    url.match(/(^[a-z]+:|\.[a-z0-9]+$)/i)
  ) {
    elementType = "a";
    properties.href = url;
  }
  // Gatsby: anchor or non-file internal
  else {
    elementType = GatsbyLink;
    properties.to = url;
  }
  delete properties.newTab;

  // external icon
  let external;
  if (properties.external) {
    external = (
      <small>
        <Icon
          name={
            properties.externalIcon ?? "fa-solid fa-arrow-up-right-from-square"
          }
          alt="external link"
          variant={properties.externalVariant ?? "muted"}
          className={
            properties.externalClassName ?? "small ps-1 align-text-top"
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

export default Link;
