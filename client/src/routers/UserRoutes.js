import React from 'react';
import { Switch, Route, Redirect,} from "react-router-dom";
import {Home} from "../user/pages/home/home";
// import {Navbar} from "../components/Navbar/Navbar";
import ActivityList from "../user/pages/activities/ActivityList";
import {ContentList} from "../admin/dashboard/contentListe/ContentList";

export const UserRoutes = () => {
    return (
        <div>
            <Switch>
                <Route  path="/activities" component={ActivityList} />
                <Route  path="/contents" component={ContentList} />
                <Route path="/" component={Home} />

                <Redirect to="/"/>
            </Switch>
        </div>
    )
}