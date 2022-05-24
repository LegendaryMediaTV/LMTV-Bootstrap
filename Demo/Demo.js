// dependencies
import React from "react";

// React Bootstrap components
import Badge from "react-bootstrap/Badge";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Tooltip from "react-bootstrap/Tooltip";

// LegendaryMediaTV components
import Alert from "../Alert";
import Blockquote from "../Blockquote";
import Breakpoint from "../Breakpoint";
import Display from "../Display";
import Icon from "../Icon";
import InfoIcon from "../InfoIcon";
import Link from "../Link";
import ListGroup from "../ListGroup";
import Pagination from "../Pagination";
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
    const variants = [
      "Danger",
      "Dark",
      "Info",
      "Light",
      "Primary",
      "Secondary",
      "Success",
      "Warning",
    ];

    const bgVariants = ["", ...variants];

    const btnVariants = [...variants, "Link"].sort();

    // TODO: make this use React Bootstrap instead of native HTML
    return (
      <>
        <Nav variant="tabs" className="mt-3 mb-5">
          {[
            { _id: "home", title: "Home", url: "/" },
            { _id: "alert", title: "Alert" },
            { _id: "badge", title: "Badge" },
            { _id: "breadcrumb", title: "Breadcrumb" },
            { _id: "button", title: "Button" },
            { _id: "button-group", title: "Button Group" },
            { _id: "card", title: "Card" },
            { _id: "carousel", title: "Carousel" },
            { _id: "collapse", title: "Collapse" },
            { _id: "description-list", title: "Description List" },
            { _id: "figure", title: "Figure" },
            { _id: "form", title: "Form" },
            { _id: "grid-layout", title: "Grid Layout" },
            { _id: "info-icon", title: "Info Icon" },
            { _id: "image", title: "Image" },
            { _id: "list", title: "List" },
            { _id: "list-group", title: "List Group" },
            { _id: "modal", title: "Modal" },
            { _id: "nav", title: "Nav" },
            { _id: "navbar", title: "Navbar" },
            { _id: "pagination", title: "Pagination" },
            { _id: "popover", title: "Popover" },
            { _id: "progress-bars", title: "Progress Bars" },
            { _id: "spinner", title: "Spinner" },
            { _id: "table", title: "Table" },
            { _id: "tooltip", title: "Tooltip" },
            { _id: "typography", title: "Typography" },
          ].map((item) => (
            <Nav.Item key={item._id}>
              <Nav.Link as={Link} to={item.url ? item.url : `#${item._id}`}>
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Container fluid="lg">
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
              <Link to="https://getbootstrap.com/docs/5.1/components/alerts/">
                Bootstrap Alerts
              </Link>
              .
            </p>

            {variants.map((variant) => (
              <Alert
                variant={variant.toLowerCase()}
                dismissible
                onClose={() => alert("insert your dismiss logic here")}
                key={variant}
              >
                <Alert.Heading>{variant}</Alert.Heading>
                This alert has a link—
                <Alert.Link to="#">check it out!</Alert.Link>
              </Alert>
            ))}

            <Alert title="Alert Title" subtitle="Alert Subtitle">
              Alert Children
            </Alert>
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
                React Bootstrap Badges
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/badge/">
                Bootstrap Badges
              </Link>
              .
            </p>

            {variants.map((variant) => (
              <h3 key={variant}>
                <Badge pill bg={variant.toLowerCase()}>
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
              <Link to="https://react-bootstrap.github.io/components/breadcrumb/">
                React Bootstrap Breadcrumbs
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/breadcrumb/">
                Bootstrap Breadcrumbs
              </Link>
              .
            </p>

            {bgVariants.map((variant) => (
              <Breadcrumb
                className={variant ? `bg-${variant.toLowerCase()}` : null}
                key={variant}
              >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{variant || "Default"}</Breadcrumb.Item>
              </Breadcrumb>
            ))}
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
              <Link to="https://react-bootstrap.github.io/components/buttons/">
                React Bootstrap Buttons
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/buttons/">
                Bootstrap Buttons
              </Link>
              .
            </p>

            {btnVariants.map((variant) => (
              <div className="mb-3" key={variant}>
                <Button variant={variant.toLowerCase()} className="me-1 mb-1">
                  {variant}
                </Button>

                <Button variant={variant.toLowerCase()} className="me-1 mb-1">
                  <Icon name="fa-solid fa-camera" />
                </Button>

                <Button
                  variant={variant.toLowerCase()}
                  active
                  className="me-1 mb-1"
                >
                  Active (prop)
                </Button>

                <Button
                  variant={variant.toLowerCase()}
                  className="active me-1 mb-1"
                >
                  Active (class)
                </Button>

                <Button
                  disabled
                  variant={variant.toLowerCase()}
                  className="me-1 mb-1"
                >
                  Disabled (prop)
                </Button>

                <Button
                  variant={variant.toLowerCase()}
                  className="disabled mb-1"
                >
                  Disabled (class)
                </Button>
              </div>
            ))}
          </section>

          <section id="button" className="mt-5">
            <Display.Heading2 id="button-group" className="mb-3">
              Button Group
            </Display.Heading2>

            <p>
              Group a series of buttons together on a single line or stacked
              vertically. These are often used as toolbars. Any action by these
              is usually handled via JavaScript events either defined on the
              button directly or assigned when the page loads.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/button-group/">
                React Bootstrap Button Groups
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/button-group/">
                Bootstrap Button Groups
              </Link>
              .
            </p>

            <Row className="mb-4">
              {btnVariants.map((variant) => (
                <Col xs={6} md={4} xl={2} className="mb-1" key={variant}>
                  <ButtonGroup
                    size="lg"
                    vertical
                    aria-label={`group of ${variant} buttons`}
                  >
                    <Button variant={variant.toLowerCase()}>{variant} 1</Button>
                    <Button variant={variant.toLowerCase()}>{variant} 2</Button>
                    <Button variant={variant.toLowerCase()}>{variant} 3</Button>
                  </ButtonGroup>
                </Col>
              ))}
            </Row>

            {btnVariants.map((variant) => (
              <ButtonToolbar
                aria-label="sample toolbar"
                className="justify-content-between mb-1"
                key={variant}
              >
                <ButtonGroup aria-label="first group of buttons">
                  <Button variant={variant.toLowerCase()}>{variant} 1</Button>
                  <Button variant={variant.toLowerCase()}>{variant} 2</Button>
                  <Button variant={variant.toLowerCase()}>{variant} 3</Button>
                </ButtonGroup>

                <ButtonGroup aria-label="second group of buttons">
                  <Button variant={variant.toLowerCase()}>{variant} 4</Button>
                  <Button variant={variant.toLowerCase()}>{variant} 5</Button>
                </ButtonGroup>

                <InputGroup>
                  <InputGroup.Text
                    className={`bg-${variant.toLowerCase()} border-${variant.toLowerCase()}`}
                  >
                    $
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="all your monies"
                    className={`border-${variant.toLowerCase()}`}
                  />
                  <InputGroup.Text
                    className={`bg-${variant.toLowerCase()} border-${variant.toLowerCase()}`}
                  >
                    .00
                  </InputGroup.Text>
                </InputGroup>
              </ButtonToolbar>
            ))}
          </section>

          <section id="card" className="mt-5">
            <Display.Heading2 className="mb-3">Card</Display.Heading2>

            <p>
              Provides a flexible and extensible content container, divided into
              several optional sections as follows: header, top image, body
              (includes title and subtitle), bottom image, and footer.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/cards/">
                React Bootstrap Cards
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/card/">
                Bootstrap Cards
              </Link>
              .
            </p>

            <Row>
              {bgVariants.map((variant) => (
                <Col xs={12} sm={6} md={4} className="mb-3" key={variant}>
                  <Card bg={variant.toLowerCase()}>
                    <Card.Header>
                      <h3>{variant || "Default"}</h3>
                    </Card.Header>

                    <Card.Img
                      src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
                      alt="Tim, the goat man"
                      variant="top"
                    />

                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>

                      <Card.Subtitle>Card Subtitle</Card.Subtitle>

                      <Card.Text>Sample card text</Card.Text>
                    </Card.Body>

                    <Card.Footer>Card Footer</Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section id="carousel" className="mt-5">
            <Display.Heading2 className="mb-3">Carousel</Display.Heading2>

            <p>
              A slideshow for cycling through a series of content. It works with
              a series of images, text, or custom markup. It also includes
              support for previous/next controls and indicators.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/carousel/">
                React Bootstrap Carousel
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/carousel/">
                Bootstrap Carousel
              </Link>
              .
            </p>

            <Carousel>
              {[
                {
                  url: "https://m.media-amazon.com/images/M/MV5BMjY0NmNmMTEtYjQwZS00N2Y0LWJhOTAtMjUwNmQwMmVlMjNiXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg",
                  alt: "Knights that Say “Nee”",
                  caption: "“Cut down this entire forest … with a herring.”",
                },
                {
                  url: "https://m.media-amazon.com/images/M/MV5BNDZhYThkNjUtYmM0YS00ZGIzLTk4NmYtZDViMTNhNzBkNDYyXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg",
                  alt: "French Knight",
                  caption: "“Go away or I will taunt you again a second time!”",
                },
                {
                  url: "https://m.media-amazon.com/images/M/MV5BMzQ2NjViMjUtOWEwNi00M2ExLTg3MTUtMDUxMzJjZmIzNmMwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg",
                  alt: "Black Knight",
                  caption: "“It’s only a flesh wound.”",
                },
              ].map((item) => (
                <Carousel.Item key={item.url}>
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="d-block w-100"
                  />

                  <Carousel.Caption>{item.caption}</Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </section>

          <section id="collapse" className="mt-5">
            <Display.Heading2 className="mb-3">Collapse</Display.Heading2>

            <p>
              Toggle the visibility of content, optionally in an accordion
              style.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/utilities/transitions/#collapse">
                React Bootstrap Collapse
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/collapse/">
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
          </section>

          <section id="description-list" className="mt-5">
            <Display.Heading2 className="mb-3">
              Description List
            </Display.Heading2>

            <p>
              Align terms and descriptions horizontally. For longer terms, you
              can optionally add a <code>text-truncate</code> class to truncate
              the text with an ellipsis.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://getbootstrap.com/docs/5.1/content/typography/#description-list-alignment">
                Bootstrap Description Lists
              </Link>
              .
            </p>

            <Row as="dl">
              {[
                { term: "Ray", value: "husband" },
                { term: "Krystal", value: "wife" },
                { term: "Abigail", value: "pug" },
                { term: "Garfield", value: "cat" },
              ].map((item) => (
                <React.Fragment key={item.term}>
                  <Col as="dt" sm={3}>
                    {item.term}
                  </Col>

                  <Col as="dd" sm={9}>
                    {item.value}
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </section>

          <section id="figure" className="mt-5">
            <Display.Heading2 className="mb-3">Figure</Display.Heading2>

            <p>An image with an optional caption.</p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/figures/">
                React Bootstrap Figures
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/content/figures/">
                Bootstrap Figures
              </Link>
              .
            </p>

            <div className="text-center">
              <Figure>
                <Figure.Image
                  src="https://m.media-amazon.com/images/M/MV5BZTQzMGRlY2EtOTY5Yy00M2E1LTgzMzYtZDM1MjQ1YjdhNzkwXkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg"
                  alt="nameless knight and Arthur"
                />

                <Figure.Caption>
                  some “Red Shirt” standing with King Arthur
                </Figure.Caption>
              </Figure>
            </div>
          </section>

          <section id="form" className="mt-5">
            <Display.Heading2 className="mb-3">Form</Display.Heading2>

            <p>
              Form control styles, layout options, and custom components for
              creating a wide variety of forms. Besides spiffied up standard
              input elements (including optionally turning a checkbox into a
              toggle switch), there are also input groups (prefix/suffix an
              input element with text and/or icons), form rows (format the form
              into rows/columns), and form groups (add labels to inputs).
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/forms/">
                React Bootstrap Forms
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/forms/">
                Bootstrap Forms
              </Link>
              .
            </p>

            <h3>Input</h3>

            <section>
              <Form.Control
                name="plain"
                defaultValue="plain text input"
                plaintext
              />

              <Form.Control
                name="readonly"
                defaultValue="read-only input"
                readOnly
                className="mt-2"
              />

              <Form.Control
                name="amount"
                min={0}
                max={9001}
                placeholder="amount of things, stuff, and what have you"
                size="lg"
                className="mt-2"
              />

              <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
                className="mt-2"
              />

              <Form.Check
                name="terms"
                label="Agree to terms?"
                className="mt-2"
              />

              <Form.Check
                name="beastmode"
                type="switch"
                label="beastmode"
                defaultChecked
                className="mt-2"
              />

              <div className="mt-2">
                <Form.Check
                  type="radio"
                  name="agree"
                  value="true"
                  label="agree"
                />

                <Form.Check
                  type="radio"
                  name="agree"
                  value="false"
                  label="disagree"
                />
              </div>

              <Form.Select name="options" className="mt-2">
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
              </Form.Select>

              <Button type="submit" className="mt-2">
                Submit
              </Button>
            </section>

            <h3 className="mt-4">Input group</h3>

            <section>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>

                <Form.Control name="monies" placeholder="all your monies" />

                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>

              {bgVariants.map((variant) => (
                <InputGroup size="lg" className="mt-2" key={variant}>
                  <InputGroup.Text
                    className={variant ? `bg-${variant.toLowerCase()}` : null}
                  >
                    <Icon name="fa-solid fa-camera" />
                  </InputGroup.Text>

                  <Form.Control
                    name={variant.toLowerCase() || "default"}
                    placeholder={variant || "Default"}
                  />
                </InputGroup>
              ))}
            </section>

            <h3 className="mt-4">Form group</h3>

            <Form.Group method="post" controlId="sampleFormGroup">
              <Form.Label>City</Form.Label>

              <Form.Control
                name="city"
                placeholder="click “City” above to select this textbox"
              />
            </Form.Group>
          </section>
        </Container>

        <section id="grid-layout" className="mt-5">
          <Container fluid="lg">
            <Display.Heading2 className="mt-5 mb-3">
              Grid Layout
            </Display.Heading2>

            <p>
              Bootstrap’s grid system uses a series of containers, rows, and
              columns to layout and align content.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/layout/grid/">
                React Bootstrap Grid System
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/layout/grid/">
                Bootstrap Grid System
              </Link>
              .
            </p>
          </Container>

          <Container fluid>
            <Breakpoint className="mb-2 py-1 text-center" />

            {[...Array(3).keys()].map((rowIndex) => (
              <Row key={rowIndex}>
                {[...Array(12).keys()].map((colIndex) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    xxl="1"
                    key={colIndex}
                  >
                    R{rowIndex + 1}C{colIndex + 1}
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
        </section>

        <Container fluid="lg">
          <section id="info-icon" className="mt-5">
            <Display.Heading2 className="mb-3">Info Icon</Display.Heading2>

            <p>
              Info Icons are basically just a popover-enabled <code>icon</code>,
              where the icon looks helpful and is themed as{" "}
              <code>information</code>. They are useful for providing short
              instructions and quick tips. Info Icons can contain any elements
              supported by <Link to="#popover">popovers</Link> (e.g.,
              paragraphs, links, etc., but not blockquotes, description lists,
              etc.).
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://github.com/LegendaryMediaTV/LMTV-Bootstrap#infoicon">
                LegendaryMediaTV Bootstrap Info Icons
              </Link>
              ,{" "}
              <Link to="https://react-bootstrap.github.io/components/overlays/#popovers">
                React Bootstrap Popovers
              </Link>
              , and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/popovers/">
                Bootstrap Popovers
              </Link>
              .
            </p>

            <p>
              Hey! Want to know more about Info Icons?!?
              <InfoIcon title="Info Icon Title">
                <p className="mb-0">
                  Info Icon body can be pretty fancy, containing{" "}
                  <Link to="/">links</Link> and any other elements supported in
                  popovers!
                </p>
              </InfoIcon>
            </p>
          </section>

          <section id="image" className="mt-5">
            <Display.Heading2 className="mb-3">Image</Display.Heading2>

            <p>Responsive (mobile-friendly) images and thumbnails.</p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/images/">
                React Bootstrap Images
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/content/images/">
                Bootstrap Images
              </Link>
              .
            </p>

            <h3 className="mt-4">Fluid image</h3>

            <Image
              src="https://m.media-amazon.com/images/M/MV5BN2I5NGEyMTYtYTNjMC00YTBhLWE1NjYtYWNhM2I2ODMyZTEzXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
              alt="cartoon scribe"
              fluid
            />

            <h3 className="mt-3">Thumbnail</h3>

            <div className="text-center">
              <Image
                src="https://m.media-amazon.com/images/M/MV5BMmFlYWI1MTUtYjBhZC00ZjlkLWE1MDQtZDIzNzNlNTdiZjE5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,660,1000_AL_.jpg"
                alt="“Monty Python and the Holy Grail” movie poster"
                thumbnail
              />
            </div>
          </section>

          <section id="list" className="mt-5">
            <Display.Heading2 className="mb-3">List</Display.Heading2>

            <p>
              Ordered/numbered lists (<code>ol</code>) and unordered/bulleted
              lists (<code>ul</code>). You can optionally set the{" "}
              <code>type</code> to <code>unstyled</code> to remove
              numbers/bullets or to <code>inline</code> to stack items
              horizontally instead of vertically.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://getbootstrap.com/docs/5.1/content/typography/#lists">
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
          </section>

          <section id="list-group" className="mt-5">
            <Display.Heading2 className="mb-3">List Group</Display.Heading2>

            <p>
              List groups are a flexible and powerful component for displaying a
              series of content.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://github.com/LegendaryMediaTV/LMTV-Bootstrap#listgroup">
                LegendaryMediaTV List Groups
              </Link>
              ,{" "}
              <Link to="https://react-bootstrap.github.io/components/images/">
                React Bootstrap List Groups
              </Link>
              , and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/list-group/">
                Bootstrap List Groups
              </Link>
              .
            </p>

            <h4>List Group</h4>

            <ListGroup className="mb-3">
              <ListGroup.Item active>active text</ListGroup.Item>

              <ListGroup.Item to={"#list-group"}>
                actionable link
              </ListGroup.Item>

              <ListGroup.Item onClick={() => alert("things, stuff, activity!")}>
                actionable button
              </ListGroup.Item>

              <ListGroup.Item
                to="#list-group"
                subactions={[
                  {
                    to: "#list-group",
                    variant: "info",
                    children: (
                      <Icon name="fa-brands fa-bootstrap" alt="Bootstrap" />
                    ),
                  },
                  {
                    to: "#list-group",
                    variant: "danger",
                    children: <Icon name="fa-solid fa-heart" />,
                  },
                ]}
              >
                item link with icon subactions
              </ListGroup.Item>
            </ListGroup>

            <h4>List Group List</h4>

            <ListGroup as="ul" className="mb-3">
              <ListGroup.Item as="li" active>
                active text
              </ListGroup.Item>

              <ListGroup.Item as="li">
                <Link to={"#list-group"}>link</Link>
              </ListGroup.Item>

              <ListGroup.Item as="li">text</ListGroup.Item>

              <ListGroup.Item as="li" disabled>
                disabled
              </ListGroup.Item>
            </ListGroup>

            <h4>List Group with Items Property</h4>

            <ListGroup
              title="Array of Objects with Links"
              items={[
                { title: "Sample Link 1", url: "#list-group" },
                {
                  title: "Sample Link 2",
                  subtitle: "additional information in a subtitle",
                  url: "#list-group",
                },
              ]}
            />
          </section>

          <section id="modal" className="mt-5">
            <Display.Heading2 className="mb-3">Modal</Display.Heading2>

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
              <Link to="https://getbootstrap.com/docs/5.1/components/modal/">
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
              <Modal.Header closeButton closeVariant="white">
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
          </section>

          <section id="nav" className="mt-5">
            <Display.Heading2 className="mb-3">Nav</Display.Heading2>

            <p>
              Generic navigation that’s not quite as fancy as a{" "}
              <code>navbar</code>.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/navs/">
                React Bootstrap Navs
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/navs/">
                Bootstrap Navs
              </Link>
              .
            </p>

            {["Tabs", "Pills"].map((variant) => (
              <Nav
                as="ul"
                variant={variant.toLowerCase()}
                className="mb-2"
                key={variant}
              >
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#nav" active>
                    {variant}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#nav">
                    Page 1
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#nav">
                    Page 2
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            ))}

            {bgVariants.map((variant) => (
              <Nav
                as="ul"
                defaultActiveKey="home"
                variant={variant.toLowerCase()}
                className={`bg-${variant.toLowerCase()} mb-2`}
                key={variant}
              >
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#nav" eventKey="home">
                    {variant || "Default"}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#nav" eventKey="page-1">
                    Page 1
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link as={Link} to="#nav" eventKey="page-2">
                    Page 2
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            ))}
          </section>

          <section id="navbar" className="mt-5">
            <Display.Heading2 className="mb-3">Navbar</Display.Heading2>

            <p>
              A responsive navigation header, which includes support for
              branding (i.e., usually containing the company/product/project
              name and/or logo), navigation, collapsing, and more.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/navbar/">
                React Bootstrap Navbars
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/navbar/">
                Bootstrap Navbars
              </Link>
              .
            </p>

            {bgVariants.map((variant) => (
              <Navbar
                expand="md"
                bg={variant.toLowerCase()}
                variant={
                  !variant
                    ? null
                    : variant === "Light" || variant === "Warning"
                    ? "light"
                    : "dark"
                }
                className="mb-2"
                key={variant}
              >
                <Navbar.Brand as={Link} to="#navbar">
                  {variant || "Default"}
                </Navbar.Brand>

                <Navbar.Toggle
                  aria-controls={`navbar-nav-${variant || "Default"}`}
                >
                  <Icon name="fa-solid fa-bars" alt="menu bars" />
                </Navbar.Toggle>

                <Navbar.Collapse id={`navbar-nav-${variant || "Default"}`}>
                  <Nav as="ul">
                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#nav" active>
                        Active
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#nav">
                        Page 1
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="#nav">
                        Page 2
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                      <Nav.Link eventKey="disabled" disabled>
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            ))}
          </section>

          <section id="pagination" className="mt-5">
            <Display.Heading2 className="mb-3">Pagination</Display.Heading2>

            <p>
              Indicates a series of related content exists across multiple
              pages.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/pagination/">
                React Bootstrap Pagination
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/pagination/">
                Bootstrap Pagination
              </Link>
              .
            </p>

            <Pagination>
              <Pagination.First to="#pagination" />
              <Pagination.Prev to="#pagination" />

              <Pagination.Item to="#pagination">1</Pagination.Item>

              <Pagination.Ellipsis />

              <Pagination.Item to="#pagination">10</Pagination.Item>
              <Pagination.Item to="#pagination" active>
                11
              </Pagination.Item>
              <Pagination.Item
                to="#pagination"
                onClick={() => {
                  alert("you clicked page 12");
                }}
              >
                12
              </Pagination.Item>
              <Pagination.Item disabled>13</Pagination.Item>

              <Pagination.Ellipsis disabled />

              <Pagination.Next to="#pagination" />
              <Pagination.Last to="#pagination" />
            </Pagination>

            <Pagination>
              <Pagination.First to="#pagination">
                <Icon name="fa-solid fa-angles-left" />
              </Pagination.First>
              <Pagination.Prev to="#pagination">
                <Icon name="fa-solid fa-angle-left" />
              </Pagination.Prev>

              <Pagination.Item to="#pagination">1</Pagination.Item>

              <Pagination.Ellipsis>
                <Icon name="fa-solid fa-ellipsis" alt="more" />
              </Pagination.Ellipsis>

              <Pagination.Item to="#pagination">10</Pagination.Item>
              <Pagination.Item to="#pagination" active>
                11
              </Pagination.Item>
              <Pagination.Item
                onClick={() => {
                  alert("you clicked page 12");
                }}
              >
                12
              </Pagination.Item>
              <Pagination.Item disabled>13</Pagination.Item>

              <Pagination.Ellipsis disabled>
                <Icon name="fa-solid fa-ellipsis" alt="more" />
              </Pagination.Ellipsis>

              <Pagination.Next to="#pagination">
                <Icon name="fa-solid fa-angle-right" />
              </Pagination.Next>
              <Pagination.Last to="#pagination">
                <Icon name="fa-solid fa-angles-right" />
              </Pagination.Last>
            </Pagination>
          </section>

          <section id="popover" className="mt-5">
            <Display.Heading2 className="mb-3">Popover</Display.Heading2>

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
              <Link to="https://getbootstrap.com/docs/5.1/components/popovers/">
                Bootstrap Popovers
              </Link>
              .
            </p>

            <OverlayTrigger
              trigger="click"
              overlay={
                <Popover>
                  <Popover.Header as="h3">Popover Header</Popover.Header>

                  <Popover.Body>
                    And here’s some <strong>amazing</strong> content. It’s{" "}
                    <em>very</em> engaging. Right?
                  </Popover.Body>
                </Popover>
              }
              rootClose
            >
              <Button variant="link" className="p-0">
                Click to toggle popover
              </Button>
            </OverlayTrigger>
          </section>

          <section id="progress-bars" className="mt-5">
            <Display.Heading2 className="mb-3">Progress Bars</Display.Heading2>

            <p>
              Progress bars featuring support for stacked bars, animated
              backgrounds, and text labels. They can either be static (e.g.,
              form progress across multiple pages) or made dynamic with
              JavaScript.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/progress/">
                React Bootstrap Progress Bars
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/progress/">
                Bootstrap Progress Bars
              </Link>
              .
            </p>

            {bgVariants.map((variant) => {
              const progressValue = Math.floor(Math.random() * 60) + 36;

              return (
                <React.Fragment key={variant}>
                  <ProgressBar
                    now={progressValue}
                    style={{ height: "1px" }}
                    label={`${progressValue}%`}
                    visuallyHidden
                    variant={variant.toLowerCase()}
                    className="mt-2"
                  />

                  <ProgressBar
                    now={progressValue}
                    label={`${variant || "Default"} ${progressValue}%`}
                    variant={variant.toLowerCase()}
                    className="mt-2"
                  />

                  <ProgressBar
                    now={progressValue}
                    label={`${variant || "Default"} ${progressValue}%`}
                    variant={variant.toLowerCase()}
                    striped
                    className="mt-2"
                  />
                </React.Fragment>
              );
            })}
          </section>

          <section id="spinner" className="mt-5">
            <Display.Heading2 className="mt-5 mb-3">Spinner</Display.Heading2>

            <p>Indicate the loading state of a component or page.</p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/spinners/">
                React Bootstrap Spinners
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/spinners/">
                Bootstrap Spinners
              </Link>
              .
            </p>

            {bgVariants.map((variant) => (
              <h3 key={variant}>
                {variant || "Default"}:
                <Spinner variant={variant.toLowerCase()} className="ms-2" />
                <Spinner
                  animation="grow"
                  variant={variant.toLowerCase()}
                  className="ms-2"
                />
                <Button
                  variant={variant.toLowerCase() || "link"}
                  className="ms-2"
                >
                  <Spinner size="sm" />
                </Button>
                <Button
                  variant={variant.toLowerCase() || "link"}
                  className="ms-2"
                >
                  Loading … <Spinner size="sm" />
                </Button>
              </h3>
            ))}

            <Spinner
              title="Reticulating splines …"
              variant="primary"
              className="mt-3"
            />
          </section>

          <section id="table" className="mt-5">
            <Display.Heading2 className="mb-3">Table</Display.Heading2>

            <p>
              Tabular data with table header, data rows/columns, table footer,
              and table caption.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.netlify.app/components/table/">
                React Bootstrap Tables
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/content/tables/">
                Bootstrap Tables
              </Link>
              .
            </p>

            {bgVariants.map((variant) => (
              <Table bordered hover striped responsive key={variant}>
                <caption
                  className={`${
                    variant ? `bg-${variant.toLowerCase()} ` : ""
                  }caption-top px-2`}
                >
                  <h3>{variant || "Default"}</h3>
                </caption>

                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>

                <tbody>
                  {[...Array(5).keys()].map((rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowIndex + 1}</td>
                      <td>Data {rowIndex + 1}</td>
                      <td>{Math.floor(Math.random() * 60) + 36}</td>
                    </tr>
                  ))}
                </tbody>

                <tfoot
                  className={variant ? `bg-${variant.toLowerCase()}` : null}
                >
                  <tr>
                    <td colSpan="3">Well that’s a fancy footer!</td>
                  </tr>
                </tfoot>
              </Table>
            ))}
          </section>

          <section id="tooltip" className="mt-5">
            <Display.Heading2 className="mb-3">Tooltip</Display.Heading2>

            <p>
              A message which appears when a cursor is positioned over an icon,
              image, hyperlink, or other element. These are considered less
              mobile-friendly than the <code>popover</code> since not all
              devices support a “hover” feature.
            </p>

            <p>
              For more information, see{" "}
              <Link to="https://react-bootstrap.github.io/components/overlays/#tooltips">
                React Bootstrap Tooltips
              </Link>{" "}
              and{" "}
              <Link to="https://getbootstrap.com/docs/5.1/components/tooltips/">
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
          </section>

          <section id="typography" className="mt-5">
            <Display.Heading2 className="mb-3">Typography</Display.Heading2>

            <p>Headings, body text, block quotes, links, and more.</p>

            <p>
              For more information, see{" "}
              <Link to="https://getbootstrap.com/docs/5.1/content/typography/">
                Bootstrap Typography
              </Link>
              .
            </p>

            <Display.Heading1>Display 1</Display.Heading1>
            <Display.Heading2>Display 2</Display.Heading2>
            <Display.Heading3>Display 3</Display.Heading3>
            <Display.Heading4>Display 4</Display.Heading4>
            <Display.Heading5>Display 5</Display.Heading5>
            <Display.Heading6>Display 6</Display.Heading6>

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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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

            <Blockquote className="text-end">
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
          </section>
        </Container>

        <ScrollToTop />
      </>
    );
  };
}
