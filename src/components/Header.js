import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import '../App.css';
import Nav from './Nav';

const Header = () => (
    <div className="navMenu">
        <Segment inverted>
            <Menu inverted pointing secondary>
                <Menu.Item as={Nav} to="/" name="about me" className="cool-link"/>
                <Menu.Item as={Nav} to="/about" name="projects"/>
                <Menu.Item as={Nav} to="/sample" name="resume"/>
            </Menu>
        </Segment>
    </div>
);

export default Header;