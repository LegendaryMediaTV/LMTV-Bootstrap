// dependencies
import React from 'react';

// components
import { Link as GatsbyLink } from 'gatsby';

const Link = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // extract URL
    const url = properties.href;
    delete properties.href;
    
    // extract children
    const children = properties.children;
    delete properties.children;

    // native: starts with anchor hash tag, starts with a protocol, or ends with a file extension
    let component;
    if (url[0] === '#' || url.match(/(^[a-z]+:|\.[a-z0-9]+$)/i)) {
        // add URL back with proper name
        properties.href = url;

        component = (
            <a {...properties}>{children}</a>
        );
    }
    // Gatsby: anchor or non-file internal
    else {
        // add URL back with proper name
        properties.to = url;

        component = (
            <GatsbyLink {...properties}>{children}</GatsbyLink>
        );
    }

    return component;
}

export default Link;