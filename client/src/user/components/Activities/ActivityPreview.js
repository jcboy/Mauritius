import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/activity.css';

import thumb01 from '../../assets/images/thumb-01.jpg'
import * as url from "url";

const ActivityPreview = (props) => {
    return (
        <div className="row item mb-5">
            <div className="col-md-4 img-content">
                <div className="wrapper" style={{backgroundImage: `url(${props.activity.mainImage})`}}><img src={props.activity.mainImage} alt=""/></div>
            </div>
            <div className="col-md-8 desc-content">
                <div className="wrapper">
                    <h3 className="h3 red"> {props.activity.title} </h3>
                    <p>{ ((props.activity.description).length > 330) ?
                        (((props.activity.description).substring(0,330-3)) + '...') :
                        props.activity.description }</p>
                    <Link to={`${props.activity._id}`}>&gt; en savoir plus </Link>
                </div>
            </div>
        </div>
    )
}


export default ActivityPreview;