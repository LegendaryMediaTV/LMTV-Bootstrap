// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Button from "react-bootstrap/Button";
import Icon from "../Icon";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

// styling
import "./InfoIcon.css";

const InfoIcon = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // add required class
  properties.className.push("InfoIcon");

  // establish popover
  const popover = (
    <Popover>
      {properties.title ? (
        <Popover.Title as={properties.titleAs ?? "h3"}>
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
      name={properties.name ?? "fas fa-info-circle"}
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

export default InfoIcon;
