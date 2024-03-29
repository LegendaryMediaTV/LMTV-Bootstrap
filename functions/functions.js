/**
 * join elements array via space, returning null if empty
 * @param {string[]} array array of strings
 * @returns {string}
 */
export const combine = (array) =>
  Array.isArray(array) && array.length ? array.join(" ") : null;

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
    const name = elements[index].name ?? elements[index].id;

    // determine the value (not an unchecked radio)
    let value;
    if (elements[index].type === "radio")
      value = elements[index].checked ? elements[index].value : undefined;
    else if (elements[index].type === "checkbox")
      value = !elements[index].checked
        ? false
        : elements[index].value !== "on"
        ? elements[index].value
        : true;
    else value = elements[index].value;

    // only track named elements
    if (name && value != null) {
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
  properties.className = separate(properties.className);

  return [properties, children];
};

/**
 * split elements via whitespace, returning an empty array if blank
 * @param {string} array space-separated string
 * @returns {string[]}
 */
export const separate = (string) => {
  // string isn't null/undefined, split it
  if (string != null) {
    // remove leading/trailing whitespace
    string = string.toString().trim();

    // split string by whitespace
    return string.split(/\s+/);
  }
  // null/undefined, return empty array
  else return [];
};

/**
 * wait the specified number of milliseconds before continuing
 * @param {number} milliseconds
 * @returns {Promise}
 */
export const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

/**
 * generate an SEO-friendly HTML title
 * @param {string} site site/company name
 * @param {string} [title] this page’s title
 * @param {string} [parent] parent page’s title
 * @param {string} [siteSeparator] separator between the site and the title/parent
 * @param {string} [parentSeparator] separator between the title and parent
 * @param {string} [separatorReplacer] replacement character when title or parent contain the parentSeparator
 * @returns {string}
 */
export const title = (
  site,
  title,
  parent,
  siteSeparator,
  parentSeparator,
  separatorReplacer
) => {
  // enforce requirements
  if (!site) throw new Error('title() "site" argument is required');

  // define separators
  if (!siteSeparator) siteSeparator = "|";
  if (!parentSeparator) parentSeparator = "–";
  if (!separatorReplacer) separatorReplacer = "/";

  // define regular expressions
  let siteRegExp = new RegExp(siteSeparator.replace("|", "\\|"), "g");
  let parentRegExp = new RegExp(parentSeparator.replace("|", "\\|"), "g");

  let output = site;
  if (title || parent) {
    output = ` ${siteSeparator} ${output
      .toString()
      .replace(siteRegExp, separatorReplacer)}`;
    if (parent)
      output = `${parent
        .toString()
        .replace(parentRegExp, separatorReplacer)}${output}`;
    if (title && parent) output = ` ${parentSeparator} ${output}`;
    if (title)
      output = `${title
        .toString()
        .replace(parentRegExp, separatorReplacer)}${output}`;
  }

  return output;
};
