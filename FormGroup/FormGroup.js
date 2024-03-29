// dependencies
import React from "react";
import { combine, prepare } from "../functions";

// components
import Form from "react-bootstrap/Form";
import InfoIcon from "../InfoIcon";

const FormGroup = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // create info icon
  let icon;
  if (properties.info) {
    icon = (
      <InfoIcon
        alt={properties.infoAlt}
        iconClassName={properties.iconClassName}
        iconStyle={properties.iconStyle}
        name={properties.infoName}
        title={properties.infoTitle ?? properties.title}
        titleAs={properties.infoTitleAs}
        variant={properties.infoVariant}
        className={properties.infoClassName}
        style={properties.infoStyle}
      >
        {properties.info}
      </InfoIcon>
    );
  }
  delete properties.infoAlt;
  delete properties.iconClassName;
  delete properties.iconStyle;
  delete properties.infoName;
  delete properties.infoTitle;
  delete properties.infoTitleAs;
  delete properties.infoVariant;
  delete properties.infoClassName;
  delete properties.infoStyle;
  delete properties.info;

  // create label
  let label = (
    <Form.Label
      ref={properties.labelRef}
      as={properties.labelAs}
      column={properties.column}
      htmlFor={properties.htmlFor}
      visuallyHidden={properties.visuallyHidden}
      className={properties.labelClassName}
      style={properties.labelStyle}
    >
      {properties.title}
      {icon}
    </Form.Label>
  );
  delete properties.labelRef;
  delete properties.labelAs;
  delete properties.column;
  delete properties.htmlFor;
  delete properties.visuallyHidden;
  delete properties.labelClassName;
  delete properties.labelStyle;
  delete properties.title;

  // merge classes
  properties.className = combine(properties.className);

  // render component
  return (
    <Form.Group {...properties}>
      {label}
      {children}
    </Form.Group>
  );
};

export default FormGroup;
