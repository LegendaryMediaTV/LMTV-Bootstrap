# LegendaryMediaTV Bootstrap

This is a Node.js framework for working with [HTML 5](https://www.w3schools.com/html/) and [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

Besides HTML classes, it has support for Bootstrap themes, grid system, alerts, and forms.

## Getting started

Here's a sample of how to work with the Bootstrap framework. This sample features the `demo()` function, which is great for testing out your [custom-themed Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/theming/).

```JavaScript
'use strict';

// add the Bootstrap framework
const bs = require('@legendarymediatv/bootstrap');

// enable web server functionality
const http = require('http');

// create a basic web server that listens on port 1337
http.createServer((req, res) => {
    // create an HTML object (with a page title)
    const html = new bs.HTML('Bootstrap Demo');

    // enable Bootstrap (uses CDNs by default)
    html.bootstrap();

    // add demo
    html.add(bs.demo());

    // send the response to the client
    res.write(html.toString());
    res.end();
}).listen(1337);
```

> *NOTE: the sample above isn't intended to be a real web server configuration; you will probably want to run [Express](https://expressjs.com/) web server instead, with proper port detection, etc.*

## Diving deeper

For more examples of usage, see [test.js](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/blob/main/test.js)
