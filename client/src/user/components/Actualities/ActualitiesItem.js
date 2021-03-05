import React from "react";
import moment from 'moment';
import {Link, useParams} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import LatestActualities from "./LatestActualities";
import {useQuery} from "react-query";
import fetchActualities from "../../../services/fetchActualities";

const ActualitiesItem = () => {

    const {id} = useParams();
    const {data, status} = useQuery(id, fetchActualities.getActuality)

    return (
        <div>
            {(status === "success") && <>
                <Header params={{
                    title: data.title,
                    background: 'url(' + data.mainImage + ')',
                    type: "notMain"
                }}/>
                <div className="container newsItem mb-5">
                    <div className="row">
                        <div className="col-12 mb-4 mt-5">
                            <Link to={`/news`}>&gt; Retour aux actus </Link>
                            <h2 className="h2 green text-center my-5">{data.subtitle}</h2>
                            <p>Publié le {moment(data.createdAt).format('DD/MM/YYYY')}</p>
                            <p className="description">{data.description}</p>

                        </div>
                    </div>
                </div>
            </>}
            <LatestActualities/>

            <br/><br/>

            <Footer/>
        </div>
    )
}

export default ActualitiesItem;