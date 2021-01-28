// dependencies
import React from "react";

// components
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";

// LegendaryMediaTV components
import FullPage from "../../FullPage";

export default () => {
  return (
    <>
      <Helmet>
        <title>Full Page | LegendaryMediaTV</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
      </Helmet>
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
              Footer
            </FullPage.Footer>
          </FullPage>
        </Container>
      </div>
    </>
  );
};
