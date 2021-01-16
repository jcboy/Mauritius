import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import Tags from "./Tags";
import ActivityMapping from "./ActivitiesConfig/Test/ActivityMapping";
import activities from "./ActivitiesConfig/Test/ActivityList";


class Activity extends Component {

    activityNumberPerPage = 6;

    constructor() {
        super();
        this.state = {
            pageNumber: 0,
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

    render() {
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <Tags/>
                    <ActivityMapping infos={{activities: this.state.activities[this.state.pageNumber]}}/>
                    <br/>
                    <div className="btn-toolbar justify-content-center" role="toolbar"
                         aria-label="Toolbar with button groups">
                        <div className="btn-group" role="group" aria-label="First group">
                            <button type="button" className="btn btn-outline-secondary">&laquo;</button>
                            <button type="button" className="btn btn-outline-secondary">1</button>
                            <button type="button" className="btn btn-outline-secondary">2</button>
                            <button type="button" className="btn btn-outline-secondary">3</button>
                            <button type="button" className="btn btn-outline-secondary">&raquo;</button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Activity;