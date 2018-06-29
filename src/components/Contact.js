import React from 'react';
import { List, Segment, Button, Icon, Form, Container } from 'semantic-ui-react';

const Contact = () => (
    <Container>
        <Segment inverted>
            <Form inverted>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Name' placeholder='Enter your name here' />
                    <Form.Input fluid label='Email' placeholder='Enter your email here' />
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </Segment>
    </Container>
);

export default Contact;