// dependencies
import React from 'react';

// components
import Form from 'react-bootstrap/Form';

// custom components
import Layout from '../components/Layout';

// LegendaryMediaTV components
import { DisplayHeading1, DisplayHeading2, DisplayHeading3, DisplayHeading4 } from '../../app.js';
import { FormGroup } from '../../app.js';
import { InfoIcon } from '../../app.js';
import { Icon } from '../../app.js';
import { Link } from '../../app.js';
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
        { id: 1, title: 'Test Non-Link' },
        { id: 2, title: 'Sample Non-Link' }
    ];

    return (
        <Layout title="Bootstrap Components">

            <DisplayHeading2><code>&lt;DisplayHeading&gt;</code></DisplayHeading2>
 
            <DisplayHeading1>Display Heading 1</DisplayHeading1>

            <DisplayHeading2>Display Heading 2</DisplayHeading2>

            <DisplayHeading3>Display Heading 3</DisplayHeading3>

            <DisplayHeading4>Display Heading 4</DisplayHeading4>


            <DisplayHeading2><code>&lt;FormGroup&gt;</code></DisplayHeading2>

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
                    defaultValue="eleventeen"
                />
            </FormGroup>


            <DisplayHeading2><code>&lt;Icon&gt;</code></DisplayHeading2>

            <Icon name="fas fa-camera" />

            <Icon name="bi bi-info-circle-fill" className="ml-2" />

            <Icon
                name="fas fa-camera"
                alt="DSLR"
                variant="success"
                className="ml-2"
                style={{ fontSize: '2rem' }}
            />


            <DisplayHeading2><code>&lt;InfoIcon&gt;</code></DisplayHeading2>

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


            <DisplayHeading2 id="link"><code>&lt;Link&gt;</code></DisplayHeading2>

            <ul>
                <li>Internal: <Link href="/">Gatsby</Link></li>
                <li>Anchor: <Link href="#link">HTML</Link></li>
                <li>Mail: <Link href="mailto:webmaster@legendarymediatv.com">HTML</Link></li>
                <li>External: <Link href="https://www.legendarymediatv.com/">HTML</Link></li>
            </ul>


            <DisplayHeading2><code>&lt;ListGroup&gt;</code></DisplayHeading2>

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


            <DisplayHeading2><code>&lt;Spinner&gt;</code></DisplayHeading2>

            <Spinner />

            <Spinner
                animation="grow"
                variant="success"
            />

        </Layout>
    );
}

export default Home;