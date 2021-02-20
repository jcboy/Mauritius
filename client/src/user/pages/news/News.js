import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from 'moment';
import './../../styles/activities.css';
import {Link} from "react-router-dom";
import Welcome from "../../components/Welcome/welcome";

export const News = () => {

    const [news, setNews] = useState([]);

    // set value for default selection (default, asc, desc)
    const [selectedValue, setSelectedValue] = useState('default');

    useEffect(()=>{
        axios.get('http://localhost:8080/actualities')
            .then((res)=>{
                setNews(res.data);
            })
    }, []);



    return (
        <div>
            <Welcome param={{path: '/news'}}/>

            <div className="container news mt-5">
                <div className="row mb-4 justify-content-end">
                    <div className="col-md-2 ">
                        <select className="form-select"  value={selectedValue}>
                            <option value="default" disabled>Trier par</option>
                            <option value="asc">Ordre croissant</option>
                            <option value="desc">Ordre décroissant</option>
                        </select>
                    </div>
                </div>
                <div className="row">

                    {news.map((item, index) => (
                        <div className="col-md-6 item  mb-5" key={index}>
                            <div className="row align-items-center">
                                <div className="col-lg-5 img-content ">
                                    <div className="wrapper" style={{backgroundImage: `url(${item.mainImage})`}}><img src={item.mainImage} alt=""/></div>
                                </div>
                                <div className="col-lg-7 desc-content">
                                    <div className="wrapper">
                                        <h3 className="h3 red">
                                            {item.title}
                                        </h3>
                                        <div className="date mb-2">Publié le {moment(item.createdAt).format('DD/MM/YYYY')} </div>
                                        <p>{ ((item.description).length > 260) ?
                                            (((item.description).substring(0,260-3)) + '...') :
                                            item.description }</p>

                                        <Link to={'/news/'+item._id}>&gt; Voir l'article</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))};


                </div>
            </div>

        </div>
    )

}




