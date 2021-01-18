import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import ActivityTags from "./ActivitiesConfig/ActivityTags";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import Pagination from "./Pagination";

class Activities extends Component {

    render() {
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <ActivityTags/>
                    <br/>
                    <ActivityMapping/>
                    <br/>
                    <Pagination/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Activities;
