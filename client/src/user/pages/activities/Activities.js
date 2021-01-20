import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import sequenceState from "./ActivitiesConfig/ActivityLogic/sequenceStateActivities";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import TagComponent from "./ActivitiesConfig/TagComponent";
import getAllTags from "./ActivitiesConfig/tagList";
import checkExistTag from "./ActivitiesConfig/ActivityLogic/checkExistTag";


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
        console.log(typeof value.tagName);
        console.log(checkExistTag(value.tagName, getAllTags()));
        console.log(getAllTags());
    }

    updateIndex(value) {
        return this.setState({
            pageIndex: value,
        });
    }

    render() {
        // console.log('ACT COMP : activities', this.state.activities)
        const info = {
            info: [...sequencedActivities[this.state.pageIndex]]
        };
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <TagComponent tagListUpdate={this.updateTags}/>
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
