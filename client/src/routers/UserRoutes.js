import React from 'react';
import {Redirect, Route, Switch,} from "react-router-dom";
import {Home} from "../user/pages/home/home";
import {ContentList} from "../admin/dashboard/contentListe/ContentList";
import Activities from "../user/pages/activities/Activities";

export const UserRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/activities" component={Activities}/>
                <Route path="/contents" component={ContentList}/>
                <Route path="/" component={Home}/>

                <Redirect to="/"/>
            </Switch>
        </div>
    )
}