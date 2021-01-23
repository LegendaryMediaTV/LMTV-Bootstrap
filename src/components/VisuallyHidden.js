// dependencies
import React from 'react';
import * as f from '../functions';

const Component = (props) => {
    // prepare properties
    const [ properties, children] = f.prepare(props);

    // add Bootstrap classes
    properties.className.push('sr-only');
    if (properties.focusable)
        properties.className.push('sr-only-focusable');
    delete properties.focusable;

    // merge classes
    properties.className = properties.className.length ? properties.className.join(' ') : null;

    return (
        <span {...properties}>{children}</span>
    );
}

export default Component;