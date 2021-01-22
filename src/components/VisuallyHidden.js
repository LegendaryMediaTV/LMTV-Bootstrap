// dependencies
import React from 'react';

const VisuallyHidden = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // add Bootstrap classes
    properties.className = `sr-only ${ properties.focusable ? 'sr-only-focusable' : '' } ${ properties.className ? properties.className : '' }`;
    delete properties.focusable;

    // clean up className
    properties.className = properties.className.trim().replace(/\s+/, ' ');

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <span {...properties}>{children}</span>
    );
}

export default VisuallyHidden;