import React from 'react';
import {Redirect, Route, Switch,} from "react-router-dom";
import {Home} from "../user/pages/home/home";
import {ContentList} from "../admin/dashboard/contentListe/ContentList";
import ActivityList from "../user/pages/activities/ActivityList";


export const UserRoutes = () => {
    return (
        <div>
            <Switch>
                <Route  path="/activities" component={ActivityList} />
                <Route  path="/contents" component={ContentList} />
                <Route  path="/news" component={ContentList} />
                <Route path="/" component={Home} />

                <Redirect to="/"/>
            </Switch>
        </div>
    )
}