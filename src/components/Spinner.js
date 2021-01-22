// dependencies
import React from 'react';

// components
import BSSpinner from 'react-bootstrap/Spinner';
import VisuallyHidden from './VisuallyHidden';

const Spinner = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // set defaults
    if (!properties.animation)
        properties.animation = 'border';
    if (!properties.role)
        properties.role = 'status';

    return (
        <BSSpinner {...properties}>
            <VisuallyHidden>Loading...</VisuallyHidden>
        </BSSpinner>
    );
}

export default Spinner;