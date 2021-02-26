import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import {UserRoutes} from "./UserRoutes";
import {AdminRoutes} from "./AdminRoutes";
import {AuthRoutes} from "./AuthRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <div>
                <Switch>
                    <Route path="/login" component={AuthRoutes} />
                    <Route path="/admin" component={AdminRoutes} />
                    <Route path="/" component={UserRoutes} />
                </Switch>
            </div>
        </Router>
    )
}