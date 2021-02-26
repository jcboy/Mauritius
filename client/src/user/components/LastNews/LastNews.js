import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";


export default function LastNews () {

    const [news, setNews] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/actualities?limit=3')
            .then((res)=>{
                setNews(res.data);
            })
    }, [])

    return (
        <div className="container last-news text-center mt-5 pt-5">
            <h2 className="h2 green text-uppercase">Les dernières actus</h2>
            <div className="row ">
                {news.map((item, index)=>(
                    <div className="col-md-4 item  mb-5" key={index}>
                        <div className="row ">
                            <div className="col-lg-12 img-content ">
                                <div className="wrapper" style={{backgroundImage: `url(${item.mainImage})`}}><img src={item.mainImage} alt=""/></div>
                            </div>
                            <div className="col-lg-12 desc-content">
                                <div className="wrapper">
                                    <Link to={`/news-item/${item._id}`} className="h3 red">{item.title}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}