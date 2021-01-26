// join array via space, returning null if empty
export const combine = (array) => (array.length ? array.join(" ") : null);

// prepare properties
export const prepare = (props) => {
  // copy properties
  const properties = { ...props };

  // separate children from properties
  const children = properties.children;
  delete properties.children;

  // split classes by whitespace
  properties.className = properties.className
    ? properties.className.trim().split(/\s+/)
    : [];

  return [properties, children];
};
