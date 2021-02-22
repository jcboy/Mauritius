import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../user/pages/home/Home";
import {News} from "../user/pages/news/News";
import Activities from "../user/pages/activities/Activities";
import {NewsItem} from "../user/pages/news/NewsItem";
import ActivitiesItem from "../user/pages/activities/ActivitiesItem";

export const UserRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/activities" component={Activities}/>
                <Route path="/news" component={News}/>
                <Route path="/news-item/:id" component={NewsItem}/>
                <Route exact path="/activitiesitem/:id" component={ActivitiesItem}/>
                <Route exact path="/" component={Home}/>
                <Redirect to="/"/>
            </Switch>

        </div>
    )
}