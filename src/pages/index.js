// dependencies
import React from 'react';

// components
import Form from 'react-bootstrap/Form';

// custom components
import Layout from '../components/Layout';

// LegendaryMediaTV components
import { FormGroup } from '../../app.js';
import { InfoIcon } from '../../app.js';
import { Icon } from '../../app.js';
import { ListGroup } from '../../app.js';
import { Spinner } from '../../app.js';

function sampleHandler(itemSelected) {
    alert(JSON.stringify(itemSelected, null, 4));
}

const Home = () => {
    const linkArray = [
        '/test',
        '/sample'
    ];

    const linkObjects = [
        { title: 'Test Link', url: '/test' },
        { title: 'Sample Link', url: '/sample' }
    ];

    const objectArray = [
        { id: 1, title: 'Test Link' },
        { id: 2, title: 'Sample Link' }
    ];

    return (
        <Layout title="Bootstrap Components">

            <h2 className="display-2"><code>&lt;FormGroup&gt;</code></h2>

            <FormGroup title="Simple textbox">
                <Form.Control name="sample" />
            </FormGroup>

            <FormGroup
                title="Kitchen sink"
                info={<p>Things, <i>stuff</i>, <b>content</b>!</p>}
            >
                <Form.Control
                    name="sample"
                    maxLength="80"
                    value="eleventeen"
                />
            </FormGroup>


            <h2 className="display-2"><code>&lt;Icon&gt;</code></h2>

            <Icon
                name="fas fa-camera"
            />

            <Icon
                name="fas fa-camera"
                alt="DSLR"
                variant="success"
                className="ml-3"
                style={{ fontSize: '2rem' }}
            />


            <h2 className="display-2"><code>&lt;InfoIcon&gt;</code></h2>

            <InfoIcon title="Info Title">Info Content</InfoIcon>

            <InfoIcon title="Title Only"></InfoIcon>

            <InfoIcon>Content Only</InfoIcon>

            <InfoIcon
                title={<>JSX <i>Title</i></>}
                name="bi bi-info-circle-fill"
                alt="help me!"
                variant="danger"
                iconStyle={{ fontSize: '2rem' }}
            >Things, <i>stuff</i>, <b>content</b>!</InfoIcon>


            <h2 className="display-2"><code>&lt;ListGroup&gt;</code></h2>

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


            <h2 className="display-2"><code>&lt;Spinner&gt;</code></h2>

            <Spinner />

            <Spinner
                animation="grow"
                variant="success"
            />

        </Layout>
    );
}

export default Home;