import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import ActivityTags from "./ActivitiesConfig/ActivityTags";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import Pagination from "./Pagination";


class Activities extends Component {

    activityNumberPerPage = 3;
    totalPageNumber = Math.ceil(activities.length / this.activityNumberPerPage);

    constructor() {
        super();
        this.state = {
            pageNumber: 1,
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
                    <ActivityMapping infos={{activities: this.state.activities[this.state.pageNumber - 1]}}/>
                    <br/>
                    <Pagination pageInfos={{
                        pageNumber: this.state.pageNumber,
                        totalPageNumber: this.totalPageNumber,
                    }}/>
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