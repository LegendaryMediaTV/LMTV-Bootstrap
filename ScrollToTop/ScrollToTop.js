// dependencies
import React from "react";
import { combine, prepare } from "../functions";
import smoothscroll from "smoothscroll-polyfill";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// components
import Button from "react-bootstrap/Button";
import Icon from "../Icon";

// styling
import "./ScrollToTop.css";

export default (props) => {
  // use React state to track visibility
  const [componentState, setComponentState] = React.useState(false);

  // use scroll position to set visibility status
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -500;
      if (isShow !== componentState) setComponentState(isShow);
    },
    [componentState],
    null,
    null,
    250
  );

  // prepare properties
  const [properties] = prepare(props);

  // extract alternate text
  const alt = properties.alt ?? "up arrow";
  delete properties.alt;

  // extract name
  const name = properties.name ?? "fas fa-chevron-circle-up";
  delete properties.name;

  // extract variant
  const variant = properties.variant ?? "dark";
  delete properties.variant;

  // extract iconClassName
  const iconClassName = properties.iconClassName
    ? properties.iconClassName.trim().split(/\s+/)
    : ["h1 m-0"];

  // extract iconStyle
  const iconStyle = properties.iconStyle;
  delete properties.iconStyle;

  // add required properties
  properties.className.push("ScrollToTop");
  if (componentState) properties.className.push("show");
  properties.variant = "link";
  properties.onClick = scrollToTopHandler;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return (
    <Button {...properties}>
      <Icon
        name={name}
        alt={alt}
        variant={variant}
        className={combine(iconClassName)}
        style={iconStyle}
      />
    </Button>
  );
};

/**
 * event handler function for smoothly scrolling to the top of the page
 * @param {EventHandlerNonNull} event event to handle
 */
export const scrollToTopHandler = (event) => {
  // ignore default click behavior
  event.preventDefault();

  // enable smooth scrolling for older browsers
  smoothscroll.polyfill();

  // scroll to the top
  window.scrollTo({ top: 0, behavior: "smooth" });
};
