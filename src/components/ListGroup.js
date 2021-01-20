// dependencies
import React from 'react';

// components
import { Link } from 'gatsby';
import BSListGroup from 'react-bootstrap/ListGroup';

const ListGroup = (props) => {
    // ensure there are items to traverse
    let items;
    if ('items' in props)
        items = props.items;
    else
        items = [];

    let displayKey = props.displayKey ? props.displayKey : 'title';
    let urlKey = props.urlKey ? props.urlKey : 'url';
            
    return (
        <BSListGroup className={props.className} style={props.style}>
            { props.title ? <BSListGroup.Item className={`bg-${props.variant ? props.variant : 'primary'}`}><h3 className="mb-0">{props.title}</h3></BSListGroup.Item> : null }
            {items.map((item) => (
                <>
                    {
                        typeof item === 'object' && !(urlKey in item)
                        ? <BSListGroup.Item
                            action
                            onClick={props.click ? props.click.bind(this, item) : null}
                        >{item[displayKey]}</BSListGroup.Item>
                        : <Link
                            to={typeof item == 'object' ? (item[urlKey] ? item[urlKey] : null) : item}
                            className="list-group-item list-group-item-action"
                        >{typeof item == 'object' ? item[displayKey] : item}</Link>
                    }
                </>
            ))}
        </BSListGroup>
    );
}

export default ListGroup;