import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from "../pages/home/home";
import Activities from "../pages/activities/Activities";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/activities" component={Activities}/>
                </Switch>
            </div>
        </Router>
    )
}