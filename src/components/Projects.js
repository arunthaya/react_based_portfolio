import React from 'react';
import { List, Segment, Button, Icon, Container } from 'semantic-ui-react';

const Projects = () => (
    <Container>
        <Segment inverted>
            <h1>Projects I am proud of:</h1>
            <List divided relaxed>
                <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header style={{color: 'white'}}>
                            {<a target="_blank" href='https://github.com/arunthaya/react_based_portfolio'>This website!</a>}
                        </List.Header>
                        Check out the code I wrote in React, to make this website a reality!
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header style={{color: 'white'}}>
                            {<a target="_blank" href='https://github.com/arunthaya/School-Website-Crawler'>School Page Parser</a>}
                            </List.Header>
                        A web application that crawls school websites, and retrieves most relevant information and displays it on the application.
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header style={{color: 'white'}}>
                            {<a target="_blank" href='https://github.com/arunthaya/uszipcodevalidator'>US Zip Code Validator</a>}
                        </List.Header>
                        A simple web application that checks to see if inputted zip code is a valid zip code out of the possible 43555 zips.
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header style={{color: 'white'}}>
                            {<a target="_blank" href='https://github.com/arunthaya/QuestOfTheRoundTable'>Quest Of The Round Table</a>}
                        </List.Header>
                        Quest of the Round Table board game, brought to life with Java.
                    </List.Content>
                </List.Item>
            </List>
        </Segment>


    </Container>
);

export default Projects;