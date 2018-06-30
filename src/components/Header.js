import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import '../App.css';
import Nav from './Nav';

const Header = () => (
    <div className="navMenu">
        <Segment inverted>
            <Menu inverted pointing secondary>
                <Menu.Item as={Nav} to="/" name="home" className="cool-link"/>
                <Menu.Item as={Nav} to="/projects" name="projects"/>
                {/*<Menu.Item as={Nav} to="/sample" name="resume"/>*/}
                <Menu.Item as={Nav} to="/contact" name="contact"/>
                <Menu.Menu position='right'>
                    <Menu.Item target="_blank" href='https://github.com/arunthaya'>
                        <Icon name='github' size='large'/>
                    </Menu.Item>
                    <Menu.Item target="_blank" href='https://www.linkedin.com/in/arunthayanithy'>
                        <Icon name='linkedin' size='large'/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    </div>
);

export default Header;