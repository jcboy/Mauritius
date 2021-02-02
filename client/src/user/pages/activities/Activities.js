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
import axios from "axios";

const activityNumberPerPage = 3;
const sequencedActivities = sequenceState(activityNumberPerPage, activities);
export const pageIndexMax = sequencedActivities.length - 1;


class Activities extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            activities: activities,
            act : [],
            tag : []
        }
        this.updateIndex = this.updateIndex.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    componentDidMount() {
        const currentPage = this.state.currentPage;
        axios.get('http://localhost:8080/activities', currentPage).then((response) => {
            this.setState({
                act : response.data
            })
        }).catch((err) => {
            console.log('ERREUR : ', err.message)
        })
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
            currentPage: value,
        });
    }

    render() {
        console.log(this.state.act);
        console.log(this.state.activities);
        const sequencedActivities = [...sequenceState(activityNumberPerPage, this.state.activities)];
        console.log(sequencedActivities);
        const info = {
            info: sequencedActivities[this.state.currentPage]
        };
        console.log(info);
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


/*


https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react


 */