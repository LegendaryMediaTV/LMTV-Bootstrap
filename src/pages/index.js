// dependencies
import React from 'react';

// page layout template
import Layout from '../components/Layout';

// LegendaryMediaTV components
import { HelpIcon } from '../../app.js';
import { Icon } from '../../app.js';
import { ListGroup } from '../../app.js';

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

            <h2 className="display-2"><code>&lt;HelpIcon&gt;</code></h2>

            <HelpIcon title="Help Title">Help Content</HelpIcon>

            <HelpIcon title="Title Only"></HelpIcon>

            <HelpIcon>Content Only</HelpIcon>

            <HelpIcon
                title="Help Title"
                name="bi bi-info-circle-fill"
                alt="help me!"
                variant="danger"
                iconStyle={{ fontSize: '2rem' }}
            >Things, <i>stuff</i>, <b>content</b>!</HelpIcon>


            <h2 className="display-2"><code>&lt;ListGroup&gt;</code></h2>

            <ListGroup title="Array of Links" items={linkArray} />

            <ListGroup
                title="Array of Objects with Links"
                items={linkObjects}
                className="mt-3"
            />

            <ListGroup
                title="Array of Objects with Click Handler"
                items={objectArray}
                click={sampleHandler}
                className="mt-3"
            />

        </Layout>
    );
}

export default Home;