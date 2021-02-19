// dependencies
import React from "react";

// components
import Container from "react-bootstrap/Container";
import Display from "../../Display";
import { Helmet } from "react-helmet";
import { title } from "../../functions";

export default (props) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title("LegendaryMediaTV", props.title, props.parent)}</title>

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Helmet>
      <Container className="bg-white py-4">
        {props.title ? (
          <Display.Heading1>{props.title}</Display.Heading1>
        ) : null}

        {props.children}
      </Container>
    </>
  );
};
