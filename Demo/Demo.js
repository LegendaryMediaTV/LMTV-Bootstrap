// dependencies
import React from "react";

// components
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tooltip from "react-bootstrap/Tooltip";

// LegendaryMediaTV components
import Blockquote from "../Blockquote";
import Display from "../Display";
import Icon from "../Icon";
import InfoIcon from "../InfoIcon";
import Link from "../Link";
import Spinner from "../Spinner";
import ScrollToTop from "../ScrollToTop";

export default class Demo extends React.Component {
  state = { showCollapse: false, showModal: false };

  modalCloseHandler = () => {
    this.setState({ showModal: false });
  };

  modalShowHandler = () => {
    this.setState({ showModal: true });
  };

  render = () => {
    // TODO: make this use React Bootstrap instead of native HTML
    return (
      <>
        <nav aria-label="nav" className="mt-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="#alert" className="nav-link">
                Alert
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#badge" className="nav-link">
                Badge
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#breadcrumb" className="nav-link">
                Breadcrumb
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#button" className="nav-link">
                Button
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#button-group" className="nav-link">
                Button Group
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#card" className="nav-link">
                Card
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#carousel" className="nav-link">
                Carousel
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#collapse" className="nav-link">
                Collapse
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#description-list" className="nav-link">
                Description List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#figure" className="nav-link">
                Figure
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#form" className="nav-link">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#grid-layout" className="nav-link">
                Grid Layout
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#info-icon" className="nav-link">
                Info Icon
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#image" className="nav-link">
                Image
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#jumbotron" className="nav-link">
                Jumbotron
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#list" className="nav-link">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#list-group" className="nav-link">
                List Group
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#modal" className="nav-link">
                Modal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#nav" className="nav-link">
                Nav
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#navbar" className="nav-link">
                Navbar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#pagination" className="nav-link">
                Pagination
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#popover" className="nav-link">
                Popover
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#progress" className="nav-link">
                Progress
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#spinner" className="nav-link">
                Spinner
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#table" className="nav-link">
                Table
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#tooltip" className="nav-link">
                Tooltip
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#typography" className="nav-link">
                Typography
              </Link>
            </li>
          </ul>
        </nav>
        <section className="container pt-5">
          <Alert variant="info">
            <Alert.Heading>Usage</Alert.Heading>
            <p>
              This component is intended to be used for development purposes
              (e.g., testing your custom Bootstrap theme) by having everything
              all on one page.
            </p>
          </Alert>

          <section id="alert" className="mt-5">
            <Display.Heading2 className="mb-3">Alert</Display.Heading2>
            <p>
              Provides contextual feedback messages for typical user actions
              with the handful of available and flexible alert messages. Alerts
              are available for any length of text, as well as an optional
              dismiss button. Alerts can also contain additional HTML elements
              like headings, paragraphs and dividers.
            </p>
            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/alerts/">
                React Bootstrap Alerts
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/4.6/components/alerts/">
                Bootstrap Alerts
              </Link>
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
              A small count and labeling component. Badges scale to match the
              size of the immediate parent element.
            </p>
            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/badge/">
                React Bootstrap Alerts
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/4.6/components/badge/">
                Bootstrap Badges
              </Link>
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
              <Link to="https://getbootstrap.com/docs/4.6/components/breadcrumb/">
                Bootstrap Breadcrumbs
              </Link>
              .
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Default
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-danger">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Danger
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-dark">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Dark
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-info">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Info
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-light">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Light
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-primary">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Primary
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-secondary">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Secondary
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-success">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
                </li>
                <li aria-current="page" className="breadcrumb-item active">
                  Success
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-warning">
                <li className="breadcrumb-item">
                  <Link to="#breadcrumb">Home</Link>
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
              <Link to="https://getbootstrap.com/docs/4.6/components/buttons/">
                Bootstrap Buttons
              </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/button-group/">
              Bootstrap Button Groups
            </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/card/">
              Bootstrap Cards
            </Link>
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
            series of images, text, or custom markup. It also includes support
            for previous/next controls and indicators.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://react-bootstrap.netlify.app/components/carousel/">
              React Bootstrap Carousel
            </Link>{" "}
            and{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/carousel/">
              Bootstrap Carousel
            </Link>
            .
          </p>
          <Carousel>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjY0NmNmMTEtYjQwZS00N2Y0LWJhOTAtMjUwNmQwMmVlMjNiXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
                alt="Knights that Say “Nee”"
                className="img-fluid d-block w-100"
              />
              <Carousel.Caption>
                “Cut down this entire forest … with a herring.”
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/M/MV5BNDZhYThkNjUtYmM0YS00ZGIzLTk4NmYtZDViMTNhNzBkNDYyXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
                alt="French Knight"
                className="img-fluid d-block w-100"
              />
              <Carousel.Caption>
                “Go away or I will taunt you again a second time!”
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMzQ2NjViMjUtOWEwNi00M2ExLTg3MTUtMDUxMzJjZmIzNmMwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
                alt="Black Knight"
                className="img-fluid d-block w-100"
              />
              <Carousel.Caption>“It’s only a flesh wound.”</Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Display.Heading2 id="collapse" className="mt-5 mb-3">
            Collapse
          </Display.Heading2>
          <p>
            Toggle the visibility of content, optionally in an accordion style.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://react-bootstrap.github.io/utilities/transitions/#collapse">
              React Bootstrap Collapse
            </Link>{" "}
            and{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/collapse/">
              Bootstrap Collapse
            </Link>
            .
          </p>
          <Button
            onClick={() =>
              this.setState({ showCollapse: !this.state.showCollapse })
            }
            aria-controls="example-collapse-text"
            aria-expanded={this.state.showCollapse}
          >
            Show/Hide Content
          </Button>
          <Collapse in={this.state.showCollapse}>
            <div id="example-collapse-text">Now you see me…</div>
          </Collapse>

          <Display.Heading2 id="description-list" className="mt-5 mb-3">
            Description List
          </Display.Heading2>
          <p>
            Align terms and descriptions horizontally. For longer terms, you can
            optionally add a <code>text-truncate</code> class to truncate the
            text with an ellipsis.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://getbootstrap.com/docs/4.6/content/typography/#description-list-alignment">
              Bootstrap Description Lists
            </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/content/figures/">
              Bootstrap Figures
            </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/forms/">
              Bootstrap Forms
            </Link>
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
            Bootstrap’s grid system uses a series of containers, rows, and
            columns to layout and align content.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://getbootstrap.com/docs/4.6/layout/grid/">
              Bootstrap Grid System
            </Link>
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
            where the icon looks helpful and is themed as{" "}
            <code>information</code>. They are useful for providing short
            instructions and quick tips. Info Icons can contain any elements
            supported by <Link to="#popover">popovers</Link> (e.g., paragraphs,
            links, etc., but not blockquotes, description lists, etc.).
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://react-bootstrap.github.io/components/overlays/#popovers">
              React Bootstrap Popovers
            </Link>{" "}
            and{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/popovers/">
              Bootstrap Popovers
            </Link>
            .
          </p>
          <p>
            Hey! Want to know more about Info Icons?!?
            <InfoIcon title="Info Icon Title">
              <p>
                Info Icon body can be pretty fancy, containing{" "}
                <Link to="/">links</Link> and any other elements supported in
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
            <Link to="https://getbootstrap.com/docs/4.6/content/images/">
              Bootstrap Images
            </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/jumbotron/">
              Bootstrap Jumbotron
            </Link>
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
            Ordered/numbered lists (<code>ol</code>) and unordered/bulleted
            lists (<code>ul</code>). You can optionally set the{" "}
            <code>type</code> to <code>unstyled</code> to remove numbers/bullets
            or to <code>inline</code> to stack items horizontally instead of
            vertically.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://getbootstrap.com/docs/4.6/content/typography/#lists">
              Bootstrap Lists
            </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/list-group/">
              Bootstrap List Groups
            </Link>
            .
          </p>
          <h4>List Group Items</h4>
          <div className="list-group mb-3">
            <div className="list-group-item active">active text</div>
            <Link
              to="#list-group"
              className="list-group-item list-group-item-action"
            >
              link
            </Link>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              button
            </button>
            <div className="list-group-item d-flex p-0">
              <Link
                to="#list-group"
                className="list-group-item list-group-item-action rounded-0 flex-grow-1 border-0"
                style={{ marginBottom: "1px" }}
              >
                flex item link with icon links
              </Link>
              <Link
                to="#list-group"
                className="list-group-item list-group-item-action list-group-item-info rounded-0 w-auto border-top-0 border-right-0 border-bottom-0"
              >
                <i aria-label="bootstrap" className="fab fa-bootstrap" />
              </Link>
              <Link
                to="#list-group"
                className="list-group-item list-group-item-action list-group-item-danger rounded-0 w-auto border-top-0 border-right-0 border-bottom-0"
              >
                <i aria-label="heart" className="fas fa-heart" />
              </Link>
            </div>
          </div>
          <h4>List Group List</h4>
          <ul className="list-group mb-3">
            <li className="list-group-item active">active text</li>
            <li className="list-group-item">
              <Link to="#list-group">link</Link>
            </li>
            <li className="list-group-item">text</li>
          </ul>

          <Display.Heading2 id="modal" className="mt-5 mb-3">
            Modal
          </Display.Heading2>
          <p>
            Adds dialogs for lightboxes, user notifications, or completely
            custom content. Basic modals just show/hide static content.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://react-bootstrap.github.io/components/modal/">
              React Bootstrap Modals
            </Link>{" "}
            and{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/modal/">
              Bootstrap Modals
            </Link>
            .
          </p>
          <Button variant="primary" onClick={this.modalShowHandler}>
            Launch demo modal
          </Button>

          <Modal
            show={this.state.showModal}
            onHide={this.modalCloseHandler}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.modalCloseHandler}>
                Close
              </Button>
              <Button variant="primary" onClick={this.modalCloseHandler}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Display.Heading2 id="nav" className="mt-5 mb-3">
            Nav
          </Display.Heading2>
          <p>
            Generic navigation that’s not quite as fancy as a{" "}
            <code>navbar</code>.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/navs/">
              Bootstrap Navs
            </Link>
            .
          </p>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav nav-null">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Tabs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Pills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-danger">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Danger
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-dark">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Dark
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-info">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Info
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-light">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Light
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-primary">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Primary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-secondary">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Secondary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-success">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Success
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Text</div>
              </li>
            </ul>
          </nav>
          <nav aria-label="nav" className="mb-2">
            <ul className="nav bg-warning">
              <li className="nav-item">
                <Link to="#nav" aria-current="page" className="nav-link active">
                  Warning
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#nav" className="nav-link">
                  Page 2
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#nav"
                  disabled
                  aria-disabled="true"
                  tabIndex="-1"
                  className="nav-link disabled"
                >
                  Page 3
                </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/navbar/">
              Bootstrap Navbars
            </Link>
            .
          </p>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Brand Name
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-dark bg-danger navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Danger
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-dark bg-dark navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Dark
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-dark bg-info navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Info
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-light bg-light navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Light
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-dark bg-primary navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Primary
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-dark bg-secondary navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Secondary
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-dark bg-success navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Success
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav
            aria-label="navigation bar"
            className="navbar navbar-light bg-warning navbar-expand-sm mb-2"
          >
            <Link to="#navbar" className="navbar-brand">
              Warning
            </Link>
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
                  <Link
                    to="#navbar"
                    aria-current="page"
                    className="nav-link active"
                  >
                    Page 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#navbar" className="nav-link">
                    Page 2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#navbar"
                    disabled
                    aria-disabled="true"
                    tabIndex="-1"
                    className="nav-link disabled"
                  >
                    Page 3
                  </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/components/pagination/">
              Bootstrap Pagination
            </Link>
            .
          </p>
          <nav aria-label="sample pagination">
            <ul className="pagination">
              <li className="page-item disabled">
                <span className="page-link">
                  <i
                    aria-label="previous"
                    className="fas fa-angle-double-left"
                  />
                </span>
              </li>
              <li className="page-item">
                <Link to="#pagination" className="page-link">
                  1
                </Link>
              </li>
              <li aria-current="page" className="page-item active">
                <span className="page-link">
                  2<span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item">
                <Link to="#pagination" className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item disabled">
                <span className="page-link">Text</span>
              </li>
              <li className="page-item">
                <Link to="#pagination" className="page-link">
                  <i aria-label="next" className="fas fa-angle-double-right" />
                </Link>
              </li>
            </ul>
          </nav>

          <Display.Heading2 id="popover" className="mt-5 mb-3">
            Popover
          </Display.Heading2>
          <p>
            A message which appears when a user clicks on a control button or
            within a defined area. These are considered more mobile-friendly
            than the <code>tooltip</code> since not all devices support a
            “hover” feature.
          </p>
          <p>
            For more information, see{" "}
            <Link to="https://react-bootstrap.github.io/components/overlays/#popovers">
              React Bootstrap Popovers
            </Link>{" "}
            and{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/popovers/">
              Bootstrap Popovers
            </Link>
            .
          </p>
          <OverlayTrigger
            trigger="click"
            overlay={
              <Popover>
                <Popover.Title as="h3">Popover Title</Popover.Title>
                <Popover.Content>
                  And here’s some <strong>amazing</strong> content. It’s{" "}
                  <em>very</em> engaging. Right?
                </Popover.Content>
              </Popover>
            }
            rootClose
          >
            <Button variant="link" className="p-0">
              Click to toggle popover
            </Button>
          </OverlayTrigger>

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
            <Link to="https://getbootstrap.com/docs/4.6/components/progress/">
              Bootstrap Progress
            </Link>
            .
          </p>
          <ProgressBar now={40} style={{ height: "1px" }} label="40%" srOnly />
          {[
            { variant: null, value: Math.floor(Math.random() * 60) + 41 },
            { variant: "danger", value: Math.floor(Math.random() * 60) + 41 },
            { variant: "dark", value: Math.floor(Math.random() * 60) + 41 },
            { variant: "info", value: Math.floor(Math.random() * 60) + 41 },
            { variant: "light", value: Math.floor(Math.random() * 60) + 41 },
            { variant: "primary", value: Math.floor(Math.random() * 60) + 41 },
            {
              variant: "secondary",
              value: Math.floor(Math.random() * 60) + 41,
            },
            { variant: "success", value: Math.floor(Math.random() * 60) + 41 },
            { variant: "warning", value: Math.floor(Math.random() * 60) + 41 },
          ].map((bar) => (
            <>
              <ProgressBar
                variant={bar.variant}
                now={bar.value}
                label={`${bar.value}%`}
                className="mt-2"
              />
              <ProgressBar
                variant={bar.variant}
                striped
                now={bar.value}
                label={`${bar.value}%`}
                className="mt-2"
              />
            </>
          ))}

          <Display.Heading2 id="spinner" className="mt-5 mb-3">
            Spinner
          </Display.Heading2>
          <p>Indicate the loading state of a component or page.</p>
          <p>
            For more information, see{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/spinners/">
              Bootstrap Spinners
            </Link>
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
            <Link to="https://getbootstrap.com/docs/4.6/content/tables/">
              Bootstrap Tables
            </Link>
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
              <caption
                className="bg-danger px-2"
                style={{ captionSide: "top" }}
              >
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
              <caption
                className="bg-primary px-2"
                style={{ captionSide: "top" }}
              >
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
              <caption
                className="bg-success px-2"
                style={{ captionSide: "top" }}
              >
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
              <caption
                className="bg-warning px-2"
                style={{ captionSide: "top" }}
              >
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
            <Link to="https://react-bootstrap.github.io/components/overlays/#tooltips">
              React Bootstrap Tooltips
            </Link>{" "}
            and{" "}
            <Link to="https://getbootstrap.com/docs/4.6/components/tooltips/">
              Bootstrap Tooltips
            </Link>
            .
          </p>
          <OverlayTrigger
            trigger="click"
            overlay={
              <Tooltip placement="top">
                Tooltip on <strong>top</strong>.
              </Tooltip>
            }
            rootClose
          >
            <Button variant="link" className="p-0">
              Button with tooltip
            </Button>
          </OverlayTrigger>

          <Display.Heading2 id="typography" className="mt-5 mb-3">
            Typography
          </Display.Heading2>
          <p>Headings, body text, block quotes, links, and more.</p>
          <p>
            For more information, see{" "}
            <Link to="https://getbootstrap.com/docs/4.6/content/typography/">
              Bootstrap Typography
            </Link>
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
            “The <Link to="#typography">quick brown fox</Link> jumps over the
            ‘lazy’ dog …” 0123456789 Il1 bdpq rnm cld
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</p>
          <p>
            “The <Link to="#typography">quick brown fox</Link> jumps over the
            ‘lazy’ dog …” 0123456789 Il1 bdpq rnm cld
          </p>
          <Blockquote>
            <p>
              Success, meaningful success, begins when we take ownership and
              actively take responsibility for our part in the shortcomings of
              our life.
            </p>
            <Blockquote.Footer>
              Dr Eric Thomas,{" "}
              <cite>Greatness Is Upon You: Laying the Foundation</cite>
            </Blockquote.Footer>
          </Blockquote>
          <Blockquote className="text-center">
            <p>
              Success, meaningful success, begins when we take ownership and
              actively take responsibility for our part in the shortcomings of
              our life.
            </p>
            <Blockquote.Footer>
              Dr Eric Thomas,{" "}
              <cite>Greatness Is Upon You: Laying the Foundation</cite>
            </Blockquote.Footer>
          </Blockquote>
          <Blockquote className="text-right">
            <p>
              Success, meaningful success, begins when we take ownership and
              actively take responsibility for our part in the shortcomings of
              our life.
            </p>
            <Blockquote.Footer>
              Dr Eric Thomas,{" "}
              <cite>Greatness Is Upon You: Laying the Foundation</cite>
            </Blockquote.Footer>
          </Blockquote>
        </div>

        <ScrollToTop />
      </>
    );
  };
}
