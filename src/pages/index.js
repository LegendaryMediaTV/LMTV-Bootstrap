// dependencies
import React from "react";

// components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "../components/Layout";

// LegendaryMediaTV functions
import { formData } from "../../functions";

// LegendaryMediaTV components
import BackgroundImage from "../../BackgroundImage";
import Breakpoint from "../../Breakpoint";
import Display from "../../Display";
import FormGroup from "../../FormGroup";
import InfoIcon from "../../InfoIcon";
import Icon from "../../Icon";
import Link from "../../Link";
import ListGroup from "../../ListGroup";
import ScrollToTop from "../../ScrollToTop";
import { scrollToTopHandler } from "../../ScrollToTop";
import Spinner from "../../Spinner";

export default () => {
  const linkArray = ["/demo", "/full-page"];

  const linkObjects = [
    { title: "Test Link", url: "/" },
    { title: "Sample Link", url: "/demo" },
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
    <Layout title="Bootstrap / Components" parent="Bootstrap Demo">
      <BackgroundImage
        src="https://m.media-amazon.com/images/M/MV5BN2I5NGEyMTYtYTNjMC00YTBhLWE1NjYtYWNhM2I2ODMyZTEzXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg"
        imageStyle={{ opacity: 0.25 }}
      />

      <Display.Heading2>
        <code>&lt;Breakpoint&gt;</code>
      </Display.Heading2>

      <Breakpoint />

      <Display.Heading2>
        <code>&lt;Display&gt;</code>
      </Display.Heading2>

      <Display.Heading1>Display Heading 1</Display.Heading1>

      <Display.Heading2>Display Heading 2</Display.Heading2>

      <Display.Heading3>Display Heading 3</Display.Heading3>

      <Display.Heading4>Display Heading 4</Display.Heading4>

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

      <Icon name="bi bi-info-circle-fill" className="ml-2" />

      <Icon
        name="fas fa-camera"
        alt="DSLR"
        variant="success"
        className="ml-2"
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

      <Display.Heading2>
        <code>&lt;Spinner&gt;</code>
      </Display.Heading2>

      <div>
        <Spinner />

        <Spinner animation="grow" variant="success" className="small" />
      </div>

      <Spinner alert className="my-3" />

      <Display.Heading2>
        <code>scrollToTopHandler()</code>
      </Display.Heading2>

      <Button onClick={scrollToTopHandler}>Scroll to Top</Button>

      <Link to="#" onClick={scrollToTopHandler}>
        scroll to top
      </Link>

      <ScrollToTop name="fas fa-caret-square-up" variant="success" />
    </Layout>
  );
};
