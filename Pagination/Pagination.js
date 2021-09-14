// dependencies
import React from "react";
import { combine, prepare } from "../functions/functions";

// components
import Link from "../Link/Link";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

const PaginationItem = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // extract active/disabled flags
  const active = properties.active;
  const activeLabel = properties.activeLabel ?? "(current)";
  const disabled = properties.disabled;
  delete properties.active;
  delete properties.disabled;

  // extract URL
  const url = properties.href ?? properties.to;
  //if (properties.href === "#") properties.href = "";
  delete properties.href;
  delete properties.to;

  // extract onClick
  const onClick = properties.onClick;
  delete properties.onClick;

  // add Bootstrap classes
  properties.className.push("page-item");
  if (active) properties.className.push("active");
  if (disabled) properties.className.push("disabled");

  // merge classes
  properties.className = combine(properties.className);

  return (
    <li {...properties}>
      <PaginationLink to={url} onClick={onClick}>
        {children}

        {active ? <VisuallyHidden>{activeLabel}</VisuallyHidden> : null}
      </PaginationLink>
    </li>
  );
};

const PaginationLink = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // extract URL
  const url = properties.href ?? properties.to;
  //if (properties.href === "#") properties.href = "";
  delete properties.href;
  delete properties.to;
  if (url) properties.to = url;

  // add required classes
  properties.className.push("page-link");

  // merge classes
  properties.className = combine(properties.className);

  // has a URL, export as a Gatsby link
  if (url) return <Link {...properties}>{children}</Link>;
  // has an onClick, export as a button
  else if (properties.onClick)
    return <button {...properties}>{children}</button>;
  // no action, export a span
  else return <span {...properties}>{children}</span>;
};

const PaginationFirst = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // merge classes
  properties.className = combine(properties.className);

  return (
    <PaginationItem {...properties}>
      {children ?? (
        <>
          <span aria-hidden="true">«</span>
          <VisuallyHidden>First</VisuallyHidden>
        </>
      )}
    </PaginationItem>
  );
};

const PaginationLast = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // merge classes
  properties.className = combine(properties.className);

  return (
    <PaginationItem {...properties}>
      {children ?? (
        <>
          <span aria-hidden="true">»</span>
          <VisuallyHidden>Last</VisuallyHidden>
        </>
      )}
    </PaginationItem>
  );
};

const PaginationPrev = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // merge classes
  properties.className = combine(properties.className);

  return (
    <PaginationItem {...properties}>
      {children ?? (
        <>
          <span aria-hidden="true">‹</span>
          <VisuallyHidden>Previous</VisuallyHidden>
        </>
      )}
    </PaginationItem>
  );
};

const PaginationNext = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // merge classes
  properties.className = combine(properties.className);

  return (
    <PaginationItem {...properties}>
      {children ?? (
        <>
          <span aria-hidden="true">›</span>
          <VisuallyHidden>Next</VisuallyHidden>
        </>
      )}
    </PaginationItem>
  );
};

const PaginationEllipsis = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // merge classes
  properties.className = combine(properties.className);

  return (
    <PaginationItem {...properties}>
      {children ?? (
        <>
          <span aria-hidden="true">…</span>
          <VisuallyHidden>More</VisuallyHidden>
        </>
      )}
    </PaginationItem>
  );
};

export default class Pagination extends React.Component {
  // sub-components
  static Item = PaginationItem;
  static First = PaginationFirst;
  static Last = PaginationLast;
  static Prev = PaginationPrev;
  static Next = PaginationNext;
  static Ellipsis = PaginationEllipsis;

  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // add Bootstrap classes
    properties.className.push("pagination");
    if (properties.size)
      properties.className.push(`pagination-${properties.size}`);
    delete properties.size;

    // merge classes
    properties.className = combine(properties.className);

    return <ul {...properties}>{children}</ul>;
  }
}
