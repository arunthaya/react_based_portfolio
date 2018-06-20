import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import Nav from './Nav';

const Header = () => (
    <Menu secondary>
        <Menu.Item as={Nav} to="/" name="home" />
        <Menu.Item as={Nav} to="/about" name="messages" />
        <Menu.Item as={Nav} to="/sample" name="friends" />
    </Menu>
);

export default Header;