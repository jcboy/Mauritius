import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import ActivityTags from "./ActivitiesConfig/ActivityTags";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import Pagination from "./Pagination";


class Activities extends Component {

    activityNumberPerPage = 6;

    constructor() {
        super();
        console.log(activities.length);
        console.log(this.activityNumberPerPage);
        this.state = {
            pageNumber: 0,
            pagination : ((activities.length % this.activityNumberPerPage) + 1),
            activities: [activities.splice(0, this.activityNumberPerPage)]
        }
    }

    componentDidMount() {
        const page = [];
        while (activities.length > this.activityNumberPerPage) {
            page.push(activities.splice(0, this.activityNumberPerPage))
        }
        page.push(activities.splice(0, this.activityNumberPerPage))
        return this.setState({
            activities: page
        });
    }

    navigation() {

    }

    render() {
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <ActivityTags/>
                    <ActivityMapping infos={{activities: this.state.activities[this.state.pageNumber]}}/>
                    <br/>
                    <Pagination size={{size: this.state.pagination}}/>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Activities;