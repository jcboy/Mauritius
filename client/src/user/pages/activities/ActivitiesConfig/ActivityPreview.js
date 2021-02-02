import React from 'react';
import {Link} from "react-router-dom";
import '../../../styles/activity.css';

import thumb01 from '../../../assets/images/thumb-01.jpg'

const ActivityPreview = (props) => {
    return (<div>
            <div className="row item mb-5">
                <div className="col-md-4 img-content">
                    <img src={thumb01} alt=""/>
                </div>
                <div className="col-md-8 desc-content">
                    <div className="wrapper">
                        <h3 className="h3 red"> {props.activity.title} </h3>
                        <p> Date : {props.activity.date} </p>
                        <p> {props.activity.description} </p>
                        <Link to="/">&gt; en savoir plus </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ActivityPreview;