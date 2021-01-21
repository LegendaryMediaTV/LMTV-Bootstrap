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

    let displayField = props.displayField ? props.displayField : 'title';
    let urlField = props.urlField ? props.urlField : 'url';
    let keyField = props.keyField ? props.keyField : 'id';

    return (
        <BSListGroup className={props.className} style={props.style}>
            { props.title ? <BSListGroup.Item className={`bg-${props.variant ? props.variant : 'primary'}`}><h3 className="mb-0">{props.title}</h3></BSListGroup.Item> : null }
            {items.map((item, index) => (
                <>
                    {
                        !((typeof item === 'object' && urlField in item) || typeof item === 'string')
                        ? <BSListGroup.Item
                            action
                            onClick={props.click ? props.click.bind(this, item) : null}
                            key={typeof item === 'object' && keyField in item ? item[keyField] : index}
                        >{item[displayField]}</BSListGroup.Item>
                        : (
                            !(typeof item === 'object' ? item[urlField] : item).match(/(^https?:\/\/|\.[a-z0-9]+$)/i)
                            ? <Link
                                to={typeof item === 'object' ? item[urlField] : item}
                                className="list-group-item list-group-item-action"
                                key={typeof item === 'object' && keyField in item ? item[keyField] : index}
                            >{typeof item === 'object' ? item[displayField] : item}</Link>
                            : <a
                                href={typeof item === 'object' ? item[urlField] : item}
                                className="list-group-item list-group-item-action"
                                key={typeof item === 'object' && keyField in item ? item[keyField] : index}
                            >{typeof item === 'object' ? item[displayField] : item}</a>
                        )
                    }
                </>
            ))}
        </BSListGroup>
    );
}

export default ListGroup;