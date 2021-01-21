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

    const displayField = props.displayField ? props.displayField : 'title';
    const urlField = props.urlField ? props.urlField : 'url';
    const keyField = props.keyField ? props.keyField : 'id';

    return (
        <BSListGroup
            activeKey={props.activeKey}
            as={props.as}
            defaultActiveKey={props.defaultActiveKey}
            horizontal={props.horizontal}
            onSelect={props.onSelect}
            variant={props.variant}
            className={props.className}
            style={props.style}
        >
            {
                props.title
                ? <BSListGroup.Item
                    as={props.titleAs ? props.titleAs : 'h3' }
                    variant={props.titleVariant ? props.titleVariant : 'primary' }
                    className={props.titleClassName}
                    style={props.titleStyle}
                >{props.title}</BSListGroup.Item>
                : null
            }
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