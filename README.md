# LegendaryMediaTV Bootstrap

This is a Node.js framework for working with HTML and [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

At this point it is mostly HTML classes and still needs HTML classes for tables, but I wanted to get this package out there for testing purposes.

## Getting started

Here's a sample of how to work with the Bootstrap framework. This sample features the `demo()` function, which is great for testing out your [custom-themed Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/theming/).

```JavaScript
'use strict';

// add the Bootstrap framework
const bs = require('@legendarymediatv/bootstrap');

// create an HTML object
const html = new bs.html('Bootstrap Demo');

// add Bootstrap and its dependencies
html.metadata('viewport', 'width=device-width, initial-scale=1, shrink-to-fit=no');
html.resourceLink('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css');  // Bootstrap CSS
html.resourceLink('https://use.fontawesome.com/releases/v5.15.1/css/all.css');  // FontAwesome icons
html.script(null, 'https://code.jquery.com/jquery-3.5.1.slim.min.js');  // jQuery (slim)
html.script(null, 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');  // Popper.js
html.script(null, 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js');  // Bootstrap JavaScript

// add additional Bootstrap JavaScript
html.script(
`$(document).ready(
  function ()
  {
    /****************************
     ***** Bootstrap Modals *****
     ***************************/

    // smart modal data loading functionality
    $("#bs_modal").on(
      "show.bs.modal",
      function (event) {
        // pull data-* attributes from toggler
        var source = $(event.relatedTarget);

        // set modal’s scale
        if (source) {
          $(this).find(".modal-dialog").removeClass("modal-sm").removeClass("modal-lg");  // remove existing scaling classes
          if (source.data("scale") == "sm" || source.data("scale") == "lg") { $(this).find(".modal-dialog").addClass("modal-" + source.data("scale")); }

          // update the modal’s content
          $(this).find(".modal-title").html(source.data("title"));
          $(this).find(".modal-body").html(source.data("body"));
          $(this).find(".modal-footer").html(source.data("footer"));
        }
      }
    );

    // trigger any autofocus elements
    $("#bs_modal").on(
      "shown.bs.modal",
      function () { $(this).find("[autofocus]:first").focus(); }
    );


    /******************************
     ***** Bootstrap Popovers *****
     *****************************/

    // enable popover functionality
    $("[data-toggle='popover']").popover();

    // dismiss on next click
    $(".popover-dismiss").popover({ trigger: "focus" });


    /******************************
     ***** Bootstrap Tooltips *****
     *****************************/

    // enable tooltip functionality
    $("[data-toggle='tooltip']").tooltip();
  }
);`
);

// add demo
html.add(bs.demo());

// display demo
console.log(html);
```

> *NOTE: rather than just logging to the console, you will probably want to run [Express](https://expressjs.com/) web server, [add a route](https://expressjs.com/en/starter/basic-routing.html) for the demo, and use `res.send(html.toString());` instead*

## Diving deeper

For more examples of usage, see [test.js](https://github.com/LegendaryMediaTV/LMTV-Bootstrap/blob/master/LMTV-Bootstrap/test.js)