// dependencies
import React from "react";

// components
import Container from "react-bootstrap/Container";
import Display from "../../Display";
import { Helmet } from "react-helmet";
import { title } from "../../functions";

const Layout = (props) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title("LegendaryMediaTV", props.title, props.parent)}</title>

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

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Helmet>

      {props.noContainer ? (
        props.children
      ) : (
        <Container className="bg-white py-4">
          {props.title ? (
            <Display.Heading1>{props.title}</Display.Heading1>
          ) : null}

          {props.children}
        </Container>
      )}
    </>
  );
};

export default Layout;
