// dependencies
import React from "react";

// vendor components
import { Helmet } from "react-helmet";

// components
import Container from "react-bootstrap/Container";

export default (props) => {
  return (
    <>
      <Helmet>
        <title>
          {`${(props.title ? props.title + " | " : "") + "LegendaryMediaTV"}`}
        </title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Helmet>
      <Container className="py-4">
        {props.title ? <h1 className="display-1">{props.title}</h1> : null}

        {props.children}
      </Container>
    </>
  );
};
