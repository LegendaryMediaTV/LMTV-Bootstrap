// join array via space, returning null if empty
export const combine = (array) => (array.length ? array.join(" ") : null);

// prepare properties
export const prepare = (props) => {
  const properties = { ...props };
  const children = properties.children;
  delete properties.children;
  properties.className = properties.className
    ? properties.className.trim().split(/\s+/)
    : [];

  return [properties, children];
};
