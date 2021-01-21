// dependencies
import React from 'react';

// components
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// custom components
import Icon from './Icon';

// styling
import './HelpIcon.css';

const HelpIcon = (props) => {
    // determine class name
    let className = 'HelpIcon';
    if (props.className)
        className += ` ${props.className}`;

    const popover = (
        <Popover>
            { props.title ? <Popover.Title as="h3">{props.title}</Popover.Title> : null }
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
                    name={!('name' in props) ? 'fas fa-question-circle' : props.name}
                    alt={!('alt' in props) ? 'info' : props.alt}
                    variant={!('variant' in props) ? 'info' : props.variant}
                    className={props.iconClassName}
                    style={props.iconStyle}
                />
            </Button>
        </OverlayTrigger>
    );
}

export default HelpIcon;