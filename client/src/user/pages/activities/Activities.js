import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import sequenceState from "./ActivitiesConfig/ActivityLogic/sequenceStateActivities";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import TagComponent from "./ActivitiesConfig/TagComponent";


const activityNumberPerPage = 3;
const sequencedActivities = sequenceState(activityNumberPerPage, activities);

export const pageIndexMax = sequencedActivities.length - 1;
console.log('pageIndexMax', pageIndexMax);
console.log('activityNumberPerPage', activityNumberPerPage);
console.log('ActivityTotalNumber', activities.length);

class Activities extends Component {

    constructor() {
        super();
        this.state = {
            pageIndex: 0,
            activities: activities
        }
        this.updateIndex = this.updateIndex.bind(this);
        this.updateActivities = this.updateActivities.bind(this);
    }

    updateActivities(value) {
        console.log(value)
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
                    <TagComponent activities={activities} activityListUpdate={this.updateActivities}/>
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
