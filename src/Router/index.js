import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Page from '../Page';

export default () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:slug' component={Page} />
        </Switch>
    </Router>
);
