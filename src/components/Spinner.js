// dependencies
import React from 'react';

// components
import Spinner from 'react-bootstrap/Spinner';

const FormGroup = (props) => {
    return (
        <Spinner
            animation={props.animation ? props.animation : 'border'}
            as={props.as}
            role={props.role ? props.role : 'status'}
            size={props.size}
            variant={props.variant}
            className={props.className}
            style={props.style}
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
);
}

export default FormGroup;