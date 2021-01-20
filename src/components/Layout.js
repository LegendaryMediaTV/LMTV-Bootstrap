import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title} | LegendaryMediaTV</title>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
            </Helmet>
            <Container className="py-4">
                <h1 className="display-1">{props.title}</h1>

                {props.children}
            </Container>
        </>
    );
}

export default Layout;