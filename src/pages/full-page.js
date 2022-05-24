// dependencies
import React from "react";

// components
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// LegendaryMediaTV components
import FullPage from "../../FullPage";
import Icon from "../../Icon";
import Link from "../../Link";

const FullPagePage = () => {
  const title = "Full Page Demo";

  return (
    <Layout title={title} parent="Bootstrap Components" noContainer>
      <div className="bg-dark">
        <Container className="bg-light p-0">
          <FullPage>
            <FullPage.Content>
              <Navbar bg="primary" variant="dark" expand="sm">
                <Navbar.Brand className="px-2">LegendaryMediaTV</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav">
                  <Icon name="fa-solid fa-bars" alt="menu bars" />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                  <Nav as="ul">
                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="/">
                        Home
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="/demo">
                        Demo
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                      <Nav.Link as={Link} to="/full-page" active>
                        Full Page
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              <main className="py-4 px-2">
                <h1>Title or whatever</h1>

                <p>Things, stuff, content!</p>
              </main>
            </FullPage.Content>

            <FullPage.Footer className="bg-secondary py-2 text-center text-white">
              Footer Content
            </FullPage.Footer>
          </FullPage>
        </Container>
      </div>
    </Layout>
  );
};

export default FullPagePage;
