# LegendaryMediaTV Bootstrap

This is a Node.js framework for working with [HTML 5](https://www.w3schools.com/html/) and [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

At this point it is mostly just HTML classes, but I wanted to get this package out there for testing purposes.

## Getting started

Here's a sample of how to work with the Bootstrap framework. This sample features the `demo()` function, which is great for testing out your [custom-themed Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/theming/).

```JavaScript
'use strict';

// add the Bootstrap framework
const bs = require('@legendarymediatv/bootstrap');

// create an HTML object (with a page title) and enable Bootstrap
const html = new bs.HTML('Bootstrap Demo');
html.bootstrap();

// add demo
html.add(bs.demo());

// display demo
console.log(html);
```

> *NOTE: rather than just logging to the console, you will probably want to run [Express](https://expressjs.com/) web server, [add a route](https://expressjs.com/en/starter/basic-routing.html) for the demo, and use `res.send(html.toString());` instead*

## Diving deeper

For more examples of usage, see [test.js](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/blob/main/test.js)
