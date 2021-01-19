import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import ManageTags from "./ActivitiesConfig/ManageTags";
import Pagination from "./Pagination";
import sequenceState from "./ActivitiesConfig/ActivityLogic/sequenceStateActivities";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import TagComponent from "./ActivitiesConfig/TagComponent";

const activityNumberPerPage = 4;
const sequencedActivities = sequenceState(activityNumberPerPage,activities);

class Activities extends Component {

    constructor() {
        super();
        this.state = {
            pageIndex: 0,
            activities : activities
        }
        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(value) {
        return this.setState({
            pageIndex: value,
        })
    }

    render() {
        const info = {
            info: [...sequencedActivities[this.state.pageIndex]]
        };
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <TagComponent activities={activities} />
                    <br/>
                    <ActivityMapping {...info} />
                    <br/>
                    <Pagination indexChange={this.updateIndex}/>
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
