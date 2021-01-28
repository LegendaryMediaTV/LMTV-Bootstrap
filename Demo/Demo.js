// dependencies
import React from "react";

// components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

// LegendaryMediaTV components
import Display from "../Display";
import Icon from "../Icon";
import InfoIcon from "../InfoIcon";
import Link from "../Link";
import Spinner from "../Spinner";
import ScrollToTop from "../ScrollToTop";

export default () => {
  // TODO: make this use React Bootstrap instead of native HTML
  return (
    <>
      <nav aria-label="nav" className="mt-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a href="#alert" className="nav-link">
              Alert
            </a>
          </li>
          <li className="nav-item">
            <a href="#badge" className="nav-link">
              Badge
            </a>
          </li>
          <li className="nav-item">
            <a href="#breadcrumb" className="nav-link">
              Breadcrumb
            </a>
          </li>
          <li className="nav-item">
            <a href="#button" className="nav-link">
              Button
            </a>
          </li>
          <li className="nav-item">
            <a href="#button-group" className="nav-link">
              Button Group
            </a>
          </li>
          <li className="nav-item">
            <a href="#card" className="nav-link">
              Card
            </a>
          </li>
          <li className="nav-item">
            <a href="#carousel" className="nav-link">
              Carousel
            </a>
          </li>
          <li className="nav-item">
            <a href="#collapse" className="nav-link">
              Collapse
            </a>
          </li>
          <li className="nav-item">
            <a href="#description-list" className="nav-link">
              Description List
            </a>
          </li>
          <li className="nav-item">
            <a href="#figure" className="nav-link">
              Figure
            </a>
          </li>
          <li className="nav-item">
            <a href="#form" className="nav-link">
              Form
            </a>
          </li>
          <li className="nav-item">
            <a href="#grid-layout" className="nav-link">
              Grid Layout
            </a>
          </li>
          <li className="nav-item">
            <a href="#info-icon" className="nav-link">
              Info Icon
            </a>
          </li>
          <li className="nav-item">
            <a href="#image" className="nav-link">
              Image
            </a>
          </li>
          <li className="nav-item">
            <a href="#jumbotron" className="nav-link">
              Jumbotron
            </a>
          </li>
          <li className="nav-item">
            <a href="#list" className="nav-link">
              List
            </a>
          </li>
          <li className="nav-item">
            <a href="#list-group" className="nav-link">
              List Group
            </a>
          </li>
          <li className="nav-item">
            <a href="#modal" className="nav-link">
              Modal
            </a>
          </li>
          <li className="nav-item">
            <a href="#nav" className="nav-link">
              Nav
            </a>
          </li>
          <li className="nav-item">
            <a href="#navbar" className="nav-link">
              Navbar
            </a>
          </li>
          <li className="nav-item">
            <a href="#pagination" className="nav-link">
              Pagination
            </a>
          </li>
          <li className="nav-item">
            <a href="#popover" className="nav-link">
              Popover
            </a>
          </li>
          <li className="nav-item">
            <a href="#progress" className="nav-link">
              Progress
            </a>
          </li>
          <li className="nav-item">
            <a href="#spinner" className="nav-link">
              Spinner
            </a>
          </li>
          <li className="nav-item">
            <a href="#table" className="nav-link">
              Table
            </a>
          </li>
          <li className="nav-item">
            <a href="#tooltip" className="nav-link">
              Tooltip
            </a>
          </li>
          <li className="nav-item">
            <a href="#typography" className="nav-link">
              Typography
            </a>
          </li>
        </ul>
      </nav>
      <section className="container pt-5">
        <Alert variant="warning">
          <Alert.Heading>Beta Feature</Alert.Heading>
          <p>
            <em>
              This component is still under development and often uses
              Bootstrap’s raw classes instead of React Bootstrap components or
              even <strong>this</strong> package’s components. Stay tuned for
              more updates!
            </em>{" "}
            😁
          </p>
        </Alert>

        <Alert variant="info">
          <Alert.Heading>Usage</Alert.Heading>
          <p>
            This component is intended to be used for development purposes
            (e.g., testing your custom Bootstrap theme) by having everything all
            one one page.
          </p>
        </Alert>

        <section id="alert" className="mt-5">
          <Display.Heading2 className="mb-3">Alert</Display.Heading2>
          <p>
            Provides contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages. Alerts are
            available for any length of text, as well as an optional dismiss
            button. Alerts can also contain additional HTML elements like
            headings, paragraphs and dividers.
          </p>
          <p>
            For more information, see{" "}
            <a
              href="https://react-bootstrap.github.io/components/alerts/"
              target="_blank"
              rel="noreferrer"
            >
              React Bootstrap Alerts
            </a>{" "}
            and{" "}
            <a
              href="https://getbootstrap.com/docs/4.6/components/alerts/"
              target="_blank"
              rel="noreferrer"
            >
              Bootstrap Alerts
            </a>
            .
          </p>

          {[
            "Danger",
            "Dark",
            "Info",
            "Light",
            "Primary",
            "Secondary",
            "Success",
            "Warning",
          ].map((variant, idx) => (
            <Alert
              variant={variant.toLowerCase()}
              dismissible
              onClose={() => alert("insert your dismiss logic here")}
              key={idx}
            >
              <Alert.Heading>{variant}</Alert.Heading>
              This alert has a link—
              <Alert.Link as={Link} to="#">
                check it out!
              </Alert.Link>
            </Alert>
          ))}
        </section>

        <section id="badge" className="mt-5">
          <Display.Heading2 className="mb-3">Badge</Display.Heading2>
          <p>
            A small count and labeling component. Badges scale to match the size
            of the immediate parent element.
          </p>
          <p>
            For more information, see{" "}
            <a
              href="https://react-bootstrap.github.io/components/badge/"
              target="_blank"
              rel="noreferrer"
            >
              React Bootstrap Alerts
            </a>{" "}
            and{" "}
            <a
              href="https://getbootstrap.com/docs/4.6/components/badge/"
              target="_blank"
              rel="noreferrer"
            >
              Bootstrap Badges
            </a>
            .
          </p>

          {[
            "Danger",
            "Dark",
            "Info",
            "Light",
            "Primary",
            "Secondary",
            "Success",
            "Warning",
          ].map((variant, idx) => (
            <h3>
              <Badge pill variant={variant.toLowerCase()} key={idx}>
                {variant}
              </Badge>
            </h3>
          ))}
        </section>

        <section id="breadcrumb" className="mt-5">
          <Display.Heading2 className="mb-3">Breadcrumb</Display.Heading2>
          <p>
            Indicate the current page’s location within a navigational
            hierarchy.
          </p>
          <p>
            For more information, see{" "}
            <a
              href="https://getbootstrap.com/docs/4.6/components/breadcrumb/"
              target="_blank"
              rel="noreferrer"
            >
              Bootstrap Breadcrumbs
            </a>
            .
          </p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Default
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-danger">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Danger
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-dark">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Dark
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-info">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Info
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Light
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-primary">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Primary
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-secondary">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Secondary
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-success">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Success
              </li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-warning">
              <li className="breadcrumb-item">
                <a href="#breadcrumb">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Warning
              </li>
            </ol>
          </nav>
        </section>

        <section id="button" className="mt-5">
          <Display.Heading2 id="button" className="mb-3">
            Button
          </Display.Heading2>
          <p>
            Use to provide actions in forms, dialogs, and more. Any action
            besides submitting a form is usually handled via JavaScript events
            either defined on the button directly or assigned when the page
            loads.
          </p>
          <p>
            For more information, see{" "}
            <a
              href="https://getbootstrap.com/docs/4.6/components/buttons/"
              target="_blank"
              rel="noreferrer"
            >
              Bootstrap Buttons
            </a>
            .
          </p>
          {[
            "Danger",
            "Dark",
            "Info",
            "Light",
            "Link",
            "Primary",
            "Secondary",
            "Success",
            "Warning",
          ].map((variant, idx) => (
            <div key={idx}>
              <Button variant={variant.toLowerCase()} className="mr-3 mb-3">
                {variant ?? "Default"}
              </Button>
              <Button variant={variant.toLowerCase()} className="mr-3 mb-3">
                <Icon name="fas fa-camera" />
              </Button>
              <Button variant={variant.toLowerCase()} className="mr-3 mb-3">
                <Icon name="fas fa-camera" className="pr-2" />
                Default
              </Button>
              <Button variant={variant.toLowerCase()} className="mr-3 mb-3">
                Default
                <Icon name="fas fa-camera" className="pl-2" />
              </Button>
            </div>
          ))}
        </section>

        <Display.Heading2 id="button-group" className="mt-5 mb-3">
          Button Group
        </Display.Heading2>
        <p>
          Group a series of buttons together on a single line or stacked
          vertically. These are often used as toolbars. Any action by these is
          usually handled via JavaScript events either defined on the button
          directly or assigned when the page loads.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/button-group/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Button Groups
          </a>
          .
        </p>
        <div role="group" className="mb-3 btn-group-lg btn-group-vertical">
          <button type="button" className="btn btn-secondary">
            Button 1
          </button>
          <button type="button" className="btn btn-secondary">
            Button 2
          </button>
          <button type="button" className="btn btn-secondary">
            Button 3
          </button>
        </div>
        <nav
          role="toolbar"
          aria-label="Cool Toolbar"
          className="btn-toolbar justify-content-between"
        >
          <div
            role="group"
            aria-label="Group of buttons"
            className="btn-group mr-2"
          >
            <button type="button" className="btn btn-primary">
              Button 1
            </button>
            <button type="button" className="btn btn-primary">
              Button 2
            </button>
            <button type="button" className="btn btn-primary">
              Button 3
            </button>
          </div>
          <div
            role="group"
            aria-label="Group of buttons"
            className="btn-group mr-2"
          >
            <button type="button" className="btn btn-primary">
              Button 4
            </button>
            <button type="button" className="btn btn-primary">
              Button 5
            </button>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              placeholder="all your monies"
              type="text"
              name="monies"
              id="bs_input_0"
              className="form-control"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </nav>

        <Display.Heading2 id="card" className="mt-5 mb-3">
          Card
        </Display.Heading2>
        <p>
          Provides a flexible and extensible content container, divided into
          several optional sections as follows: header, top image, body
          (includes title and subtitle), bottom image, and footer.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/card/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Cards
          </a>
          .
        </p>
        <section className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3">
              <header className="card-header">
                <h4>Default</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph in body</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-danger">
              <header className="card-header">
                <h4>Danger</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-dark">
              <header className="card-header">
                <h4>Dark</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-info">
              <header className="card-header">
                <h4>Info</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-light">
              <header className="card-header">
                <h4>Light</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-primary">
              <header className="card-header">
                <h4>Primary</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-secondary">
              <header className="card-header">
                <h4>Secondary</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-success">
              <header className="card-header">
                <h4>Success</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3 bg-warning">
              <header className="card-header">
                <h4>Warning</h4>
              </header>
              <img
                src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                alt="Tim, the goat man"
                className="img-fluid card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <h6 className="card-subtitle mb2">Card Subtitle</h6>
                <p>Paragraph between Start() and Stop()</p>
              </div>
              <footer className="card-footer">
                <h6>Card Footer</h6>
              </footer>
            </div>
          </div>
        </section>

        <Display.Heading2 id="carousel" className="mt-5 mb-3">
          Carousel
        </Display.Heading2>
        <p>
          A slideshow for cycling through a series of content. It works with a
          series of images, text, or custom markup. It also includes support for
          previous/next controls and indicators.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/carousel/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Carousel
          </a>
          .
        </p>
        <section
          id="bs_carousel_0"
          data-ride="carousel"
          className="carousel slide"
        >
          <div className="carousel-inner">
            <ol className="carousel-indicators">
              <li
                data-target="#bs_carousel_0"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#bs_carousel_0" data-slide-to="1" />
              <li data-target="#bs_carousel_0" data-slide-to="2" />
            </ol>
            <div className="carousel-item active">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjY0NmNmMTEtYjQwZS00N2Y0LWJhOTAtMjUwNmQwMmVlMjNiXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
                alt="Knights that Say “Nee”"
                className="img-fluid d-block w-100"
              />
              <div className="carousel-caption d-none d-sm-block">
                “Cut down this entire forest … with a herring.”
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/M/MV5BNDZhYThkNjUtYmM0YS00ZGIzLTk4NmYtZDViMTNhNzBkNDYyXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
                alt="French Knight"
                className="img-fluid d-block w-100"
              />
              <div className="carousel-caption d-none d-sm-block">
                “Go away or I will taunt you again a second time!”
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMzQ2NjViMjUtOWEwNi00M2ExLTg3MTUtMDUxMzJjZmIzNmMwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
                alt="Black Knight"
                className="img-fluid d-block w-100"
              />
              <div className="carousel-caption d-none d-sm-block">
                “It’s only a flesh wound.”
              </div>
            </div>
          </div>
          <a
            href="#bs_carousel_0"
            role="button"
            data-slide="prev"
            className="carousel-control-prev"
          >
            <span aria-hidden="true" className="carousel-control-prev-icon" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            href="#bs_carousel_0"
            role="button"
            data-slide="next"
            className="carousel-control-next"
          >
            <span aria-hidden="true" className="carousel-control-next-icon" />
            <span className="sr-only">Next</span>
          </a>
        </section>

        <Display.Heading2 id="collapse" className="mt-5 mb-3">
          Collapse
        </Display.Heading2>
        <p>
          Toggle the visibility of content, optionally in an accordion style.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/collapse/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Collapse
          </a>
          .
        </p>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#bs_demo_collapse"
          aria-controls="bs_demo_collapse"
          aria-expanded="false"
          className="btn btn-primary"
        >
          Show/Hide Content
        </button>
        <div id="bs_demo_collapse" className="collapse">
          <div>Now you see me …</div>
        </div>

        <Display.Heading2 id="description-list" className="mt-5 mb-3">
          Description List
        </Display.Heading2>
        <p>
          Align terms and descriptions horizontally. For longer terms, you can
          optionally add a <code>text-truncate</code> class to truncate the text
          with an ellipsis.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/content/typography/#description-list-alignment"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Description Lists
          </a>
          .
        </p>
        <dl className="row">
          <dt className="col-sm-3">Ray</dt>
          <dd className="col-sm-9">Husband</dd>
          <dt className="col-sm-3">Krystal</dt>
          <dd className="col-sm-9">Wife</dd>
          <dt className="col-sm-3">Abigail</dt>
          <dd className="col-sm-9">Pug</dd>
          <dt className="col-sm-3">Garfield</dt>
          <dd className="col-sm-9">Cat</dd>
        </dl>

        <Display.Heading2 id="figure" className="mt-5 mb-3">
          Figure
        </Display.Heading2>
        <p>An image with an optional caption.</p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/content/figures/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Figures
          </a>
          .
        </p>
        <figure className="figure d-block text-center">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZTQzMGRlY2EtOTY5Yy00M2E1LTgzMzYtZDM1MjQ1YjdhNzkwXkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg"
            alt="nameless knight and Arthur"
            className="img-fluid figure-img"
          />
          <figcaption className="figure-caption">
            some “Red Shirt” standing with King Arthur
          </figcaption>
        </figure>

        <Display.Heading2 id="form" className="mt-5 mb-3">
          Form
        </Display.Heading2>
        <p>
          Form control styles, layout options, and custom components for
          creating a wide variety of forms. Besides spiffied up standard input
          elements (including optionally turning a checkbox into a toggle
          switch), there are also input groups (prefix/suffix an input element
          with text and/or icons), form rows (format the form into
          rows/columns), and form groups (add labels to inputs).
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/forms/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Forms
          </a>
          .
        </p>
        <h4>Input</h4>
        <form method="post" className="my-3">
          <input
            value="remove"
            type="hidden"
            name="action"
            id="bs_input_1"
            className="form-control"
          />
          <input
            value="plain text input"
            type="text"
            name="changeme"
            id="bs_input_2"
            className="form-control-plaintext form-control-lg"
          />
          <input
            value="read-only input"
            type="text"
            name="readme"
            id="bs_input_3"
            readOnly
            className="form-control"
          />
          <input
            type="text"
            name="amount"
            id="bs_input_4"
            min="0"
            max="9001"
            maxLength="5"
            placeholder="amount of things, stuff, and what have you"
            aria-disabled="true"
            className="form-control form-control-lg"
          />
          <div className="custom-control custom-checkbox">
            <input
              value="true"
              type="checkbox"
              name="agree"
              id="bs_checkbox_0"
              className="custom-control-input"
            />
            <label htmlFor="bs_checkbox_0" className="custom-control-label">
              Agree to terms?
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input
              value="on"
              type="checkbox"
              name="beastmode"
              id="bs_checkbox_1"
              className="custom-control-input"
            />
            <label htmlFor="bs_checkbox_1" className="custom-control-label">
              beastmode
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              value="true"
              type="radio"
              name="agree"
              id="bs_radio_0"
              className="custom-control-input"
            />
            <label htmlFor="bs_radio_0" className="custom-control-label">
              agree
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              value="false"
              type="radio"
              name="agree"
              id="bs_radio_1"
              className="custom-control-input"
            />
            <label htmlFor="bs_radio_1" className="custom-control-label">
              disagree
            </label>
          </div>
          <select
            name="options"
            id="bs_select_0"
            className="custom-select custom-select-lg"
          >
            <option>select something named</option>
            <optgroup label="Humans">
              <option value="Ray">Husband</option>
              <option value="Krystal">Wife</option>
            </optgroup>
            <optgroup label="Pets">
              <option value="Abigail">Pug</option>
              <option value="Garfield">Cat</option>
            </optgroup>
            <option value="Decoration">Cornelius</option>
          </select>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
        <h4>Input group</h4>
        <form method="post" className="my-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              placeholder="all your monies"
              type="text"
              name="monies"
              id="bs_input_5"
              className="form-control"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_6"
              placeholder="Default"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-danger">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_7"
              placeholder="Danger"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-dark">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_8"
              placeholder="Dark"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-info">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_9"
              placeholder="Info"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-light">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_10"
              placeholder="Light"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-primary">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_11"
              placeholder="Primary"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-secondary">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_12"
              placeholder="Secondary"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-success">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_13"
              placeholder="Success"
              className="form-control"
            />
          </div>
          <div className="input-group my-2 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text bg-warning">
                <i aria-label="camera" className="fas fa-camera" />
              </span>
            </div>
            <input
              type="text"
              name="email"
              id="bs_input_14"
              placeholder="Warning"
              className="form-control"
            />
          </div>
        </form>
        <h4>Form row</h4>
        <form method="post" className="my-3">
          <div className="form-row">
            <div className="col-5">
              <input
                placeholder="first name"
                type="text"
                name="first name"
                id="bs_input_15"
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                placeholder="last name"
                type="text"
                name="last name"
                id="bs_input_16"
                className="form-control"
              />
            </div>
          </div>
        </form>
        <h4>Form group</h4>
        <form method="post" className="my-3">
          <div className="form-group">
            <label htmlFor="bs_input_17">City</label>
            <input
              type="text"
              name="city"
              id="bs_input_17"
              className="form-control"
            />
          </div>
        </form>

        <Display.Heading2 id="grid-layout" className="mt-5 mb-3">
          Grid Layout
        </Display.Heading2>
        <p>
          Bootstrap’s grid system uses a series of containers, rows, and columns
          to layout and align content.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/layout/grid/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Grid System
          </a>
          .
        </p>
        <div className="container">
          <section className="row">
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C1
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C2
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C3
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C4
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C5
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C6
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C7
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C8
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C9
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C10
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C11
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R1C12
            </div>
          </section>
          <section className="row">
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C1
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C2
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C3
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C4
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C5
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C6
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C7
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C8
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C9
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C10
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C11
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R2C12
            </div>
          </section>
          <section className="row">
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C1
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C2
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C3
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C4
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C5
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C6
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C7
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C8
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C9
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C10
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C11
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">
              R3C12
            </div>
          </section>
        </div>

        <Display.Heading2 id="info-icon" className="mt-5 mb-3">
          Info Icon
        </Display.Heading2>
        <p>
          Info Icons are basically just a popover-enabled <code>icon</code>,
          where the icon looks helpful and is themed as <code>information</code>
          . They are useful for providing short instructions and quick tips.
          Info Icons can contain any elements supported by{" "}
          <a href="#popover">popovers</a> (e.g., paragraphs, links, etc., but
          not blockquotes, description lists, etc.).
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/popovers/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Popovers
          </a>
          .
        </p>
        <p>
          Hey! Want to know more about Info Icons?!?
          <InfoIcon title="Info Icon Title">
            <p>
              Info Icon body can be pretty fancy, containing{" "}
              <a href="#">links</a> and any other elements supported in
              popovers!
            </p>
          </InfoIcon>
        </p>

        <Display.Heading2 id="image" className="mt-5 mb-3">
          Image
        </Display.Heading2>
        <p>Responsive (mobile-friendly) images and thumbnails.</p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/content/images/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Images
          </a>
          .
        </p>
        <h3>Fluid image</h3>
        <img
          src="https://m.media-amazon.com/images/M/MV5BN2I5NGEyMTYtYTNjMC00YTBhLWE1NjYtYWNhM2I2ODMyZTEzXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
          alt="cartoon scribe"
          className="img-fluid"
        />
        <h3>Thumbnail</h3>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMmFlYWI1MTUtYjBhZC00ZjlkLWE1MDQtZDIzNzNlNTdiZjE5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,660,1000_AL_.jpg"
          alt="“Monty Python and the Holy Grail” movie poster"
          className="img-thumbnail d-block mx-auto"
        />

        <Display.Heading2 id="jumbotron" className="mt-5 mb-3">
          Jumbotron
        </Display.Heading2>
        <p>Showcase/hero content, often containing headings and/or images.</p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/jumbotron/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Jumbotron
          </a>
          .
        </p>
      </section>
      <section className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Full-width</h1>
        </div>
      </section>
      <section className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1>Full-width and Fluid</h1>
        </div>
      </section>
      <div className="container">
        <section className="jumbotron">
          <h1>Default</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-danger">
          <h1>Danger</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-dark">
          <h1>Dark</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-info">
          <h1>Info</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-light">
          <h1>Light</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-primary">
          <h1>Primary</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-secondary">
          <h1>Secondary</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-success">
          <h1>Success</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>
        <section className="jumbotron bg-warning">
          <h1>Warning</h1>
          <hr />
          <p className="lead">Things, stuff, content!</p>
        </section>

        <Display.Heading2 id="list" className="mt-5 mb-3">
          List
        </Display.Heading2>
        <p>
          Ordered/numbered lists (<code>ol</code>) and unordered/bulleted lists
          (<code>ul</code>). You can optionally set the <code>type</code> to{" "}
          <code>unstyled</code> to remove numbers/bullets or to{" "}
          <code>inline</code> to stack items horizontally instead of vertically.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/content/typography/#lists"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Lists
          </a>
          .
        </p>
        <h4>Ordered (bs_ol)</h4>
        <ol>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ol>
        <h4>Unordered (bs_ul)</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <h4>Unstyled</h4>
        <ul className="list-unstyled">
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        <h4>Inline</h4>
        <ol className="list-inline">
          <li className="list-inline-item">item 1</li>
          <li className="list-inline-item">item 2</li>
          <li className="list-inline-item">item 3</li>
        </ol>

        <Display.Heading2 id="list-group" className="mt-5 mb-3">
          List Group
        </Display.Heading2>
        <p>
          List groups are a flexible and powerful component for displaying a
          series of content.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/list-group/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap List Groups
          </a>
          .
        </p>
        <h4>List Group Items</h4>
        <div className="list-group mb-3">
          <div className="list-group-item active">active text</div>
          <a
            href="#list-group"
            className="list-group-item list-group-item-action"
          >
            link
          </a>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            button
          </button>
          <div className="list-group-item d-flex p-0">
            <a
              href="#list-group"
              className="list-group-item list-group-item-action rounded-0 flex-grow-1 border-0"
              style={{ marginBottom: "1px" }}
            >
              flex item link with icon links
            </a>
            <a
              href="#list-group"
              className="list-group-item list-group-item-action list-group-item-info rounded-0 w-auto border-top-0 border-right-0 border-bottom-0"
            >
              <i aria-label="bootstrap" className="fab fa-bootstrap" />
            </a>
            <a
              href="#list-group"
              className="list-group-item list-group-item-action list-group-item-danger rounded-0 w-auto border-top-0 border-right-0 border-bottom-0"
            >
              <i aria-label="heart" className="fas fa-heart" />
            </a>
          </div>
        </div>
        <h4>List Group List</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item active">active text</li>
          <li className="list-group-item">
            <a href="#list-group">link</a>
          </li>
          <li className="list-group-item">text</li>
        </ul>

        <Display.Heading2 id="modal" className="mt-5 mb-3">
          Modal
        </Display.Heading2>
        <p>
          Adds dialogs for lightboxes, user notifications, or completely custom
          content. Basic modals just show/hide static content.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/modal/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Modals
          </a>
          .
        </p>
        <button
          type="button"
          data-toggle="modal"
          data-target="#bs_modal_demo"
          className="btn btn-primary cursor-help"
        >
          Show Modal
        </button>
        <div
          id="bs_modal_demo"
          role="dialog"
          aria-labelledby="bs_modal_demo-title"
          aria-hidden="true"
          className="modal fade"
        >
          <div role="document" className="modal-dialog modal-dialog-centered">
            <section className="modal-content">
              <header className="modal-header">
                <h5 id="bs_modal_demo-title" className="modal-title">
                  Modal Title
                </h5>
                <button type="button" data-dismiss="modal" className="close">
                  <i aria-label="close" className="fas fa-times" />
                </button>
              </header>
              <div className="modal-body">Modal Body</div>
              <footer className="modal-footer">
                Modal Footer
                <button
                  type="button"
                  data-dismiss="modal"
                  className="btn btn-primary ml-1"
                >
                  Close
                </button>
              </footer>
            </section>
          </div>
        </div>

        <Display.Heading2 id="nav" className="mt-5 mb-3">
          Nav
        </Display.Heading2>
        <p>
          Generic navigation that’s not quite as fancy as a <code>navbar</code>.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/navs/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Navs
          </a>
          .
        </p>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav nav-null">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Tabs
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Pills
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-danger">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Danger
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-dark">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Dark
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-info">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Info
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-light">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Light
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-primary">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Primary
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-secondary">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Secondary
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-success">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Success
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>
        <nav aria-label="nav" className="mb-2">
          <ul className="nav bg-warning">
            <li className="nav-item">
              <a href="#nav" aria-current="page" className="nav-link active">
                Warning
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 1
              </a>
            </li>
            <li className="nav-item">
              <a href="#nav" className="nav-link">
                Page 2
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#nav"
                disabled
                aria-disabled="true"
                tabIndex="-1"
                className="nav-link disabled"
              >
                Page 3
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">Text</div>
            </li>
          </ul>
        </nav>

        <Display.Heading2 id="navbar" className="mt-5 mb-3">
          Navbar
        </Display.Heading2>
        <p>
          A responsive navigation header, which includes support for branding
          (i.e., usually containing the company/product/project name and/or
          logo), navigation, collapsing, and more.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/navbar/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Navbars
          </a>
          .
        </p>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Brand Name
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_0"
            aria-controls="bs_navbar_items_0"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_0" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-dark bg-danger navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Danger
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_1"
            aria-controls="bs_navbar_items_1"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_1" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-dark bg-dark navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Dark
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_2"
            aria-controls="bs_navbar_items_2"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_2" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-dark bg-info navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Info
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_3"
            aria-controls="bs_navbar_items_3"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_3" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-light bg-light navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Light
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_4"
            aria-controls="bs_navbar_items_4"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_4" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-dark bg-primary navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Primary
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_5"
            aria-controls="bs_navbar_items_5"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_5" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-dark bg-secondary navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Secondary
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_6"
            aria-controls="bs_navbar_items_6"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_6" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-dark bg-success navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Success
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_7"
            aria-controls="bs_navbar_items_7"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_7" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav
          role="toolbar"
          aria-label="navigation bar"
          className="navbar navbar-light bg-warning navbar-expand-sm mb-2"
        >
          <a href="#navbar" className="navbar-brand">
            Warning
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#bs_navbar_items_8"
            aria-controls="bs_navbar_items_8"
            aria-expanded="false"
            aria-label="toggle navigation"
            className="navbar-toggler"
          >
            <i aria-label="menu bars" className="fas fa-bars" />
          </button>
          <div id="bs_navbar_items_8" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#navbar"
                  aria-current="page"
                  className="nav-link active"
                >
                  Page 1
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar" className="nav-link">
                  Page 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#navbar"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Display.Heading2 id="pagination" className="mt-5 mb-3">
          Pagination
        </Display.Heading2>
        <p>
          Indicates a series of related content exists across multiple pages.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/pagination/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Pagination
          </a>
          .
        </p>
        <nav aria-label="sample pagination">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">
                <i aria-label="previous" className="fas fa-angle-double-left" />
              </span>
            </li>
            <li className="page-item">
              <a href="#pagination" className="page-link">
                1
              </a>
            </li>
            <li aria-current="page" className="page-item active">
              <span className="page-link">
                2<span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <a href="#pagination" className="page-link">
                3
              </a>
            </li>
            <li className="page-item disabled">
              <span className="page-link">Text</span>
            </li>
            <li className="page-item">
              <a href="#pagination" className="page-link">
                <i aria-label="next" className="fas fa-angle-double-right" />
              </a>
            </li>
          </ul>
        </nav>

        <Display.Heading2 id="popover" className="mt-5 mb-3">
          Popover
        </Display.Heading2>
        <p>
          A message which appears when a user clicks on a control button or
          within a defined area. These are considered more mobile-friendly than
          the <code>tooltip</code> since not all devices support a “hover”
          feature.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/popovers/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Popovers
          </a>
          .
        </p>
        <a
          href="#popover"
          tabIndex="0"
          data-container="body"
          data-toggle="popover"
          data-trigger="focus"
          data-html="true"
          onClick={(event) => {
            event.preventDefault();
          }}
          title="Popover title"
          data-content="And here’s some <strong>amazing</strong> content. It’s very engaging. Right?"
          className="cursor-help"
        >
          Click to toggle popover
        </a>

        <Display.Heading2 id="progress" className="mt-5 mb-3">
          Progress
        </Display.Heading2>
        <p>
          Progress bars featuring support for stacked bars, animated
          backgrounds, and text labels. They can either be static (e.g., form
          progress across multiple pages) or made dynamic with JavaScript.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/progress/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Progress
          </a>
          .
        </p>
        <div className="progress" style={{ height: "1px" }}>
          <div
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar"
            style={{ width: "40%" }}
          />
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="71"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar"
            style={{ width: "71%" }}
          >
            71%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="71"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar progress-bar-striped"
            style={{ width: "71%" }}
          >
            71%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-danger"
            style={{ width: "65%" }}
          >
            65%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-danger progress-bar-striped"
            style={{ width: "65%" }}
          >
            65%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="42"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-dark"
            style={{ width: "42%" }}
          >
            42%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="42"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-dark progress-bar-striped"
            style={{ width: "42%" }}
          >
            42%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="53"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-info"
            style={{ width: "53%" }}
          >
            53%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="53"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-info progress-bar-striped"
            style={{ width: "53%" }}
          >
            53%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-light"
            style={{ width: "90%" }}
          >
            90%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-light progress-bar-striped"
            style={{ width: "90%" }}
          >
            90%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-primary"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-primary progress-bar-striped"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="51"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-secondary"
            style={{ width: "51%" }}
          >
            51%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="51"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-secondary progress-bar-striped"
            style={{ width: "51%" }}
          >
            51%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-success"
            style={{ width: "100%" }}
          >
            100%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-success progress-bar-striped"
            style={{ width: "100%" }}
          >
            100%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-warning"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>
        <div className="progress mt-2">
          <div
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar bg-warning progress-bar-striped"
            style={{ width: "55%" }}
          >
            55%
          </div>
        </div>

        <Display.Heading2 id="spinner" className="mt-5 mb-3">
          Spinner
        </Display.Heading2>
        <p>Indicate the loading state of a component or page.</p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/spinners/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Spinners
          </a>
          .
        </p>
        <h3>
          Default:
          <Spinner className="ml-1" />
          <Spinner animation="grow" className="ml-1" />
          <Button className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Danger:
          <Spinner variant="danger" className="ml-1" />
          <Spinner animation="grow" variant="danger" className="ml-1" />
          <Button variant="danger" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="danger" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Dark:
          <Spinner variant="dark" className="ml-1" />
          <Spinner animation="grow" variant="dark" className="ml-1" />
          <Button variant="dark" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="dark" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Info:
          <Spinner variant="info" className="ml-1" />
          <Spinner animation="grow" variant="info" className="ml-1" />
          <Button variant="info" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="info" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Light:
          <Spinner variant="light" className="ml-1" />
          <Spinner animation="grow" variant="light" className="ml-1" />
          <Button variant="light" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="light" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Primary:
          <Spinner variant="primary" className="ml-1" />
          <Spinner animation="grow" variant="primary" className="ml-1" />
          <Button variant="primary" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="primary" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Secondary:
          <Spinner variant="secondary" className="ml-1" />
          <Spinner animation="grow" variant="secondary" className="ml-1" />
          <Button variant="secondary" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="secondary" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Success:
          <Spinner variant="success" className="ml-1" />
          <Spinner animation="grow" variant="success" className="ml-1" />
          <Button variant="success" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="success" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>
        <h3>
          Warning:
          <Spinner variant="warning" className="ml-1" />
          <Spinner animation="grow" variant="warning" className="ml-1" />
          <Button variant="warning" className="ml-1">
            <Spinner size="sm" />
          </Button>
          <Button variant="warning" className="ml-1">
            Loading … <Spinner size="sm" />
          </Button>
        </h3>

        <Display.Heading2 id="table" className="mt-5 mb-3">
          Table
        </Display.Heading2>
        <p>
          Tabular data with table header, data rows/columns, table footer, and
          table caption.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/content/tables/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Tables
          </a>
          .
        </p>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption style={{ captionSide: "top" }}>
              <h3>Default</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>66</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>57</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>72</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>100</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-danger px-2" style={{ captionSide: "top" }}>
              <h3>Danger</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>16</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>39</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>56</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>62</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>66</td>
              </tr>
            </tbody>
            <tfoot className="bg-danger">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-dark px-2" style={{ captionSide: "top" }}>
              <h3>Dark</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>61</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>62</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>17</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>66</td>
              </tr>
            </tbody>
            <tfoot className="bg-dark">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-info px-2" style={{ captionSide: "top" }}>
              <h3>Info</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>42</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>78</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>92</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>19</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>75</td>
              </tr>
            </tbody>
            <tfoot className="bg-info">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-light px-2" style={{ captionSide: "top" }}>
              <h3>Light</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>43</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>38</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>77</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>89</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>66</td>
              </tr>
            </tbody>
            <tfoot className="bg-light">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-primary px-2" style={{ captionSide: "top" }}>
              <h3>Primary</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>92</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>45</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>57</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>42</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>20</td>
              </tr>
            </tbody>
            <tfoot className="bg-primary">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption
              className="bg-secondary px-2"
              style={{ captionSide: "top" }}
            >
              <h3>Secondary</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>37</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>69</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>79</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>30</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>28</td>
              </tr>
            </tbody>
            <tfoot className="bg-secondary">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-success px-2" style={{ captionSide: "top" }}>
              <h3>Success</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>50</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>19</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>57</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>7</td>
              </tr>
            </tbody>
            <tfoot className="bg-success">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>
        <section className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <caption className="bg-warning px-2" style={{ captionSide: "top" }}>
              <h3>Warning</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Data 1</td>
                <td>63</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data 2</td>
                <td>13</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Data 3</td>
                <td>89</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Data 4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data 5</td>
                <td>93</td>
              </tr>
            </tbody>
            <tfoot className="bg-warning">
              <tr>
                <td colSpan="3">Well that’s a fancy footer!</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <Display.Heading2 id="tooltip" className="mt-5 mb-3">
          Tooltip
        </Display.Heading2>
        <p>
          A message which appears when a cursor is positioned over an icon,
          image, hyperlink, or other element. These are considered less
          mobile-friendly than the <code>popover</code> since not all devices
          support a “hover” feature.
        </p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/components/tooltips/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Tooltips
          </a>
          .
        </p>
        <p>
          This{" "}
          <a
            title="how cool is that?"
            href="#tooltip"
            data-container="body"
            data-toggle="tooltip"
            data-html="true"
          >
            link
          </a>{" "}
          has a tooltip!
        </p>
        <p>
          <a
            href="#tooltip"
            data-container="body"
            data-toggle="tooltip"
            data-html="true"
            title="tooltip on the right"
            data-placement="right"
          >
            Tooltip link
          </a>
        </p>
        <button
          type="button"
          data-container="body"
          data-toggle="tooltip"
          data-html="true"
          title="from below"
          data-placement="bottom"
          className="btn btn-primary"
        >
          Button with tooltip
        </button>

        <Display.Heading2 id="typography" className="mt-5 mb-3">
          Typography
        </Display.Heading2>
        <p>Headings, body text, block quotes, links, and more.</p>
        <p>
          For more information, see{" "}
          <a
            href="https://getbootstrap.com/docs/4.6/content/typography/"
            target="_blank"
            rel="noreferrer"
          >
            Bootstrap Typography
          </a>
          .
        </p>
        <Display.Heading1>Display 1</Display.Heading1>
        <Display.Heading2>Display 2</Display.Heading2>
        <Display.Heading3>Display 3</Display.Heading3>
        <Display.Heading4>Display 4</Display.Heading4>
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
        <h5>H5 Heading</h5>
        <h6>H6 Heading</h6>
        <p className="lead">Leading paragraph</p>
        <h4>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</h4>
        <h4>
          “The
          <a href="#typography">quick brown fox</a>
          jumps over the ‘lazy’ dog …” 0123456789 Il1 bdpq rnm cld
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</p>
        <p>
          “The
          <a href="#typography">quick brown fox</a>
          jumps over the ‘lazy’ dog …” 0123456789 Il1 bdpq rnm cld
        </p>
        <blockquote className="blockquote">
          <p>
            Success, meaningful success, begins when we take ownership and
            actively take responsibility for our part in the shortcomings of our
            life.
          </p>
          <footer className="blockquote-footer">
            Dr Eric Thomas,
            <cite>Greatness Is Upon You: Laying the Foundation</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote text-center">
          <p>
            Success, meaningful success, begins when we take ownership and
            actively take responsibility for our part in the shortcomings of our
            life.
          </p>
          <footer className="blockquote-footer">
            Dr Eric Thomas,
            <cite>Greatness Is Upon You: Laying the Foundation</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote text-right">
          <p>
            Success, meaningful success, begins when we take ownership and
            actively take responsibility for our part in the shortcomings of our
            life.
          </p>
          <footer className="blockquote-footer">
            Dr Eric Thomas,
            <cite>Greatness Is Upon You: Laying the Foundation</cite>
          </footer>
        </blockquote>
      </div>

      <ScrollToTop />
    </>
  );
};
