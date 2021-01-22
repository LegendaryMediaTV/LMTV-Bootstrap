// dependencies
import React from 'react';

// components
import Link from './Link';
import BSListGroup from 'react-bootstrap/ListGroup';

const ListGroup = (props) => {
    // copy properties (original can't be manipulated)
    const properties = {...props};

    // establish field names
    const displayField = properties.displayField ? properties.displayField : 'title';
    delete properties.displayField;
    const urlField = properties.urlField ? properties.urlField : 'url';
    delete properties.urlField;
    const keyField = properties.keyField ? properties.keyField : 'id';
    delete properties.keyField;

    // establish title
    let title;
    if (properties.title) {
        properties.titleClassName = properties.titleClassName != null ? properties.titleClassName : 'mb-0';

        if (properties.titleVariant == null)
            properties.titleVariant = 'primary';
        if (properties.titleVariant)
            properties.titleClassName += ` bg-${properties.titleVariant}`;
        properties.titleClassName = properties.titleClassName.trim().replace(/\s+/, ' ');

        title = (
            <BSListGroup.Item
                as={ properties.titleAs ? properties.titleAs : 'h3' }
                className={properties.titleClassName}
                style={properties.titleStyle}
            >{properties.title}</BSListGroup.Item>
        );
    }    
    delete properties.title;
    delete properties.titleAs;
    delete properties.titleVariant;
    delete properties.titleClassName;
    delete properties.titleStyle;

    // extract items and establish children
    let items = 'items' in properties ? properties.items : [];
    items = items.map((item, index) => {
        if (!((typeof item === 'object' && urlField in item) || typeof item === 'string')) {
            return (
                <BSListGroup.Item
                    action
                    onClick={ properties.click ? properties.click.bind(this, item) : null }
                    key={ typeof item === 'object' && keyField in item ? item[keyField] : index }
                >{item[displayField]}</BSListGroup.Item>
            );
        }
        else {
            return (
                <Link
                    href={ typeof item === 'object' ? item[urlField] : item }
                    className="list-group-item list-group-item-action"
                    key={ typeof item === 'object' && keyField in item ? item[keyField] : index }
                >{ typeof item === 'object' ? item[displayField] : item }</Link>
            );
        }
    });
    delete properties.items;
    delete properties.click;

    return (
        <BSListGroup {...properties}>
            {title}
            {items}
        </BSListGroup>
    );
}

export default ListGroup;