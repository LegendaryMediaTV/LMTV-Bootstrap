// dependencies
import React from "react";
import { combine, prepare } from "../functions/functions";

// components
import RBSAlert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Link from "../Link/Link";

const AlertLink = (props) => {
  // prepare properties
  const [properties, children] = prepare(props);

  // convert to Gatsby-friendly link
  properties.as = Link;

  // merge classes
  properties.className = combine(properties.className);

  return <RBSAlert.Link {...properties}>{children}</RBSAlert.Link>;
};

export default class Alert extends React.Component {
  // sub-components
  static Heading = RBSAlert.Heading;
  static Link = AlertLink;

  render() {
    // prepare properties
    const [properties, children] = prepare(this.props);

    // extract error
    let error = properties.error;
    let errorURL;
    let errorMethod;
    if (error && typeof error === "object" && !Array.isArray(error)) {
      if (error.url) errorURL = error.url;
      if (error.method) errorMethod = error.method;

      if (error.error) error = error.error;
      else if (error.message) error = error.message;
    }
    delete properties.error;

    // only submission errors should come in as arrays
    const submissionError = error && Array.isArray(error);

    // custom title
    let title = properties.title ? properties.title : null;
    if (error && !title)
      title = submissionError ? "Submission Error" : "Process Error";
    delete properties.title;

    // custom subtitle
    let subtitle = properties.subtitle ? properties.subtitle : null;
    delete properties.subtitle;

    // set default theme
    if (error && !properties.variant) properties.variant = "danger";

    if (error && !subtitle) {
      if (
        typeof error === "string" &&
        error.indexOf("Request failed with status code") !== -1
      ) {
        // extract the HTML error code
        const code = parseInt(error.substring(error.length - 3));

        switch (code) {
          case 400:
            subtitle =
              "The server could not understand the request due to invalid syntax";
            break;

          case 401:
            subtitle = "You must authenticate before proceeding";
            break;

          case 403:
            subtitle = "You do not have access to the requested content";
            break;

          case 404:
            subtitle =
              "The URL is invalid or the requested resource does not exist";
            break;

          case 429:
            subtitle = "You have sent too many requests recently";
            break;

          case 500:
            subtitle =
              "The server has encountered a situation it doesn’t know how to handle";
            break;

          case 503:
            subtitle = "The server is not ready to handle the request";
            break;

          default:
            subtitle = error;
        }
      }
      // generic network error
      else if (error === "Network Error")
        subtitle = "The server is currently unreachable";
      // all other errors
      else {
        subtitle = submissionError
          ? "Please fix the following error(s):"
          : error ??
            "The server has encountered a situation it doesn’t know how to handle";
      }
    }

    // extract retry handler
    const onRetry = properties.onRetry;
    delete properties.onRetry;

    // merge classes
    properties.className = combine(properties.className);

    return (
      <RBSAlert {...properties}>
        {title ? (
          <Alert.Heading as="div" className="h3">
            {title}
          </Alert.Heading>
        ) : null}

        {subtitle ? <p className="lead">{subtitle}</p> : null}

        {submissionError ? (
          <ul>
            {error.map((errorMessage, errorIndex) => (
              <li key={errorIndex}>{errorMessage}</li>
            ))}
          </ul>
        ) : null}

        {children}

        {errorURL ? (
          <p>
            <b>URL:</b> {errorURL}
          </p>
        ) : null}

        {errorMethod ? (
          <p>
            <b>Method:</b> {errorMethod}
          </p>
        ) : null}

        {onRetry ? (
          <Button
            variant={properties.variant}
            className="w-100 w-md-auto"
            onClick={onRetry}
          >
            Retry
          </Button>
        ) : null}
      </RBSAlert>
    );
  }
}
