import React from 'react';
import {Link} from "react-router-dom";
import {Component} from "react/cjs/react.production.min";
import '../../../styles/activity.css';


const ActivityPreview = (props) => {

    console.log('props from preview', props)
    return (<div>
            <div className="row item mb-5">
                <div className="col-md-4 img-content">
                    <img src={props.activity.scenery} alt=""/>
                </div>
                <div className="col-md-8 desc-content">
                    <div className="wrapper">
                        <h3 className="h3 red"> {props.activity.title} </h3>
                        <p> Lieu : {props.activity.date} </p>
                        <p> {props.activity.description} </p>
                        <Link to="/">&gt; en savoir plus </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ActivityPreview;