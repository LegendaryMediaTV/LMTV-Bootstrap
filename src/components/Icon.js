// dependencies
import React from 'react';

const Icon = (props) => {
    // enforce requirements
    if (!props.name)
        throw new Error('Icon name is required');

    // copy properties (original can't be manipulated)
    const properties = {...props};

    // ensure alt text
    if (properties['aria-label'] == null) {
        if (properties.alt != null)
            properties['aria-label'] = properties.alt;
        else {
            properties['aria-label'] = properties.name
                .replace('-alt', '')
                .replace(/^[a-z]+ [a-z]{2}-/, '')
                .replace(/-fill$/, '')
                .replace(/-/g, ' ');
        }
    }
    delete properties.alt;

    // add icon name to class
    properties.className = `${properties.name} ${ properties.className ? properties.className : '' }`;
    delete properties.name;

    // add variant to class
    if (properties.variant)
        properties.className += ` text-${properties.variant}`;
    delete properties.variant;

    // clean up className
    properties.className = properties.className.trim().replace(/\s+/, ' ');

    return (
        <i {...properties} />
    );
}

export default Icon;