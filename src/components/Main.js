import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            {/*<Route path='/schedule' component={Schedule}/>*/}
        </Switch>
    </main>
);

export default Main;