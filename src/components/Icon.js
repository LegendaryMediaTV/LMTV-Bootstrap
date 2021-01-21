// dependencies
import React from 'react';

const Icon = (props) => {
    // determine class name
    let className = props.name;
    if (props.className)
        className += ` ${props.className}`;
    if (props.variant)
        className += ` text-${props.variant}`;

    // ensure alt text
    let alt;
    if (props.alt != null)
        alt = props.alt;
    else
        alt = props.name.replace('-alt', '').replace(/^(fa[a-z]? )?fa-/, '').replace(/-/g, ' ');

    return (
        <i className={className} aria-label={alt} style={props.style} />
    );
}

export default Icon;