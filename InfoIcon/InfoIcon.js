// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// vendor components
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

// custom components
import Icon from "../Icon";

// styling
import "./InfoIcon.css";

export default (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add required class
  properties.className.push("InfoIcon");

  // establish popover
  const popover = (
    <Popover>
      {properties.title ? (
        <Popover.Title as={properties.titleAs ? properties.titleAs : "h3"}>
          {properties.title}
        </Popover.Title>
      ) : null}
      {children ? <Popover.Content>{children}</Popover.Content> : null}
    </Popover>
  );
  delete properties.title;
  delete properties.titleAs;

  // establish icon
  const icon = (
    <Icon
      name={properties.name ? properties.name : "fas fa-info-circle"}
      alt={properties.alt}
      variant={properties.variant != null ? properties.variant : "info"}
      className={properties.iconClassName}
      style={properties.iconStyle}
    />
  );
  delete properties.name;
  delete properties.alt;
  delete properties.variant;
  delete properties.iconClassName;
  delete properties.iconStyle;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return (
    <OverlayTrigger trigger="click" overlay={popover} rootClose>
      <Button variant="link" {...properties}>
        {icon}
      </Button>
    </OverlayTrigger>
  );
};