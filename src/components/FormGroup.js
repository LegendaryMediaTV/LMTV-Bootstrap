// dependencies
import React from 'react';

// components
import Form from 'react-bootstrap/Form';
import InfoIcon from './InfoIcon';

const FormGroup = (props) => {
    return (
        <Form.Group
            ref={props.ref}
            as={props.as}
            controlId={props.controlId}
            className={props.className}
            style={props.style}
        >
            <Form.Label
                ref={props.labelRef}
                as={props.labelAs}
                column={props.column}
                htmlFor={props.htmlFor}
                srOnly={props.srOnly}
                labelClassName={props.className}
                labelStyle={props.style}
            >
                {props.title}
                {
                    props.info
                    ? <InfoIcon
                        alt={props.infoAlt}
                        iconClassName={props.iconClassName}
                        iconStyle={props.iconStyle}
                        name={props.infoName}
                        title={props.infoTitle ? props.infoTitle : props.title}
                        titleAs={props.infoTitleAs}
                        variant={props.infoVariant}
                        className={props.infoClassName}
                        style={props.infoStyle}
                    >{props.info}</InfoIcon>
                    : null
                }
            </Form.Label>
            {props.children}
        </Form.Group>
    );
}

export default FormGroup;