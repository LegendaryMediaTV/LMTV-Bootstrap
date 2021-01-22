# LegendaryMediaTV Bootstrap

This is a Node.js package for extending [React Bootstrap](https://react-bootstrap.github.io) (which is based on [Bootstrap 4](https://getbootstrap.com/)) and [Gatsby](https://www.gatsbyjs.com). It also has components for class-based icons (i.e., [FontAwesome](https://fontawesome.com), [Bootstrap icons](https://icons.getbootstrap.com), etc.).


## Getting started


### Installation

Install peer dependencies (if they aren't already).

```JavaScript
npm install react react-dom react-bootstrap gatsby
```

Optionally, install React Helmet (useful for linking Bootstrap resources).

```JavaScript
npm install react-helmet
```

Install this package.

```JavaScript
npm install @legendarymediatv/bootstrap
```


### Preparation

[Modify the Babel loader](https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#modifying-the-babel-loader) to transpile JSX for this package.

> *NOTE: not configuring this will result in the following error when running `gatsby build`: ERROR #98123 WEBPACK –  Generating development JavaScript bundle failed: Unexpected token*

**Sample `/gatsby-node.js`**

```JavaScript
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
    const config = getConfig()
    config.module.rules = [
        // omit the default rule where test === '\.jsx?$'
        ...config.module.rules.filter(
            rule => String(rule.test) !== String(/\.jsx?$/)
        ),
        // re-create it with custom exclude filter
        {
            // apply required Babel presets/plugins and merge in your configuration from `babel.config.js`.
            ...loaders.js(),
            test: /\.jsx?$/,
            // exclude all node_modules from transpilation, except for this plugin
            // NOTE: their pattern has "\/" but this has "[\\\/]" to support all OS path separators
            exclude: modulePath =>
                /node_modules/.test(modulePath) &&
                !/node_modules[\\\/]@legendarymediatv[\\\/]bootstrap/.test(modulePath),
        },
    ]
    // replace the webpack config with the modified object.
    actions.replaceWebpackConfig(config)
}
```

Either import Bootstrap CSS or link Bootstrap into your layout or app file.

**Sample `/src/components/Layout.js` (link, with FontAwesome)**

```JavaScript
import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>

                <meta name="description" content={props.description} />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" />
            </Helmet>
            <Container className="py-4">
                <h1 className="display-1">{props.title}</h1>

                {props.children}
            </Container>
        </>
    );
}

export default Layout;
```

Finally, import the components as needed into your app/components.

**Sample `/src/pages/index.js`**

```JavaScript
// dependencies
import React from 'react';

// page layout template
import Layout from '../components/Layout';

// sample LegendaryMediaTV component
import { Icon } from '@legendarymediatv/bootstrap';

const Home = () => {
    return (
        <Layout title="Page Title" description="Page Description">
            <Icon name="fas fa-camera" />
        </Layout>
    );
}

export default Home;
```


## Components


### `<DisplayHeading*>`

Bootstrap’s display heading typography classes.

- `<DisplayHeading1>`
- `<DisplayHeading2>`
- `<DisplayHeading3>`
- `<DisplayHeading4>`

```JavaScript
import { DisplayHeading1, DisplayHeading2, DisplayHeading3, DisplayHeading4 } from '@legendarymediatv/bootstrap';

...

<DisplayHeading1>Display Heading 1</DisplayHeading1>

<DisplayHeading2>Display Heading 2</DisplayHeading2>

<DisplayHeading3>Display Heading 3</DisplayHeading3>

<DisplayHeading4>Display Heading 4</DisplayHeading4>
```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| `as` | elementType | `<h#>` corresponding to the size | changes the HTML tag |


### `<FormGroup>`

An extension of React Bootstrap’s [`<Form.Group>`](https://react-bootstrap.github.io/components/forms/#form-group-props), which automatically contains a React Bootstrap [`<Form.Label>`](https://react-bootstrap.github.io/components/forms/#form-label-props). The label then optionally includes a `<InfoIcon>` when the `info` attribute is set.

```JavaScript
import { FormGroup } from '@legendarymediatv/bootstrap';

...

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

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| `ref` | ReactRef | inherited | `ref` attribute for the `<Form.Group>` |
| `as` | elementType | inherited | `as` attribute for the `<Form.Group>` |
| `controlId` | string | inherited | `controlId` attribute for the `<Form.Group>` |
| `info` | JSX |  | popover content for the `<InfoIcon>` |
| `infoAlt` | string | inherited | `alt` attribute for the `<InfoIcon>` |
| `infoClassName` | string |  | `className` attribute for the `<InfoIcon>` |
| `infoStyle` | object |  | `style` attribute for the `<InfoIcon>` |
| `infoName` | string | inherited | `name` attribute for the `<InfoIcon>` |
| `infoTitle` | JSX | `title` attribute | `title` attribute for the `<InfoIcon>` |
| `infoTitleAs` | elementType | inherited | `titleAs` attribute for the `<InfoIcon>` |
| `infoVariant` | string | inherited | `variant` attribute for the `<InfoIcon>` |
| `iconClassName` | string |  | `className` attribute for the `<InfoIcon>` |
| `iconStyle` | object |  | `style` attribute for the `<InfoIcon>` |
| `labelRef` | ReactRef | inherited | `ref` attribute for the `<Form.Label>` |
| `labelAs` | elementType | inherited | `as` attribute for the `<Form.Label>` |
| `column` | boolean \| `'sm'` \| `'lg'` | inherited | `column` attribute for the `<Form.Label>` |
| `htmlFor` | string | inherited | `htmlFor` attribute for the `<Form.Label>` |
| `srOnly` | boolean | inherited | `srOnly` attribute for the `<Form.Label>` |
| `labelClassName` | string |  | `className` attribute for the `<Form.Label>` |
| `labelStyle` | object |  | `style` attribute for the `<Form.Label>` |


### `<Icon>`

Class-based icon (`<i>` tag) that can automatically add an [ARIA label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) based on the icon name.

```JavaScript
import { Icon } from '@legendarymediatv/bootstrap';

...

<Icon name="fas fa-camera" />

<Icon
    name="fas fa-camera"
    alt="DSLR"
    variant="success"
    className="ml-3"
    style={{ fontSize: '2rem' }}
/>
```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| `alt` | string | variation of `name` (e.g., `'camera'`) | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the icon (i.e., ends up in `aria-label`) |
| `name` | string | required | icon class name (e.g., `'fas fa-camera'`) |
| `variant` | string |  | Bootstrap theme color name (e.g., `'primary'`) |


### `<InfoIcon>`

An extension of React Bootstrap’s [`<Popover>`](https://react-bootstrap.netlify.app/components/overlays/#popovers) (with `rootClose` set to auto-close when it loses focus) that contains an `<Icon>`.

```JavaScript
import { InfoIcon } from '@legendarymediatv/bootstrap';

...

<InfoIcon title="Info Title">Info Content</InfoIcon>

<InfoIcon
    title="Info Title"
    name="bi bi-info-circle-fill"
    alt="help me!"
    variant="danger"
    iconStyle={{ fontSize: '2rem' }}
>Things, <i>stuff</i>, <b>content</b>!</InfoIcon>
```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| children | JSX |  | popover content |
| `alt` | string | variation of `name` (e.g., `'camera'`) | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the `<Icon>` (i.e., ends up in `aria-label`) |
| `iconClassName` | string |  | `className` attribute for the `<Icon>` (i.e., `className` is applied to the toggler button) |
| `iconStyle` | object |  | `style` attribute for the the `<Icon>` (i.e., `style` is applied to the toggler button) |
| `name` | string | `'fas fa-question-circle'` | icon class name |
| `title` | JSX |  | popover title |
| `titleAs` | elementType | `<h3>` | `as` attribute for the popover title |
| `variant` | string | `info` | Bootstrap theme color name (e.g., `'primary'`) applied to the icon |


### `<Link>`

A combination of an HTML `<a>` tag and Gatsby’s [`<Link>`](https://www.gatsbyjs.com/docs/linking-between-pages/), using the normal `<a>` tag attributes (i.e., `href` and not `to`).

If the `href` attribute begins with `#` (i.e., anchor), a protocol (e.g., `https://` or `mailto:`), or ends with a file extension (e.g., `sample.jpg`), then it uses an `<a>` tag. Otherwise, it uses Gatsby’s `<Link>` tag.

```JavaScript
import { Link } from '@legendarymediatv/bootstrap';

...

<Link href="/">Gatsby</Link>

<Link href="#link">HTML</Link>

<Link href="https://www.legendarymediatv.com/">HTML</Link>
```


### `<ListGroup>`

An extension of React Bootstrap’s [`<ListGroup>`](https://react-bootstrap.netlify.app/components/list-group/) that has a title, accepting arrays of URL strings and arrays of obects as items. If the item has a URL, then it is rendered as a `<Link>` component, otherwise it is rendered as a Bootstrap React `<ListGroup.Item>` instead.

```JavaScript
import { ListGroup } from '@legendarymediatv/bootstrap';

...

const linkArray = [
    '/test',
    '/sample'
];
...
<ListGroup title="Array of Links" items={linkArray} />

...

const linkObjects = [
    { title: 'Test Link', url: '/test' },
    { title: 'Sample Link', url: '/sample' }
];
...
<ListGroup title="Array of Objects with Links" items={linkObjects} />

...

function sampleHandler(itemSelected) {
    alert(JSON.stringify(itemSelected, null, 4));
}
...
const objectArray = [
    { id: 1, title: 'Test Non-Link' },
    { id: 2, title: 'Sample Non-Link' }
];
...
<ListGroup
    title="Array of Objects with Click Handler"
    titleVariant="success"
    items={objectArray}
    click={sampleHandler}
    className="mt-3"
/>
```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| `activeKey` | unknown | inherited | `activeKey` attribute |
| `as` | elementType | inherited  | `as` attribute |
| `defaultActiveKey` | unknown | inherited | `defaultActiveKey` attribute |
| `horizontal` | `true` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | inherited | `horizontal` attribute |
| `onSelect` | SelectCallback | inherited | `onSelect` attribute |
| `variant` | 'flush' | inherited | `variant` attribute |
| `click` | function |  | when `items` is an array of objects, this is the `onClick` callback function that passes the clicked item as an argument |
| `displayField` | string | `'title'` | when `items` is an array of objects, this is the object field to display |
| `items` | string[] or object[] | required | array of URL strings or an array of objects |
| `keyField` | string | `'id'` | when `items` is an array of objects, this is the object field to use as the React list key; otherwise it just uses the array index as the key |
| `title` | string |  | list group title |
| `titleAs` | elementType | `<h3>`  | `as` attribute for the list group title |
| `titleVariant` | string | `'primary'` | Bootstrap theme color name for the list group title |
| `titleClassName` | string |  | `className` attribute for the list group title |
| `titleStyle` | object |  | `style` attribute for the list group title |
| `urlField` | string | `'url'` | when `items` is an array of objects, this is the object field to use as the link URL |


### `<Spinner>`

An extension of React Bootstrap’s [`<Spinner>`](https://react-bootstrap.github.io/components/spinners/) that automatically selects the `border` animation and adds the screen reader and ARIA role, so it can be self-closing and easily [ensure the maximum accessibility](https://react-bootstrap.github.io/components/spinners/#accessibility).

```JavaScript
import { Icon } from '@legendarymediatv/bootstrap';

...

<Spinner />

<Spinner
    animation="grow"
    variant="success"
/>
```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| `animation` | `'border'` \| `'grow'` | `'border'` | changes the animation style of the spinner |
| `as` | string | `'div'` | custom HTML tag |
| `role` | string | `'status'` | ARIA accessibility role |
| `size` | string |  | component size variations (e.g., `sm`) |
| `variant` | string | `'primary'` | Bootstrap theme color name (e.g., `'primary'`) |


### `<VisuallyHidden>`

Bootstrap’s [visually hidden content](https://getbootstrap.com/docs/4.6/getting-started/accessibility/#visually-hidden-content) (a.k.a., screen reader only).


```JavaScript
import { DisplayHeading1, DisplayHeading2, DisplayHeading3, DisplayHeading4 } from '@legendarymediatv/bootstrap';

...

<p class="text-danger">
  <VisuallyHidden>Danger: </VisuallyHidden>
  This action is not reversible
</p>

```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| focusable | boolean | false | item is focusable |


## Additional examples

For more examples of usage, see ['/src/pages/index.js](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/blob/src/pages/index.js)
