// dependencies
import React from 'react';

export const DisplayHeading = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = properties.size ? properties.size : '1';
    delete properties.size;
    let htmlElement = properties.as ? properties.as : `h${size}`;
    delete properties.as;

    // add Bootstrap class
    properties.className = `display-${size} ${ properties.className ? properties.className : '' }`.trim().replace(/\s+/, ' ');

    // extract children
    const children = properties.children;
    delete properties.children;

    return React.createElement(htmlElement, properties, children);
}

export default DisplayHeading;


export const DisplayHeading1 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '1';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <DisplayHeading {...properties} size={size}>{children}</DisplayHeading>
    )
}


export const DisplayHeading2 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '2';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <DisplayHeading {...properties} size={size}>{children}</DisplayHeading>
    )
}


export const DisplayHeading3 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '3';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <DisplayHeading {...properties} size={size}>{children}</DisplayHeading>
    )
}


export const DisplayHeading4 = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    const size = '4';

    // extract children
    const children = properties.children;
    delete properties.children;

    return (
        <DisplayHeading {...properties} size={size}>{children}</DisplayHeading>
    )
}