// dependencies
import React from "react";

// components
import Container from "react-bootstrap/Container";
import Display from "../../Display";
import Feature from "../../Feature/Feature";
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
        />
      </Helmet>

      {props.noContainer ? (
        props.children
      ) : (
        <Feature.Container>
          <Container className="bg-white py-4">
            {props.title ? (
              <Display.Heading1>{props.title}</Display.Heading1>
            ) : null}

            {props.children}
          </Container>
        </Feature.Container>
      )}
    </>
  );
};

export default Layout;
