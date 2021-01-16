import React from 'react';
import {Link} from "react-router-dom";
import {Component} from "react/cjs/react.production.min";
import './Activity.css';


class ActivityPreview extends Component {

    constructor(props) {
        super(props);
        this.state = props.info;
    }

    render() {
        return (
            <div className="row item mb-5">
                <div className="col-md-4 img-content">
                    <img src={this.state.scenery} alt=""/>
                </div>
                <div className="col-md-8 desc-content">
                    <div className="wrapper">
                        <h3 className="h3 red"> {this.state.title} </h3>
                        <p> Lieu : {this.state.date} </p>
                        <p> {this.state.description} </p>
                        <Link to="/">&gt; en savoir plus </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityPreview;