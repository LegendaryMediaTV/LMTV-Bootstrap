// dependencies
import React from 'react';

// components
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// custom components
import Icon from './Icon';

// styling
import './InfoIcon.css';

const InfoIcon = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // add required class
    properties.className = `InfoIcon ${ properties.className ? properties.className : '' }`.trim().replace(/\s+/, ' ');

    // establish popover
    const popover = (
        <Popover>
            { properties.title ? <Popover.Title as={ properties.titleAs ? properties.titleAs : 'h3' }>{properties.title}</Popover.Title> : null }
            { properties.children ? <Popover.Content>{properties.children}</Popover.Content> : null }
        </Popover>
    );
    delete properties.title;
    delete properties.titleAs;
    delete properties.children;

    // establish icon
    const icon = (
        <Icon
            name={ properties.name ? properties.name : 'fas fa-info-circle' }
            alt={properties.alt}
            variant={ properties.variant != null ? properties.variant : 'info' }
            className={properties.iconClassName}
            style={properties.iconStyle}
        />
    );
    delete properties.name;
    delete properties.alt;
    delete properties.variant;
    delete properties.iconClassName;
    delete properties.iconStyle;

    return (
        <OverlayTrigger trigger="click" overlay={popover} rootClose>
            <Button
                variant="link"
                {...properties}
            >{icon}</Button>
        </OverlayTrigger>
    );
}

export default InfoIcon;