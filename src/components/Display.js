// dependencies
import React from 'react';
import * as f from '../functions';

export const Heading = (props) => {
    // prepare properties
    const [ properties, children] = f.prepare(props);

    // set defaults
    const size = properties.size ? properties.size : '1';
    delete properties.size;
    let htmlElement = properties.as ? properties.as : `h${size}`;
    delete properties.as;

    // add Bootstrap class
    properties.className.push(`display-${size}`);

    // merge classes
    properties.className = f.combine(properties.className);

    // render component
    return React.createElement(htmlElement, properties, children);
}

export const Heading1 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '1';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <Heading {...properties} size={size}>{children}</Heading>
    )
}


export const Heading2 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '2';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <Heading {...properties} size={size}>{children}</Heading>
    )
}


export const Heading3 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '3';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <Heading {...properties} size={size}>{children}</Heading>
    )
}


export const Heading4 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '4';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <Heading {...properties} size={size}>{children}</Heading>
    )
}

export default {
    Heading,
    Heading1,
    Heading2,
    Heading3,
    Heading4
}