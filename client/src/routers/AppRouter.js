import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../pages/home/home";
import ActivityList from "../pages/activities/ActivityList";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/activities" component={ActivityList}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}