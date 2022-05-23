# LegendaryMediaTV Bootstrap

This is a Node.js package for extending [React Bootstrap](https://react-bootstrap.github.io) (which is based on [Bootstrap 5](https://getbootstrap.com/)) and [Gatsby 3 or 4](https://www.gatsbyjs.com). It also has components for class-based icons (i.e., [FontAwesome](https://fontawesome.com), [Bootstrap icons](https://icons.getbootstrap.com), etc.).

## Recent changes

- **v3.5.0**
  - updated the peer dependency for React to `17.x` or `18.x`
- **v3.4**
  - added a new `<Feature>` component with `title` and `subtitle` properties
  - added `<Alert>` with `title`/`subtitle` to the `<Demo>`
  - made `<ScrollToTop>` component not print
  - bugfix for `<ListGroup.Item>` component not showing `subitem` when `subactions` property is set
- **v3.3**
  - added an `<Alert>` component with `title`, `subtitle`, and `error` properties
  - made the `<Demo>` utilize the new `<Alert>` component
- **v3.2**
  - added a `<ListGroup.Item>` component with `subitem` and `subactions` properties
  - added a `sleep()` function
- **v3.1**
  - added a `<Pagination>` component that uses our Gatsby-friendly `<Link>` component
  - made the `<Demo>` component more robust
  - added a `title` property to the `<Spinner>` component
  - bugfix for `<Link>` opening internal links in a new tab when requested
  - bugfix for the `<ListGroup>` default italics class on `displaySubClassName`
  - updated the peer dependency for React Bootstrap to `2.x`, since 2.0 stable released
  - updated the peer dependency for Gatsby to `3.x` or `4.x`
  - updated Bootstrap CSS reference to `5.1.3`

For more information, check out the [release notes](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/releases) and the [changelog](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/commits/main).

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

> _NOTE: if you are still using Bootstrap 4.6.x and React Bootstrap 1.6.x, then you can use [version 2.13.1 of this package](https://www.npmjs.com/package/@legendarymediatv/bootstrap/v/2.13.1), however, it is not continuing to be maintained_

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

const Layout = (props) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{props.title}</title>

        <meta name="description" content={props.description} />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Helmet>
      <Container className="py-4">
        <h1 className="display-1">{props.title}</h1>

        {props.children}
      </Container>
    </>
  );
};

export default Layout;
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

const SamplePage = () => {
  return (
    <Layout title="Page Title" description="Page Description">
      <Icon name="fas fa-camera" />
    </Layout>
  );
};

export default SamplePage;
```

## Components

> _NOTE: components can be imported at the package level or at the component level_

```JavaScript
// package-level
import { Demo } from '@legendarymediatv/bootstrap';

// component level (preferred)
import Demo from '@legendarymediatv/bootstrap/Demo';
```

### `<Alert>`

An extension of [React Bootstrap’s `<Alert>`](https://react-bootstrap.github.io/components/alerts/) component, but with the ability to set a title, subtitle, and/or error. It provides `<Alert.Heading>` as is, but converts their `<Alert.Link>` to our Gatsby-friendly `<Link>` component.

```JavaScript
import Alert from '@legendarymediatv/bootstrap/Alert';

…

<Alert
  title="Alert Title"
  subtitle="Alert subtitle"
  variant="info"
  onClose={() => {
    alert("Insert dismiss logic here");
  }}
  dismissible
>
  Some text with a <Alert.Link to="/sample">link</Alert.Link>
</Alert>

<Alert
  error={{
    error: "Request failed with status code 401",
    url: "/",
    method: "GET",
  }}
  onRetry={() => {
    alert("Insert retry logic here");
  }}
/>

<Alert error={["Field 1 is required", "Field 2 is required"]} />
```

In addition to the properties provided by [React Bootstrap’s `<Alert>`](https://react-bootstrap.github.io/components/alerts/) component, the following additional properties are available:

| Name       | Type          | Default                                                                                                                                                                                          | Description                                                                                                    |
| :--------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| `error`    | JSX \| object |                                                                                                                                                                                                  | either a JSX component or an object containing keys for `error`/`message` and optionally `url` and/or `method` |
| `onRetry`  | function      |                                                                                                                                                                                                  | when defined, a retry `<Button>` is rendered with this as its `onClick`                                        |
| `subtitle` | JSX           | if `error` is an array, then `'Please fix the following error(s):'`; if `error` is not an array, then `'The server has encountered a situation it doesn’t know how to handle'`; otherwise, blank | content that goes inside a `<p>` tag styled with a `lead` class                                                |
| `title`    | JSX           | if `error` is an array, then `'Submission Error'`; if `error` is not an array, then `'Process Error'`; otherwise, blank                                                                          | content that goes inside an `<Alert.Heading>` styled as a `<div>` with an `h3` class                           |
| `variant`  | string        | `'danger'` if `error` is defined, otherwise `'primary'` (inherited)                                                                                                                              | Bootstrap theme color name                                                                                     |

### `<BackgroundImage>`

Set a background image so that it covers the whole screen without distorting and stays in place, regardless of scrolling.

```JavaScript
import BackgroundImage from '@legendarymediatv/bootstrap/BackgroundImage';

…

<BackgroundImage src="/images/sample.jpg" />
```

| Name             | Type   | Default  | Description                          |
| :--------------- | :----- | :------- | :----------------------------------- |
| `imageClassName` | string |          | `className` property for the `<img>` |
| `imageStyle`     | object |          | `style` property for the `<img>`     |
| `src`            | string | required | path to the image file               |

### `<Blockquote>`

Quote blocks of content using [Bootstrap’s Blockquote](https://getbootstrap.com/docs/5.1/content/typography/#blockquotes).

```JavaScript
import Blockquote from '@legendarymediatv/bootstrap/Blockquote';

…

<Blockquote>
  <p className="mb-0">
    A well-known quote, contained in a blockquote element.
  </p>
</Blockquote>

<Blockquote>
  <p>
    Success, meaningful success, begins when we take ownership and actively
    take responsibility for our part in the shortcomings of our life.
  </p>

  <Blockquote.Footer>
    Dr Eric Thomas,{" "}
    <cite>Greatness Is Upon You: Laying the Foundation</cite>
  </Blockquote.Footer>
</Blockquote>
```

### `<Breakpoint>`

Quickly see what the current breakpoint is (e.g., “md”).

```JavaScript
import Breakpoint from '@legendarymediatv/bootstrap/Breakpoint';

…

<Breakpoint />
```

> _NOTE: This component is intended to be used for development purposes and probably should be removed before deploying your app_

| Name      | Type   | Default  | Description                |
| :-------- | :----- | :------- | :------------------------- |
| `variant` | string | `'info'` | Bootstrap theme color name |

### `<DatePicker>`

Allow someone to select a date using a calendar popover.

```JavaScript
import DatePicker from '@legendarymediatv/bootstrap/DatePicker';
…
// use React state to track selected date
const [componentState, setComponentState] = React.useState(null);
…
// select a new date
function dateHandler(selected) => {
  setComponentState(selected);
};
…
<DatePicker
  title="Contact Date"
  value={componentState}
  onChange={dateHandler}
/>
```

> _TIP: You could make your date change handler set the value for a hidden form element in addition to setting the state so that the date is submitted with the other form values_

| Name      | Type        | Default       | Description                                              |
| :-------- | :---------- | :------------ | :------------------------------------------------------- |
| `title`   | JSX         | `Date Picker` | popover title                                            |
| `titleAs` | elementType | `<h3>`        | `as` property for the popover title                      |
| `variant` | string      | `light`       | Bootstrap theme color name applied to the display button |

### `<Demo>`

This component is intended to be used for development purposes (e.g., testing your custom Bootstrap theme) by having everything all one one page!

### `<Display>`

Bootstrap’s display heading typography classes.

- `<Display.Heading1>`
- `<Display.Heading2>`
- `<Display.Heading3>`
- `<Display.Heading4>`
- `<Display.Heading5>`
- `<Display.Heading6>`

```JavaScript
import Display from '@legendarymediatv/bootstrap/Display';

…

<Display.Heading1>Display Heading 1</Display.Heading1>

<Display.Heading2>Display Heading 2</Display.Heading2>

<Display.Heading3>Display Heading 3</Display.Heading3>

<Display.Heading4>Display Heading 4</Display.Heading4>

<Display.Heading5>Display Heading 5</Display.Heading5>

<Display.Heading6>Display Heading 6</Display.Heading6>
```

| Name | Type        | Default                          | Description          |
| :--- | :---------- | :------------------------------- | :------------------- |
| `as` | elementType | `<h#>` corresponding to the size | changes the HTML tag |

### `<Feature>`

Quickly create a stylized hero link or button that uses scaling and shadows to grow on hover and appear as depressed when clicked.

> _TIP: use in conjunction with grid layout components to have a wall effect_

> _TIP: since this component uses scaling, to prevent horizontal scrollbars on smaller displays, you may want to wrap your content in a `<Feature.Container>` component or otherwise add `overflow: hidden;` styling to a fluid container, your `<body>` tag, etc._

```JavaScript
import Feature from '@legendarymediatv/bootstrap/Feature';

…

<Feature
  title="Featured Content"
  subtitle="content to be featured"
  to="/sample"
  variant="info"
  textShadow
  wrapperClassName="rounded-pill mb-3"
  className="text-white py-5"
/>

<Row className="text-white">
  <Col sm className="p-0">
    <Feature
      title="Sample 1"
      to="/sample-1"
      variant="dark"
      className="py-3"
    />
  </Col>

  <Col sm className="p-0">
    <Feature
      title="Sample 2"
      to="/sample-2"
      variant="success"
      className="py-3"
    />
  </Col>

  <Col sm className="p-0">
    <Feature
      title="Sample 3"
      onClick={() => {
        alert("danger!");
      }}
      variant="danger"
      className="py-3"
    />
  </Col>
</Row>
```

> _NOTE: This component is intended to be used for development purposes and probably should be removed before deploying your app_

| Name               | Type    | Default | Description                                                                                                                                                           |
| :----------------- | :------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `href` \| `to`     | string  |         | URL or anchor target, making the feature item our Gatsby-friendly `<Link>` when set, otherwise it renders as a `<button>` and probably should have the `onClick` set  |
| `id`               | string  |         | applied to the wrapper `<div>`                                                                                                                                        |
| `subtitle`         | JSX     |         | content that goes inside a `<div>` tag styled with `lead fst-italic` between the `title` and `children`                                                               |
| `title`            | JSX     |         | content that goes inside an `<h2>` tag styled with `display-4 mb-0` above the `subtitle` and/or `children`                                                            |
| `textShadow`       | boolean | `false` | add a slight shadow to the feature’s text                                                                                                                             |
| `variant`          | string  |         | Bootstrap theme color, if one is not provided, you should probably add background color and/or image using the provided `id` (images are set to `center` and `cover`) |
| `wrapperClassName` | string  |         | `className` property for the wrapper `<div>`                                                                                                                          |
| `wrapperStyle`     | object  |         | `style` property for the wrapper `<div>`                                                                                                                              |

### `<Flipper>`

Flashcard-like component that can flip horizontally or vertically using a 3D effect either on hover or via an event.

```JavaScript
import Flipper from '@legendarymediatv/bootstrap/Flipper';

…

<Flipper
  front={<h3>auto-flipper front content</h3>}
  frontClassName="bg-primary text-light p-2"
  back={<h3>auto-flipper back content</h3>}
  backClassName="bg-secondary text-light p-2"
/>

…

// use React state to track flipped state
const [componentState, setComponentState] = React.useState(false);
…
function flipHandler(event) => {
  // un-click the button
  event.preventDefault();

  // toggle flip state
  setComponentState(!componentState);
};
…
<Flipper
  front={
    <Button
      onClick={flipHandler}
      className="w-100"
    >
      click to flip to the back
    </Button>
  }
  frontClassName="d-flex align-items-stretch"
  back={
    <Button
      onClick={flipHandler}
      variant="secondary"
      className="w-100"
    >
      click to flip to the front
    </Button>
  }
  backClassName="d-flex align-items-stretch"
  className="text-center"
  height="10rem"
  flipped={componentState}
  horizontal
/>
```

| Name             | Type    | Default | Description                                                                                                                       |
| :--------------- | :------ | :------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| `back`           | JSX     |         | flipper back side content                                                                                                         |
| `backClassName`  | string  |         | `className` property for the back side of the flipper                                                                             |
| `backStyle`      | object  |         | `style` property for the back side of the flipper                                                                                 |
| `front`          | JSX     |         | flipper front side content                                                                                                        |
| `frontClassName` | string  |         | `className` property for the front side of the flipper                                                                            |
| `frontStyle`     | object  |         | `style` property for the front side of the flipper                                                                                |
| `flipped`        | boolean | `null`  | determines whether the card should display as flipped over (i.e., tie events to this property), if `null`, then it flips on hover |
| `height`         | string  | `15rem` | `height` property to apply to the `style` for the flipper and both sides                                                          |
| `horizontal`     | boolean | `false` | flip the card horizontally instead of vertically                                                                                  |

> _NOTE: if `flipped` is `null`, then doesn’t toggle `aria-label` for the flipper sides, because it flips on an untracked hover action rather than an event_

### `<FormGroup>`

An extension of [React Bootstrap’s `<Form.Group>`](https://react-bootstrap.github.io/components/forms/#form-group-props), which automatically contains a React Bootstrap [`<Form.Label>`](https://react-bootstrap.github.io/components/forms/#form-label-props). The label then optionally includes a `<InfoIcon>` when the `info` property is set.

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

| Name             | Type                        | Default          | Description                                      |
| :--------------- | :-------------------------- | :--------------- | :----------------------------------------------- |
| `ref`            | ReactRef                    | inherited        | `ref` property for the `<Form.Group>`            |
| `as`             | elementType                 | inherited        | `as` property for the `<Form.Group>`             |
| `controlId`      | string                      | inherited        | `controlId` property for the `<Form.Group>`      |
| `info`           | JSX                         |                  | popover content for the `<InfoIcon>`             |
| `infoAlt`        | string                      | inherited        | `alt` property for the `<InfoIcon>`              |
| `infoClassName`  | string                      |                  | `className` property for the `<InfoIcon>`        |
| `infoStyle`      | object                      |                  | `style` property for the `<InfoIcon>`            |
| `infoName`       | string                      | inherited        | `name` property for the `<InfoIcon>`             |
| `infoTitle`      | JSX                         | `title` property | `title` property for the `<InfoIcon>`            |
| `infoTitleAs`    | elementType                 | inherited        | `titleAs` property for the `<InfoIcon>`          |
| `infoVariant`    | string                      | inherited        | `variant` property for the `<InfoIcon>`          |
| `iconClassName`  | string                      |                  | `className` property for the `<InfoIcon>`        |
| `iconStyle`      | object                      |                  | `style` property for the `<InfoIcon>`            |
| `title`          | JSX                         |                  | content for the `<Form.Label>`                   |
| `labelRef`       | ReactRef                    | inherited        | `ref` property for the `<Form.Label>`            |
| `labelAs`        | elementType                 | inherited        | `as` property for the `<Form.Label>`             |
| `column`         | boolean \| `'sm'` \| `'lg'` | inherited        | `column` property for the `<Form.Label>`         |
| `htmlFor`        | string                      | inherited        | `htmlFor` property for the `<Form.Label>`        |
| `visuallyHidden` | boolean                     | inherited        | `visuallyHidden` property for the `<Form.Label>` |
| `labelClassName` | string                      |                  | `className` property for the `<Form.Label>`      |
| `labelStyle`     | object                      |                  | `style` property for the `<Form.Label>`          |

### `<FullPage>`

Make your page always use at least the full height of the browser window using flexbox instead of fixed/sticky styling. Plus, it has a footer component that will display at the bottom of the page without forcing a scrollbar!

This component set doesn't have any special properties, but it is made up of three parts:

- `<FullPage>` – the wrapper (should only contain the other FullPage components below)
- `<FullPage.Content>` (**required**) – page content (should contain your `<Navbar>` and page copy components such as `<article>`)
- `<FullPage.Footer>` (optional) – page footer (can be styled directly or given an `id` and styled elsewhere)

```JavaScript
import FullPage from '@legendarymediatv/bootstrap/FullPage';

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
  className="ms-3"
  style={{ fontSize: '2rem' }}
/>
```

| Name      | Type   | Default                                | Description                                                                                                     |
| :-------- | :----- | :------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `alt`     | string | variation of `name` (e.g., `'camera'`) | [alternate text](https://accessibility.psu.edu/images/imageshtml/) for the icon (i.e., ends up in `aria-label`) |
| `name`    | string | required                               | icon class name (e.g., `'fas fa-camera'`)                                                                       |
| `variant` | string |                                        | Bootstrap theme color name (e.g., `'primary'`)                                                                  |

### `<InfoIcon>`

An extension of [React Bootstrap’s `<Popover>`](https://react-bootstrap.netlify.app/components/overlays/#popovers) (with `rootClose` set to auto-close when it loses focus) that contains an `<Icon>`.

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
| `variant`       | string      | `info`                                 | Bootstrap theme color name applied to the icon                                                                      |

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
| `href` \| `to`      | URL             | required                                                                   | URL or anchor target                                                                                                        |
| `external`          | boolean         | `true` if the URL starts with `http:` or `https:` or `externalIcon` is set | explicitly (un-)flag an external link icon (also forces an `<a>` tag when enabled), which goes inside its own `<small>` tag |
| `externalNewTab`    | boolean         | `false`                                                                    | set `newTab` to `true` when `external` is `true`                                                                            |
| `externalIcon`      | icon class name | `'fas fa-external-link-alt'`                                               | external icon class name                                                                                                    |
| `externalVariant`   | string          | `info`                                                                     | Bootstrap theme color name (e.g., `'primary'`) applied to the icon                                                          |
| `externalClassName` | string          | `'small ps-1 align-text-top'`                                              | `className` property for the `<Icon>` (i.e., `className` is applied to the toggler button)                                  |
| `externalStyle`     | object          |                                                                            | `style` property for the the `<Icon>` (i.e., `style` is applied to the toggler button)                                      |
| `newTab`            | boolean         | `false`                                                                    | force the link to open in a new tab (sets `target="_blank" rel="noopener"`)                                                 |

### `<ListGroup>`

An extension of [React Bootstrap’s `<ListGroup>`](https://react-bootstrap.netlify.app/components/list-group/) that has a title, accepting arrays of URL strings and arrays of obects as items. If the item has a URL, then it is rendered as our Gatsby-friendly `<Link>` component, otherwise it is rendered as our `<ListGroup.Item>` instead.

```JavaScript
import ListGroup from '@legendarymediatv/bootstrap/ListGroup';

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
  {
    title: 'Sample Link',
    subtitle: "additional information in a subtitle",
    url: '/sample'
  }
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

| Name                  | Type                                           | Default                       | Description                                                                                                                                   |
| :-------------------- | :--------------------------------------------- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeKey`           | unknown                                        | inherited                     | `activeKey` property                                                                                                                          |
| `as`                  | elementType                                    | inherited                     | `as` property for the list group                                                                                                              |
| `defaultActiveKey`    | unknown                                        | inherited                     | `defaultActiveKey` property                                                                                                                   |
| `horizontal`          | `true` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | inherited                     | `horizontal` property                                                                                                                         |
| `onSelect`            | function                                       | inherited                     | when `items` is an array of objects, this is the `onClick` callback function that passes the clicked item as an argument                      |
| `variant`             | 'flush'                                        | inherited                     | `variant` property                                                                                                                            |
| `displayField`        | string                                         | `'title'`                     | when `items` is an array of objects, this is the object field to display                                                                      |
| `displaySubField`     | string                                         | `'subtitle'`                  | when `items` is an array of objects, this is the object field to subtly display below the `displayField`                                      |
| `displaySubClassName` | string                                         | `fst-italic small text-muted` | when `items` is an array of objects, this is the `className` property for the `displaySubField`                                               |
| `items`               | string[] or object[]                           | required                      | array of URL strings or an array of objects                                                                                                   |
| `itemsAs`             | elementType                                    | inherited                     | `as` property for the list group items                                                                                                        |
| `keyField`            | string                                         | `'id'`                        | when `items` is an array of objects, this is the object field to use as the React list key; otherwise it just uses the array index as the key |
| `title`               | string                                         |                               | list group title                                                                                                                              |
| `titleAs`             | elementType                                    | `<h3>`                        | `as` property for the list group title                                                                                                        |
| `titleVariant`        | string                                         | `'primary'`                   | Bootstrap theme color name for the list group title                                                                                           |
| `titleClassName`      | string                                         |                               | `className` property for the list group title                                                                                                 |
| `titleStyle`          | object                                         |                               | `style` property for the list group title                                                                                                     |
| `urlField`            | string                                         | `'url'`                       | when `items` is an array of objects, this is the object field to use as the link URL                                                          |

### `<ListGroup.Item>`

An extension of [React Bootstrap’s `<ListGroup.Item>`](https://react-bootstrap.netlify.app/components/list-group/) that adds support for sub-items, sub-actions, auto-conversion to a Gatsby-friendly `<Link>` when a URL is provided, and auto-conversion to an action when a URL or click handler are defined.

The `subactions` property should be an array of objects corresponding containing `<ListGroup.Item>` properties.

```JavaScript
import ListGroup from '@legendarymediatv/bootstrap/ListGroup';

…

<ListGroup
  title="ListGroup with items"
  titleVariant="info"
>
  <ListGroup.Item subitem="sample sub-item">
    ListGroup.Item with a sub-item below
  </ListGroup.Item>

  <ListGroup.Item to="/sample">
    ListGroup.Item auto-converted to a link/action
  </ListGroup.Item>

  <ListGroup.Item
    onClick={() => {
      alert("clicked");
    }}
  >
    ListGroup.Item auto-converted to a button
  </ListGroup.Item>

  <ListGroup.Item
    to="#list-group"
    subactions={[
      {
        to: "/sample",
        variant: "info",
        children: <Icon name="fas fa-camera" />,
      },
      {
        onClick: () => {
          alert("deleted!");
        },
        variant: "danger",
        children: <Icon name="fas fa-trash-alt" />,
      },
    ]}
  >
    ListGroup.Item with a URL and sub-actions
  </ListGroup.Item>
</ListGroup.Item>
```

| Name               | Type             | Default                         | Description                                                                                                |
| :----------------- | :--------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------- |
| `action`           | boolean          | inherited / `true`              | marks the item as actionable; will be set to `true` when `href` / `to` / `onClick` are defined             |
| `active`           | boolean          | inherited                       | marks the item as active                                                                                   |
| `as`               | elementType      | inherited / `Link`              | `as` property for the item; becomes our Gatsby-friendly `Link` when the `href` or `to` property is defined |
| `children`         | JSX              |                                 | content for the main list item (will be nested if `subactions` property is set)                            |
| `disabled`         | boolean          | inherited                       | marks the item as disabled                                                                                 |
| `eventKey`         | string \| number | inherited                       | unique identifier for when using events                                                                    |
| `href` \| `to`     | URL              |                                 | URL or anchor target for the `<Link>`                                                                      |
| `onClick`          | function         |                                 | fired when the item is clicked                                                                             |
| `subitem`          | JSX              |                                 | to subtly display below the `children`                                                                     |
| `subitemClassName` | string           | `'fst-italic small text-muted'` | `className` property for the `subitem`                                                                     |
| `variant`          | string           |                                 | Bootstrap theme color name (e.g., `'primary'`)                                                             |

### `<Pagination>`

Basically a rebuild of React Bootstrap’s `<Pagination>` and `<PageItem>` components, but based off of our `<Link>` component (in order to be Gatsby-friendly).

Sub-components include:

- `<Pagination.Item>` – creates a pagination item containing a `<Link>` or `<button>` (native), depending on if a URL is provided in the `href`/`to` property
- `<Pagination.First>` – `<Pagination.Item>` with the content as an ARIA-friendly `«` by default
- `<Pagination.Last>` – `<Pagination.Item>` with the content as an ARIA-friendly `»` by default
- `<Pagination.Prev>` – `<Pagination.Item>` with the content as an ARIA-friendly `‹` by default
- `<Pagination.Next>` – `<Pagination.Item>` with the content as an ARIA-friendly `›` by default
- `<Pagination.Ellipsis>` – `<Pagination.Item>` with the content as an ARIA-friendly `…` by default

> _TIP: if you prefer to use icons, you can override the default content of any of the above by making the child an_ `<Icon>`

```JavaScript
import Pagination from '@legendarymediatv/bootstrap/Pagination';
…
<Pagination>
  <Pagination.First />
  <Pagination.Prev />

  <Pagination.Ellipsis />

  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item to="/sample">2</Pagination.Item>
  <Pagination.Item onClick={sampleHandler.bind(this, 3)}>3</Pagination.Item>
  <Pagination.Item active>4</Pagination.Item>
  <Pagination.Item disabled>5</Pagination.Item>

  <Pagination.Ellipsis />

  <Pagination.Next />
  <Pagination.Last />
</Pagination>

…

<Pagination size="sm">
  <Pagination.First>
    <Icon name="fas fa-angle-double-left" alt="first" />
  </Pagination.First>

  <Pagination.Prev>
    <Icon name="fas fa-angle-left" alt="previous" />
  </Pagination.Prev>

  <Pagination.Ellipsis>
    <Icon name="fas fa-ellipsis-h" alt="more" />
  </Pagination.Ellipsis>

  <Pagination.Next>
    <Icon name="fas fa-angle-right" alt="next" />
  </Pagination.Next>

 <Pagination.Last>
    <Icon name="fas fa-angle-double-right" alt="last" />
  </Pagination.Last>
</Pagination>
```

#### `<Pagination>` properties

| Name   | Type             | Default | Description                              |
| :----- | :--------------- | :------ | :--------------------------------------- |
| `size` | `'sm'` \| `'lg'` |         | sets the sizing for the whole pagination |

#### `<Pagination.*>` properties

| Name           | Type     | Default     | Description                                                                                                                                                                       |
| :------------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`       | boolean  | `false`     | sets the pagination item as `active` and appends the children with a `<VisuallyHidden>` tag containing the `activeLabel`                                                          |
| `activeLabel`  | string   | `(current)` | content of the `<VisuallyHidden>` tag when flagged as `active`                                                                                                                    |
| `disabled`     | boolean  | `false`     | sets the pagination item as disabled                                                                                                                                              |
| `href` \| `to` | URL      |             | URL or anchor target for the `<Link>`; if blank, then a `<button>` is rendered and probably should have an `onClick` defined                                                      |
| `onClick`      | function |             | callback function for when the component is clicked; _TIP: as in the example above, use_ `bind()` _when assigning the property in order to tell which pagination item is clicked_ |

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

An extension of [React Bootstrap’s `<Spinner>`](https://react-bootstrap.github.io/components/spinners/) that automatically selects the `border` animation and adds the screen reader and ARIA role, so it can be self-closing and easily [ensure the maximum accessibility](https://react-bootstrap.github.io/components/spinners/#accessibility).

```JavaScript
import Spinner from '@legendarymediatv/bootstrap/Spinner';

…

<Spinner />

<Spinner
  animation="grow"
  variant="success"
/>

<Spinner alert />

<Spinner
  title="Reticulating splines …"
  variant="primary"
/>
```

| Name        | Type                   | Default      | Description                                                                                                                                                                                              |
| :---------- | :--------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children    | JSX                    | `'loading…'` | content for `<VisuallyHidden>` child component                                                                                                                                                           |
| `animation` | `'border'` \| `'grow'` | `'border'`   | changes the animation style of the spinner                                                                                                                                                               |
| `alert`     | boolean                | `false`      | wrap the spinner in an [`<Alert>`](https://react-bootstrap.github.io/components/alerts/) (centered with `py-5` padding), defaulting `variant` to `'info'`, and apply non-spinner properties to the alert |
| `as`        | string                 | `'div'`      | custom HTML tag                                                                                                                                                                                          |
| `role`      | string                 | `'status'`   | ARIA accessibility role                                                                                                                                                                                  |
| `size`      | string                 |              | component size variations (e.g., `sm`)                                                                                                                                                                   |
| `title`     | JSX                    |              | content for `<Alert.Heading>`, also wraps the spinner in an [`<Alert>`](https://react-bootstrap.github.io/components/alerts/) (centered with `py-4` padding), see `alert` above                          |
| `variant`   | string                 | `'primary'`  | Bootstrap theme color name (e.g., `'primary'`)                                                                                                                                                           |

### `<VisuallyHidden>`

Bootstrap’s [visually hidden content](https://getbootstrap.com/docs/5.1/helpers/visually-hidden/) (a.k.a., screen reader only).

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

### `combine(array)` and `separate(string)`

Use `separate()` to split a string (e.g., `className`) by whitespace into an array, always returning at least an empty array.

Use `combine()` to join an array with at least one element via a space separator, otherwise return `null`.

> _NOTE: these are helpful when used together or in conjunction with `prepare()` in order to join `className` before rendering the component; see the example there_

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

Pass this function a form object (e.g., via an `onSubmit` event handler’s `event.target`) and it will return a JSON object containing the form’s element data as key–value pairs. Key names are pulled from either the form element `name` (preferred) or `id` attribute, otherwise unnamed/unidentified elements are omitted. Unselected `radio` elements are ignored as well.

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

### `sleep(milliseconds)`

Promise-based wrapper for JavaScript’s `setTimeout()` function, allowing your script to pause using `await` or `.then()` syntax.

```JavaScript
import { sleep } from '@legendarymediatv/bootstrap/functions';

…

// wait one second and then do something
sleep(1000)
  .then(() => {
    // do something
  });

function async sample() {
  // do something

  // wait 1/4 second
  await sleep(250);

  // do something else
}
```

| Name           | Type    | Default  | Description                    |
| :------------- | :------ | :------- | :----------------------------- |
| `milliseconds` | integer | required | number of milliseconds to wait |

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
