import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../user/pages/Home";
import Actualities from "../user/pages/Actualities";
import Activities from "../user/pages/Activities";
import ActualitiesItem from "../user/components/Actualities/ActualitiesItem";
import ActivitiesItem from "../user/components/Activities/ActivitiesItem";

export const UserRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/activities" component={Activities}/>
                <Route path="/news" component={Actualities}/>
                <Route path="/news-item/:id" component={ActualitiesItem}/>
                <Route exact path="/activitiesitem/:id" component={ActivitiesItem}/>
                <Route exact path="/" component={Home}/>
                <Redirect to="/"/>
            </Switch>
        </div>
    )
}