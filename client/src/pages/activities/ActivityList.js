import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/styles.css';
import './../../styles/activities.css';
import thumb01 from './../../assets/images/thumb-01.jpg';

const ActivityList = () => {
    return (
        <div className="container activities">
            <div className="filter-content">
                Filtre
            </div>
            <div className="row">
                <div className="activity-item d-flex">
                    <div className="col-3 img img-mask">
                        <img src={thumb01} alt=""/>
                    </div>
                    <div className="col-8 content">
                        <div className="px-5 py-4">
                            <h3 className="h3 red">Plongé sous-marine</h3>
                            <p>Lieu :</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat pretium risus, sit amet rhoncus arcu sodales et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus pulvinar urna velit, vitae dignissim mauris maximus id.</p>
                            <Link to="/">&gt; en savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityList;