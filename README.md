# LegendaryMediaTV Bootstrap

This is a Node.js package for extending [React Bootstrap](https://react-bootstrap.github.io) (which is based on [Bootstrap 4](https://getbootstrap.com/)) and [Gatsby](https://www.gatsbyjs.com). It also has components for class-based icons (i.e., [FontAwesome](https://fontawesome.com), [Bootstrap icons](https://icons.getbootstrap.com), etc.).

For the most recent changes, check out the [changelog](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/commits/main).

## Getting started

### Installation

Install peer dependencies (if they aren't already).

```JavaScript
npm install react react-dom react-bootstrap gatsby
```

Optionally, install [React Helmet](https://github.com/nfl/react-helmet) (useful for linking Bootstrap resources).

```JavaScript
npm install react-helmet
```

Install this package.

```JavaScript
npm install @legendarymediatv/bootstrap
```

### Preparation

[Modify the Babel loader](https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#modifying-the-babel-loader) to transpile JSX for this package.

> _NOTE: not configuring this will result in the following error when running `gatsby build`: ERROR #98123 WEBPACK – Generating development JavaScript bundle failed: Unexpected token_

**Sample `/gatsby-node.js`**

```JavaScript
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.module.rules = [
    // omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      (rule) => String(rule.test) !== String(/\.jsx?$/)
    ),
    // re-create it with custom exclude filter
    {
      // apply required Babel presets/plugins and merge in your configuration from `babel.config.js`.
      ...loaders.js(),
      test: /\.jsx?$/,
      // exclude all node_modules from transpilation, except for this plugin
      // NOTE: their pattern has "\/" but this has "[\\\/]" to support all OS path separators
      exclude: (modulePath) =>
        /node_modules/.test(modulePath) &&
        !/node_modules[\\\/]@legendarymediatv[\\\/]bootstrap/.test(modulePath),
    },
  ];
  // replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};
```

Either import Bootstrap CSS or link Bootstrap into your layout or app file.

**Sample `/src/components/Layout.js` (link, with FontAwesome)**

```JavaScript
import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bootstrap/Container";

export default (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />
      </Helmet>
      <Container className="py-4">
        <h1 className="display-1">{props.title}</h1>

        {props.children}
      </Container>
    </>
  );
};
```

Finally, import the components as needed into your app/components.

**Sample `/src/pages/index.js`**

```JavaScript
// dependencies
import React from "react";

// page layout template
import Layout from "../components/Layout";

// sample LegendaryMediaTV component
import Icon from "@legendarymediatv/bootstrap/Icon";

export default () => {
  return (
    <Layout title="Page Title" description="Page Description">
      <Icon name="fas fa-camera" />
    </Layout>
  );
};
```

## Components

> _NOTE: components can be imported at the package level or at the component level_

```JavaScript
// package-level
import { Demo } from '@legendarymediatv/bootstrap';

// component level
import Demo from '@legendarymediatv/bootstrap/Demo';
```

### `<BackgroundImage>`

Set a background image so that it covers the whole screen without distorting and stays in place, regardless of scrolling.

```JavaScript
import BackgroundImage from '@legendarymediatv/bootstrap/BackgroundImage';

…

<BackgroundImage src="/images/sample.jpg" />
```

| Name             | Type   | Default  | Description                          |
| :--------------- | :----- | :------- | :----------------------------------- |
| `src`            | string | required | path to the image file               |
| `imageClassName` | string |          | `className` property for the `<img>` |
| `imageStyle`     | object |          | `style` property for the `<img>`     |

### `<Breakpoint>`

Quickly see what the current breakpoint is (e.g., 'md').

```JavaScript
import Breakpoint from '@legendarymediatv/bootstrap/Breakpoint';

…

<Breakpoint />
```

> _NOTE: This component is intended to be used for development purposes and probably should be removed before deploying your app_

| Name      | Type   | Default | Description                |
| :-------- | :----- | :------ | :------------------------- |
| `variant` | string | info    | Bootstrap theme color name |

### `<Demo>`

This component is intended to be used for development purposes (e.g., testing your custom Bootstrap theme) by having everything all one one page!

> _WARNING: This component is still under development and often uses Bootstrap’s raw classes instead of React Bootstrap components or even **this** package’s components. Stay tuned for more updates!_

### `<Display>`

Bootstrap’s display heading typography classes.

- `<Display.Heading1>`
- `<Display.Heading2>`
- `<Display.Heading3>`
- `<Display.Heading4>`

```JavaScript
import Display from '@legendarymediatv/bootstrap/Display';

…

<Display.Heading1>Display Heading 1</Display.Heading1>

<Display.Heading2>Display Heading 2</Display.Heading2>

<Display.Heading3>Display Heading 3</Display.Heading3>

<Display.Heading4>Display Heading 4</Display.Heading4>
```

| Name | Type        | Default                          | Description          |
| :--- | :---------- | :------------------------------- | :------------------- |
| `as` | elementType | `<h#>` corresponding to the size | changes the HTML tag |

### `<FormGroup>`

An extension of React Bootstrap’s [`<Form.Group>`](https://react-bootstrap.github.io/components/forms/#form-group-props), which automatically contains a React Bootstrap [`<Form.Label>`](https://react-bootstrap.github.io/components/forms/#form-label-props). The label then optionally includes a `<InfoIcon>` when the `info` property is set.

```JavaScript
import FormGroup from '@legendarymediatv/bootstrap/FormGroup';

…

<FormGroup
  title="Sample textbox"
  info={<p>Things, <i>stuff</i>, <b>content</b>!</p>}
>
  <Form.Control
    name="sample"
    maxLength="80"
    defaultValue="eleventeen"
  />
</FormGroup>
```

| Name             | Type                        | Default          | Description                                 |
| :--------------- | :-------------------------- | :--------------- | :------------------------------------------ |
| `ref`            | ReactRef                    | inherited        | `ref` property for the `<Form.Group>`       |
| `as`             | elementType                 | inherited        | `as` property for the `<Form.Group>`        |
| `controlId`      | string                      | inherited        | `controlId` property for the `<Form.Group>` |
| `info`           | JSX                         |                  | popover content for the `<InfoIcon>`        |
| `infoAlt`        | string                      | inherited        | `alt` property for the `<InfoIcon>`         |
| `infoClassName`  | string                      |                  | `className` property for the `<InfoIcon>`   |
| `infoStyle`      | object                      |                  | `style` property for the `<InfoIcon>`       |
| `infoName`       | string                      | inherited        | `name` property for the `<InfoIcon>`        |
| `infoTitle`      | JSX                         | `title` property | `title` property for the `<InfoIcon>`       |
| `infoTitleAs`    | elementType                 | inherited        | `titleAs` property for the `<InfoIcon>`     |
| `infoVariant`    | string                      | inherited        | `variant` property for the `<InfoIcon>`     |
| `iconClassName`  | string                      |                  | `className` property for the `<InfoIcon>`   |
| `iconStyle`      | object                      |                  | `style` property for the `<InfoIcon>`       |
| `title`          | JSX                         |                  | content for the `<Form.Label>`              |
| `labelRef`       | ReactRef                    | inherited        | `ref` property for the `<Form.Label>`       |
| `labelAs`        | elementType                 | inherited        | `as` property for the `<Form.Label>`        |
| `column`         | boolean \| `'sm'` \| `'lg'` | inherited        | `column` property for the `<Form.Label>`    |
| `htmlFor`        | string                      | inherited        | `htmlFor` property for the `<Form.Label>`   |
| `srOnly`         | boolean                     | inherited        | `srOnly` property for the `<Form.Label>`    |
| `labelClassName` | string                      |                  | `className` property for the `<Form.Label>` |
| `labelStyle`     | object                      |                  | `style` property for the `<Form.Label>`     |

### `<FullPage>`

Make your page always use at least the full height of the browser window using flexbox instead of fixed/sticky styling. Plus, it has a footer component that will display at the bottom of the page without forcing a scrollbar!

This component set doesn't have any special properties, but it is made up of three parts:

- `<FullPage>` – the wrapper (should only contain the other FullPage components below)
- `<FullPage.Content>` (**required**) – page content (should contain your `<Navbar>` and page copy components such as `<article>`)
- `<FullPage.Footer>` (optional) – page footer (can be styled directly or given an `id` and styled elsewhere)

```JavaScript
import FormGroup from '@legendarymediatv/bootstrap/FormGroup';

…

<FullPage>
  <FullPage.Content>Page Content</FullPage.Content>
  <FullPage.Footer>Footer Content</FullPage.Footer>
</FullPage>
```

**Containerized example:**

```JavaScript
<div className="bg-dark">
  <Container className="bg-light p-0">
    <FullPage>
      <FullPage.Content>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>LegendaryMediaTV</Navbar.Brand>
        </Navbar>
        <article className="py-4 px-2">
          <h1>Title or whatever</h1>
          <p>Things, stuff, content!</p>
        </article>
      </FullPage.Content>
      <FullPage.Footer className="bg-secondary py-2 text-center text-white">
        Footer Content
      </FullPage.Footer>
    </FullPage>
  </Container>
</div>
```

> _NOTE: if using [React Helmet](https://github.com/nfl/react-helmet), you can use its `bodyAttributes` property instead of a `<div>` wrapper to set the main background color: `<Helmet bodyAttributes={{ class: "bg-dark" }}>`_

### `<Icon>`

Class-based icon (`<i>` tag) that can automatically add an [ARIA label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) based on the icon name.

```JavaScript
import Icon from '@legendarymediatv/bootstrap/Icon';

…

<Icon name="fas fa-camera" />

<Icon
  name="fas fa-camera"
  alt="DSLR"
  variant="success"
  className="ml-3"
  style={{ fontSize: '2rem' }}
/>
```

| Name      | Type   | Default                                | Description                                                                                                     |
| :-------- | :----- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `alt`     | string | variation of `name` (e.g., `'camera'`) | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the icon (i.e., ends up in `aria-label`) |
| `name`    | string | required                               | icon class name (e.g., `'fas fa-camera'`)                                                                       |
| `variant` | string |                                        | Bootstrap theme color name (e.g., `'primary'`)                                                                  |

### `<InfoIcon>`

An extension of React Bootstrap’s [`<Popover>`](https://react-bootstrap.netlify.app/components/overlays/#popovers) (with `rootClose` set to auto-close when it loses focus) that contains an `<Icon>`.

```JavaScript
import InfoIcon from '@legendarymediatv/bootstrap/InfoIcon';

…

<InfoIcon title="Info Title">Info Content</InfoIcon>

<InfoIcon
  title="Info Title"
  name="bi bi-info-circle-fill"
  alt="help me!"
  variant="danger"
  iconStyle={{ fontSize: "2rem" }}
>
  Things, <i>stuff</i>, <b>content</b>!
</InfoIcon>
```

| Name            | Type        | Default                                | Description                                                                                                         |
| :-------------- | :---------- | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| children        | JSX         |                                        | popover content                                                                                                     |
| `alt`           | string      | variation of `name` (e.g., `'camera'`) | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the `<Icon>` (i.e., ends up in `aria-label`) |
| `iconClassName` | string      |                                        | `className` property for the `<Icon>` (i.e., `className` is applied to the toggler button)                          |
| `iconStyle`     | object      |                                        | `style` property for the the `<Icon>` (i.e., `style` is applied to the toggler button)                              |
| `name`          | string      | `'fas fa-question-circle'`             | icon class name                                                                                                     |
| `title`         | JSX         |                                        | popover title                                                                                                       |
| `titleAs`       | elementType | `<h3>`                                 | `as` property for the popover title                                                                                 |
| `variant`       | string      | `info`                                 | Bootstrap theme color name (e.g., `'primary'`) applied to the icon                                                  |

### `<Link>`

A combination of an HTML `<a>` tag and Gatsby’s [`<Link>`](https://www.gatsbyjs.com/docs/linking-between-pages/). It mostly uses the normal `<a>` tag properties, but accepting either `href` or `to` in order to set the URL, so that you can simply swith the import of Gatsby’s `<Link>` to this one instead, plus you can set the `as` property for any React Bootstrap to be this component so that links work properly in Gatsby.

If `href` property begins with `#` (i.e., anchor), a protocol (e.g., `https://` or `mailto:`), or ends with a file extension (e.g., `sample.jpg`), or `external` is set, then it uses an `<a>` tag. Otherwise, it uses Gatsby’s `<Link>` tag, so that it doesn’t force a page reload.

```JavaScript
import Link from '@legendarymediatv/bootstrap/Link';

…

<Link href="/">Gatsby link</Link>

<Link href="#link">HTML link</Link>

<Link href="https://www.legendarymediatv.com">auto-external HTML link</Link>

<Link
  href="/external-somehow"
  externalIcon="bi bi-box-arrow-up-right"
  externalVariant="danger"
>
  HTML link with custom external icon and color
</Link>

<Navbar.Brand as={Link} to='/'>LegendaryMediaTV</Navbar.Brand>

<Nav.Link as={Link} to='/'>Home</Nav.Link>
```

| Name                | Type            | Default                                                                    | Description                                                                                                                 |
| :------------------ | :-------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `href` \| `to`      | URL             | required                                                                   | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the icon (i.e., ends up in `aria-label`)             |
| `external`          | boolean         | `true` if the URL starts with `http:` or `https:` or `externalIcon` is set | explicitly (un-)flag an external link icon (also forces an `<a>` tag when enabled), which goes inside its own `<small>` tag |
| `externalIcon`      | icon class name | `'fas fa-external-link-alt'`                                               | external icon class name                                                                                                    |
| `externalVariant`   | string          | `info`                                                                     | Bootstrap theme color name (e.g., `'primary'`) applied to the icon                                                          |
| `externalClassName` | string          | `'small pl-1 align-text-top'`                                              | `className` property for the `<Icon>` (i.e., `className` is applied to the toggler button)                                  |
| `externalStyle`     | object          |                                                                            | `style` property for the the `<Icon>` (i.e., `style` is applied to the toggler button)                                      |

### `<ListGroup>`

An extension of React Bootstrap’s [`<ListGroup>`](https://react-bootstrap.netlify.app/components/list-group/) that has a title, accepting arrays of URL strings and arrays of obects as items. If the item has a URL, then it is rendered as a `<Link>` component, otherwise it is rendered as a Bootstrap React `<ListGroup.Item>` instead.

```JavaScript
import from '@legendarymediatv/bootstrap/ListGroup';

…

const linkArray = [
  '/test',
  '/sample'
];
…
<ListGroup title="Array of Links" items={linkArray} />

…

const linkObjects = [
  { title: 'Test Link', url: '/test' },
  { title: 'Sample Link', url: '/sample' }
];
…
<ListGroup title="Array of Objects with Links" items={linkObjects} />

…

function sampleHandler(itemSelected) {
  alert(JSON.stringify(itemSelected, null, 4));
}
…
const objectArray = [
  { id: 1, title: 'Test Non-Link' },
  { id: 2, title: 'Sample Non-Link' }
];
…
<ListGroup
  title="Array of Objects with Click Handler"
  titleVariant="success"
  items={objectArray}
  click={sampleHandler}
  className="mt-3"
/>
```

| Name               | Type                                           | Default     | Description                                                                                                                                   |
| :----------------- | :--------------------------------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeKey`        | unknown                                        | inherited   | `activeKey` property                                                                                                                          |
| `as`               | elementType                                    | inherited   | `as` property                                                                                                                                 |
| `defaultActiveKey` | unknown                                        | inherited   | `defaultActiveKey` property                                                                                                                   |
| `horizontal`       | `true` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | inherited   | `horizontal` property                                                                                                                         |
| `onSelect`         | SelectCallback                                 | inherited   | `onSelect` property                                                                                                                           |
| `variant`          | 'flush'                                        | inherited   | `variant` property                                                                                                                            |
| `click`            | function                                       |             | when `items` is an array of objects, this is the `onClick` callback function that passes the clicked item as an argument                      |
| `displayField`     | string                                         | `'title'`   | when `items` is an array of objects, this is the object field to display                                                                      |
| `items`            | string[] or object[]                           | required    | array of URL strings or an array of objects                                                                                                   |
| `keyField`         | string                                         | `'id'`      | when `items` is an array of objects, this is the object field to use as the React list key; otherwise it just uses the array index as the key |
| `title`            | string                                         |             | list group title                                                                                                                              |
| `titleAs`          | elementType                                    | `<h3>`      | `as` property for the list group title                                                                                                        |
| `titleVariant`     | string                                         | `'primary'` | Bootstrap theme color name for the list group title                                                                                           |
| `titleClassName`   | string                                         |             | `className` property for the list group title                                                                                                 |
| `titleStyle`       | object                                         |             | `style` property for the list group title                                                                                                     |
| `urlField`         | string                                         | `'url'`     | when `items` is an array of objects, this is the object field to use as the link URL                                                          |

### `<ScrollToTop>`

Customizable icon that automatically appears in the bottom-right corner when you’re scrolled down the page a bit and smoothly scrolls to the top of the page when clicked.

```JavaScript
import ScrollToTop from '@legendarymediatv/bootstrap/ScrollToTop';

…

<ScrollToTop />

<ScrollToTop name="fas fa-caret-square-up" variant="success" />
```

> _NOTE: the `scrollToTop()` handler function can be exported as well; see below for details_

| Name            | Type   | Default                      | Description                                                                                                     |
| :-------------- | :----- | :--------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `alt`           | string | `'up arrow'`                 | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the icon (i.e., ends up in `aria-label`) |
| `name`          | string | `'fas fa-chevron-circle-up'` | icon class name                                                                                                 |
| `variant`       | string | `'dark'`                     | Bootstrap theme color name                                                                                      |
| `iconClassName` | string |                              | `className` property for the `<Icon>`                                                                           |
| `iconStyle`     | object |                              | `style` property for the `<Icon>`                                                                               |

### `<Spinner>`

An extension of React Bootstrap’s [`<Spinner>`](https://react-bootstrap.github.io/components/spinners/) that automatically selects the `border` animation and adds the screen reader and ARIA role, so it can be self-closing and easily [ensure the maximum accessibility](https://react-bootstrap.github.io/components/spinners/#accessibility).

```JavaScript
import Icon from '@legendarymediatv/bootstrap/Icon';

…

<Spinner />

<Spinner
  animation="grow"
  variant="success"
/>

<Spinner alert />
```

| Name        | Type                   | Default      | Description                                                                                                                                                                                                 |
| :---------- | :--------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children    | JSX                    | `'loading…'` | content for `<VisuallyHidden>` child component                                                                                                                                                              |
| `animation` | `'border'` \| `'grow'` | `'border'`   | changes the animation style of the spinner                                                                                                                                                                  |
| `alert`     | boolean                | `false`      | wrap the spinner in an [`<Alert>`](https://react-bootstrap.github.io/components/alerts/) (centered with `py-5` padding), defaulting `variant` to `'info'`, and applying non-spinner properties to the alert |
| `as`        | string                 | `'div'`      | custom HTML tag                                                                                                                                                                                             |
| `role`      | string                 | `'status'`   | ARIA accessibility role                                                                                                                                                                                     |
| `size`      | string                 |              | component size variations (e.g., `sm`)                                                                                                                                                                      |
| `variant`   | string                 | `'primary'`  | Bootstrap theme color name (e.g., `'primary'`)                                                                                                                                                              |

### `<VisuallyHidden>`

Bootstrap’s [visually hidden content](https://getbootstrap.com/docs/4.6/getting-started/accessibility/#visually-hidden-content) (a.k.a., screen reader only).

```JavaScript
import VisuallyHidden from '@legendarymediatv/bootstrap/VisuallyHidden';

…

<p className="text-danger">
  <VisuallyHidden>Danger: </VisuallyHidden>
  This action is not reversible
</p>

```

| Name      | Type    | Default | Description       |
| :-------- | :------ | :------ | :---------------- |
| focusable | boolean | `false` | item is focusable |

## Functions

### `combine(array)`

If an array has elements, `join()` them via space separator, otherwise return `null`.

> _NOTE: this is helpful when used in conjunction with `prepare(props)` in order to join `className` before rendering the component; see the example there_

### `prepare(props)`

A React component's properties cannot be altered, so use this function to create a new `properties` array and `children` variable. Then, manipulate the array as you see fit, and spread out the new properties in your component.

```JavaScript
import { combine, prepare } from "@legendarymediatv/bootstrap/functions";

…

// prepare properties
const [properties, children] = prepare(props);

// add variant to class
properties.className.push(`text-${properties.variant}`);
delete properties.variant;

// merge classes
properties.className = combine(properties.className);

// render component
return (
  <div {...properties}>{children}</div>
);
```

> _NOTE: this is helpful when used in conjunction with `prepare(props)` in order to join `className` before rendering the component_

### `formData(formObject)`

Pass this function a form object (e.g., via an `onSubmit` event handler’s `event.target`) and it will return a JSON object containing the form’s element data as key–value pairs. Key names are pulled from either the form element `name` (preferred) or `id` attribute, otherwise unnamed/unidentified elements are omitted. Unchecked/unselected `checkbox` and `radio` elements are ignored as well.

> _NOTE: JSON data returned from this function could be utilized in API calls via extensions like [Axios](https://github.com/axios/axios)_

```JavaScript
import { formData } from "@legendarymediatv/bootstrap/functions";

...

const submitHander = (event) => {
  // don't traditionally submit the form
  event.preventDefault();

  // extract data from the form
  const data = formData(event.target);

  // display the form data object
  alert(JSON.stringify(data, null, 4));
}

...

<Form onSubmit={submitHandler}>
  <FormGroup title="Simple textbox">
    <Form.Control name="sample" />
  </FormGroup>
  <Button type="submit">Submit</Button>
</Form>
```

### `title(site, title, parent)`

Generate an SEO-friendly HTML title in the format `Title | Site`. Optionally, include the `parent` argument to render `Title – Parent | Site`. Also, if `title` and `parent` are omitted, then it just uses the site.

> _NOTE: this is designed to be used in conjunction with a plugin like [React Helmet](https://github.com/nfl/react-helmet)_

```JavaScript
import { title } from '@legendarymediatv/bootstrap/functions';

…

<Helmet>
  <title>{title("LegendaryMediaTV", "Bootstrap Demo")}</title>
</Helmet>

<Helmet>
  <title>
    {title("LegendaryMediaTV", "Full Page Demo", "Bootstrap Demo")}
  </title>
</Helmet>
```

| Name                | Type   | Default               | Description                                                                  |
| :------------------ | :----- | :-------------------- | :--------------------------------------------------------------------------- |
| `site`              | string | required              | site/company name                                                            |
| `title`             | string |                       | this page’s title                                                            |
| `parent`            | string |                       | parent page’s title                                                          |
| `siteSeparator`     | string | pipe: <code>\|</code> | separator between the `site` and the `title`/`parent`                        |
| `parentSeparator`   | string | en dash: `'–'`        | separator between the `title` and `parent`                                   |
| `separatorReplacer` | string | forward slash: `'/'`  | replacement character when `title` or `parent` contain the `parentSeparator` |

### `scrollToTopHandler(event)`

Add the ability for any component to smoothly scroll to the top of the window.

```JavaScript
import { scrollToTopHandler } from '@legendarymediatv/bootstrap/ScrollToTop';

…

<Button onClick={scrollToTopHandler}>Scroll to Top</Button>

<Link to="#" onClick={scrollToTopHandler}>
  scroll to top
</Link>
```

> _NOTE: see the `<ScrollToTop>` component above for a turnkey_ 🦃 _scroll-to-top solution_

## Additional examples

For more examples of usage, see [/src/pages](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/tree/main/src/pages)
