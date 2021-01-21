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
    // determine class name
    let className = 'InfoIcon';
    if (props.className)
        className += ` ${props.className}`;

    const popover = (
        <Popover>
            { props.title ? <Popover.Title as={ props.titleAs ? props.titleAs : 'h3' }>{props.title}</Popover.Title> : null }
            { props.children ? <Popover.Content>{props.children}</Popover.Content> : null }
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" overlay={popover} rootClose>
            <Button
                variant="link"
                className={className}
                style={props.style}
            >
                <Icon
                    name={ props.name ? props.name : 'fas fa-info-circle' }
                    alt={props.alt}
                    variant={ props.variant != null ? props.variant : 'info' }
                    className={props.iconClassName}
                    style={props.iconStyle}
                />
            </Button>
        </OverlayTrigger>
    );
}

export default InfoIcon;