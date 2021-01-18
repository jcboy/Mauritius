import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {Home} from "../pages/home/home";
import {Navbar} from "../components/Navbar/Navbar";
import ActivityList from "../pages/activities/ActivityList";
import {AdminList} from "../pages/admin-list/Adminlist";
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/activities" component={ActivityList} />
                    <Route exact path="/adminlist" component={AdminList} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>

    )
}