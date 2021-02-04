import React from 'react';
import {Component} from "react/cjs/react.production.min";
import './../../styles/activities.css';
import Welcome from "../../components/Welcome/welcome";
import Pagination from "./Pagination";
import ActivityMapping from "./ActivitiesConfig/ActivityMapping";
import TagComponent from "./ActivitiesConfig/TagComponent";
import axios from "axios";

class Activities extends Component {

    constructor() {
        super();
        this.state = {
            previousPage : 0,
            currentPage: 1,
            nextPage: 2,
            activities: [],
        }
        this.updateCurrentPage = this.updateCurrentPage.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    componentDidMount() {
        const params = this.state;
        axios.get('http://localhost:8080/activities', {params}).then((response) => {
            this.setState({
                activities: response.data.response
            })
        }).catch((err) => {
            console.log('ERREUR : ', err.message)
        })
    }

    updateTags(value) {
        console.log(value);
    }

    updateCurrentPage(value) {
        const params = {
            previousPage : value - 1,
            currentPage: value,
            nextPage: value + 1
        };
        axios.get('http://localhost:8080/activities', {params})
            .then((response) => {
                this.setState({
                    previousPage : value -1,
                    currentPage: value,
                    nextPage: value++,
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
                <div className="container activities py-5">
                    <TagComponent onTagChange={this.updateTags}/>
                    <ActivityMapping info={this.state.activities}/>
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