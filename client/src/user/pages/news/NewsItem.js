import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from 'moment';
import {Link, useParams} from "react-router-dom";
import Welcome from "../../components/Welcome/welcome";
import Contact from "../../components/Contact/Contact";

export const NewsItem = () => {
    // const params = useParams(); // avant destructuring
    const {id} = useParams();
    const [newsItem, setNewsItem] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8080/actualities/${id}`)
            .then((res)=>{
                setNewsItem(res.data);
            })
    }, []);

    return (
        <div>
            <Welcome param={{path: '/news'}}/>

            <div className="container newsItem mb-5">
                <div className="row">

                    <div className="col-12 mb-4 mt-5">
                        <Link to={`/news`}>&gt; Retour aux actus </Link>

                        <h2 className="h2 green text-center my-5">{newsItem.subtitle}</h2>

                        <p>Publié le {moment(newsItem.createdAt).format('DD/MM/YYYY')}</p>

                        <p className="description">{newsItem.description}</p>

                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )

}