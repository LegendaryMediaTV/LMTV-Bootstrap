# LegendaryMediaTV Bootstrap

This is a Node.js package for extending [React Bootstrap](https://react-bootstrap.github.io), which is based on [Bootstrap 4](https://getbootstrap.com/). It also has components for class-based icons (i.e., [FontAwesome](https://fontawesome.com), [Bootstrap icons](https://icons.getbootstrap.com), etc.).


## Getting started


### Installation

Install peer dependencies (if they aren't already):

```JavaScript
npm install react react-dom react-bootstrap gatsby
```

Optionally, install React Helmet (useful for linking Bootstrap resources):

```JavaScript
npm install react-helmet
```

Install this package:

```JavaScript
npm install @legendarymediatv/bootstrap
```


### Preparation

Either import Bootstrap CSS or link Bootstrap into your layout or app file.

**Sample `/src/components/Layout.js` (link)**

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
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
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


### `<Icon>`

Class-based icon (`<i>` tag) that can automatically add an [ARIA label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) based on the icon name

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
| `name` | string | required | icon class name (e.g., `fas fa-camera`) |
| `alt` | string | variation of `name` (e.g., `camera`) | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the icon (i.e., ends up in `aria-label`) |
| `variant` | string |  | Bootstrap theme color name (e.g., `primary`) |
| `className` | string |  | CSS classes (space-separated) applied to the icon |
| `style` | object |  | key–value pairs of CSS styles applied to the icon |


### `<HelpIcon>`

An extension of React Bootstrap’s [`<Popover>`](https://react-bootstrap.netlify.app/components/overlays/#popovers) (with `rootClose` set to auto-close when it loses focus) that contains an `<Icon>`

```JavaScript
import { HelpIcon } from '@legendarymediatv/bootstrap';

...

<HelpIcon name="fas fa-camera" title="Help Title" />

<HelpIcon name="fas fa-camera">Things, <i>stuff</i>, <b>content</b>!</HelpIcon>

<HelpIcon
    name="fas fa-camera"
    title="Help Title"
>Things, <i>stuff</i>, <b>content</b>!</HelpIcon>
```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| children | JSX |  | popover content |
| `title` | string |  | popover title (`<h3>` tag) |
| `variant` | string | `info` | Bootstrap theme color name (e.g., `primary`) applied to the icon |
| `className` | string |  | CSS classes (space-separated) applied to the popover toggler button |
| `style` | object |  | key–value pairs of CSS styles applied to the popover toggler button |
| `iconClassName` | string |  | CSS classes (space-separated) applied to the icon |
| `iconStyle` | object |  | key–value pairs of CSS styles applied to the icon |


### `<ListGroup>`

An extension of React Bootstrap’s [`<ListGroup>`](https://react-bootstrap.netlify.app/components/list-group/) that has a title, accepting arrays of URL strings and arrays of obects as items

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
    { id: 1, title: 'Test Link' },
    { id: 2, title: 'Sample Link' }
];

```

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| `items` | string[] or object[] | required | array of URL strings or an array of objects |
| `displayKey` | string | `title` | when `items` is an array of objects, this is the object key to display |
| `urlKey` | string | `url` | when `items` is an array of objects, this is the object key use as the link URL |
| `click` | function |  | when `items` is an array of objects, this is the `onClick` callback function that passes the clicked item as an argument |
| `title` | string |  | list group title (`<h3>` tag) |
| `variant` | string | `primary` | Bootstrap theme color name (e.g., `primary`) for the list group title |
| `className` | string |  | CSS classes (space-separated) applied to the list group |
| `style` | object |  | key–value pairs of CSS styles applied to the list group |


## Additional examples

For more examples of usage, see ['/src/pages/index.js](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/blob/src/pages/index.js)
