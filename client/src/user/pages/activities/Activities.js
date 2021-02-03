import React from 'react';
import {Component} from "react/cjs/react.production.min";
import './../../styles/activities.css';
import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import TagComponent from "./ActivitiesConfig/TagComponent";
import filterActivitiesByExistingTags from "./ActivitiesConfig/ActivityLogic/filterActivitiesByExistingTags";
import axios from "axios";

class Activities extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            activities: [],
            tag: []
        }
        this.updateIndex = this.updateIndex.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    componentDidMount() {
        const params = {
            currentPage: this.state.currentPage
        };
        axios.get('http://localhost:8080/activities', {params}).then((response) => {
            this.setState({
                activities: response.data
            })
        }).catch((err) => {
            console.log('ERREUR : ', err.message)
        })
    }

    updateTags(value) {
        if (value[0]) {
            const filteredActivities = filterActivitiesByExistingTags(value, this.state.activities);
            console.log('filtered', filteredActivities);
        }
    }

    updateIndex(value) {
        const params = {
            currentPage: value
        };
        axios.get('http://localhost:8080/activities', {params}).then((response) => {
            console.log('value from parent', value);
            console.log(response);
            this.setState({
                currentPage: value,
                activities: response.data
            });
        }).catch((err) => {
            console.log(err.message);
        });
    }

    render() {
        const info = {
            info: this.state.activities
        };
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities py-5">
                    <TagComponent onTagChange={this.updateTags}/>
                    <ActivityMapping {...info}/>
                    <Pagination indexChange={this.updateIndex} index={this.state.currentPage}/>
                </div>
            </div>
        );
    }

}

export default Activities;


/*


https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react


 */