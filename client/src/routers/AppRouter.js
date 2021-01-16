import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Home} from "../pages/home/home";
import Activity from "../pages/activities/Activity";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/activities" component={Activity}/>
                </Switch>
            </div>
        </Router>
    )
}