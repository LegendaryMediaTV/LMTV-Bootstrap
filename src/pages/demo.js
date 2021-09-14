// dependencies
import React from "react";

// components
import Container from "react-bootstrap/Container";
import Display from "../../Display";
import { Helmet } from "react-helmet";

// LegendaryMediaTV functions
import { title } from "../../functions";

// LegendaryMediaTV components
import Demo from "../../Demo";

const DemoPage = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title("LegendaryMediaTV", "Bootstrap Demo")}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Helmet>

      <Demo />
    </>
  );
};

export default DemoPage;
