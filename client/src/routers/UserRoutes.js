import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../user/pages/home/Home";
import {News} from "../user/pages/news/News";
import Activities from "../user/pages/activities/Activities";

export const UserRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/activities" component={Activities}/>
                <Route path="/news" component={News}/>
                <Route path="/" component={Home}/>

                <Redirect to="/"/>
            </Switch>
        </div>
    )
}