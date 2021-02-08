import React from 'react';
import {Component} from "react/cjs/react.production.min";
import './../../styles/activities.css';
import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import MapActivities from "./ActivitiesConfig/MapActivities";
import TagComponent from "./ActivitiesConfig/TagComponent";
import axios from "axios";

class Activities extends Component {

    constructor() {
        super();
        this.state = {
            tags: [],
            activities: [],
        }
        this.updateCurrentPage = this.updateCurrentPage.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/activities').then((response) => {
            this.setState({
                activities: response.data.response
            })
        }).catch((err) => {
            console.log('ERREUR : ', err.message)
        })
    }

    updateTags(value) {
        //console.log(value);
    }

    updateCurrentPage(value) {
        axios.get('http://localhost:8080/activities')
            .then((response) => {
                this.setState({
                    activities: response.data.response
                });
            }).catch((err) => {
            console.log(err.message);
        });
    }

    render() {
        return (
            <div>
                <Welcome param={{path: '/activities'}}/>
                <div className="container activities pt-4 pb-5">
                    <TagComponent onTagChange={this.updateTags}/>
                    <MapActivities info={this.state.activities}/>
                    <Pagination onPage={this.updateCurrentPage}
                                index={this.state.currentPage}/>
                </div>
            </div>
        );
    }
}

export default Activities;


/*

Submit preventDefault
https://www.robinwieruch.de/react-preventdefault

https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react

 */