import React from 'react';
import {Component} from "react/cjs/react.production.min";

import './../../styles/activities.css';

import Welcome from "../../components/Welcome/welcome";
import ActivityTags from "./ActivitiesConfig/ActivityTags";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import activities from "./ActivitiesConfig/ActivityList";
import Pagination, {pageIndex$} from "./Pagination";


class Activities extends Component {

    activityNumberPerPage = 3;
    pageIndexMax = Math.floor(activities.length / this.activityNumberPerPage);
    subscription;


    constructor() {
        super();
        this.state = {
            pageIndex: 0,
            activities: [activities.splice(0, this.activityNumberPerPage)]
        }
    }

    componentDidMount() {
        let page = this.state.activities;
        while (activities.length > this.activityNumberPerPage) {
            page.push(activities.splice(0, this.activityNumberPerPage))
        }
        page.push(activities);

        this.subscription = pageIndex$.subscribe(() => {
        }, (err)=> {
        })

        return this.setState({
            activities: page
        });

    }

    async navigation(value) {
        console.log('value from navigation', value)

        const newState = await
            this.setState(() => ({
                pageIndex: value
            }))
        console.log('newState', this.state.pageIndex)
        return newState
    }

    render() {
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities">
                    <ActivityTags/>
                    <div>
                        <pre>
                            {
                                // console.log(this.state.activities[this.state.pageIndex])
                            }
                            <br/>
                            {
                                console.log(this.subscription)
                            }
                        </pre>
                    </div>
                    <ActivityMapping infos={{activities: this.state.activities[this.state.pageIndex]}}/>
                    <br/>
                    <Pagination
                        pageInfos={{
                            pageIndex: this.state.pageIndex,
                            pageIndexMax: this.pageIndexMax,
                        }}
                        onClick={this.navigation.bind(this)}
                    />
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
