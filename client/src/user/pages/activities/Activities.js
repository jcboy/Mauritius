import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import sequenceState from "./ActivitiesConfig/ActivityLogic/sequenceStateActivities";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import TagComponent from "./ActivitiesConfig/TagComponent";
import filterActivitiesByExistingTags from "./ActivitiesConfig/ActivityLogic/filterActivitiesByExistingTags";

const activityNumberPerPage = 3;
const sequencedActivities = sequenceState(activityNumberPerPage, activities);
export const pageIndexMax = sequencedActivities.length - 1;

class Activities extends Component {

    constructor() {
        super();
        this.state = {
            pageIndex: 0,
            activities: activities
        }
        this.updateIndex = this.updateIndex.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    updateTags(value) {
        if (value[0]) {
            console.log('activities', this.state.activities);
            console.log('value', value);
            const filteredActivities = filterActivitiesByExistingTags(value, this.state.activities);
            console.log('filtered', filteredActivities);
        }
    }

    updateIndex(value) {
        return this.setState({
            pageIndex: value,
        });
    }

    render() {
        const sequencedActivities = [...sequenceState(activityNumberPerPage, this.state.activities)];
        const info = {
            info: sequencedActivities[this.state.pageIndex]
        };
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <TagComponent onTagChange={this.updateTags}/>
                    <br/>
                    <ActivityMapping {...info}/>
                    <br/>
                    <Pagination indexChange={this.updateIndex}
                    />
                </div>
                <br/>
            </div>
        );
    }

}

export default Activities;