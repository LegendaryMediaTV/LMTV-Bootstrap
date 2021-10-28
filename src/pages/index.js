// dependencies
import React from "react";

// components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../components/Layout";
import Nav from "react-bootstrap/Nav";

// LegendaryMediaTV functions
import { formData } from "../../functions";

// LegendaryMediaTV components
import Alert from "../../Alert";
import BackgroundImage from "../../BackgroundImage";
import Blockquote from "../../Blockquote";
import Breakpoint from "../../Breakpoint";
import DatePicker from "../../DatePicker";
import Display from "../../Display";
import Flipper from "../../Flipper";
import FormGroup from "../../FormGroup";
import InfoIcon from "../../InfoIcon";
import Icon from "../../Icon";
import Link from "../../Link";
import ListGroup from "../../ListGroup";
import Pagination from "../../Pagination";
import ScrollToTop from "../../ScrollToTop";
import { scrollToTopHandler } from "../../ScrollToTop";
import Spinner from "../../Spinner";

export default class HomePage extends React.Component {
  state = { flipped: false, date: null };

  flipHandler = (event) => {
    event.preventDefault();

    this.setState({ flipped: !this.state.flipped });
  };

  dateHandler = (selected) => {
    this.setState({ date: selected });
  };

  render = () => {
    const linkArray = ["/demo", "/full-page"];

    const linkObjects = [
      { title: "Test Link", url: "/" },
      {
        title: "Sample Link",
        subtitle: "additional information in a subtitle",
        url: "/demo",
      },
    ];

    const objectArray = [
      { id: 1, title: "Test Non-Link" },
      { id: 2, title: "Sample Non-Link" },
    ];

    const submitHandler = (event) => {
      // don't traditionally submit the form
      event.preventDefault();

      // extract the data from the form
      const data = formData(event.target);

      // display the form data object
      alert(JSON.stringify(data, null, 4));
    };

    const sampleHandler = (itemSelected) => {
      alert(JSON.stringify(itemSelected, null, 4));
    };

    return (
      <Layout title="Bootstrap Components">
        <Nav as="ul" variant="pills" className="mb-2">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/" active>
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/demo">
              Demo
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link as={Link} to="/full-page">
              Full Page
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <BackgroundImage
          src="https://m.media-amazon.com/images/M/MV5BN2I5NGEyMTYtYTNjMC00YTBhLWE1NjYtYWNhM2I2ODMyZTEzXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
          imageStyle={{ opacity: 0.25 }}
        />

        <Display.Heading2>
          <code>&lt;Alert&gt;</code>
        </Display.Heading2>

        <Alert
          title="Alert Title"
          subtitle="Alert subtitle"
          variant="info"
          onClose={() => {
            alert("Insert dismiss logic here");
          }}
          dismissible
        >
          Some text with a <Alert.Link to="/full-page">link</Alert.Link>
        </Alert>

        <Alert
          title="Intermittent Error"
          error={
            <>
              Something went <em>wrong</em>
            </>
          }
          onRetry={() => {
            alert("Insert retry logic here");
          }}
          variant="warning"
        />

        <Alert
          error={{
            error: "Request failed with status code 401",
            url: "/",
            method: "GET",
          }}
        />

        <Alert error={["Field 1 is required", "Field 2 is required"]} />

        <Display.Heading2>
          <code>&lt;Blockquote&gt;</code>
        </Display.Heading2>

        <Blockquote>
          <p className="mb-0">
            A well-known quote, contained in a blockquote element.
          </p>
        </Blockquote>

        <Blockquote>
          <p>
            Success, meaningful success, begins when we take ownership and
            actively take responsibility for our part in the shortcomings of our
            life.
          </p>
          <Blockquote.Footer>
            Dr Eric Thomas,{" "}
            <cite>Greatness Is Upon You: Laying the Foundation</cite>
          </Blockquote.Footer>
        </Blockquote>

        <Display.Heading2>
          <code>&lt;Breakpoint&gt;</code>
        </Display.Heading2>

        <Breakpoint />

        <Display.Heading2>
          <code>&lt;DatePicker&gt;</code>
        </Display.Heading2>

        <DatePicker
          title="My Date"
          value={this.state.date}
          onChange={this.dateHandler}
        />

        <Display.Heading2>
          <code>&lt;Display&gt;</code>
        </Display.Heading2>

        <Display.Heading1>Display Heading 1</Display.Heading1>

        <Display.Heading2>Display Heading 2</Display.Heading2>

        <Display.Heading3>Display Heading 3</Display.Heading3>

        <Display.Heading4>Display Heading 4</Display.Heading4>

        <Display.Heading5>Display Heading 5</Display.Heading5>

        <Display.Heading6>Display Heading 6</Display.Heading6>

        <Display.Heading2>
          <code>&lt;Flipper&gt;</code>
        </Display.Heading2>

        <Flipper
          front={<h3>auto-flipper front content</h3>}
          frontClassName="bg-primary text-light p-2"
          back={<h3>auto-flipper back content</h3>}
          backClassName="bg-secondary text-light p-2"
        />

        <Flipper
          front={
            <Button onClick={this.flipHandler.bind(this)} className="w-100">
              click to flip to the back
            </Button>
          }
          frontClassName="d-flex align-items-stretch"
          back={
            <Button
              onClick={this.flipHandler.bind(this)}
              variant="secondary"
              className="w-100"
            >
              click to flip to the front
            </Button>
          }
          backClassName="d-flex align-items-stretch"
          className="mt-3 text-center"
          height="10rem"
          flipped={this.state.flipped}
          horizontal
        />

        <Display.Heading2>
          <code>&lt;FormGroup&gt;</code>
        </Display.Heading2>

        <Form onSubmit={submitHandler}>
          <FormGroup title="Simple textbox">
            <Form.Control name="sample" />
          </FormGroup>

          <FormGroup
            title="Kitchen sink"
            info={
              <p>
                Things, <i>stuff</i>, <b>content</b>!
              </p>
            }
          >
            <Form.Control
              name="sample"
              maxLength="80"
              defaultValue="eleventeen"
            />
          </FormGroup>

          <div>
            <label>
              <input name="agree" type="checkbox" /> agree?
            </label>
          </div>

          <div>
            <label>
              {" "}
              <input name="option" type="radio" value="a" /> A
            </label>
            ,{" "}
            <label>
              {" "}
              <input name="option" type="radio" value="b" /> B
            </label>
            ,{" "}
            <label>
              {" "}
              <input name="option" type="radio" value="c" /> C
            </label>
          </div>

          <Button type="submit">Submit</Button>
        </Form>

        <Display.Heading2>
          <code>&lt;Icon&gt;</code>
        </Display.Heading2>

        <Icon name="fas fa-camera" />

        <Icon name="bi bi-info-circle-fill" className="ms-2" />

        <Icon
          name="fas fa-camera"
          alt="DSLR"
          variant="success"
          className="ms-2"
          style={{ fontSize: "2rem" }}
        />

        <Display.Heading2>
          <code>&lt;InfoIcon&gt;</code>
        </Display.Heading2>

        <InfoIcon title="Info Title">Info Content</InfoIcon>

        <InfoIcon title="Title Only"></InfoIcon>

        <InfoIcon>Content Only</InfoIcon>

        <InfoIcon
          title={
            <>
              JSX <i>Title</i>
            </>
          }
          name="bi bi-info-circle-fill"
          alt="help me!"
          variant="danger"
          iconStyle={{ fontSize: "2rem" }}
        >
          Things, <i>stuff</i>, <b>content</b>!
        </InfoIcon>

        <Display.Heading2 id="link">
          <code>&lt;Link&gt;</code>
        </Display.Heading2>

        <ul>
          <li>
            Internal: <Link href="/">Gatsby</Link>
          </li>
          <li>
            Anchor: <Link href="#link">HTML</Link>
          </li>
          <li>
            Mail: <Link href="mailto:webmaster@legendarymediatv.com">HTML</Link>
          </li>
          <li>
            De-External:{" "}
            <Link href="http://localhost:8000" external="false">
              HTML
            </Link>
          </li>
          <li>
            Auto External:{" "}
            <Link href="https://www.legendarymediatv.com">HTML</Link>
          </li>
          <li>
            Explicit External:{" "}
            <Link
              href="/external-somehow"
              externalIcon="bi bi-box-arrow-up-right"
              externalVariant="danger"
            >
              HTML
            </Link>
          </li>
          <li>
            Internal with newTab:{" "}
            <Link href="/" newTab>
              Gatsby
            </Link>
          </li>
          <li>
            External New Tab:{" "}
            <Link href="https://www.legendarymediatv.com" externalNewTab>
              HTML
            </Link>
          </li>
        </ul>

        <Display.Heading2>
          <code>&lt;ListGroup&gt;</code>
        </Display.Heading2>

        <ListGroup title="Array of Links" items={linkArray} />

        <ListGroup
          title="Array of Objects with Links"
          items={linkObjects}
          className="mt-3"
        />

        <ListGroup
          title="Array of Objects with Click Handler"
          titleVariant="success"
          items={objectArray}
          click={sampleHandler}
          className="mt-3"
        />

        <ListGroup title="Custom Items" titleVariant="info" className="mt-3">
          <ListGroup.Item subitem="sample sub-item">
            ListGroup.Item with a sub-item below
          </ListGroup.Item>

          <ListGroup.Item to="/demo">
            ListGroup.Item auto-converted to a link/action
          </ListGroup.Item>

          <ListGroup.Item
            onClick={() => {
              alert("clicked");
            }}
          >
            ListGroup.Item auto-converted to a button
          </ListGroup.Item>

          <ListGroup.Item
            to="#list-group"
            subactions={[
              {
                to: "/demo",
                variant: "info",
                children: <Icon name="fas fa-camera" />,
              },
              {
                onClick: () => {
                  alert("deleted!");
                },
                variant: "danger",
                children: <Icon name="fas fa-trash-alt" />,
              },
            ]}
          >
            ListGroup.Item with a URL and sub-actions
          </ListGroup.Item>
        </ListGroup>

        <Display.Heading2>
          <code>&lt;Pagination&gt;</code>
        </Display.Heading2>

        {["sm", "", "lg"].map((size) => (
          <Pagination size={size} key={size}>
            <Pagination.First
              onClick={() => {
                alert("first");
              }}
            />
            <Pagination.Prev to="#" />
            <Pagination.Item to="#">{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item to="#">{10}</Pagination.Item>
            <Pagination.Item to="#">{11}</Pagination.Item>
            <Pagination.Item to="#" active>
              {12}
            </Pagination.Item>
            <Pagination.Item to="#">{13}</Pagination.Item>
            <Pagination.Item to="#" disabled>
              {14}
            </Pagination.Item>

            <Pagination.Ellipsis to="#" />
            <Pagination.Item to="#">{20}</Pagination.Item>
            <Pagination.Next to="#" />
            <Pagination.Last
              onClick={() => {
                alert("last");
              }}
            />
          </Pagination>
        ))}

        <Pagination size="sm">
          <Pagination.First>
            <Icon name="fas fa-angle-double-left" alt="first" />
          </Pagination.First>

          <Pagination.Prev>
            <Icon name="fas fa-angle-left" alt="previous" />
          </Pagination.Prev>

          <Pagination.Ellipsis>
            <Icon name="fas fa-ellipsis-h" alt="more" />
          </Pagination.Ellipsis>

          <Pagination.Next>
            <Icon name="fas fa-angle-right" alt="next" />
          </Pagination.Next>

          <Pagination.Last>
            <Icon name="fas fa-angle-double-right" alt="last" />
          </Pagination.Last>
        </Pagination>

        <Display.Heading2>
          <code>&lt;Spinner&gt;</code>
        </Display.Heading2>

        <div>
          <Spinner />

          <Spinner animation="grow" variant="success" className="small" />
        </div>

        <Spinner alert className="my-3" />

        <Spinner
          title="Reticulating splines …"
          variant="secondary"
          className="my-3"
        />

        <Display.Heading2>
          <code>scrollToTopHandler()</code>
        </Display.Heading2>

        <Button onClick={scrollToTopHandler}>Scroll to Top</Button>

        <div className="mt-1">
          <Link to="#" onClick={scrollToTopHandler}>
            scroll to top
          </Link>
        </div>

        <ScrollToTop name="fas fa-caret-square-up" variant="success" />
      </Layout>
    );
  };
}
