import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from 'moment';
import './../../styles/activities.css';
import {Link} from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import mainHeaderBackground from "../../assets/images/Le-morne-Unesco-ile-maurice.jpg";

export const News = () => {

    const [news, setNews] = useState([]);

    // set value for default selection (default, asc, desc)
    const [selectedValue, setSelectedValue] = useState('default');

    let endpoint = (selectedValue === 'desc') ? '?sortBy=createdAt&OrderBy=desc' : '';

    useEffect(()=>{
        axios.get(`http://localhost:8080/actualities${endpoint}`)
            .then((res)=>{
                setNews(res.data);
            })
    }, [endpoint]);

    return (
        <div className="news">
            <Welcome params={{
                title : "ACTUALITIES",
                background : 'url(' + 'https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_2178/1200x630_100_300_000000x30x0.jpg' + ')',
                type : "article"
            }}/>
            <div className="container mt-5">
                <div className="row mb-4 justify-content-end">
                    <div className="col-md-2 ">
                        <select className="form-select"  value={selectedValue}
                        onChange={(e)=> setSelectedValue(e.target.value)}>
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
                                        <Link to={`/news-item/${item._id}`}>&gt; Voir l'article</Link>
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




