// combine classes
export const combine = (classes) =>
    classes.length ? classes.join(' ') : null;

// prepare properties
export const prepare = (props) => {
    const properties = {...props};
    const children = properties.children;
    delete properties.children;
    properties.className = properties.className ? properties.className.trim().split(/\s+/) : [];

    return [ properties, children ];
}