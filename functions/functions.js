/**
 * join elements array via space, returning null if empty
 * @param {string[]} array array of strings
 * @returns {string}
 */
export const combine = (array) => (array.length ? array.join(" ") : null);

/**
 * retrieve form data as JSON
 * @param {object} form form object containing one or more form elements
 * @returns {object}
 */
export const formData = (form) => {
  let output = {};

  // loop through form elements, adding them to the data output
  const elements = form.elements;
  for (let index = 0; index < elements.length; index++) {
    // determine the key name
    const name = elements[index].name
      ? elements[index].name
      : elements[index].id;

    // determine the value (not an unchecked checkbox/radio)
    const value = !(
      (elements[index].type === "checkbox" ||
        elements[index].type === "radio") &&
      !elements[index].checked
    )
      ? elements[index].value
      : false;

    // only track named elements
    if (name && value !== false) {
      // key already exists, add it to an array of values
      if (name in output) {
        // convert current value to an array, if not already
        if (!Array.isArray(output[name])) output[name] = [output[name]];

        // append the new value
        output[name].push(value);
      }
      // new key, add it as a simple value
      else output[name] = value;
    }
  }

  return output;
};

/**
 * prepare properties by cloning them and splitting out the children
 * @param {*} props React element properties
 * @returns {any[]}
 */
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
